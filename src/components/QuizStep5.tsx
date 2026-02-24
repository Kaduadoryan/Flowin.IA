interface QuizStep5Props {
  onNext: () => void;
  onBack: () => void;
}


const photoVariants = [
  { label: "", image: "/influencers/japinha-1.png" },

];

export const QuizStep5 = ({ onNext, onBack }: QuizStep5Props) => {
  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3 text-center">
        Sua Influencer IA também pode{" "}
        <span className="text-gold">apresentar produtos reais.</span>
      </h2>

      <p className="text-muted-foreground text-sm text-center leading-relaxed mb-7 font-inter">
        Perfeito para quem vende online, faz UGC ou quer criar anúncios sem depender de
        modelos reais.
      </p>

      {/* Photo grid */}
      <div  className="mb-8"> 
        {photoVariants.map((v, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden relative"
            style={{
              border: i === 0 ? "2px solid hsl(43 80% 55% / 0.7)" : "1px solid hsl(43 80% 55% / 0.15)",
              boxShadow: i === 0 ? "0 0 20px hsl(43 80% 55% / 0.2)" : undefined,
            }}
          >
            <div className="w-full aspect-[3/4] relative">
              <img
                src={v.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span
                className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-semibold font-inter drop-shadow-md"
                style={{ color: "hsl(43 80% 70%)" }}
              >
                {v.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
        <button onClick={onNext} className="btn-gold px-7 py-3 text-base font-inter">
          Quero ver isso em vídeo
        </button>
      </div>
    </div>
  );
};
