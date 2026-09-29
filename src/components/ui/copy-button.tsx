import { useCallback, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/use-lang";

interface CopyButtonProps {
  value: string;
  className?: string;
  iconOnly?: boolean;
}

/**
 * 复制到剪贴板：navigator.clipboard 不可用时降级为 textarea + execCommand，
 * 再失败则选中文本并提示手动复制。
 */
export function CopyButton({ value, className, iconOnly = false }: CopyButtonProps) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const fallbackCopy = useCallback((text: string): boolean => {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }, []);

  const handleCopy = useCallback(async () => {
    let ok = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        ok = true;
      } catch {
        ok = false;
      }
    }
    if (!ok) ok = fallbackCopy(value);

    if (ok) {
      setCopied(true);
      toast.success(t({ zh: `已复制 ${value}`, en: `Copied ${value}` }));
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 1800);
    } else {
      // 最终降级：选中按钮所在行的文本，提示手动复制
      const row = btnRef.current?.closest("[data-copy-row]");
      const target = row ?? btnRef.current;
      const sel = window.getSelection();
      if (sel && target) {
        const range = document.createRange();
        range.selectNodeContents(target);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      toast.message(t(SITE_FALLBACK_HINT));
    }
  }, [value, t, fallbackCopy]);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleCopy}
      aria-label={`copy ${value}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-2 py-1 text-muted-foreground transition-colors hover:bg-glow-soft hover:text-glow focus-visible:outline-2 focus-visible:outline-ring",
        className,
      )}
    >
      {copied ? <Check size={14} strokeWidth={2.2} /> : <Copy size={14} strokeWidth={2.2} />}
      {!iconOnly && <span className="font-mono-tech text-xs">{t(copied ? DONE_LABEL : COPY_LABEL)}</span>}
    </button>
  );
}

const COPY_LABEL = { zh: "复制", en: "Copy" };
const DONE_LABEL = { zh: "已复制", en: "Copied" };
const SITE_FALLBACK_HINT = {
  zh: "浏览器限制自动复制，已选中内容，请手动按 Ctrl/Cmd+C",
  en: "Auto-copy blocked; text selected — press Ctrl/Cmd+C",
};
