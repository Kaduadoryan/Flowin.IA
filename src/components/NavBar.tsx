import { Zap } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <span className="font-orbitron font-bold text-lg text-foreground">
            <span className="text-neon">NEX</span>AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "Demo", "Proof", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-orbitron text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-orbitron font-bold text-xs text-background bg-primary hover:scale-105 transition-all duration-200 overflow-hidden"
          style={{boxShadow: "0 0 15px hsl(190 100% 50% / 0.4)"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
          <span className="relative z-10 tracking-widest">GET ACCESS</span>
        </button>
      </div>
    </nav>
  );
};
