"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="surface">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-primary/30 px-4 py-1 text-xs font-semibold uppercase tracking-[3px] text-primary">
          FAQ
        </span>
        <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
          Perguntas <span className="text-primary">frequentes</span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 40}>
              <div className="mb-3 overflow-hidden rounded-md border border-border bg-surface">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-text">{item.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 px-6 pb-5 leading-relaxed text-muted lg:text-lg">
                      {item.a.split("\n\n").map((paragraph, j) => (
                        <p key={j}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
