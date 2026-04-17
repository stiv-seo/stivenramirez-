import { cn } from "@/lib/utils";

export type BadgeVariant = "teal" | "amber";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  teal: "bg-teal-dim text-teal",
  amber: "bg-amber-dim text-amber",
};

export function Badge({ variant = "teal", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-jakarta text-[9px] font-bold tracking-[0.1em] uppercase",
        "px-2.5 py-1 rounded-full leading-none",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
