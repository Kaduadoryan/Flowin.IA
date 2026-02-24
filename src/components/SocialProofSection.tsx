import { Star, Quote } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, NexaTech",
    avatar: "SC",
    rating: 5,
    text: "This platform completely transformed our operations. We saw a 340% ROI in the first quarter alone. The AI capabilities are unlike anything we've used before.",
    avatarColor: "from-primary to-secondary",
  },
  {
    name: "Marcus Reyes",
    role: "CTO, Quantum Labs",
    avatar: "MR",
    rating: 5,
    text: "Deploying took less than 48 hours and we were generating real insights immediately. The engineering quality is absolutely world-class.",
    avatarColor: "from-accent to-primary",
  },
  {
    name: "Alexandra Kim",
    role: "VP of Growth, Orion Capital",
    avatar: "AK",
    rating: 5,
    text: "We replaced 4 separate tools with this single platform. Our team's productivity increased 5x and costs dropped by 60%. Game-changing technology.",
    avatarColor: "from-secondary to-accent",
  },
];

const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "$2.4B", label: "Revenue Processed" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "340%", label: "Avg. ROI" },
];

export const SocialProofSection = () => {
  return (
    <section className="relative py-24 bg-[#050510] bg-grid">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="glass glass-hover rounded-xl p-6 text-center group">
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-neon mb-2 glow-text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="text-center mb-12">
          <p className="text-primary font-orbitron text-sm tracking-[0.3em] uppercase mb-4 animate-neon-pulse">
            Social Proof
          </p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Trusted by </span>
            <span className="text-neon">Industry Leaders</span>
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeInSection key={t.name} delay={i * 150}>
              <div className="glass glass-hover rounded-xl p-8 h-full flex flex-col group relative overflow-hidden">
                {/* Holographic shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{background: "linear-gradient(135deg, hsl(190 100% 50% / 0.03), hsl(271 91% 65% / 0.03))"}} />

                <Quote className="w-8 h-8 text-primary/40 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} ring-neon flex items-center justify-center font-orbitron font-bold text-sm text-background`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-orbitron text-sm font-bold text-foreground">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
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
