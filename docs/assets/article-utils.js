// Keep the newest publication first, and merge copies of the same article.
export function articleKey(link) {
  try {
    const url = new URL(link);
    if (url.hostname === "mp.weixin.qq.com") {
      if (url.pathname.startsWith("/s/")) return url.origin + url.pathname;
      const identity = ["__biz", "mid", "idx"];
      if (url.searchParams.has("mid")) {
        return url.origin + "/s?" + identity.map(key =>
          key + "=" + (url.searchParams.get(key) || (key === "idx" ? "1" : ""))
        ).join("&");
      }
    }
    url.hash = "";
    for (const key of [...url.searchParams.keys()]) {
      if (key.startsWith("utm_") || ["from", "scene", "isappinstalled"].includes(key)) {
        url.searchParams.delete(key);
      }
    }
    url.searchParams.sort();
    return url.href;
  } catch { return String(link || "").trim(); }
}

function publicationTime(article) {
  const value = article.publishedAt || article.date;
  if (typeof value === "number") return value < 1e12 ? value * 1000 : value;
  const text = String(value || "");
  const time = Date.parse(/^\d{4}-\d{2}-\d{2}$/.test(text)
    ? text + "T00:00:00+08:00" : text);
  return Number.isFinite(time) ? time : -Infinity;
}

export function normalizeArticles(articles) {
  const sorted = articles.map((article, order) => ({ ...article, order }))
    .sort((a, b) => publicationTime(b) - publicationTime(a) || a.order - b.order);
  const urls = new Set();
  const titles = new Set();
  return sorted.filter(article => {
    const url = articleKey(article.url);
    const title = String(article.label || article.title || "").normalize("NFKC")
      .replace(/[\p{P}\p{S}\s]/gu, "").toLowerCase();
    const duplicate = (url && urls.has(url)) || (title && titles.has(title));
    if (url) urls.add(url);
    if (title) titles.add(title);
    return !duplicate;
  }).map(({ order, ...article }, index) => ({
    ...article, index: String(index + 1).padStart(2, "0")
  }));
}
