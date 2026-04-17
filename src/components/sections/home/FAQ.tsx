"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { faqItems } from "@/data/faq";
import { WA_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[rgba(0,0,0,0.07)]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span
          className={cn(
            "font-jakarta font-bold text-[15px] leading-snug transition-colors duration-150",
            isOpen ? "text-teal" : "text-text-dark group-hover:text-teal"
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            "shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300",
            isOpen
              ? "bg-teal border-teal text-midnight rotate-45"
              : "border-[rgba(0,0,0,0.15)] text-slate"
          )}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="1" x2="5" y2="9" />
            <line x1="1" y1="5" x2="9" y2="5" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <p className="font-sans text-text-mid text-sm leading-[1.75] pb-5 pr-10">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  // JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          {/* Left */}
          <FadeIn>
            <Eyebrow>08 — Preguntas frecuentes</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              Resuelve tus dudas antes de escribirme
            </h2>
            <p className="font-sans text-text-mid text-sm leading-[1.75] mb-6">
              Si tienes una pregunta que no está aquí, escríbeme directo por WhatsApp — respondo en menos de 2 horas en horario laboral.
            </p>
            <Button variant="whatsapp" href={WA_URL} external>
              Preguntar por WhatsApp
            </Button>
          </FadeIn>

          {/* Right — accordion */}
          <FadeIn delay={0.1}>
            <div>
              {faqItems.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
