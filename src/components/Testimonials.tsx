import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Shankar",
      location: "Chennai",
      quote: "VeeduWay's 7-step roadmap made our construction journey stress-free. Every legal document and approval was clearly explained. We felt confident at every stage!",
      initials: "PS"
    },
    {
      name: "Rajesh Kumar",
      location: "Coimbatore",
      quote: "The budget templates were incredibly helpful. We saved over ₹3 lakhs by following their PMAY subsidy guidance and contingency planning strategies.",
      initials: "RK"
    },
    {
      name: "Anitha Venkat",
      location: "Madurai",
      quote: "Finding the right architect was always confusing. VeeduWay's contractor selection guide and contract templates gave us peace of mind throughout the build.",
      initials: "AV"
    }
  ];

  return (
    <section className="bg-[#F5F1E8] pt-0 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Hear from Our Happy Homeowners
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Real stories from customers who built their dream home with VeeduWay's guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center mb-4 border-2 border-gray-200">
                  <span className="text-xl font-bold text-gray-700">
                    {testimonial.initials}
                  </span>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic text-center leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <h3 className="font-semibold text-gray-900 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
