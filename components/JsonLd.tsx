import { site, authority, products, faq, method } from "@/lib/content";

/* Structured data (JSON-LD) — Organization + ProfessionalService + Service + FAQPage
   Estratégia de entidade/GEO recomendada pelo @analyst. */
export function JsonLd() {
  const orgId = `${site.url}/#organization`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: "Consultoria Oficial Shopee — Zape",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": orgId },
      inLanguage: "pt-BR",
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": orgId,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon-512.png`,
      },
      image: `${site.url}/icon-512.png`,
      inLanguage: "pt-BR",
      description: authority.description,
      areaServed: "BR",
      slogan: "Implantamos um processo comercial dentro da sua operação de e-commerce.",
      knowsAbout: [
        "Shopee",
        "E-commerce",
        "Marketplaces",
        "Processo comercial",
        "Gestão de marketplace",
        "Performance de anúncios",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Primo Frazato, nº 40, 2º Andar",
        addressLocality: "Pedreira",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      sameAs: [site.socials.instagram, site.socials.youtube, site.socials.linkedin].filter(Boolean),
    },
    ...products.items.map((p) => ({
      "@type": "Service",
      name: p.name,
      serviceType: "Consultoria de e-commerce",
      description: p.promise,
      provider: { "@id": orgId },
      areaServed: "BR",
      audience: {
        "@type": "Audience",
        audienceType: "Sellers e lojistas de Shopee e marketplaces",
      },
    })),
    {
      "@type": "HowTo",
      name: "Como implantamos um processo comercial na sua operação de e-commerce",
      description:
        "Método Zape de estruturação comercial para operações de Shopee e marketplaces.",
      step: method.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.desc,
      })),
      provider: { "@id": orgId },
    },
    {
      "@type": "FAQPage",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#faq"],
      },
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a.replace(/\n+/g, " ") },
      })),
    },
  ];

  const data = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
