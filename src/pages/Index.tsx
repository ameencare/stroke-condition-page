import ProgressBar from "@/components/ProgressBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StrokeDefinitionSection from "@/components/StrokeDefinitionSection";
import PhysiotherapyRoleSection from "@/components/PhysiotherapyRoleSection";
import HomeRehabSection from "@/components/HomeRehabSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      <WhatsAppButton />
      <Navbar />
      <HeroSection />
      <StrokeDefinitionSection />
      <PhysiotherapyRoleSection />
      <HomeRehabSection />
      <FAQSection />
      <TrustSection />
      <CTASection />
    </div>
  );
};

export default Index;
