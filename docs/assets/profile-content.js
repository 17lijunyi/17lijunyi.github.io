import {normalizeArticles} from "./article-utils.js";
// Profile: https://17lijunyi.github.io/ and its embedded GitHub README.
// Articles: all 12 published records from 少玩多学AI, verified on 2026-09-12.
export const profile = {
  "name": "李俊祎",
  "latin": "李俊祎",
  "user": "lijunyi",
  "host": "ljy-mac",
  "os": "李俊祎 OS",
  "role": "AI 产品经理",
  "tagline": "把 AI 做成真正有人用的产品",
  "summary": "AI 训练师 → AI 产品经理",
  "bio": "做过数据、SFT 和模型评测，也在学习原型、智能体和 AI 产品设计。",
  "byline": "公众号「少玩多学AI」作者",
  "email": "lijunyi2026setoff@gmail.com",
  "github": "https://github.com/17lijunyi",
  "website": "https://17lijunyi.github.io/",
  "echo": "AI 产品 × 智能体 × 知识库",
  "contactIntro": "欢迎通过邮箱交流 AI 产品、智能体与知识库，也可以继续查看我的项目与文章。",
  "contacts": [
    {
      "label": "邮箱",
      "value": "lijunyi2026setoff@gmail.com",
      "href": "mailto:lijunyi2026setoff@gmail.com",
      "icon": "email",
      "external": false
    },
    {
      "label": "GitHub",
      "value": "17lijunyi",
      "href": "https://github.com/17lijunyi",
      "icon": "github",
      "external": true
    },
    {
      "label": "个人网站",
      "value": "17lijunyi.github.io",
      "href": "https://17lijunyi.github.io/",
      "icon": "website",
      "external": true
    },
    {
      "label": "微信公众号",
      "value": "少玩多学AI",
      "view": "notes",
      "icon": "notes",
      "external": false
    }
  ]
};

export const works = [
  {
    "index": "01",
    "kind": "product",
    "meta": "个人项目 · 01",
    "title": "Muse10",
    "detailUrl": "https://muse10-atelier.earthy-frost-9266.chatgpt.site/",
    "copy": "高端美甲与穿戴甲定制品牌，探索 AI 定制与 AI 试戴，将个性化设计与上手预览融入专属美甲体验。",
    "url": "https://muse10-atelier.earthy-frost-9266.chatgpt.site/",
    "action": "打开 Muse10",
    "cover": "/assets/muse10-cover.png"
  },
  {
    "index": "02",
    "kind": "product",
    "meta": "个人项目 · 02",
    "title": "幻想之境",
    "detailUrl": "https://huanxiangzhijing.store/",
    "copy": "AI 互动叙事平台，融合 20 个原创故事世界与角色陪伴。自由选择开场与续写分支，在互动中塑造属于自己的故事。",
    "url": "https://huanxiangzhijing.store/",
    "action": "打开幻想之境",
    "cover": "/assets/huanxiangzhijing-poster.jpg"
  },
  {
    "index": "01",
    "kind": "tool",
    "sourcePath": "skills/muse10-nail-visuals",
    "meta": "智能体 / 技能",
    "title": "Muse10 美甲作品展示",
    "copy": "从参考照片生成十片母版、双手佩戴与细节特写，并制作可交互预览",
    "url": "https://github.com/17lijunyi/17lijunyi/tree/main/skills/muse10-nail-visuals",
    "action": "查看开源技能"
  },
  {
    "index": "02",
    "kind": "tool",
    "sourcePath": "skills/product-evidence-deconstruction",
    "meta": "智能体 / 技能",
    "title": "产品证据拆解",
    "copy": "基于真实证据，按用户、技术、模型、数据四层拆解数字产品",
    "url": "https://github.com/17lijunyi/17lijunyi/tree/main/skills/product-evidence-deconstruction",
    "action": "查看开源技能"
  }
];

