import { Download, Github, ExternalLink } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { SITE, RESUME_PDF_URL } from "@/content/site";
import { CopyButton } from "@/components/ui/copy-button";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-border">
      {/* 背景纹理 + 光晕 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_50%_100%,black,transparent_75%)]" />
        <div className="absolute bottom-[-200px] left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-glow-soft blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="scroll-fade flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-glow">{t(SITE.footer.contactHeading)}</p>
            <h2 className="mt-4 text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight">
              {t({ zh: "感谢观看", en: "Thanks for reading" })}
              <br />
              <span className="text-glow">{t({ zh: "欢迎联系", en: "Feel free to reach out" })}</span>
            </h2>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download size={15} strokeWidth={2.2} />
              {t(SITE.footer.resumeCta)}
            </a>
          </div>

          {/* 联系方式列表 */}
          <ul className="w-full max-w-sm space-y-3">
            {SITE.contacts.map((c) => (
              <li key={c.kind} data-copy-row className="flex items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-border bg-card/70 px-4 py-3 backdrop-blur-sm">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-glow-soft text-glow">
                    {c.kind === "github" ? <Github size={15} strokeWidth={2} /> : null}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">{t(c.label)}</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex max-w-full items-center gap-1.5 truncate font-mono-tech text-sm transition-colors hover:text-glow"
                      >
                        <span className="truncate">{c.value}</span>
                        <ExternalLink size={11} strokeWidth={2.2} className="shrink-0 opacity-60" />
                      </a>
                    ) : (
                      <span className="block truncate font-mono-tech text-sm">{c.value}</span>
                    )}
                  </span>
                </span>
                <CopyButton value={c.value} iconOnly className="shrink-0" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-tech">© {new Date().getFullYear()} {t(SITE.meta.name)}</p>
          <a
            href="https://github.com/Bluzy6/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono-tech transition-colors hover:text-glow"
          >
            <Github size={13} /> github.com/Bluzy6
          </a>
        </div>
      </div>
    </footer>
  );
}
