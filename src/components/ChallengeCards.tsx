import { ArrowRight } from 'lucide-react';

const ChallengeCards = () => {
  const challenges = [
    {
      icon: "/Whisk_2903ab939908453b0004bb2ed261f845dr.jpeg",
      alt: "Permits and approvals",
      text: "Confused about permits and approvals?"
    },
    {
      icon: "/Whisk_cfcd3522617e1149a6d4cecc1f54151ddr.jpeg",
      alt: "Budget planning",
      text: "Worried about budget overruns?"
    },
    {
      icon: "/Whisk_af542c0bab616ee953943dd9073a75aaeg.png",
      alt: "Contractor trust",
      text: "Don't know which contractors to trust?"
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-600 mb-4">
            Find What You Need
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
            What construction challenge are you facing?
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-full shadow-md hover:shadow-lg p-6 md:p-8 flex items-center justify-between gap-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <img
                src={challenge.icon}
                alt={challenge.alt}
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex-shrink-0"
              />
              <span className="flex-1 text-lg md:text-xl font-semibold text-gray-800">
                {challenge.text}
              </span>
              <ArrowRight className="text-[#0074D9] flex-shrink-0" size={24} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeCards;
