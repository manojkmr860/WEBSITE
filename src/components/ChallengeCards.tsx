import { useState, useEffect } from 'react';
import { FileCheck, ClipboardCheck, Calculator, Users, ShieldCheck, BadgeCheck, ArrowRight, X, Loader2, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';

interface Challenge {
  id: string;
  icon: React.ElementType;
  color: string;
  text: string;
  name: string;
}

const ChallengeCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const challenges: Challenge[] = [
    {
      id: 'land_legal',
      icon: FileCheck,
      color: '#0074D9',
      text: 'Confused about land verification and legal checks?',
      name: 'Land & Legal'
    },
    {
      id: 'permits_approvals',
      icon: ClipboardCheck,
      color: '#EA580C',
      text: 'Struggling with permits and government approvals?',
      name: 'Permits & Approvals'
    },
    {
      id: 'budget_financing',
      icon: Calculator,
      color: '#16A34A',
      text: 'Worried about budget planning and cost overruns?',
      name: 'Budget & Financing'
    },
    {
      id: 'contractor_selection',
      icon: Users,
      color: '#9333EA',
      text: "Don't know which contractors and professionals to trust?",
      name: 'Contractor Selection'
    },
    {
      id: 'construction_quality',
      icon: ShieldCheck,
      color: '#DC2626',
      text: 'Concerned about construction quality and safety?',
      name: 'Construction Quality'
    },
    {
      id: 'final_approvals',
      icon: BadgeCheck,
      color: '#0891B2',
      text: 'Need help with occupancy certificate and handover?',
      name: 'Final Approvals & Handover'
    }
  ];

  const handleCardClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setIsModalOpen(true);
    setShowSuccessMessage(false);
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    setSubmitError(null);
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        challenge_id: selectedChallenge?.id || '',
        challenge_name: selectedChallenge?.name || '',
      };

      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (dbError) {
        console.error('Error saving submission to database:', dbError);
      }

      const web3FormsPayload = {
        access_key: 'bc0256e5-2b39-4ce9-840b-b87eb29a99b5',
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        challenge: selectedChallenge?.name || 'Not specified',
        subject: 'New VeeduWay Guideline Download Request',
        from_name: 'VeeduWay',
        replyto: formData.email.trim(),
        message: `Hi ${formData.name.trim()},

Thank you for requesting our comprehensive Home Construction Guideline for Tamil Nadu!

📥 DOWNLOAD YOUR GUIDELINE HERE:
https://drive.google.com/uc?export=download&id=1rfUZWEGZyFXMgxD74NatntGSQGIZC6UG

WHAT'S INSIDE:
✓ Land verification & legal checklist
✓ Complete permit application process
✓ Budget planning templates
✓ Contractor selection guide
✓ Quality control measures
✓ Occupancy certificate requirements
✓ Post-construction maintenance tips

We've designed this guideline specifically for first-time homeowners in Tamil Nadu to navigate the construction process with confidence.

HAVE QUESTIONS?
Reply to this email anytime - we're here to help!

Best regards,
The VeeduWay Team

---
Build your home without the stress, scams, or confusion.`
      };

      console.log('Submitting to Web3Forms:', web3FormsPayload);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(web3FormsPayload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Email submission failed');
      }

      setShowSuccessMessage(true);

      setTimeout(() => {
        setIsModalOpen(false);
        setTimeout(() => {
          setShowSuccessMessage(false);
          setFormData({ name: '', email: '', phone: '' });
        }, 300);
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Failed to submit your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
      setSubmitError(null);
    }, 300);
  };

  return (
    <>
      <section className="bg-orange-50">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide text-gray-600 mb-4">
              Find What You Need
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
              What construction challenge are you facing?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {challenges.map((challenge) => {
              const IconComponent = challenge.icon;
              return (
                <div
                  key={challenge.id}
                  onClick={() => handleCardClick(challenge)}
                  className="bg-white rounded-full shadow-md hover:shadow-lg p-6 md:p-8 flex items-center justify-between gap-4 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${challenge.color}15` }}
                    >
                      <IconComponent
                        size={24}
                        style={{ color: challenge.color }}
                      />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-gray-800">
                      {challenge.text}
                    </span>
                  </div>
                  <ArrowRight className="text-gray-400 flex-shrink-0" size={20} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-md">
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>

          {!showSuccessMessage ? (
            <div className="py-6">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Get Your Free Construction Guideline
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Download our comprehensive 7-step roadmap for building your home in Tamil Nadu
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onBlur={validateForm}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onBlur={validateForm}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({ ...formData, phone: value });
                    }}
                    onBlur={validateForm}
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0074D9] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Submitting...
                    </>
                  ) : (
                    'Get Your Free Guideline'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center">
              <div className="mb-4 flex justify-center">
                <CheckCircle2 className="text-green-500" size={64} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Success!</h3>
              <h4 className="text-xl font-semibold mb-4">Check Your Email</h4>
              <p className="text-gray-600 mb-2">
                We've sent your free guideline to
              </p>
              <p className="font-semibold text-[#0074D9] mb-6">{formData.email}</p>
              <p className="text-sm text-gray-500 mb-6">
                📧 Didn't receive it? Check spam folder or contact us.
              </p>
              <button
                onClick={closeModal}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg transition"
              >
                Close
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChallengeCards;
