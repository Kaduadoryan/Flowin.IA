import { Zap, ArrowRight, Users, TrendingUp, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [muted, setMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (heroVideoRef.current) heroVideoRef.current.muted = next;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#050510]/80" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-float"
        style={{ background: "radial-gradient(ellipse, hsl(190 100% 50% / 0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-float"
        style={{ background: "radial-gradient(ellipse, hsl(271 91% 65% / 0.1) 0%, transparent 70%)", animationDelay: "2s" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Vídeo inicial */}
        <div className="relative max-w-2xl mx-auto mb-10 animate-fade-up rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
          <video
            ref={heroVideoRef}
            className="w-full aspect-video object-cover"
            src="/hero-video.mp4"
            autoPlay
            loop
            muted={muted}
            playsInline
          >
            Seu navegador não suporta vídeos.
          </video>
          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
            aria-label={muted ? "Ativar som" : "Mutar som"}
          >
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass neon-border rounded-full px-5 py-2.5 mb-8 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-primary animate-neon-pulse" />
          <span className="font-orbitron text-xs tracking-[0.2em] text-primary uppercase">
            Next-Generation AI Platform · 2026
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-neon">Dominate</span>
          <br />
          <span className="text-foreground">Your Market</span>
          <br />
          <span className="text-neon">With AI</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 font-inter animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Existe uma nova maneira de criar seus conteúdos e escalar seus produtos sem aparecer.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl font-orbitron font-bold text-xl text-background bg-primary transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto justify-center"
            style={{ boxShadow: "0 0 30px hsl(190 100% 50% / 0.5), 0 0 80px hsl(190 100% 50% / 0.2)" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
            <Zap className="w-6 h-6 relative z-10" />
            <span className="relative z-10">GET INSTANT ACCESS</span>
          </button>

          <button className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl font-orbitron font-bold text-xl text-primary border border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto justify-center">
            WATCH DEMO
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Social proof mini-bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-orbitron text-sm text-muted-foreground">
              <span className="text-foreground font-bold">10,000+</span> active users
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-orbitron text-sm text-muted-foreground">
              <span className="text-foreground font-bold">340%</span> avg. ROI
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["SC", "MR", "AK"].map((init, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full ring-neon flex items-center justify-center font-orbitron text-xs font-bold text-background bg-gradient-to-br from-primary to-secondary"
                  style={{ zIndex: 3 - i }}
                >
                  {init}
                </div>
              ))}
            </div>
            <span className="font-orbitron text-sm text-muted-foreground ml-2">
              <span className="text-foreground font-bold">Trusted</span> by leaders
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none" />
    </section>
  );
};
