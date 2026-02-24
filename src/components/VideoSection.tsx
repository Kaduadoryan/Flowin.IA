import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { FadeInSection } from "./FadeInSection";

export const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  };

  return (
    <section className="relative py-24 bg-[#0A0F2C]">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center mb-12">
          <p className="text-primary font-orbitron text-sm tracking-[0.3em] uppercase mb-4 animate-neon-pulse">
            See It In Action
          </p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Watch the </span>
            <span className="text-neon">Demo</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="relative max-w-4xl mx-auto">
            {/* Outer glow frame */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-60"
              style={{
                background: "linear-gradient(135deg, #00E5FF, #0094FF, #A855F7)",
                filter: "blur(8px)",
              }}
            />
            <div className="relative glass neon-border rounded-2xl overflow-hidden scan-line">
              {/* Animated border scan */}
              <div className="aspect-video bg-[#050510] flex items-center justify-center relative">
                {/* Vídeo */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/hero-video.mp4"
                  playsInline
                  muted={muted}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onClick={(e) => {
                    const v = e.currentTarget;
                    v.paused ? v.play() : v.pause();
                  }}
                />

                {/* Botão mutar – canto inferior direito */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-primary transition-colors"
                  aria-label={muted ? "Ativar som" : "Mutar som"}
                >
                  {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                {/* Overlay e botão play quando pausado */}
                {!playing && (
                  <>
                    <div className="absolute inset-0 bg-[#050510]/60" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        videoRef.current?.play();
                      }}
                      className="relative z-10 group"
                    >
                      <div
                        className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary/40 group-hover:scale-110 animate-pulse-glow"
                      >
                        <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                      </div>
                      <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" style={{ animationDuration: "2s" }} />
                    </button>
                    <p className="absolute bottom-6 font-orbitron text-sm text-muted-foreground tracking-widest z-10">
                      CLIQUE PARA ASSISTIR
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
