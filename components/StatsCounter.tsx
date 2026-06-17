"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string };

/** Separa prefixo (ex.: "+"), número e sufixo (ex.: " Anos") de "+250", "+3 Anos". */
function parseStat(value: string) {
  const m = value.match(/^(\D*)([\d.,]+)(.*)$/);
  if (!m) return { prefix: "", target: 0, suffix: value };
  const prefix = m[1] ?? "";
  const target = parseFloat(m[2].replace(/\./g, "").replace(",", "."));
  const suffix = m[3] ?? "";
  return { prefix, target, suffix };
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const DURATION = 2000; // ms — todos os contadores compartilham a mesma duração

export function StatsCounter({ stats }: { stats: readonly Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const parsed = stats.map((s) => parseStat(s.value));
  const [values, setValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (reduceMotion) {
          setValues(parsed.map((p) => p.target));
          return;
        }

        let raf = 0;
        let start = 0;
        const tick = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / DURATION, 1);
          const eased = easeOutExpo(progress);
          setValues(parsed.map((p) => p.target * eased));
          if (progress < 1) raf = requestAnimationFrame(tick);
          else setValues(parsed.map((p) => p.target));
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {stats.map((stat, i) => {
        const p = parsed[i];
        const display = p.prefix + Math.round(values[i]).toLocaleString("pt-BR") + p.suffix;
        return (
          <div
            key={stat.label}
            className="flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface px-4 py-12 text-center transition-colors hover:border-primary/40 lg:min-h-[200px]"
          >
            <div className="whitespace-nowrap text-5xl font-black leading-none tabular-nums text-primary sm:text-6xl xl:text-7xl">
              {display}
            </div>
            <div className="text-base font-medium text-muted lg:text-lg">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
