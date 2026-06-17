import Image from "next/image";

/** Moldura de imagem. Se `src` apontar para um arquivo existente, renderiza a imagem.
   Caso contrário, mostra um placeholder com shimmer + dica de dimensão. */
export function ImageFrame({
  src,
  alt,
  label = "Imagem",
  hint,
  className = "",
  rounded = "rounded-xl",
  priority = false,
  fit = "cover",
}: {
  src?: string;
  alt: string;
  label?: string;
  hint?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div
      className={`relative overflow-hidden border border-border ${rounded} ${className}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} className={fit === "contain" ? "object-contain" : "object-cover"} sizes="(max-width: 768px) 100vw, 50vw" />
      ) : (
        <div className="img-shimmer absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-muted">{label}</span>
          {hint && <span className="px-4 text-xs text-muted/70">{hint}</span>}
        </div>
      )}

      {/* brilho de borda no canto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 60px rgba(166,226,46,0.06)" }}
      />
    </div>
  );
}
