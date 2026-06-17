import type { CSSProperties, ReactNode } from "react";
import { SectionFX } from "./SectionFX";

/** Tom de fundo da seção — cria a "quebra de cor" entre seções, sempre dentro da
   paleta dark do Design System (preto puro ↔ grafite ↔ accent com tint verde sutil). */
type Tone = "black" | "surface" | "accent";

const tones: Record<Tone, string> = {
  black: "bg-background", // nível 0 — #000 puro
  surface: "bg-[#141414]", // nível 1 — grafite (distinto do preto e do card #1f1f1f)
  accent: "bg-[#0a0d07]", // tint verde-escuro (seções-âncora)
};

export function Section({
  id,
  children,
  tone = "black",
  divider = true,
  glow = false,
  glowClassName,
  glowStyle,
  fx = true,
  className = "",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  divider?: boolean;
  glow?: boolean;
  glowClassName?: string;
  glowStyle?: CSSProperties;
  fx?: boolean;
  className?: string;
  containerClassName?: string;
}) {
  // Posição das auroras alterna por seção (determinístico → SSR-safe)
  const flip = ((id?.length ?? 0) + tone.length) % 2 === 0;

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden px-5 py-24 lg:px-8 lg:py-32 ${tones[tone]} ${className}`}
    >
      {/* Fundo animado (grid em drift + auroras verdes) */}
      {fx && <SectionFX flip={flip} />}

      {/* Régua divisória com glow verde sutil — marca o início da seção */}
      {divider && (
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        />
      )}

      {/* Glow verde ambiental (seções-âncora) */}
      {glow && (
        <div
          aria-hidden
          className={glowClassName ?? "pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/3 animate-pulse-glow"}
          style={glowStyle ?? { background: "radial-gradient(ellipse, rgba(166,226,46,0.12) 0%, transparent 70%)" }}
        />
      )}

      <div className={`relative z-10 mx-auto max-w-[1320px] ${containerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h2>
  );
}
