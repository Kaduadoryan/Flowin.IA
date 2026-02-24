import { Check, Zap } from "lucide-react";
import { FadeInSection } from "./FadeInSection";
import { useState, useEffect } from "react";

const features = [
  "Unlimited AI-powered automations",
  "Advanced analytics dashboard",
  "Priority 24/7 enterprise support",
  "Custom integrations & API access",
  "White-label deployment options",
  "Dedicated account manager",
  "SOC2 Type II compliance",
  "Lifetime updates included",
];

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 11, minutes: 47, seconds: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <p className="text-muted-foreground text-sm font-orbitron tracking-widest">OFFER EXPIRES IN:</p>
      <div className="flex gap-2">
        {[pad(time.hours), pad(time.minutes), pad(time.seconds)].map((val, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="glass neon-border rounded-lg w-12 h-12 flex items-center justify-center font-orbitron font-bold text-primary text-xl glow-text-primary">
              {val}
            </div>
            {i < 2 && <span className="text-primary font-bold text-xl">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export const OfferSection = () => {
  return (
    <section className="relative py-24 bg-[#0A0F2C]">
      <div className="neon-divider mb-20" />

      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <p className="text-primary font-orbitron text-sm tracking-[0.3em] uppercase mb-4 animate-neon-pulse">
            Limited Time Offer
          </p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Get </span>
            <span className="text-neon">Everything</span>
            <span className="text-foreground"> You Need</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="max-w-3xl mx-auto relative">
            {/* Outer glow */}
            <div
              className="absolute -inset-2 rounded-3xl opacity-40"
              style={{background: "linear-gradient(135deg, #00E5FF, #0094FF, #A855F7)", filter: "blur(20px)"}}
            />

            <div className="relative glass neon-border rounded-3xl p-10 text-center">
              <CountdownTimer />

              <div className="mb-2">
                <span className="text-muted-foreground line-through text-xl font-orbitron">$2,997</span>
              </div>
              <div className="font-orbitron text-7xl md:text-8xl font-black text-neon glow-text-primary mb-2">
                $997
              </div>
              <p className="text-muted-foreground mb-8 font-inter">One-time investment · Lifetime access</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-xl font-orbitron font-bold text-lg text-background bg-primary transition-all duration-300 hover:scale-105 animate-pulse-glow overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
                <Zap className="w-5 h-5 relative z-10" />
                <span className="relative z-10">CLAIM YOUR ACCESS NOW</span>
              </button>

              <p className="text-muted-foreground text-xs mt-4 font-inter">
                Secure checkout · Instant access · 30-day money back guarantee
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>

      <div className="neon-divider mt-20" />
    </section>
  );
};
