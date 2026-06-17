import { authority } from "@/lib/content";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { StatsCounter } from "@/components/StatsCounter";
import { rich } from "@/components/ui/Highlight";
import { ImageFrame } from "@/components/ui/ImageFrame";

export function Authority() {
  return (
    <Section id="sobre" tone="black">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-primary">Quem é a Zape</p>
        <SectionTitle>{authority.title}</SectionTitle>
        <p className="mt-6 text-pretty text-lg font-medium leading-relaxed text-text lg:text-xl">
          {rich(authority.description)}
        </p>
        <p className="mt-4 text-pretty leading-relaxed text-muted lg:text-lg">{rich(authority.descriptionExtra)}</p>
      </Reveal>

      {/* Foto do time completo (landscape / deitada) */}
      <Reveal delay={80} direction="scale" className="mx-auto mt-12 max-w-5xl">
        <div className="relative">
          {/* glow atrás da foto */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-0 rounded-3xl opacity-60"
            style={{ background: "radial-gradient(ellipse, rgba(166,226,46,0.12) 0%, transparent 70%)" }}
          />
          <ImageFrame
            src={authority.teamImage || undefined}
            alt="Time completo da Zape"
            label="Foto do time completo"
            hint="Imagem deitada (landscape) · 16:9 · ~1600×900px"
            className="relative aspect-[16/9] w-full"
            rounded="rounded-2xl"
          />
        </div>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-12 max-w-5xl">
        <StatsCounter stats={authority.stats} />
      </Reveal>
    </Section>
  );
}
