import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

const faqs = [
  {
    question: "What exactly is included in the package?",
    answer: "You get lifetime access to the entire platform including all AI features, analytics dashboard, API access, integrations, and all future updates. Plus dedicated onboarding support to get you started immediately.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Most clients report measurable ROI within the first 30 days. Some see significant improvements within the first week. Our AI adapts to your specific business context from day one.",
  },
  {
    question: "Is there a long-term contract required?",
    answer: "Absolutely not. This is a one-time investment for lifetime access. No monthly fees, no subscriptions, no hidden costs. You pay once and own it forever.",
  },
  {
    question: "What kind of support do I get?",
    answer: "You get priority 24/7 enterprise support via chat, email, and phone. Your dedicated account manager will be available for strategy calls and technical assistance throughout your journey.",
  },
  {
    question: "Can I integrate it with my existing tools?",
    answer: "Yes. We offer native integrations with 500+ platforms including Salesforce, HubSpot, Slack, Stripe, and more. Our enterprise API lets you build custom integrations with any system.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is paramount. We use military-grade AES-256 encryption, zero-knowledge architecture, and are SOC2 Type II compliant. Your data is never shared with third parties.",
  },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-[#0A0F2C]">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <p className="text-primary font-orbitron text-sm tracking-[0.3em] uppercase mb-4 animate-neon-pulse">
            FAQ
          </p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Common </span>
            <span className="text-neon">Questions</span>
          </h2>
        </FadeInSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <div
                className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
                  open === i
                    ? "border-primary/40"
                    : "border-transparent hover:border-primary/20"
                }`}
                style={open === i ? {boxShadow: "0 0 20px hsl(190 100% 50% / 0.1)"} : {}}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className={`font-orbitron text-base font-medium transition-colors duration-300 ${
                    open === i ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-6">
                    <div className="neon-divider mb-4" />
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};
