"use client";

import Image from "next/image";
import { useId, useState } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  width: number;
  height: number;
  client: string;
}

// Comparador antes/después: un <input type="range"> nativo mueve el corte,
// así funciona con ratón, dedo y teclado sin librerías.
export function BeforeAfter({ before, after, width, height, client }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-midnight select-none"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={after}
        alt={`Sitio de ${client} después del rediseño`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before}
          alt={`Sitio de ${client} antes del rediseño`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-midnight/80 px-3 py-1 font-jakarta text-[11px] font-bold text-white">
        Antes
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-teal px-3 py-1 font-jakarta text-[11px] font-bold text-midnight">
        Después
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-[2px] bg-white"
        style={{ left: `${pos}%`, transform: "translateX(-1px)" }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white font-jakarta text-sm font-bold text-midnight shadow-[0_2px_8px_rgba(11,24,41,0.35)]">
          ↔
        </span>
      </div>

      <label htmlFor={id} className="sr-only">
        Comparar antes y después del sitio de {client}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
