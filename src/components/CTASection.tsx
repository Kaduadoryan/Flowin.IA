import { Zap } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

export const CTASection = () => {
  return (
    <section className="relative py-32 bg-[#050510] overflow-hidden">
      {/* Background glow orbs */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{background: "radial-gradient(ellipse, #00E5FF 0%, #0094FF 40%, transparent 70%)"}}
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection className="text-center">
          <p className="text-primary font-orbitron text-sm tracking-[0.3em] uppercase mb-6 animate-neon-pulse">
            Ready to Transform?
          </p>
          <h2 className="font-orbitron text-5xl md:text-7xl font-black mb-6">
            <span className="text-foreground">Start Your </span>
            <br />
            <span className="text-neon">AI Journey</span>
            <span className="text-foreground"> Today</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Join 10,000+ industry leaders who already use our platform to dominate their market with cutting-edge AI technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl font-orbitron font-bold text-lg text-background bg-primary transition-all duration-300 hover:scale-105 animate-pulse-glow overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
              <Zap className="w-5 h-5 relative z-10" />
              <span className="relative z-10">GET INSTANT ACCESS</span>
            </button>
            <button className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-orbitron font-bold text-lg text-primary border border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all duration-300">
              SCHEDULE A DEMO
            </button>
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            No contracts · 30-day money-back · Instant access
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};
