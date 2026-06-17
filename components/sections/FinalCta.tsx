import { finalCta } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { rich } from "@/components/ui/Highlight";

export function FinalCta() {
  return (
    <Section
      id="diagnostico"
      tone="black"
      glow
      divider={false}
      className="pt-4 lg:pt-6"
      glowClassName="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[820px] -translate-x-1/2 -translate-y-1/2"
      glowStyle={{ background: "radial-gradient(ellipse at center, rgba(166,226,46,0.11) 0%, rgba(166,226,46,0.05) 38%, transparent 70%)" }}
    >
      <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {rich(finalCta.title)}
        </h2>
        <p className="mt-5 text-pretty leading-relaxed text-muted lg:text-lg">{rich(finalCta.subtitle)}</p>
        <div className="mt-10 flex justify-center">
          <Button href="#produtos" size="lg" className="text-base">
            {finalCta.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
        <p className="mt-5 text-xs text-muted">{finalCta.note}</p>
      </Reveal>
    </Section>
  );
}
