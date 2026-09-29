# Bluzy Lu Personal Website

Bluzy Lu 的个人主页与在线简历网站，用于展示个人简介、教育背景、实习与项目经历、技术能力及联系方式。

## 技术栈

- React 19
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS 4

## 功能

- 中英文个人简介与简历内容切换
- 教育背景展示
- 小米汽车 AI Agent 实习经历
- 项目经历与成果展示
- 技术能力与荣誉奖项
- PDF 简历在线查看与下载
- 响应式页面布局

## 本地运行

项目使用 pnpm 管理依赖。

```bash
pnpm install
pnpm dev
```

开发服务器默认运行在 `http://localhost:3015`。

## 类型检查与构建

```bash
pnpm typecheck
pnpm build
```

生产构建产物输出到 `dist/` 目录。

## Deployment

本项目是静态前端应用，可将 `dist/` 目录部署到 Vercel、Netlify 或其他静态托管平台。
