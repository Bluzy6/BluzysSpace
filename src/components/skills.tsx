import { Workflow, Award } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { SITE } from "@/content/site";
import { SectionShell } from "@/components/section-shell";

export function Skills() {
  const { t } = useLang();
  const { skills } = SITE;

  return (
    <SectionShell id="skills" index="05" title={skills.heading} lead={skills.lead}>
      <div className="grid gap-4 lg:grid-cols-3">
        {skills.groups.map((g, i) => (
          <div
            key={g.name.zh}
            className="card-in rounded-[var(--radius-xl)] border border-border bg-card p-5"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-glow">{t(g.name)}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[var(--radius-sm)] border border-border bg-surface px-2.5 py-1 font-mono-tech text-xs text-secondary-foreground transition-colors hover:border-glow/60 hover:text-glow"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 工作流 + 证书 */}
      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="card-in flex flex-col justify-between rounded-[var(--radius-xl)] border border-border bg-gradient-to-br from-card to-surface p-5">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber">
              <Workflow size={15} strokeWidth={2.2} />
              {t(skills.workflow.name)}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {t({
                zh: "把 Claude Code / Codex 接入 MCP、Skill、自动测试与代码审查，形成可复用的完整开发流程。",
                en: "Claude Code / Codex wired into MCP, Skills, automated testing and code review as a repeatable workflow.",
              })}
            </p>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {skills.workflow.items.map((item) => (
              <li key={item} className="rounded-full bg-amber/12 px-3 py-1 font-mono-tech text-xs text-amber">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-in rounded-[var(--radius-xl)] border border-border bg-card p-6" style={{ animationDelay: "120ms" }}>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-glow">
            <Award size={15} strokeWidth={2.2} />
            {t(skills.certs.name)}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {skills.certs.items.map((item) => (
              <li key={item} className="flex items-center gap-2.5 font-mono-tech text-sm">
                <span className="size-1.5 rounded-full bg-glow" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
