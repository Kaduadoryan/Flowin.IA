import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface QuizStep4Props {
  onNext: () => void;
  onBack: () => void;
}


export const QuizStep4 = ({ onNext, onBack }: QuizStep4Props) => {
    const [muted, setMuted] = useState(true);
    const quizVideoRef = useRef<HTMLVideoElement>(null);
  
  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (quizVideoRef.current) quizVideoRef.current.muted = next;
  };

  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-6 text-center">
        O nível de realismo é tão alto que o resultado se confunde com uma{" "}
        <span className="text-gold">fotografia profissional.</span>
      </h2>

      {/* Main photo placeholder */}
      <div className="relative mx-auto mb-8" style={{ maxWidth: 280 }}>
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid hsl(43 80% 55% / 0.4)",
            boxShadow: "0 0 30px hsl(43 80% 55% / 0.12)",
          }}
        >
          <div className="w-full relative bg-[hsl(215_20%_16%)]" style={{ height: 360 }}>
            <video
              ref={quizVideoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="/quiz4-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              muted={muted}
            />
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-2 right-2 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-gold transition-colors"
              aria-label={muted ? "Ativar som" : "Mutar som"}
            >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          </div>
        </div>

        {/* Detail callout top-right */}
        <div
          className="absolute -top-4 -right-4 w-20 h-14 rounded-xl overflow-hidden flex items-center justify-center"
          style={{
            border: "1.5px solid hsl(43 80% 55% / 0.5)",
            boxShadow: "0 0 15px hsl(43 80% 55% / 0.2)",
            background: "hsl(20 25% 22%)",
          }}
        >
          <span className="text-[9px] text-muted-foreground font-inter text-center px-1">detalhe facial</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
        <button onClick={onNext} className="btn-gold px-7 py-3 text-base font-inter animate-pulse-gold">
          Impressionante… continuar
        </button>
      </div>
    </div>
  );
};
