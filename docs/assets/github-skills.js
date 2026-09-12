// Public metadata only: no credentials, skill execution, or generated HTML.
const repository = "17lijunyi/17lijunyi";
const cacheKey = "lijunyi:github-skills:v1";
const cacheVersion = "2026-09-12-muse10";
const cacheLifetime = 5 * 60 * 1000;
const skillPath = /^skills\/[a-zA-Z0-9][a-zA-Z0-9._-]{0,99}$/;

function localStorageOrNull() {
  try { return globalThis.localStorage ?? null; } catch { return null; }
}

// Read only the scalar metadata fields used by the catalogue, never YAML tags.
function scalar(text, key) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const pattern = new RegExp(`^(\\s*)${key}:\\s*(.*)$`);
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(pattern);
    if (!match) continue;
    const value = match[2].trim();
    if (/^[>|][-+]?$/.test(value)) {
      const block = [];
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim() && lines[j].match(/^\s*/)[0].length <= match[1].length) break;
        block.push(lines[j].trim());
      }
      return block.join(" ").trim();
    }
    if (value.startsWith('"')) {
      try { return JSON.parse(value); } catch { return ""; }
    }
    if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replace(/''/g, "'");
    return value.replace(/\s+#.*$/, "").trim();
  }
  return "";
}

function card(item) {
  if (!item || !skillPath.test(item.sourcePath ?? "") ||
      typeof item.title !== "string" || !item.title.trim() ||
      typeof item.copy !== "string" || !item.copy.trim()) return null;
  return {
    kind: "tool",
    sourcePath: item.sourcePath,
    revision: typeof item.revision === "string" ? item.revision : "",
    meta: "AI AGENT / SKILL",
    title: item.title.trim().slice(0, 120),
    copy: item.copy.trim().slice(0, 600),
    url: `https://github.com/${repository}/tree/main/${item.sourcePath}`,
    action: "查看开源 Skill"
  };
}

function catalogue(items) {
  const unique = new Map();
  for (const item of items) {
    const entry = card(item);
    if (entry && !unique.has(entry.sourcePath)) unique.set(entry.sourcePath, entry);
  }
  return [...unique.values()].map((entry, index) => ({...entry, index: String(index + 1).padStart(2, "0")}));
}

export function createSkillStore(fallback, {
  fetchImpl = globalThis.fetch,
  storage = localStorageOrNull(),
  now = Date.now,
  timeoutMs = 8000
} = {}) {
  let entries = catalogue(fallback);
  let checkedAt = 0;
  let pending = null;
  const listeners = new Set();
  try {
    const cached = JSON.parse(storage?.getItem(cacheKey) ?? "null");
    if (cached?.version === cacheVersion && Array.isArray(cached.entries) &&
        Number.isFinite(cached.checkedAt) && cached.checkedAt <= now()) {
      const restored = catalogue(cached.entries);
      if (restored.length) {
        entries = restored;
        checkedAt = cached.checkedAt;
      }
    }
  } catch { /* Private browsing and invalid caches use the bundled catalogue. */ }

  async function request(url, type) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(url, {signal: controller.signal, cache: "no-cache"});
      if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
      return await response[type]();
    } finally { clearTimeout(timer); }
  }

  async function sync() {
    try {
      const tree = await request(`https://api.github.com/repos/${repository}/git/trees/main?recursive=1`, "json");
      if (!Array.isArray(tree.tree) || tree.truncated) return false;
      const blobs = new Map(tree.tree.filter(item => item.type === "blob").map(item => [item.path, item]));
      const paths = [...blobs.keys()].filter(path => path.endsWith("/SKILL.md"))
        .map(path => path.slice(0, -9)).filter(path => skillPath.test(path));
      if (!paths.length) return false;
      const previous = new Map(entries.map((entry, index) => [entry.sourcePath, {...entry, order: index}]));
      // Newly discovered skills lead; existing entries retain their display order.
      paths.sort((a, b) => (previous.get(a)?.order ?? -1) - (previous.get(b)?.order ?? -1) || a.localeCompare(b));
      const next = await Promise.all(paths.map(async sourcePath => {
        const old = previous.get(sourcePath);
        const metadataPath = blobs.has(`${sourcePath}/agents/openai.yaml`)
          ? `${sourcePath}/agents/openai.yaml` : `${sourcePath}/SKILL.md`;
        const revision = `${blobs.get(`${sourcePath}/SKILL.md`).sha}:${blobs.get(metadataPath).sha}`;
        if (old?.revision === revision) return old;
        try {
          const text = await request(`https://raw.githubusercontent.com/${repository}/main/${metadataPath}?v=${blobs.get(metadataPath).sha}`, "text");
          const frontmatter = text.match(/^---\s*\n([\s\S]*?)\n---(?:\s|$)/)?.[1] ?? "";
          const title = scalar(text, "display_name") || scalar(frontmatter, "name") || sourcePath.split("/").pop();
          const copy = scalar(text, "short_description") || scalar(frontmatter, "description");
          if (!copy) throw new Error("Missing skill description");
          return {sourcePath, title, copy, revision};
        } catch {
          // Keep a known description if a metadata request fails; retry it later.
          return old ?? {sourcePath, title: sourcePath.split("/").pop(), copy: "查看此 Skill 的功能介绍与使用方法。"};
        }
      }));
      const updated = catalogue(next);
      if (!updated.length) return false;
      checkedAt = now();
      if (JSON.stringify(updated) !== JSON.stringify(entries)) {
        entries = updated;
        listeners.forEach(listener => listener());
      }
      try { storage?.setItem(cacheKey, JSON.stringify({version: cacheVersion, checkedAt, entries})); } catch { /* Storage is optional. */ }
      return true;
    } catch { return false; }
  }

  return {
    getSnapshot: () => entries,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    refresh() {
      if (pending) return pending;
      if (checkedAt && now() - checkedAt < cacheLifetime) return Promise.resolve(true);
      pending = sync().finally(() => { pending = null; });
      return pending;
    }
  };
}
