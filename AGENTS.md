# 项目上下文

## Architecture
- 单页个人主页（校招简历网页），全部区块集中在 `src/routes/index.tsx` 组装，无多路由。
- 区块顺序（用户指定）：个人亮点 → 实习经历 → 项目经历 → 教育背景 → 技术能力 → 荣誉奖项 → 页脚联系。编号 index 写在各 SectionShell 调用处，改顺序时要同步改编号。
- 双语内容唯一来源：`src/content/types.ts`（Localized / SiteContent 契约）+ `src/content/site.ts`（中英文案与简历事实数据）。新增文案必须在 `Localized` 里同时给 zh/en，禁止在组件里硬编码可切换文案。
- 实习经历为两层父子结构：`Experience.children?: Experience[]`。外层 `CompanyCard`（小米集团·岗位）不显示序号与 metrics，内层 `ProjectChildCard`（MUDE-R / MI-UDE-CLAW）各自带序号、角色、周期、tags、独立「查看详情」折叠与右侧指标栏；父卡内小标题用 `experience.projectsLabel`。子项目文案仍属实习经历数据，不放 `SITE.projects`。
- 语言状态：`src/hooks/use-lang.tsx` 提供 `LangProvider` / `useLang().t(localized)`，默认中文，选择写入 localStorage（key `bluzy-portfolio-lang`）。
- ⚠️ 入场动画一律用 `styles.css` 里的 `.card-in` / `.scroll-fade` / `.scroll-slide-left`（纯时间线 CSS animation，且 **keyframes 里不含 opacity**）。禁止使用模板 reveal class（`src/lib/reveal-engine.ts`）与 `animation-timeline: view()`：两者在预览 iframe 里都会把元素永久钉在 `opacity:0`，导致整页内容消失。

## Dependencies
- sonner：复制联系方式的成功/降级提示。
- lucide-react：图标。

## Lessons
- ⚠️「点击查看详情后整个块消失」的真因不是折叠动画，而是外层 `<article>` 带了 reveal class：reveal 引擎靠 IntersectionObserver 加 `.visible`，预览 iframe 不产生渲染帧时回调永不触发 → 卡片永久透明。修复方式是全站弃用 reveal，折叠区改为常驻 DOM + `hidden={!open}` 显隐。
- ⚠️ 曾尝试用 `animation-timeline: view()` 复刻滚动入场，结果同样整页不可见——scroll-driven animation 的进度也被冻结在 from 帧。教训：**任何"隐藏直到某事件发生"的方案在这个沙箱里都不可信**，动效只做 transform，透明度恒为 1。
- 主题：`:root` 为浅色一套，`.dark` 为墨蓝深色一套；平台预览 iframe 会推送 `html.light`，因此 `styles.css` 额外写了 `html.light` 变量块覆盖 `.dark`，否则预览下深色值会盖住浅色主题。
- 沙箱预览默认关闭 HMR，且用户预览 iframe 可能长时间停留在旧构建产物上；验证前必须 `pnpm run dev`，必要时用 `--source browser` 取证，别把旧代码的截图当成当前结论。
- 简历 PDF 与证件照使用 `public` 目录中的本地资源（见 `site.ts` 顶部常量），前端通过 Vite 根路径引用。首屏背景已改为纯 CSS（radial-gradient 光斑 + `.grid-lines` 网格 + 光晕），不再依赖任何 AI 生成的背景图。
- 剪贴板在沙箱 iframe 内可能被拒绝，`copy-button.tsx` 已实现 clipboard → execCommand → 选中文本提示手动复制的三级降级。
