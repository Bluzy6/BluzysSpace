import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/use-lang";
import { SITE } from "@/content/site";
import type { Project } from "@/content/types";
import { SectionShell } from "@/components/section-shell";

export function Projects() {
  const { t } = useLang();
  const { projects } = SITE;

  return (
    <SectionShell id="projects" index="03" title={projects.heading} lead={projects.lead}>
      <div className="space-y-4">
        {projects.items.map((p, i) => (
          <ProjectCard key={p.slug} project={p} no={i + 1} />
        ))}
      </div>
    </SectionShell>
  );
}

/**
 * 项目卡片。
 * ⚠️ 卡片本身与展开区都禁止使用 reveal class：reveal 引擎运行时会给
 * `.reveal` 注入 opacity:0，只有 IntersectionObserver 判定入视口才加 .visible。
 * 在预览 iframe（窗口不可见/未获得渲染帧）里 IO 回调不触发，卡片会永久透明，
 * 表现就是"点击查看详情后整个块消失"。这里改为纯 CSS 入场 + hidden 显隐。
 */
function ProjectCard({ project, no }: { project: Project; no: number }) {
  const { t } = useLang();
  const { projects } = SITE;
  const [open, setOpen] = useState(false);

  return (
    <article
      className={cn(
        "card-in group rounded-[var(--radius-xl)] border bg-card transition-colors",
        open ? "border-glow/50" : "border-border hover:border-glow/35",
      )}
      style={{ animationDelay: `${no * 70}ms` }}
    >
      <div className="flex flex-col gap-4 p-5 sm:p-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-tech text-xs text-muted-foreground">
            <span className="stat-num">{String(no).padStart(2, "0")}</span>
            <span className="rounded-full bg-glow-soft px-2 py-0.5 text-glow">{t(project.role)}</span>
            <span>{project.period}</span>
          </div>
          <h3 className="mt-2.5 text-base font-semibold leading-snug tracking-tight sm:text-lg">
            {t(project.title)}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t(project.summary)}</p>

          <ul className="mt-3.5 flex flex-wrap items-center gap-1.5">
            {project.stack.map((s) => (
              <li key={s} className="rounded-[var(--radius-sm)] border border-border px-2 py-0.5 font-mono-tech text-[11px] text-secondary-foreground">
                {s}
              </li>
            ))}
            {project.link ? (
              <li>
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex max-w-full items-center gap-1.5 rounded-[var(--radius-sm)] border border-glow/40 bg-glow-soft px-2 py-0.5 font-mono-tech text-[11px] text-glow transition-colors hover:border-glow"
                >
                  <ExternalLink size={11} strokeWidth={2.2} className="shrink-0" />
                  <span className="truncate">{t(project.link.label)}</span>
                  <span className="hidden truncate opacity-70 sm:inline">{project.link.url}</span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 lg:w-[38%] lg:grid-cols-2 lg:border-l lg:border-border lg:pl-6">
          {project.metrics.map((m) => (
            <div key={m.label.zh}>
              <div className="stat-num text-xl sm:text-2xl">
                {m.value}
                {m.suffix ?? ""}
              </div>
              <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{t(m.label)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <button
          type="button"
          onClick={(event) => {
            const card = event.currentTarget.closest("article");
            setOpen((v) => {
              const next = !v;
              // 修复链路关键日志：确认展开态切换生效，且卡片不再受 reveal 门控（opacity 恒为 1）
              console.log(
                "[projects] toggle detail:",
                project.slug,
                "-> open =",
                next,
                "| cardOpacity =",
                card ? getComputedStyle(card).opacity : "n/a",
                "| hasRevealClass =",
                card ? card.classList.contains("reveal") : "n/a",
                "| olHidden =",
                (() => {
                  const ol = card?.querySelector("ol");
                  return ol ? String(ol.hidden) : "n/a";
                })(),
              );
              return next;
            });
          }}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-glow hover:text-glow"
        >
          {open ? t(projects.collapse) : t(projects.expand)}
          <ChevronDown size={13} strokeWidth={2.4} className={cn("transition-transform duration-300", open && "rotate-180")} />
        </button>

        {/* 折叠内容常驻 DOM，仅用 hidden 切换：避免 reveal 引擎/高度动画把整块裁成空白 */}
        <ol hidden={!open} className="mt-4 space-y-2.5 border-t border-border pt-4">
          {project.bullets.map((b, idx) => (
            <li key={idx} className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-1.5 shrink-0 font-mono-tech text-[11px] text-glow">{String(idx + 1).padStart(2, "0")}</span>
              <span className="text-muted-foreground">{t(b)}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
