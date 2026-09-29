import { useState } from "react";
import { ChevronDown, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/use-lang";
import { SITE } from "@/content/site";
import type { Experience } from "@/content/types";
import { SectionShell } from "@/components/section-shell";

export function ExperienceSection() {
  const { experience } = SITE;

  return (
    <SectionShell id="experience" index="02" title={experience.heading} lead={experience.lead}>
      <div className="space-y-4">
        {experience.items.map((e, i) => (
          <CompanyCard key={`${e.company.zh}-${i}`} exp={e} no={i + 1} />
        ))}
      </div>
    </SectionShell>
  );
}

/**
 * 折叠详述：常驻 DOM，仅用 hidden 切换显隐。
 * ⚠️ 禁止改用高度动画或 reveal class —— 预览 iframe 里两者都会把内容永久隐藏。
 */
function DetailList({ bullets, open }: { bullets: Experience["bullets"]; open: boolean }) {
  const { t } = useLang();
  return (
    <ol hidden={!open} className="mt-4 space-y-2.5 border-t border-border pt-4">
      {bullets.map((b, idx) => (
        <li key={idx} className="flex gap-3 text-sm leading-relaxed">
          <span className="mt-1.5 shrink-0 font-mono-tech text-[11px] text-glow">{String(idx + 1).padStart(2, "0")}</span>
          <span className="text-muted-foreground">{t(b)}</span>
        </li>
      ))}
    </ol>
  );
}

function ExpandButton({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const { t } = useLang();
  const { experience } = SITE;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-glow hover:text-glow"
    >
      {open ? t(experience.collapse) : t(experience.expand)}
      <ChevronDown size={13} strokeWidth={2.4} className={cn("transition-transform duration-300", open && "rotate-180")} />
    </button>
  );
}

function MetricGrid({ metrics }: { metrics: NonNullable<Experience["metrics"]> }) {
  const { t } = useLang();
  return (
    <div className="grid shrink-0 grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 lg:w-[38%] lg:grid-cols-2 lg:border-l lg:border-border lg:pl-6">
      {metrics.map((m) => (
        <div key={m.label.zh}>
          <div className="stat-num text-xl sm:text-2xl">
            {m.value}
            {m.suffix ?? ""}
          </div>
          <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{t(m.label)}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * 公司父卡：外层大框代表「小米集团 · 岗位」，内部嵌套该段实习负责的具体项目子卡。
 * 父卡刻意不显示序号与指标，避免和公司名/项目名混淆。
 */
function CompanyCard({ exp, no }: { exp: Experience; no: number }) {
  const { t } = useLang();
  const { experience } = SITE;
  const [open, setOpen] = useState(false);
  const children = exp.children ?? [];

  return (
    <article
      className={cn(
        "card-in rounded-[var(--radius-xl)] border bg-card/60 p-4 transition-colors sm:p-5",
        open ? "border-glow/50" : "border-border",
      )}
      style={{ animationDelay: `${no * 70}ms` }}
    >
      {/* 公司抬头 */}
      <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-tech text-xs text-muted-foreground">
          <span className="rounded-full bg-glow-soft px-2 py-0.5 text-glow">{t(exp.role)}</span>
          <span>{exp.period}</span>
        </div>
        <h3 className="mt-2.5 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
          {t(exp.company)}
          <span className="ml-2 text-sm font-normal text-muted-foreground">{t(exp.dept)}</span>
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t(exp.summary)}</p>

        <ul className="mt-3.5 flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <li key={tag} className="rounded-[var(--radius-sm)] border border-border px-2 py-0.5 font-mono-tech text-[11px] text-secondary-foreground">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <ExpandButton open={open} onToggle={() => setOpen((v) => !v)} />
          <DetailList bullets={exp.bullets} open={open} />
        </div>
      </div>

      {/* 下属项目子卡 */}
      {children.length > 0 ? (
        <div className="mt-4">
          <p className="mb-2.5 ml-1 flex items-center gap-1.5 font-mono-tech text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <FolderGit2 size={12} strokeWidth={2.2} className="text-glow" />
            {t(experience.projectsLabel)}
          </p>
          <div className="space-y-3">
            {children.map((child, idx) => (
              <ProjectChildCard key={`${child.company.zh}-${idx}`} exp={child} no={idx + 1} />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

/** 项目子卡：带序号、角色、一行简介、技术栈、指标栏与独立「查看详情」。 */
function ProjectChildCard({ exp, no }: { exp: Experience; no: number }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <article
      className={cn(
        "rounded-[var(--radius-lg)] border bg-card transition-colors",
        open ? "border-glow/50" : "border-border hover:border-glow/35",
      )}
    >
      <div className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-tech text-xs text-muted-foreground">
            <span className="stat-num">{String(no).padStart(2, "0")}</span>
            <span className="rounded-full bg-glow-soft px-2 py-0.5 text-glow">{t(exp.role)}</span>
            <span>{exp.period}</span>
          </div>
          <h4 className="mt-2.5 font-semibold leading-snug tracking-tight !text-[17px]">
            {t(exp.company)}
            <span className="ml-2 text-muted-foreground !font-bold !text-[17px]">{t(exp.dept)}</span>
          </h4>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t(exp.summary)}</p>

          <ul className="mt-3.5 flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <li key={tag} className="rounded-[var(--radius-sm)] border border-border px-2 py-0.5 font-mono-tech text-[11px] text-secondary-foreground">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {exp.metrics && exp.metrics.length > 0 ? <MetricGrid metrics={exp.metrics} /> : null}
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <ExpandButton open={open} onToggle={() => setOpen((v) => !v)} />
        <DetailList bullets={exp.bullets} open={open} />
      </div>
    </article>
  );
}

export function EducationSection() {
  const { t } = useLang();
  const { education } = SITE;

  return (
    <SectionShell id="education" index="04" title={education.heading} lead={education.lead}>
      <ol className="relative ml-1 space-y-8 border-l border-border pl-6 sm:space-y-9 sm:pl-8">
        {education.items.map((ed, i) => (
          <li key={ed.period} className="card-in relative" style={{ animationDelay: `${i * 100}ms` }}>
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+5px)] top-1.5 size-2.5 rounded-full border-2 border-background bg-glow sm:-left-[calc(2rem+5px)]"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">{t(ed.school)}</h3>
              <span className="font-mono-tech text-xs text-glow">{ed.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-foreground/85">{t(ed.degree)}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t(ed.detail)}</p>
            <ul className="mt-3 space-y-1.5">
              {ed.honors.map((h) => (
                <li key={h.zh} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-amber" aria-hidden />
                  {t(h)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

export function HonorsSection() {
  const { t } = useLang();
  const { honors } = SITE;

  return (
    <SectionShell id="honors" index="06" title={honors.heading} lead={honors.lead}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {honors.items.map((h, i) => (
          <article
            key={h.event.zh}
            className="card-in group relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card p-5 transition-colors hover:border-amber/50"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span aria-hidden className="absolute right-4 top-4 font-mono-tech text-[11px] text-muted-foreground/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-sm font-semibold tracking-tight text-amber">{t(h.prize)}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{t(h.event)}</p>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-amber to-glow transition-all duration-500 group-hover:w-full"
            />
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
