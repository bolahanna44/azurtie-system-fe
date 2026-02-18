import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Platforms } from "@/components/platforms";
import { GlobalReach } from "@/components/global-reach";
import { TrustedBy } from "@/components/trusted-by";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Platforms />
        <GlobalReach />
        <TrustedBy />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
