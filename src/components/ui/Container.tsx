import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 md:px-8 lg:px-[60px]", className)}
      style={{ maxWidth: "1160px" }}
    >
      {children}
    </div>
  );
}
