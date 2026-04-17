import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  /** Direction of the gradient fade */
  direction?: "left" | "right" | "center";
}

const gradients: Record<NonNullable<DividerProps["direction"]>, string> = {
  left:   "bg-linear-to-r from-teal to-transparent",
  right:  "bg-linear-to-l from-teal to-transparent",
  center: "bg-linear-to-r from-transparent via-teal to-transparent",
};

export function Divider({ className, direction = "left" }: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full h-px opacity-25",
        gradients[direction],
        className
      )}
    />
  );
}
