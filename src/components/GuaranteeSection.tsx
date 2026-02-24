import { Shield } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

export const GuaranteeSection = () => {
  return (
    <section className="relative py-24 bg-[#050510] bg-grid">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative inline-block mb-8 animate-pulse-glow">
              <div
                className="w-28 h-28 rounded-full bg-primary/10 border-2 border-primary/50 flex items-center justify-center mx-auto"
                style={{boxShadow: "0 0 30px hsl(190 100% 50% / 0.3), 0 0 60px hsl(190 100% 50% / 0.15)"}}
              >
                <Shield className="w-14 h-14 text-primary" />
              </div>
              <div className="absolute inset-0 rounded-full animate-ping bg-primary/10" style={{animationDuration: "3s"}} />
            </div>

            <div className="font-orbitron text-primary text-sm tracking-[0.3em] uppercase mb-4 animate-neon-pulse">
              Risk-Free Guarantee
            </div>

            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neon">30-Day</span>{" "}
              <span className="text-foreground">Money-Back</span>
            </h2>

            <div className="glass neon-border rounded-2xl p-8">
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                We're so confident in this platform that we offer a completely unconditional 30-day money-back guarantee. If you're not 100% satisfied for any reason, we'll refund every penny — no questions asked.
              </p>
              <p className="text-primary font-orbitron text-sm tracking-widest">
                YOUR SUCCESS IS OUR GUARANTEE
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
