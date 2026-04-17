import { cn } from "@/lib/utils";

export interface StatCardProps {
  icon?: string;
  value: string;
  label: string;
  description?: string;
  accent?: "teal" | "amber";
  className?: string;
}

export function StatCard({
  icon,
  value,
  label,
  description,
  accent = "teal",
  className,
}: StatCardProps) {
  const isTeal = accent === "teal";

  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 border backdrop-blur-sm",
        "transition-transform duration-300 hover:-translate-y-1",
        isTeal
          ? "bg-teal/[0.06] border-teal/20"
          : "bg-amber/[0.06] border-amber/20",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl pointer-events-none",
          isTeal
            ? "bg-gradient-to-br from-teal/5 to-transparent"
            : "bg-gradient-to-br from-amber/5 to-transparent"
        )}
        aria-hidden="true"
      />
      <div className="relative z-10">
        {icon && (
          <span className="block text-3xl mb-3" aria-hidden="true">
            {icon}
          </span>
        )}
        <p
          className={cn(
            "font-jakarta font-extrabold text-[2.25rem] leading-none mb-2",
            isTeal ? "text-teal" : "text-amber"
          )}
        >
          {value}
        </p>
        <p className="font-jakarta font-bold text-text-dark text-[14px] mb-1">
          {label}
        </p>
        {description && (
          <p className="font-sans text-slate text-[13px] leading-[1.7]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
