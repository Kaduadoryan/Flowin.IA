import { Zap } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-[#050510] border-t border-primary/10 py-12">
      <div className="neon-divider mb-12" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="font-orbitron font-bold text-lg text-foreground">
              <span className="text-neon">NEX</span>AI
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Support", "Contact"].map((item) => (
              <a key={item} href="#" className="font-inter text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>

          <p className="font-inter text-xs text-muted-foreground">
            © 2026 NEXAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
