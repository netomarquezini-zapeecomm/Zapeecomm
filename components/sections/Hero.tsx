import Image from "next/image";
import { hero, authority } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-start overflow-hidden bg-black px-5 pt-28 pb-16 lg:min-h-[94vh] lg:justify-center"
    >
      {/* ── Imagem de fundo full-bleed vertical (apenas mobile/tablet) ── */}
      <Image
        src="/hero/hero-mobile.webp"
        alt="Dashboard da Zape com métricas de GMV, ROAS e selo Consultoria Oficial Shopee"
        fill
        priority
        sizes="100vw"
        className="origin-bottom scale-[0.85] select-none object-contain object-bottom lg:hidden"
      />

      {/* ── Imagem de fundo full-bleed horizontal (apenas desktop) ── */}
      <Image
        src="/hero/hero-zape-v2.webp"
        alt="Dashboard da Zape com métricas de GMV, ROAS e selo Consultoria Oficial Shopee"
        fill
        priority
        sizes="100vw"
        className="hidden select-none object-cover object-center lg:block"
      />

      {/* overlay: topo escurecido no mobile p/ legibilidade do texto; faixa à esquerda no desktop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{ background: "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.7) 28%, transparent 50%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{ background: "linear-gradient(90deg, #000 0%, rgba(0,0,0,0.6) 26%, transparent 50%)" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-center lg:items-start lg:px-8">
        {/* ── Texto ── */}
        <div className="flex w-full max-w-2xl flex-col items-center text-center animate-fade-in lg:items-start lg:text-left">
          <h1 className="text-balance text-[2.6rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.titleLead} <span className="text-primary text-glow">{hero.titleHighlight1}</span>{" "}
            {hero.titleMid} <span className="text-primary text-glow">{hero.titleHighlight2}</span>.
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted lg:text-xl">
            Consultoria oficial Shopee para sellers que querem{" "}
            <span className="font-semibold text-text">parar de depender de agência</span>. Implantamos um processo comercial, rotina e indicadores para você{" "}
            <span className="font-semibold text-primary">escalar com previsibilidade</span>.
          </p>

          {/* mini-stats de prova rápida (ocultas no mobile) */}
          <div className="mt-12 hidden w-full grid-cols-3 gap-3 border-t border-border pt-8 sm:flex sm:flex-wrap sm:gap-10">
            {authority.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-black text-primary sm:text-3xl">{stat.value}</div>
                <div className="text-xs text-muted sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
