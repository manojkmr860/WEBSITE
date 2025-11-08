import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center animate-fade-in">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Build your home without the stress, scams, or confusion.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Get a step-by-step guideline to navigate Tamil Nadu's construction
              process—from permits to move-in.
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 font-semibold w-full md:w-auto min-h-[48px]"
              >
                Get Your Free Guideline
              </Button>
              <p className="text-sm text-muted-foreground">
                No spam. Curated by experts.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 md:mt-0">
            <div className="w-full max-w-md md:max-w-none">
              <img
                src={heroImage}
                alt="Happy family in front of their new home under construction"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
