interface QuizStep2Props {
  onNext: () => void;
  onBack: () => void;
}

const profileCards = [
  {
    handle: "emilypellegrini",
    followers: "133",
    posts: "550 mil",
    desc: "Criadora de conteúdo digital",
    color: "hsl(340 70% 65%)",
    image: "/influencers/influencer-1.png",
  },
  {
    handle: "florapellegrini",
    followers: "112",
    posts: "231 mil",
    desc: "Criadora de conteúdo digital",
    color: "hsl(200 70% 65%)",
    image: "/influencers/influencer-2.png",
  },
  {
    handle: "Eva Delores",
    followers: "107",
    posts: "338 mil",
    posts2: "41",
    desc: "I dance what i can explain 🎵",
    color: "hsl(43 80% 65%)",
    image: "/influencers/influencer-3.png",
  },
];

export const QuizStep2 = ({ onNext, onBack }: QuizStep2Props) => {
  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      {/* Headline */}
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-8 text-center">
        Com apenas alguns cliques, eu vou te mostrar tudo o que já é possível
        fazer com a nova tendência que está explodindo em 2026 lá fora: as{" "}
        <span className="text-gold">influencers de IA.</span>
      </h2>

      {/* Profile cards row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {profileCards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden"
            style={{
              background: "hsl(222 45% 14%)",
              border: "1px solid hsl(43 80% 55% / 0.2)",
            }}
          >
            {/* Profile header */}
            <div className="p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0"
                  style={{ background: card.color }}
                />
                <span className="text-[9px] font-semibold text-foreground truncate font-inter">
                  {card.handle}
                </span>
              </div>
              <div className="flex gap-2 text-[8px] text-muted-foreground font-inter mb-1">
                <span><strong className="text-foreground">{card.followers}</strong> posts</span>
                <span><strong className="text-foreground">{card.followers}</strong> seg</span>
              </div>
              <p className="text-[8px] text-muted-foreground font-inter leading-tight">{card.desc}</p>
            </div>

            {/* Imagem em todo o quadro */}
            <div className="aspect-[3/4] w-full relative overflow-hidden">
              <img
                src={card.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Subtext */}
      <p className="text-muted-foreground text-sm text-center leading-relaxed mb-8 font-inter">
        Poucos cliques. E você já vai estar criando influencers de IA que são tendência em 2026.
      </p>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5"
        >
          <span>←</span> Voltar
        </button>
        <button
          onClick={onNext}
          className="btn-gold px-8 py-3 text-base font-inter"
        >
          Avançar
        </button>
      </div>
    </div>
  );
};
