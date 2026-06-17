import { socialProof } from "@/lib/content";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ImageFrame } from "@/components/ui/ImageFrame";

export function SocialProof() {
  return (
    <Section id="resultados" tone="surface">
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionTitle>
          <span className="text-primary">Empresas que implantaram</span> o processo comercial Zape
        </SectionTitle>
        <p className="mt-5 leading-relaxed text-muted lg:text-lg">{socialProof.subtitle}</p>
      </Reveal>

      {/* Carrossel de logos 1:1 — roda sozinho, pausa no hover */}
      <Reveal delay={80} className="mt-12">
        <LogoMarquee logos={socialProof.logos} />
      </Reveal>

      {/* Cases com imagem 1:1 + textos */}
      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {socialProof.cases.map((c, i) => (
          <Reveal key={c.name} delay={i * 100} direction="up">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
              {/* imagem 1:1 */}
              <div className="p-3 pb-0">
                <ImageFrame
                  src={c.image || undefined}
                  alt={`Case ${c.name}`}
                  label="Imagem do case"
                  hint="1:1 · ~600×600px"
                  className="aspect-square w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  rounded="rounded-xl"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 pt-5">
                <h3 className="text-lg font-extrabold uppercase tracking-wide text-text">{c.name}</h3>
                <span className="mt-1 text-xs font-bold uppercase tracking-wide text-primary">
                  Nicho: {c.niche}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.result}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
