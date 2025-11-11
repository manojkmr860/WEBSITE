import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SolutionOverview from "@/components/SolutionOverview";
import ChallengeCards from "@/components/ChallengeCards";
import ContentPreview from "@/components/ContentPreview";
import Testimonials from "@/components/Testimonials";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-veeduway-base text-veeduway-text">
      <Header />
      <Hero />
      <SolutionOverview />
      <ChallengeCards />
      <ContentPreview />
      <Testimonials />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
