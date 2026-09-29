import { useLang } from "@/hooks/use-lang";
import { SITE } from "@/content/site";
import { SectionShell } from "@/components/section-shell";

export function Highlights() {
  const { t } = useLang();
  const { highlights } = SITE;

  return (
    <SectionShell id="about" index="01" title={highlights.heading} lead={highlights.lead}>
      <div className="grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border sm:grid-cols-2">
        {highlights.items.map((h, i) => (
          <article
            key={h.index}
            className="card-in group relative bg-card p-5 transition-colors hover:bg-surface sm:p-6"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <span className="stat-num text-xs">{h.index}</span>
            <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight group-hover:text-glow sm:text-lg">
              {t(h.title)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(h.body)}</p>
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-px w-0 bg-glow transition-all duration-500 group-hover:w-full"
            />
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
