import constructionCharacter from "@/assets/Whisk_c6c6d189954fe7f84b74de8f306fff1ceg.png";
import BlueprintBuddy from "@/components/characters/BlueprintBuddy";
import StampStar from "@/components/characters/StampStar";
import ChecklistChampion from "@/components/characters/ChecklistChampion";
import HouseHappy from "@/components/characters/HouseHappy";

const SolutionOverview = () => {
  const stages = [
    { name: "Planning", Character: BlueprintBuddy, type: "component" as const },
    { name: "Permits", Character: StampStar, type: "component" as const },
    { name: "Construction", image: constructionCharacter, type: "image" as const },
    { name: "Quality Control", Character: ChecklistChampion, type: "component" as const },
    { name: "Completion", Character: HouseHappy, type: "component" as const },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            One guideline for your entire home-building journey.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From permits and approvals to contractor selection and quality checks—everything you need in one place.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-end gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {stages.map((stage) => (
            <div
              key={stage.name}
              className="flex flex-col items-center gap-4 flex-shrink-0"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center">
                {stage.type === "image" ? (
                  <img
                    src={stage.image}
                    alt={stage.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <stage.Character />
                )}
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">
                {stage.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
