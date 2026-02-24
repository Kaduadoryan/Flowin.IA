import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface QuizStep1Props {
  onSelect: (gender: "male" | "female") => void;
}

export const QuizStep1 = ({ onSelect }: QuizStep1Props) => {
  const [muted, setMuted] = useState(true);
  const quizVideoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (quizVideoRef.current) quizVideoRef.current.muted = next;
  };

  return (
    <div className="quiz-card p-8 md:p-10 animate-fade-up text-center">
      {/* Logo badge */}
      <div className="flex justify-center mb-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gold/40 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(222 48% 14%), hsl(222 48% 9%))",
            boxShadow: "0 0 20px hsl(43 80% 55% / 0.2)",
          }}
        >
          <img src="/influencers/flowin.ia.png" alt="Flowin IA" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Headline */}
      <h1 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-6">
        Existe uma nova maneira de criar seus conteúdos e escalar seus produtos{" "}
        <span className="text-gold">sem aparecer.</span>
      </h1>

      {/* Vídeo em loop */}
      <div
        className="relative rounded-xl overflow-hidden mb-6 mx-auto"
        style={{
          maxWidth: 320,
          border: "1.5px solid hsl(43 80% 55% / 0.3)",
          boxShadow: "0 0 30px hsl(43 80% 55% / 0.1)",
        }}
      >
        <div className="w-full aspect-[9/16] relative bg-[#0a0f1a]">
          <video
            ref={quizVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero-video.mp4"
            autoPlay
            loop
            muted={muted}
            playsInline
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

      {/* Subtext */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-inter max-w-sm mx-auto">
        Aprenda a criar modelos de IA ultra-realistas com 100% de consistência,
        escale seus conteúdos, fortaleça sua marca e venda todos os dias
      </p>

      {/* CTA label */}
      <p className="text-foreground text-xs font-semibold tracking-widest uppercase mb-4 font-inter">
        ESCOLHA O BOTÃO PARA CONTINUAR
      </p>

      {/* Gender buttons */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => onSelect("male")}
          className="btn-gold px-8 py-3 text-base font-inter flex-1 max-w-[160px]"
        >
          Sou homem
        </button>
        <button
          onClick={() => onSelect("female")}
          className="btn-gold px-8 py-3 text-base font-inter flex-1 max-w-[160px]"
        >
          Sou mulher
        </button>
      </div>
    </div>
  );
};
