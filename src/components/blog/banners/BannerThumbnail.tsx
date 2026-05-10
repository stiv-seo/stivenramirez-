"use client";

import { useRef, useEffect, useState } from "react";
import { bannerRegistry } from "./registry";

interface Props {
  slug: string;
}

export function BannerThumbnail({ slug }: Props) {
  const Component = bannerRegistry[slug];
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setScale(containerRef.current.clientWidth / 1200);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  if (!Component) return null;

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
      aria-hidden="true"
    >
      {scale > 0 && (
        <div
          style={{
            width: 1200,
            height: 630,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Component />
        </div>
      )}
    </div>
  );
}
