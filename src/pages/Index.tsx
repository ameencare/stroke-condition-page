import ProgressBar from "@/components/ProgressBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StrokeDefinitionSection from "@/components/StrokeDefinitionSection";
import AboutStrokeSection from "@/components/AboutStrokeSection";
import PhysiotherapyRoleSection from "@/components/PhysiotherapyRoleSection";
import HomeRehabSection from "@/components/HomeRehabSection";
import RecoveryDurationSection from "@/components/RecoveryDurationSection";
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
      <AboutStrokeSection />
      <StrokeDefinitionSection />
      <PhysiotherapyRoleSection />
      <HomeRehabSection />
      <RecoveryDurationSection />
      <FAQSection />
      <TrustSection />
      <CTASection />
      
    </div>
  );
};

export default Index;
