interface QuizStep8Props {
  onNext: () => void;
  onBack: () => void;
}

export const QuizStep8 = ({ onNext, onBack }: QuizStep8Props) => {
  return (
    <div className="quiz-card p-6 md:p-8 animate-slide-in">
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-6 text-center">
        Crie várias cenas, troque looks e{" "}
        <span className="text-gold">transforme tudo em vídeo.</span>
      </h2>

      {/* Large vertical video (public/modelo-1.mp4) */}
      <div
        className="relative rounded-2xl overflow-hidden mx-auto mb-5"
        style={{
          maxWidth: 340,
          border: "1.5px solid hsl(43 80% 55% / 0.35)",
          boxShadow: "0 0 30px hsl(43 80% 55% / 0.1)",
        }}
      >
        <div style={{ height: 460, width: "100%" }}>
          <video
            src="/modelo-1.mp4"
            playsInline
            muted
            autoPlay
            loop
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="text-muted-foreground text-sm text-center font-inter mb-6">
        
      </p>

      <div className="flex items-center justify-between">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
        <button onClick={onNext} className="btn-gold px-8 py-3 text-base font-inter">
          Quero ver
        </button>
      </div>
    </div>
  );
};
