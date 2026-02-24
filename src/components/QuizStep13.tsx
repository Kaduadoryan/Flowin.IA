interface QuizStep13Props {
  onBack: () => void;
  gender: "male" | "female" | null;
}

const included = [
  "10 modulos ",
  "Criar sua Influencer de IA (gratuito e pago)",
  "Gerar vídeos profissionais com ela",
  "Criar vídeos de objetos animados",
  "Criar vídeos com mais de 8 segundos",
  "Criação de Prompts do zero",
  "Comunidade no discord",
  "Suporte",
  "PDF com passo a passo",
  "Ferramentas gratuitas",
];

export const QuizStep13 = ({ onBack }: QuizStep13Props) => {
  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      {/* Headline */}
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3 text-center">
        Acesso completo com <span className="text-gold">bônus por tempo limitado!</span>
      </h2>

      <p className="text-foreground text-sm text-center font-inter font-semibold mb-6">
        Flowin.IA Academy + Comunidade no discord + Suporte 
      </p>

      {/* Badge/logo */}
      <div className="flex justify-center mb-7">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            border: "2px solid hsl(43 80% 55% / 0.5)",
            boxShadow: "0 0 25px hsl(43 80% 55% / 0.2)",
          }}
        >
          <img src="/influencers/flowin.ia.png" alt="Flowin IA" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* What's included */}
      <div
        className="rounded-xl p-5 mb-5"
        style={{
          background: "hsl(222 45% 13%)",
          border: "1px solid hsl(43 80% 55% / 0.25)",
        }}
      >
        <p className="text-center font-inter text-sm font-semibold text-gold mb-4">
          O que está incluído:
        </p>
        <ul className="space-y-2.5">
          {included.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                <path d="M5 10l4 4 6-7" stroke="hsl(145 60% 50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-foreground font-inter text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price box */}
      <div
        className="rounded-xl p-5 mb-5 text-center"
        style={{
          background: "hsl(40 30% 12%)",
          border: "1.5px solid hsl(43 80% 55% / 0.4)",
          boxShadow: "0 0 20px hsl(43 80% 55% / 0.1)",
        }}
      >
        <p className="text-muted-foreground font-inter text-sm mb-1 line-through">
          De R$ 197,00
        </p>
        <p className="font-merriweather font-bold text-4xl text-gold mb-1">
          por 12x R$5,16
        </p>
        <p className="text-muted-foreground font-inter text-sm">
          ou R$49,90 à vista
        </p>
      </div>
    
      {/* CTA button */}
      <button
  onClick={() =>
    window.open(
      "https://pay.kiwify.com.br/TaZZbf5",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="w-full py-4 rounded-xl text-base font-inter font-bold mb-3 transition-all duration-200"
  style={{
    background: "hsl(222 40% 20%)",
    border: "1.5px solid hsl(43 80% 55% / 0.4)",
    color: "hsl(210 40% 90%)",
  }}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLButtonElement).style.background = "hsl(222 40% 24%)";
    (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(43 80% 55% / 0.7)";
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLButtonElement).style.background = "hsl(222 40% 20%)";
    (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(43 80% 55% / 0.4)";
  }}
>
  Desbloquear acesso ao Flowin.IA Academy
</button>

      {/* Guarantee */}
      <div
        className="w-full py-3 rounded-xl text-center mb-6"
        style={{
          background: "hsl(145 40% 12%)",
          border: "1px solid hsl(145 55% 40% / 0.4)",
        }}
      >
        <p className="text-sm font-inter" style={{ color: "hsl(145 60% 55%)" }}>
          ✓ Garantia de 7 dias para testar tudo sem risco
        </p>
      </div>

      <div className="flex items-center">
        <button onClick={onBack} className="btn-gold-outline px-5 py-2.5 text-sm font-inter flex items-center gap-1.5">
          <span>←</span> Voltar
        </button>
      </div>
    </div>
  );
};
