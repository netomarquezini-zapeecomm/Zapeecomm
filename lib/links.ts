import { site } from "./content";

/** Monta o link de WhatsApp com mensagem opcional pré-preenchida. */
export function whatsappLink(message?: string) {
  const text = message ?? "Olá! Quero saber mais sobre o processo comercial da Zape.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
