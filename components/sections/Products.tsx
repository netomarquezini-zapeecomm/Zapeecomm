import { products } from "@/lib/content";
import { whatsappLink } from "@/lib/links";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/Reveal";
import { rich } from "@/components/ui/Highlight";

type Product = (typeof products.items)[number];

/** Ícones de variação (line icons). */
function VIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-4 w-4",
    "aria-hidden": true,
  };
  switch (name) {
    case "bolt":
      return <svg {...common}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>;
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6z" />
          <path d="M18.5 14.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M6 4h12v4a6 6 0 0 1-12 0V4z" />
          <path d="M6 6H4a2 2 0 0 0 0 4h2M18 6h2a2 2 0 0 1 0 4h-2M9 20h6M12 14v6" />
        </svg>
      );
    case "crown":
      return <svg {...common}><path d="M4 18h16M4.5 8.5 8 11l4-5 4 5 3.5-2.5L18 18H6z" /></svg>;
    case "gem":
      return (
        <svg {...common}>
          <path d="M6 4h12l3 5-9 11L3 9z" />
          <path d="M9 9l3 11 3-11M3 9h18M9 4 7 9M15 4l2 5" />
        </svg>
      );
    default:
      return <svg {...common}><circle cx="12" cy="12" r="4" /></svg>;
  }
}

/** Estilo por cor — verde (base) + tiers premium (laranja, prata, dourado) com brilho. */
const variantStyles: Record<string, { cls: string; shine?: string }> = {
  green: { cls: "border-primary/40 bg-primary/10 text-primary" },
  orange: {
    cls: "border-[#f5933b]/55 bg-gradient-to-br from-[#f5933b]/22 via-[#f5933b]/8 to-transparent text-[#f8ad62] shadow-[0_0_22px_rgba(245,147,59,0.24)]",
    shine: "rgba(255,210,160,0.20)",
  },
  silver: {
    cls: "border-[#cbd0d8]/55 bg-gradient-to-br from-[#cbd0d8]/22 via-[#cbd0d8]/8 to-transparent text-[#e3e7ee] shadow-[0_0_22px_rgba(203,208,216,0.22)]",
    shine: "rgba(255,255,255,0.22)",
  },
  gold: {
    cls: "border-[#e6b84d]/65 bg-gradient-to-br from-[#e6b84d]/25 via-[#e6b84d]/8 to-transparent text-[#f3d271] shadow-[0_0_26px_rgba(230,184,77,0.28)]",
    shine: "rgba(255,240,200,0.18)",
  },
};

function VariantChip({ name, color, icon }: { name: string; color: string; icon: string }) {
  const v = variantStyles[color] ?? variantStyles.green;
  return (
    <span className={`relative inline-flex items-center gap-2 overflow-hidden rounded-lg border px-4 py-2.5 text-sm font-bold ${v.cls}`}>
      {v.shine && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: `linear-gradient(115deg, transparent 35%, ${v.shine} 50%, transparent 65%)` }}
        />
      )}
      <span className="relative"><VIcon name={icon} /></span>
      <span className="relative">{name}</span>
    </span>
  );
}

function ProductRow({ p, index }: { p: Product; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal direction="up" delay={60}>
      <article className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2 lg:gap-14">
        {/* ── Imagem ── */}
        <div className={`relative ${reversed ? "lg:order-2" : "lg:order-1"}`}>
          {p.highlight && (
            <span className="absolute -top-3 left-4 z-10 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black shadow-[var(--shadow-glow)]">
              Mais procurado
            </span>
          )}
          <ImageFrame
            src={p.image || undefined}
            alt={`Imagem do produto ${p.name}`}
            label="Imagem do produto"
            hint="~800×600px"
            className={`aspect-[4/3] w-full ${p.highlight ? "border-primary/50 shadow-[var(--shadow-glow)]" : ""}`}
            rounded="rounded-2xl"
          />
        </div>

        {/* ── Conteúdo ── */}
        <div className={reversed ? "lg:order-1" : "lg:order-2"}>
          <h3 className="text-3xl font-extrabold text-primary lg:text-4xl">{p.name}</h3>
          <p className="mt-2 text-lg font-semibold text-text lg:text-xl">{p.promise}</p>

          <p className="mt-5 leading-relaxed text-muted lg:text-lg">{p.forWho}</p>
          <p className="mt-3 leading-relaxed text-muted lg:text-lg">{p.desc}</p>
          {p.variants?.length > 0 && (
            <div className="mt-6 border-t border-border pt-5">
              <div className="flex flex-wrap gap-3">
                {p.variants.map((v) => (
                  <VariantChip key={v.name} name={v.name} color={v.color} icon={v.icon} />
                ))}
              </div>
            </div>
          )}

          <Button
            href={(p as { ctaHref?: string }).ctaHref || whatsappLink(`Olá! Tenho interesse no ${p.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="primary"
            className="mt-7"
          >
            Quero saber mais
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

export function Products() {
  return (
    <Section id="produtos" tone="surface">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-primary">Soluções</p>
        <SectionTitle>{products.title}</SectionTitle>
        <p className="mt-5 text-pretty leading-relaxed text-muted lg:text-lg">{rich(products.subtitle)}</p>
      </Reveal>

      {/* Aviso de placeholder — REMOVER ao inserir os produtos reais */}
      {products.isPlaceholder && (
        <Reveal className="mx-auto mt-8 max-w-2xl" direction="scale">
          <div className="flex items-center justify-center gap-2 rounded-md border border-warning/40 bg-warning/10 px-4 py-3 text-center text-sm font-medium text-warning">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
            </svg>
            Conteúdo e imagens de exemplo — substitua em <code className="font-mono">lib/content.ts</code> e <code className="font-mono">/public/produtos/</code>
          </div>
        </Reveal>
      )}

      {/* Apresentação um a um — faixas alternadas */}
      <div className="mt-16 flex flex-col gap-16 lg:mt-20 lg:gap-24">
        {products.items.map((p, i) => (
          <ProductRow key={p.name} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
