import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const albert = { variable: "" };

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Consultoria Oficial Shopee | Processo Comercial e Previsibilidade — Zape",
    template: "%s | Zape Ecomm",
  },
  description:
    "Consultoria oficial Shopee para sellers que querem parar de depender de agência. Implantamos processo comercial, rotina e indicadores para escalar com previsibilidade.",
  keywords: [
    "consultoria Shopee",
    "consultoria oficial Shopee",
    "mentoria Shopee",
    "gestão de marketplace",
    "processo comercial e-commerce",
    "como escalar na Shopee",
    "previsibilidade de vendas",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Consultoria Oficial Shopee | Zape Ecomm",
    description:
      "Implantamos um processo comercial dentro da sua operação de e-commerce. Pare de depender de agência e escale com previsibilidade.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zape — Consultoria Oficial Shopee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria Oficial Shopee | Zape Ecomm",
    description:
      "Processo comercial, rotina e indicadores para escalar sua operação na Shopee com previsibilidade.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={albert.variable}>
      <body>
        {/* Microsoft Clarity — analytics de comportamento (heatmaps + session replay) */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x7dz1kssrf");`}
        </Script>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
