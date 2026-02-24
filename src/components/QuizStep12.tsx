interface QuizStep12Props {
  onNext: () => void;
  onBack: () => void;
}

export const QuizStep12 = ({ onNext, onBack }: QuizStep12Props) => {
  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      {/* Access unlocked banner */}
      <div
        className="rounded-xl px-6 py-5 mb-8 text-center"
        style={{
          background: "hsl(145 50% 12%)",
          border: "1.5px solid hsl(145 60% 40% / 0.5)",
          boxShadow: "0 0 20px hsl(145 60% 40% / 0.1)",
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden"
          style={{
            background: "hsl(145 50% 18%)",
            border: "2px solid hsl(145 60% 45%)",
          }}
        >
          <img src="/influencers/flowin.ia.png" alt="Flowin IA" className="w-full h-full object-cover" />
        </div>
        <p className="font-merriweather font-bold text-base" style={{ color: "hsl(145 60% 55%)" }}>
          Acesso liberado ao UGC EXPRESS IA!
        </p>
      </div>

      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-5 text-center">
        Seu treinamento estará disponível na{" "}
        <span className="text-gold">próxima página.</span>
      </h2>

      <p className="text-muted-foreground text-sm text-center leading-relaxed font-inter mb-8">
        Você vai aprender tudo com penas 10 modulos: criação das Influencers, prompts, vídeos
        realistas, UGC, anúncios, cenários, animaçãoes e voçê ainda ganha 2 agentes ja pronto para uso, basta apenas emcaminhar a imagem 
        para ele e dizer oque precisa.
      </p>

      <div className="flex justify-center mb-6">
        <button
          onClick={onNext}
          className="btn-gold px-10 py-3.5 text-lg font-inter font-bold animate-pulse-gold"
        >
          Acessar agora
        </button>
      </div>

      <div className="flex items-center">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
      </div>
    </div>
  );
};