const articleEntries = [
  {
    "id": "wechat-2247483719-1",
    "label": "马斯克给Grok Bot配了台电脑，打工人的日常要变了？",
    "url": "https://mp.weixin.qq.com/s/e67L4DW5NmBlgGzrlwAU0g",
    "date": "2026-09-11",
    "publishedAt": "2026-09-11T20:10:45+08:00",
    "cover": "/assets/articles/wechat-2247483719-1.jpg"
  },
  {
    "id": "wechat-2247483715-1",
    "label": "GPT-6开低档，凭什么比5.6开高档还强？",
    "url": "https://mp.weixin.qq.com/s/e7vnDgcA9oXrec8YquB6eA",
    "date": "2026-09-10",
    "publishedAt": "2026-09-10T22:25:53+08:00",
    "cover": "/assets/articles/wechat-2247483715-1.jpg"
  },
  {
    "id": "wechat-2247483711-1",
    "label": "OpenAI喊出AGI，GPT-6到底配不配？",
    "url": "https://mp.weixin.qq.com/s/LYRakFpD6b0FThw7EDVdnQ",
    "date": "2026-09-09",
    "publishedAt": "2026-09-09T22:54:40+08:00",
    "cover": "/assets/articles/wechat-2247483711-1.jpg"
  },
  {
    "id": "wechat-2247483707-1",
    "label": "从凭感觉选模型，到用数据做决策",
    "url": "https://mp.weixin.qq.com/s/uOE2XZh7eQPFw-mmheuOHQ",
    "date": "2026-09-07",
    "publishedAt": "2026-09-07T20:25:13+08:00",
    "cover": "/assets/articles/wechat-2247483707-1.jpg"
  },
  {
    "id": "wechat-2247483701-1",
    "label": "一文看懂RAG知识库单体架构：Dify、LangChain、LangGraph、RAGFlow对比",
    "url": "https://mp.weixin.qq.com/s/6pF4HvMz2jLM4M0gKHmzjA",
    "date": "2026-09-06",
    "publishedAt": "2026-09-06T22:09:10+08:00",
    "cover": "/assets/articles/wechat-2247483701-1.jpg"
  },
  {
    "id": "wechat-2247483695-1",
    "label": "Astra 还没用明白，下一代 GPT 的传闻又来了",
    "url": "https://mp.weixin.qq.com/s/JYIVSnV8LrfZfqGWZRr__Q",
    "date": "2026-09-05",
    "publishedAt": "2026-09-05T22:33:07+08:00",
    "cover": "/assets/articles/wechat-2247483695-1.jpg"
  },
  {
    "id": "wechat-2247483691-1",
    "label": "GPT-6来了，AI的“实习期”该结束了吗？",
    "url": "https://mp.weixin.qq.com/s/Oe91eF9mcdVoRIOtFHVeLg",
    "date": "2026-09-04",
    "publishedAt": "2026-09-04T23:05:57+08:00",
    "cover": "/assets/articles/wechat-2247483691-1.jpg"
  },
  {
    "id": "rag-vs-long-context",
    "label": "大模型都能读长文了，为什么还要折腾 RAG？",
    "url": "https://mp.weixin.qq.com/s/DplTj9vMjYJqkRgItC2wKw",
    "date": "2026-09-02",
    "publishedAt": "2026-09-02T21:54:55+08:00",
    "cover": "/assets/articles/rag-vs-long-context.jpg"
  },
  {
    "id": "ai-product-from-demo-to-use",
    "label": "为什么你的 AI 产品能演示，却没人愿意用",
    "url": "https://mp.weixin.qq.com/s/HGy1D2sbHV1HkyaVMNjPKg",
    "date": "2026-08-31",
    "publishedAt": "2026-08-31T21:54:19+08:00",
    "cover": "/assets/articles/ai-product-from-demo-to-use.jpg"
  },
  {
    "id": "coding-agent-quotas",
    "label": "同一个周末，一家偷偷降额，一家悄悄加量：Coding Agent 开战了。",
    "url": "https://mp.weixin.qq.com/s/3yaIhqYcRSJSYZ7GS4x13Q",
    "date": "2026-08-30",
    "publishedAt": "2026-08-30T23:54:19+08:00",
    "cover": "/assets/articles/coding-agent-quotas.jpg"
  },
  {
    "id": "agent-runtime",
    "label": "从OpenClaw到Codex，Agent竞争换到了运行时",
    "url": "https://mp.weixin.qq.com/s/5-mhfMwIeQ3sC9w_GG73eg",
    "date": "2026-08-29",
    "publishedAt": "2026-08-29T20:16:29+08:00",
    "cover": "/assets/articles/agent-runtime.jpg"
  },
  {
    "id": "wechat-2247483660-1",
    "label": "大家在吃孙哥的瓜，我在他的 GitHub 项目里学会了怎么造 Skill。",
    "url": "https://mp.weixin.qq.com/s/zkaF4_2Ht-VvYutZvlXesg",
    "date": "2026-08-28",
    "publishedAt": "2026-08-28T23:41:26+08:00",
    "cover": "/assets/articles/wechat-2247483660-1.jpg"
  }
];

