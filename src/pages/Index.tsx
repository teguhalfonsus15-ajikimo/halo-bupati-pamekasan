import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ImpactSection from "@/components/ImpactSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import DemoSection from "@/components/DemoSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <WhyChooseSection />
      <DemoSection />
      <CTASection />
    </div>
  );
};

export default Index;
