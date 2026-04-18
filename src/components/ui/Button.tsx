"use client";

import Link from "next/link";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "whatsapp" | "dark" | "ghost" | "outline" | "border";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  external?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-midnight font-bold hover:bg-teal-bright hover:-translate-y-px " +
    "shadow-[0_0_0_0_rgba(0,196,180,0)] hover:shadow-[0_4px_20px_rgba(0,196,180,0.35)] " +
    "transition-all duration-200",
  whatsapp:
    "bg-whatsapp text-white font-bold hover:bg-whatsapp-dim hover:-translate-y-px " +
    "transition-all duration-200",
  dark:
    "bg-midnight text-white font-bold hover:bg-[#0f2035] hover:-translate-y-px " +
    "transition-all duration-200",
  ghost:
    "bg-transparent text-teal border-b border-teal rounded-none pb-0.5 " +
    "font-bold text-[13px] hover:opacity-75 transition-opacity duration-150",
  outline:
    "bg-white text-text-dark border border-[rgba(0,0,0,0.07)] font-bold " +
    "hover:border-teal hover:text-teal transition-all duration-150",
  border:
    "bg-transparent text-white border border-white/30 font-bold " +
    "hover:border-white/70 hover:bg-white/5 transition-all duration-150",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2.5",
  md: "text-sm px-7 py-3.5",
  lg: "text-sm px-9 py-4",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-jakarta rounded-md " +
  "leading-none whitespace-nowrap cursor-pointer select-none";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      baseClasses,
      variant !== "ghost" && sizeClasses[size],
      variantClasses[variant],
      className
    );

    if ("href" in props && props.href !== undefined) {
      const { href, external, onClick, ...rest } = props as ButtonAsLink;
      return (
        <Link
          href={href}
          className={classes}
          onClick={onClick}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(rest as object)}
        >
          {children}
        </Link>
      );
    }

    const { ...buttonProps } = props as ButtonAsButton;
    return (
      <button ref={ref} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
