import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaBanner from "@/components/CtaBanner";
import BenefitsSection from "@/components/BenefitsSection";
import FullWidthBanner from "@/components/FullWidthBanner";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <FeaturesSection />
      <CtaBanner />
      <BenefitsSection />
      <FullWidthBanner />
      <FinalCta />
      <Footer />
    </>
  );
}
