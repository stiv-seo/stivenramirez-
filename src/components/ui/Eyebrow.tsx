import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** Use 'light' on dark backgrounds (default teal), 'muted' for subtle variation */
  tone?: "teal" | "muted";
}

export function Eyebrow({ children, className, tone = "teal" }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-sans text-[11px] font-semibold tracking-[4px] uppercase mb-3.5 leading-none",
        tone === "teal" && "text-teal",
        tone === "muted" && "text-slate-light",
        className
      )}
    >
      {children}
    </p>
  );
}
