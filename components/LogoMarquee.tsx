import Image from "next/image";

type Logo = { name: string; src: string };

/** Carrossel infinito de logos (1:1) que roda sozinho.
   A lista é duplicada para criar o loop contínuo; pausa ao passar o mouse. */
export function LogoMarquee({ logos }: { logos: readonly Logo[] }) {
  const items = [...logos, ...logos]; // duplica para loop sem corte

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="mr-5 flex aspect-square w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/40"
            title={logo.name}
            aria-hidden={i >= logos.length}
          >
            {/* Mostra a imagem do logo se existir; senão, fallback com o nome */}
            {logo.src ? (
              <span className="relative h-full w-full">
                <Image
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </span>
            ) : (
              <span className="text-center text-sm font-semibold text-muted">{logo.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
