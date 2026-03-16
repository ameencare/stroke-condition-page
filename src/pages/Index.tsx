import ProgressBar from "@/components/ProgressBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import AboutStrokeSection from "@/components/AboutStrokeSection";
import PhysiotherapyRoleSection from "@/components/PhysiotherapyRoleSection";
import HomeRehabSection from "@/components/HomeRehabSection";
import RecoveryDurationSection from "@/components/RecoveryDurationSection";
import SignsSection from "@/components/SignsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      <WhatsAppButton />
      <HeroSection />
      <AboutStrokeSection />
      <PhysiotherapyRoleSection />
      <HomeRehabSection />
      <RecoveryDurationSection />
      <SignsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
