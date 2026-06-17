import { shift } from "@/lib/content";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { rich } from "@/components/ui/Highlight";

type IconProps = { className?: string };

/* Alvo — Organizar sua estratégia */
function TargetIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/* Megafone — Tornar seu Ads mais eficiente */
function MegaphoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

/* Tendência de alta — Criar previsibilidade nas vendas */
function TrendingUpIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </svg>
  );
}

/* Barras crescentes — Consolidar o crescimento */
function BarChartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

/* Cifrão — Melhorar sua margem */
function DollarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

/* Ícones na mesma ordem de shift.bullets */
const bulletIcons = [TargetIcon, MegaphoneIcon, TrendingUpIcon, BarChartIcon, DollarIcon];

export function Shift() {
  return (
    <Section id="solucoes" tone="black">
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionTitle>
          <span className="text-primary">{shift.titleHighlight}</span> {shift.title}
        </SectionTitle>
        <p className="mt-6 text-pretty leading-relaxed text-muted lg:text-lg">{rich(shift.intro)}</p>
        <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-text">{rich(shift.bridge)}</p>
      </Reveal>

      <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-3">
        {shift.bullets.map((bullet, i) => {
          const Icon = bulletIcons[i] ?? TargetIcon;
          return (
            <Reveal key={bullet} delay={i * 70} direction="right">
              <li className="flex items-center gap-4 rounded-lg border border-border bg-surface px-6 py-5 transition-all hover:border-primary/40 hover:translate-x-1">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon />
                </span>
                <span className="text-lg font-semibold text-text">{bullet}</span>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
