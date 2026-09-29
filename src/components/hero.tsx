import { Download, Mail, Phone, MessageCircle, Github, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { SITE, RESUME_PDF_URL, PORTRAIT_URL } from "@/content/site";
import { CopyButton } from "@/components/ui/copy-button";

const CONTACT_ICONS: Record<string, LucideIcon> = {
  email: Mail,
  phone: Phone,
  wechat: MessageCircle,
  github: Github,
};

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* 背景层：光斑 + 网格 + 光晕 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift absolute right-[-18%] top-[-25%] h-[110%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,var(--color-glow-soft),transparent_65%)] opacity-70 blur-[60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />
        <div className="absolute -left-40 top-10 size-[420px] rounded-full bg-glow-soft blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:pt-20">
        {/* 左：文案 */}
        <div>
          <p className="scroll-fade flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-glow">
            <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-glow" />
            {t(SITE.hero.kicker)}
          </p>

          <h1 className="card-in mt-3 text-[clamp(2.4rem,6.5vw,4.2rem)] font-bold leading-[1.05] tracking-tight" style={{ animationDelay: "60ms" }}>
            {t(SITE.meta.name)}
          </h1>

          <p className="card-in mt-3 text-base font-medium text-foreground/90 sm:text-lg" style={{ animationDelay: "120ms" }}>
            {t(SITE.hero.role)}
          </p>

          <p className="card-in mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]" style={{ animationDelay: "180ms" }}>
            {t(SITE.hero.intro)}
          </p>

          <div className="card-in mt-5 flex flex-wrap gap-2" style={{ animationDelay: "240ms" }}>
            {SITE.hero.chips.map((c) => (
              <span key={c} className="rounded-full border border-border bg-surface/60 px-3 py-1 font-mono-tech text-xs text-secondary-foreground">
                {c}
              </span>
            ))}
          </div>

          <div className="card-in mt-6 flex flex-wrap items-center gap-3" style={{ animationDelay: "300ms" }}>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t({ zh: "看实习 / 项目", en: "See experience" })}
              <span aria-hidden className="font-mono-tech">↓</span>
            </a>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-glow hover:text-glow"
            >
              <Download size={15} strokeWidth={2.2} />
              {t(SITE.hero.downloadCta)}
            </a>
          </div>
        </div>

        {/* 右：证件照 + 联系方式面板 */}
        <aside className="scroll-slide-left w-full max-w-sm justify-self-center lg:justify-self-end">
          {/* 证件照 */}
          <div className="relative mx-auto mb-[-28px] w-fit">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-gradient-to-br from-glow to-amber opacity-70 blur-md"
            />
            <img
              src={PORTRAIT_URL}
              alt={t(SITE.hero.visualAlt)}
              className="relative size-[104px] rounded-full border-[3px] border-card object-cover object-top shadow-lg sm:size-[120px]"
            />
          </div>

          <div className="rounded-[var(--radius-xl)] border border-border bg-card/80 p-5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:p-6 pt-[24px] mt-[48px]">
            <h2 className="font-mono-tech text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t({ zh: "联系方式", en: "Contact" })}
            </h2>
            <ul className="mt-4 space-y-3.5">
              {SITE.contacts.map((c) => {
                const Icon = CONTACT_ICONS[c.kind];
                return (
                  <li key={c.kind} data-copy-row className="group flex items-center justify-between gap-3">
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-glow-soft text-glow">
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">{t(c.label)}</span>
                        {c.href ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex max-w-full items-center gap-1 truncate font-mono-tech text-sm transition-colors hover:text-glow"
                          >
                            <span className="truncate">{c.value}</span>
                            <ExternalLink size={11} strokeWidth={2.2} className="shrink-0 opacity-60" />
                          </a>
                        ) : (
                          <span className="block truncate font-mono-tech text-sm">{c.value}</span>
                        )}
                      </span>
                    </span>
                    <CopyButton value={c.value} iconOnly className="opacity-60 transition-opacity group-hover:opacity-100" />
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {t({ zh: "出生年月", en: "Born" })} · {SITE.meta.birth} ｜ {t(SITE.meta.location)}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
