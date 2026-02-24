interface QuizStep10Props {
  onNext: () => void;
  onBack: () => void;
}

const options = [
  "1. Divulgar meu negócio usando uma Influencer de IA",
  "2. Criar conteúdos com produtos da minha loja",
  "3. Fazer UGC e vender vídeos para empresas",
];

export const QuizStep10 = ({ onNext, onBack }: QuizStep10Props) => {
  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-10 text-center">
        Qual é a <span className="text-gold">principal utilidade</span> que você
        quer para sua IA?
      </h2>

      <div className="flex flex-col gap-4 mb-8">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={onNext}
            className="w-full text-left px-5 py-4 rounded-xl font-inter text-sm text-foreground transition-all duration-200"
            style={{
              background: "hsl(222 40% 14%)",
              border: "1px solid hsl(43 80% 55% / 0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(43 80% 55% / 0.7)";
              (e.currentTarget as HTMLButtonElement).style.background = "hsl(222 40% 17%)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(43 80% 55% / 0.25)";
              (e.currentTarget as HTMLButtonElement).style.background = "hsl(222 40% 14%)";
            }}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex items-center">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
      </div>
    </div>
  );
};
