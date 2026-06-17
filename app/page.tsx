import { Nav } from "@/components/Nav";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Shift } from "@/components/sections/Shift";
import { Method } from "@/components/sections/Method";
import { Products } from "@/components/sections/Products";
import { Authority } from "@/components/sections/Authority";
import { SocialProof } from "@/components/sections/SocialProof";
import { Qualification } from "@/components/sections/Qualification";
import { FinalCta } from "@/components/sections/FinalCta";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Shift />
        <Method />
        <Products />
        <Authority />
        <SocialProof />
        <Qualification />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
