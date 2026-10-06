# 李俊祎的个人主页

正式地址：https://17lijunyi.github.io/ 。GitHub Pages 从 `main` 分支的 `/docs` 发布。

## 内容维护

- `docs/assets/profile-content.js` 保存个人介绍、项目卡片与文章数据。
- `docs/assets/index-pages.js` 为现有页面运行代码，开头导入内容模块。
- 修改内容后，同时更新 `docs/index.html` 的脚本版本参数与上述内容模块的导入参数，避免缓存旧内容。
- 不要用早期个人网站的完整 `dist/` 覆盖此仓库，维护时先核对最新远程提交，保留其他项目、文章及交互。

## 幻想之境项目介绍

2026-10-06 按用户提供的 Muse10 项目经历截图，为幻想之境新增介绍页：`docs/projects/huanxiangzhijing/index.html`。卡片封面和「查看项目介绍」均指向 `/projects/huanxiangzhijing/`，介绍页提供返回主页和体验短篇网站的入口。

内容包含项目背景、七项项目职责和三项项目成果。事实依据为幻想之境的项目记录与本地验收：短篇已上线，长篇共创和自动初稿完成本地实现与验证，常驻云 Worker 尚未上线。没有将文学质量、用户增长或正式长篇发布描述为已验证成果。

验证内容包括页面与卡片链接、JavaScript 语法、桌面与 390px 窄屏阅读布局。更新后提交并推送到 `main`，等待 GitHub Pages 部署成功。
