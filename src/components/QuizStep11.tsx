interface QuizStep11Props {
  onNext: () => void;
  onBack: () => void;
}

export const QuizStep11 = ({ onNext, onBack }: QuizStep11Props) => {
  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-4 text-center">
        E se eu te mostrasse todo o processo{" "}
        <span className="text-gold">passo a passo</span>, mesmo que você nunca
        tenha usado IA?
      </h2>

      <p className="text-muted-foreground text-sm text-center font-inter mb-10">
        Incluindo ferramentas gratuitas para você começar ainda hoje.
      </p>

      <div className="flex gap-3 justify-center mb-8">
        <button
          onClick={onNext}
          className="btn-gold px-6 py-3 text-base font-inter flex-1 max-w-[220px]"
        >
          Sim, eu quero aprender isso
        </button>
        <button
          onClick={onNext}
          className="btn-gold-outline px-6 py-3 text-base font-inter flex-1 max-w-[140px]"
        >
          Agora não
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
