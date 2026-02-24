import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";


interface QuizStep6Props {
  onNext: () => void;
  onBack: () => void;
}

export const QuizStep6 = ({ onNext, onBack }: QuizStep6Props) => {

    const [muted, setMuted] = useState(true);
    const quizVideoRef = useRef<HTMLVideoElement>(null);
  
  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (quizVideoRef.current) quizVideoRef.current.muted = next;
  };


  return (
    <div className="quiz-card p-6 md:p-8 animate-slide-in">
      <p className="text-muted-foreground text-sm text-center leading-relaxed mb-5 font-inter">
        O vídeo abaixo está reduzido para carregar rápido, mas dentro do método você gera em
        qualidade alta.
      </p>

      {/* Large video placeholder (uses public/japinha-2.mp4) */}
      <div
        className="relative rounded-xl overflow-hidden mx-auto mb-5"
        style={{
          border: "1.5px solid hsl(43 80% 55% / 0.3)",
          boxShadow: "0 0 25px hsl(43 80% 55% / 0.08)",
        }}
      >
        <div style={{ height: 480, width: "100%" }}>
          <video
            src="/japinha-2.mp4"
            playsInline
            autoPlay
            loop
            className="w-full h-full object-cover"
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

      <p className="text-foreground text-sm text-center font-inter mb-7 font-medium">
        É como ter uma criadora de conteúdo profissional trabalhando pra você 24h por dia.
      </p>

      <div className="flex items-center justify-between">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
        <button onClick={onNext} className="btn-gold px-7 py-3 text-base font-inter">
          Próxima transformação
        </button>
      </div>
    </div>
  );
};
