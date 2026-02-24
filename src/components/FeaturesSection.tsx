import { Zap, Brain, Shield, BarChart3, Globe, Layers } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Engine",
    description: "Next-generation artificial intelligence that learns and adapts to your business needs in real time.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep data insights with predictive modeling and automated reporting across all channels.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-millisecond response times powered by distributed cloud infrastructure at global scale.",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "End-to-end encryption, zero-knowledge architecture, and SOC2 Type II compliance built in.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deploy across 50+ regions instantly. Your users get blazing fast access anywhere on Earth.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with 500+ tools and platforms via our enterprise API. Zero friction, full power.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-24 bg-[#050510] bg-grid">
      <div className="neon-divider mb-20" />

      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <p className="text-primary font-orbitron text-sm tracking-[0.3em] uppercase mb-4 animate-neon-pulse">
            Core Capabilities
          </p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon">Next-Level</span>{" "}
            <span className="text-foreground">Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Built for enterprises that refuse to compromise. Every feature engineered for maximum performance and reliability.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeInSection key={feature.title} delay={i * 100}>
              <div className="glass glass-hover rounded-xl p-8 h-full group cursor-pointer">
                <div className="mb-6 relative inline-block">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow: "0 0 20px hsl(190 100% 50% / 0.3)"}} />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <div className="neon-divider mt-20" />
    </section>
  );
};
