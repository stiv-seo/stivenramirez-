import { cn } from "@/lib/utils";

interface SectionNumberProps {
  number: string | number;
  /** 'light' = on light backgrounds (0.06 opacity), 'dark' = on dark backgrounds (0.04 opacity) */
  surface?: "light" | "dark";
  className?: string;
}

export function SectionNumber({
  number,
  surface = "light",
  className,
}: SectionNumberProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "section-number",
        surface === "light" ? "section-number--light" : "section-number--dark",
        className
      )}
    >
      {String(number).padStart(2, "0")}
    </span>
  );
}
