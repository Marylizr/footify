import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ConceptSection from "@/components/ConceptSection";
import CtaBanner from "@/components/CtaBanner";
import FeaturesSection from "@/components/FeaturesSection";
import FullWidthBanner from "@/components/FullWidthBanner";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ConceptSection />
      <CtaBanner />
      <FeaturesSection />
      <FullWidthBanner />
      <GallerySection />
      <FinalCta />
      <Footer />
    </main>
  );
}
