/** Camada de fundo animada para seções escuras — profissional e sutil:
   grid em leve movimento + duas auroras verdes que respiram em posições alternadas.
   Tudo via transform/opacity (GPU). Fica atrás do conteúdo (z-0). */
export function SectionFX({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid técnico em drift, com máscara radial pra sumir nas bordas */}
      <div
        className="absolute inset-0 animate-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(166,226,46,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(166,226,46,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 0%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 0%, transparent 78%)",
        }}
      />

      {/* Aurora A */}
      <div
        className="absolute h-[460px] w-[460px] rounded-full animate-aurora-a"
        style={{
          top: flip ? "auto" : "-160px",
          bottom: flip ? "-160px" : "auto",
          left: flip ? "auto" : "-140px",
          right: flip ? "-140px" : "auto",
          background: "radial-gradient(circle, rgba(166,226,46,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Aurora B (oposta) */}
      <div
        className="absolute h-[520px] w-[520px] rounded-full animate-aurora-b"
        style={{
          top: flip ? "-180px" : "auto",
          bottom: flip ? "auto" : "-180px",
          right: flip ? "auto" : "-120px",
          left: flip ? "-120px" : "auto",
          background: "radial-gradient(circle, rgba(166,226,46,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
