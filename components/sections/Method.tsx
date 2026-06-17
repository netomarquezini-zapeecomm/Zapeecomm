import { method } from "@/lib/content";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { rich } from "@/components/ui/Highlight";

export function Method() {
  return (
    <Section id="metodo" tone="accent" glow>
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-primary">O Método Zape</p>
        <SectionTitle>{rich(method.title)}</SectionTitle>
      </Reveal>

      {/* Trilha vertical — passo a passo conectado */}
      <div className="mx-auto mt-16 max-w-3xl">
        {method.steps.map((step, i) => {
          const isLast = i === method.steps.length - 1;
          return (
            <Reveal key={step.number} delay={i * 90} direction="right">
              <div className="flex gap-5 sm:gap-7">
                {/* Coluna da trilha: número + linha conectora */}
                <div className="flex flex-col items-center">
                  <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-black text-black ring-4 ring-primary/15 transition-transform duration-300">
                    {step.number}
                  </div>
                  {!isLast && (
                    <div className="my-1 w-0.5 grow bg-gradient-to-b from-primary/60 to-primary/15" />
                  )}
                </div>

                {/* Conteúdo do passo */}
                <div className={`flex-1 ${isLast ? "" : "pb-8"}`}>
                  <div className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] lg:p-7">
                    <h3 className="text-xl font-bold uppercase tracking-wide text-text">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted lg:text-lg">{step.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="mx-auto mt-16 max-w-2xl space-y-4 text-center">
        <p className="text-2xl font-bold text-text">{rich(method.closing[0])}</p>
        <p className="text-pretty leading-relaxed text-muted lg:text-lg">{rich(method.closing[1])}</p>
      </Reveal>
    </Section>
  );
}
