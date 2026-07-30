"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. Kept small on purpose — this reads as premium depth, not a gimmick. */
  max?: number;
  /** How much the content lifts toward the viewer, in px. */
  lift?: number;
}

/**
 * Cursor-driven 3D tilt, pure CSS transform (no WebGL/3D library). Zero bundle
 * cost beyond this file. Disabled entirely under prefers-reduced-motion.
 */
export function Tilt({ children, className, max = 7, lift = 8 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rect = el.getBoundingClientRect();
    const updateRect = () => {
      rect = el.getBoundingClientRect();
    };

    const onMove = (e: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const px = (e.clientX - rect.left) / rect.width; // 0..1
        const py = (e.clientY - rect.top) / rect.height; // 0..1
        const rotateY = (px - 0.5) * max * 2;
        const rotateX = (0.5 - py) * max * 2;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${lift}px)`;
      });
    };

    const onLeave = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", updateRect);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", updateRect);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [max, lift]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
