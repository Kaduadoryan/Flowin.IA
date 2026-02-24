interface QuizStep7Props {
  onNext: () => void;
  onBack: () => void;
}

const fashionLooks = [
  { label: "", bg: "hsl(220 20% 20%)", src: "/influencers/japinha-3.png" },
  { label: "", bg: "hsl(140 20% 22%)", src: "/influencers/japinha-4.png" },
  { label: "", bg: "hsl(35 20% 25%)", src: "/influencers/japinha-5.png" },
];

export const QuizStep7 = ({ onNext, onBack }: QuizStep7Props) => {
  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-8 text-center">
        Se você vende roupas, pode montar{" "}
        <span className="text-gold">coleções inteiras</span> com a sua
        Influencer IA.
      </h2>

      {/* Fashion grid */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {fashionLooks.map((look, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden relative"
            style={{
              border: i === 1 ? "2px solid hsl(43 80% 55% / 0.7)" : "1px solid hsl(43 80% 55% / 0.2)",
              boxShadow: i === 1 ? "0 0 20px hsl(43 80% 55% / 0.2)" : undefined,
            }}
          >
            <div
              className="w-full flex flex-col items-center justify-end pb-3 relative"
              style={{
                height: 220,
                background: look.src ? `url(${look.src}) center/cover no-repeat` : look.bg,
              }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <span className="text-[9px] font-inter opacity-90 z-10 mb-2" style={{ color: "hsl(43 80% 70%)" }}>
                {look.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
        <button onClick={onNext} className="btn-gold px-8 py-3 text-base font-inter">
          Continuar
        </button>
      </div>
    </div>
  );
};
