import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/use-lang";
import { SITE, RESUME_PDF_URL } from "@/content/site";

const SECTION_IDS = ["about", "skills", "projects", "experience", "education", "honors", "contact"];

export function SiteNav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 章节高亮：IntersectionObserver 仅做导航态标记，不影响内容可见性
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.01, 0.2, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[92rem] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-primary font-mono-tech text-[13px] font-bold text-primary-foreground">
            BL
          </span>
          <span className="hidden text-sm font-medium tracking-tight xl:block">
            {t(SITE.meta.name)}
            <span className="ml-2 font-mono-tech text-xs text-muted-foreground group-hover:text-glow">· Portfolio</span>
          </span>
        </a>

        <nav className="hidden min-w-0 items-center justify-center gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex xl:gap-1" aria-label="sections">
          {SITE.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-[var(--radius-sm)] px-2 py-1.5 text-[13px] transition-colors xl:px-3",
                active === item.id ? "bg-glow-soft text-glow" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 xl:gap-2">
          <div className="flex items-center rounded-full border border-border p-0.5" role="group" aria-label="language">
            {(["zh", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-2 py-1 font-mono-tech text-xs transition-colors xl:px-2.5",
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l === "zh" ? "中" : "EN"}
              </button>
            ))}
          </div>

          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-border px-3 py-1.5 text-[13px] transition-colors hover:border-glow hover:text-glow sm:inline-flex xl:px-3.5"
          >
            <Download size={14} strokeWidth={2} className="shrink-0" />
            {t(SITE.hero.downloadCta)}
          </a>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)] border border-border text-muted-foreground lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "close menu" : "open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* 移动端抽屉菜单 */}
      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-96" : "max-h-0 border-b-transparent",
        )}
      >
        <nav className="mx-auto grid w-full max-w-6xl gap-1 px-5 py-4" aria-label="mobile sections">
          {SITE.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "rounded-[var(--radius-sm)] px-3 py-2.5 text-sm",
                active === item.id ? "bg-glow-soft text-glow" : "text-muted-foreground",
              )}
            >
              {t(item.label)}
            </a>
          ))}
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-1 inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-3 py-2.5 text-sm text-primary-foreground"
          >
            <Download size={14} /> {t(SITE.hero.downloadCta)}
          </a>
        </nav>
      </div>
    </header>
  );
}
