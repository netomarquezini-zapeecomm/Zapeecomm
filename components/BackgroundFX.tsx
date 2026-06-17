/** Camada de efeitos de fundo — orbs verdes desfocados flutuando + grid sutil.
   Fixa atrás de todo o conteúdo (z-0, pointer-events none). */
export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* grid sutil */}
      <div className="grid-overlay absolute inset-0 opacity-60" />

      {/* vinheta para profundidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* orbs verdes animados */}
      <div
        className="orb orb-1"
        style={{
          top: "-10%",
          left: "-5%",
          width: "480px",
          height: "480px",
          background: "rgba(166,226,46,0.10)",
        }}
      />
      <div
        className="orb orb-2"
        style={{
          top: "30%",
          right: "-10%",
          width: "560px",
          height: "560px",
          background: "rgba(166,226,46,0.07)",
        }}
      />
      <div
        className="orb orb-3"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "520px",
          height: "520px",
          background: "rgba(166,226,46,0.06)",
        }}
      />
    </div>
  );
}
