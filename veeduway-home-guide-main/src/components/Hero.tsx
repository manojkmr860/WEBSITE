import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Build your home without the stress, scams, or confusion.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Get a step-by-step guideline to navigate Tamil Nadu's construction 
              process—from permits to move-in.
            </p>

            <div className="space-y-4">
              <Button size="lg" className="text-lg px-8 py-6 font-semibold">
                Get Your Free Guideline
              </Button>
              <p className="text-sm text-muted-foreground">
                No spam. Curated by experts.
              </p>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Happy family in front of their new home under construction"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
