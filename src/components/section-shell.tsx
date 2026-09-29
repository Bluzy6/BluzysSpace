import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/use-lang";
import type { Localized } from "@/content/types";

interface SectionShellProps {
  id: string;
  index: string;
  title: Localized;
  lead?: Localized;
  children: ReactNode;
  className?: string;
}

/** 统一区块外壳：编号 + 标题 + 引导语 + 内容，带滚动入场（纵向紧凑） */
export function SectionShell({ id, index, title, lead, children, className }: SectionShellProps) {
  const { t } = useLang();
  return (
    <section id={id} className={cn("scroll-mt-20 py-10 sm:py-14", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="scroll-fade mb-6 sm:mb-8">
          <div className="flex items-baseline gap-3">
            <span className="stat-num text-sm">{index}</span>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t(title)}</h2>
            {lead && (
              <p className="max-w-xl text-[13px] leading-relaxed text-muted-foreground">{t(lead)}</p>
            )}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
