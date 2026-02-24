import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface QuizStep9Props {
  onNext: () => void;
  onBack: () => void;
}

export const QuizStep9 = ({ onNext, onBack }: QuizStep9Props) => {
    const [muted, setMuted] = useState(true);
    const quizVideoRef = useRef<HTMLVideoElement>(null);
    
    const toggleMute = () => {
      const next = !muted;
      setMuted(next);
      if (quizVideoRef.current) quizVideoRef.current.muted = next;
    };



  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3 text-center">
        Aprenda a criar vídeos{" "}
        <span className="text-gold">virais</span>
      </h2>

      <p className="text-muted-foreground text-sm text-center leading-relaxed mb-7 font-inter">
        Vou te mostrar ferramentas gratuitas e pagas, além de disponibilizar prompts prontos para você aplicar.
      </p>

      {/* Two-panel layout */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {/* Left: influencer photo (galinha-1) */}
        <div
          className="rounded-xl overflow-hidden relative"
          style={{
            border: "1.5px solid hsl(43 80% 55% / 0.3)",
            boxShadow: "0 0 20px hsl(43 80% 55% / 0.08)",
          }}
        >
          <div style={{ height: 220 }}>
            <img src="/influencers/galinha-1.png" alt="galinha" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right: example video (galinha-2.mp4) */}
        <div
  className="rounded-xl overflow-hidden"
  style={{
    border: "1.5px solid hsl(43 80% 55% / 0.2)",
    background: "hsl(222 40% 10%)",
  }}
>
  <div className="w-full relative" style={{ height: 220 }}>
    <video
      src="/galinha-2.mp4"
      playsInline
      loop
      className="w-full h-full object-cover"
      autoPlay
      muted={muted}
    />

    <button
      type="button"
      onClick={toggleMute}
      className="absolute bottom-2 right-2 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-gold transition-colors"
      aria-label={muted ? "Ativar som" : "Mutar som"}
    >
      {muted ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  </div>
</div>
      </div>

      <div className="flex items-center justify-between">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
        <button onClick={onNext} className="btn-gold px-8 py-3 text-base font-inter">
          Vamos seguir
        </button>
      </div>
    </div>
  );
};
