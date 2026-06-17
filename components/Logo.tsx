/** Logotipo Zape — logo oficial horizontal (versão branca) para fundos escuros. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/zape-logo-horizontal.png"
      alt="Zape"
      className={`h-7 w-auto select-none ${className}`}
    />
  );
}
