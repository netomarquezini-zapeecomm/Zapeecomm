import { Fragment, type ReactNode } from "react";

/** Renderiza texto com destaques de marca: trechos entre **...** ficam em verde (primary).
   Ex.: rich("crescer com **método**") → "crescer com " + <span verde>método</span>.
   Permite editar a ênfase direto no texto, em lib/content.ts. */
export function rich(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-semibold text-primary">
          {part.slice(2, -2)}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
