import type { ReactNode } from "react";
import Image from "next/image";
import { problem } from "@/lib/content";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { rich } from "@/components/ui/Highlight";
import { ImageFrame } from "@/components/ui/ImageFrame";

/** Máscara que desvanece as bordas da imagem para o transparente, fundindo a
   figura com o fundo escuro da seção (remove o halo de fundo do PNG). */
const fadeMask =
  "radial-gradient(ellipse 78% 88% at 50% 42%, #000 62%, transparent 88%)";

const ICON = "h-5 w-5";

/** Ícones (vermelho) que representam cada modelo antigo — alinhados a problem.cards[] */
const cardIcons: ReactNode[] = [
  // 0 · Um funcionário específico → uma pessoa
  <svg key="user" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={ICON} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
  // 1 · Uma agência externa → link externo
  <svg key="ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={ICON} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>,
  // 2 · Ajustes isolados → sliders soltos
  <svg key="sliders" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={ICON} strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" />
    <line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" />
    <line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" />
    <line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
  </svg>,
  // 3 · O "feeling" do dono → achismo/intuição
  <svg key="spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={ICON} strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>,
];

function ProblemCard({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center gap-2 rounded-xl border border-border bg-surface/90 px-2.5 py-3 text-center shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff5252]/40 sm:gap-3 sm:px-6 sm:py-6">
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ff5252]/30 bg-[#ff5252]/10 text-[#ff5252] sm:h-11 sm:w-11">
        {icon}
      </span>
      <span className="text-[11px] font-bold uppercase leading-tight tracking-wide text-text sm:text-sm lg:text-[15px]">{title}</span>
    </div>
  );
}

export function Problem() {
  return (
    <Section id="problema" tone="surface">
      <Reveal className="mx-auto max-w-3xl text-center lg:max-w-5xl">
        <SectionTitle>{rich(problem.title)}</SectionTitle>
      </Reveal>

      {/* Figura grande ao centro + 4 cards distribuídos ao redor */}
      <div className="relative mx-auto mt-14 max-w-4xl">
        {/* Figura central */}
        <Reveal direction="scale" delay={100} className="relative z-0 flex justify-center">
          {problem.image ? (
            <div className="relative w-full max-w-[190px] sm:max-w-[300px] lg:max-w-[440px]">
              {/* glow ambiental sutil atrás da figura */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(ellipse 58% 48% at 50% 45%, rgba(166,226,46,0.06) 0%, transparent 70%)" }}
              />
              <Image
                src={problem.image}
                alt="Operação sem processo — gestor sobrecarregado"
                width={1024}
                height={1536}
                priority
                className="relative z-10 mx-auto w-full object-contain"
                style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
              />
            </div>
          ) : (
            <ImageFrame
              alt="Operação sem processo"
              label="Imagem central"
              hint="~1:1 · 600×600px"
              className="aspect-square w-full max-w-[440px]"
              rounded="rounded-2xl"
            />
          )}
        </Reveal>

        {/* Cards distribuídos ao redor da figura nos 4 cantos (mobile e desktop) */}
        <Reveal direction="right" className="absolute left-0 top-2 z-20 w-[36%] sm:left-2 sm:top-6 sm:w-[38%] lg:left-12 lg:top-12 lg:w-[288px]">
          <ProblemCard title={problem.cards[0].title} icon={cardIcons[0]} />
        </Reveal>
        <Reveal direction="left" className="absolute right-0 top-2 z-20 w-[36%] sm:right-2 sm:top-6 sm:w-[38%] lg:right-12 lg:top-12 lg:w-[288px]">
          <ProblemCard title={problem.cards[1].title} icon={cardIcons[1]} />
        </Reveal>
        <Reveal direction="right" delay={80} className="absolute bottom-2 left-0 z-20 w-[36%] sm:bottom-6 sm:left-2 sm:w-[38%] lg:bottom-12 lg:left-12 lg:w-[288px]">
          <ProblemCard title={problem.cards[2].title} icon={cardIcons[2]} />
        </Reveal>
        <Reveal direction="left" delay={80} className="absolute bottom-2 right-0 z-20 w-[36%] sm:bottom-6 sm:right-2 sm:w-[38%] lg:bottom-12 lg:right-12 lg:w-[288px]">
          <ProblemCard title={problem.cards[3].title} icon={cardIcons[3]} />
        </Reveal>
      </div>

      <Reveal delay={120} className="mx-auto mt-12 max-w-2xl space-y-4 text-center text-muted">
        {problem.text.map((p) => (
          <p key={p} className="text-pretty leading-relaxed lg:text-lg">
            {rich(p)}
          </p>
        ))}
      </Reveal>
    </Section>
  );
}