export const notes = normalizeArticles(articleEntries);

export const focus = [
  {
    "input": "AI 产品",
    "output": "真实需求",
    "detail": "从真实需求出发，思考什么才是真正好用。",
    "tone": "blue"
  },
  {
    "input": "智能体",
    "output": "实际任务",
    "detail": "关注智能体在实际任务中的作用。",
    "tone": "green"
  },
  {
    "input": "知识库",
    "output": "具体问题",
    "detail": "让知识服务于具体问题。",
    "tone": "amber"
  }
];

export const boot = [
  {
    "kind": "title",
    "text": "李俊祎 OS v2.0.0 — Clear Light"
  },
  {
    "kind": "ok",
    "text": "加载产品内核 product-thinking.ai"
  },
  {
    "kind": "ok",
    "text": "挂载 /products （AI 产品）"
  },
  {
    "kind": "ok",
    "text": "挂载 /agents （智能体）"
  },
  {
    "kind": "ok",
    "text": "挂载 /knowledge （知识库）"
  },
  {
    "kind": "ok",
    "text": "同步方法：构建 → 验证 → 交付 → 学习"
  },
  {
    "kind": "ok",
    "text": "载入实践经历：数据 · SFT · 模型评测"
  },
  {
    "kind": "ok",
    "text": "连接公开创作：少玩多学AI"
  },
  {
    "kind": "ok",
    "text": "启动个人作品集 portfolio.app"
  },
  {
    "kind": "login",
    "text": "login: lijunyi"
  }
];

export const intro = [
  {
    "kind": "cmd",
    "text": "whoami"
  },
  {
    "kind": "out",
    "text": "李俊祎 · AI 产品经理"
  },
  {
    "kind": "blank"
  },
  {
    "kind": "cmd",
    "text": "cat about.md"
  },
  {
    "kind": "out",
    "text": "把 AI 做成真正有人用的产品"
  },
  {
    "kind": "out",
    "text": "从 AI 训练师到 AI 产品经理"
  },
  {
    "kind": "out",
    "text": "做过数据、SFT 和模型评测，也在学习原型、智能体和 AI 产品设计。"
  },
  {
    "kind": "out",
    "text": "公众号「少玩多学AI」作者"
  },
  {
    "kind": "blank"
  },
  {
    "kind": "cmd",
    "text": "echo \"AI 产品 × 智能体 × 知识库\""
  },
  {
    "kind": "gold",
    "text": "AI 产品 × 智能体 × 知识库"
  },
  {
    "kind": "blank"
  },
  {
    "kind": "cmd",
    "text": "open lijunyi.os",
    "cursor": true
  }
];
