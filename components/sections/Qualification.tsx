import { qualification } from "@/lib/content";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { rich } from "@/components/ui/Highlight";

function ItemIcon({ ok }: { ok: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm ${
        ok ? "bg-primary text-black" : "bg-error text-white"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" className="h-3.5 w-3.5" strokeLinecap="round" strokeLinejoin="round">
        {ok ? <path d="M20 6L9 17l-5-5" /> : <path d="M18 6 6 18M6 6l12 12" />}
      </svg>
    </span>
  );
}

function QualColumn({
  ok,
  title,
  items,
  delay,
}: {
  ok: boolean;
  title: string;
  items: readonly string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} direction={ok ? "right" : "left"}>
      <div
        className={`group relative h-full overflow-hidden rounded-2xl border-2 bg-surface p-6 transition-all duration-300 sm:p-8 ${
          ok
            ? "border-primary/55 hover:shadow-[var(--shadow-glow-strong)]"
            : "border-error/40"
        }`}
      >
        {/* gradiente de cor sutil no card (tira o aspecto apagado) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: ok
              ? "linear-gradient(160deg, rgba(166,226,46,0.12), transparent 55%)"
              : "linear-gradient(160deg, rgba(255,82,82,0.10), transparent 55%)",
          }}
        />
        {/* glow ambiental no topo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: ok ? "rgba(166,226,46,0.20)" : "rgba(255,82,82,0.14)" }}
        />

        {/* header */}
        <div className="relative mb-7 flex items-center gap-3.5">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
              ok ? "bg-primary text-black shadow-[var(--shadow-glow)]" : "bg-error text-white shadow-lg shadow-black/30"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round">
              {ok ? <path d="M20 6L9 17l-5-5" /> : <path d="M18 6 6 18M6 6l12 12" />}
            </svg>
          </span>
          <h3 className={`text-xl font-extrabold uppercase tracking-wide sm:text-2xl ${ok ? "text-primary" : "text-error"}`}>
            {title}
          </h3>
        </div>

        {/* itens — lista limpa, sem caixas internas */}
        <ul className="relative flex flex-col gap-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-text sm:text-base">
              <ItemIcon ok={ok} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Qualification() {
  return (
    <Section id="para-quem" tone="black" className="pb-8 lg:pb-10">
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionTitle>{qualification.title}</SectionTitle>
        <p className="mt-5 text-pretty leading-relaxed text-muted lg:text-lg">{rich(qualification.subtitle)}</p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
        <QualColumn ok title={qualification.forWho.title} items={qualification.forWho.items} />
        <QualColumn ok={false} title={qualification.notForWho.title} items={qualification.notForWho.items} delay={90} />
      </div>
    </Section>
  );
}
