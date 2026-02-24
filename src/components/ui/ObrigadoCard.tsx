import { useState } from "react";

interface ObrigadoCardProps {
  onSubmitEmail?: (email: string) => Promise<void> | void;
}

export default function ObrigadoCard({ onSubmitEmail }: ObrigadoCardProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const enviar = async () => {
    setMsg(null);

    if (!email.trim() || !email.includes("@")) {
      setMsg("Digite um e-mail válido.");
      return;
    }

    try {
      setLoading(true);
      await onSubmitEmail?.(email.trim());
      setMsg("✅ Recebemos seu e-mail! Vamos enviar o PDF em instantes.");
      setEmail("");
    } catch (e) {
      setMsg("❌ Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quiz-card p-8 md:p-10 animate-slide-in">
      {/* Headline */}
      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3 text-center">
        Obrigado pela sua compra! <span className="text-gold">🎉</span>
      </h2>

      <p className="text-foreground text-sm text-center font-inter font-semibold mb-6">
        Agora preencha seu e-mail para receber o PDF.
      </p>

      {/* Badge/logo (igual ao layout) */}
      <div className="flex justify-center mb-7">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            border: "2px solid hsl(43 80% 55% / 0.5)",
            boxShadow: "0 0 25px hsl(43 80% 55% / 0.2)",
          }}
        >
          <img
            src="/influencers/flowin.ia.png"
            alt="Flowin IA"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Box do e-mail (mesmo estilo do bloco “incluído”) */}
      <div
        className="rounded-xl p-5 mb-5"
        style={{
          background: "hsl(222 45% 13%)",
          border: "1px solid hsl(43 80% 55% / 0.25)",
        }}
      >
        <p className="text-center font-inter text-sm font-semibold text-gold mb-4">
          Enviar PDF para:
        </p>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seuemail@dominio.com"
          className="w-full rounded-xl px-4 py-3 font-inter text-sm bg-transparent text-foreground outline-none"
          style={{
            border: "1px solid hsl(43 80% 55% / 0.25)",
          }}
        />
      </div>

      {/* Botão */}
      <button
        onClick={enviar}
        disabled={loading}
        className="w-full py-4 rounded-xl text-base font-inter font-bold mb-3 transition-all duration-200"
        style={{
          background: "hsl(222 40% 20%)",
          border: "1.5px solid hsl(43 80% 55% / 0.4)",
          color: "hsl(210 40% 90%)",
          opacity: loading ? 0.7 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
        onMouseEnter={(e) => {
          if (loading) return;
          (e.currentTarget as HTMLButtonElement).style.background =
            "hsl(222 40% 24%)";
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "hsl(43 80% 55% / 0.7)";
        }}
        onMouseLeave={(e) => {
          if (loading) return;
          (e.currentTarget as HTMLButtonElement).style.background =
            "hsl(222 40% 20%)";
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "hsl(43 80% 55% / 0.4)";
        }}
      >
        {loading ? "Enviando..." : "Enviar PDF"}
      </button>

      {/* Mensagem */}
      {msg && (
        <div
          className="w-full py-3 rounded-xl text-center"
          style={{
            background: "hsl(222 45% 13%)",
            border: "1px solid hsl(43 80% 55% / 0.25)",
          }}
        >
          <p className="text-sm font-inter text-foreground">{msg}</p>
        </div>
      )}
    </div>
  );
}