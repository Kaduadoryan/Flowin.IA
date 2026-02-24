interface QuizProgressProps {
  progress: number;
  step: number;
  total: number;
  isComplete?: boolean;
}

export const QuizProgress = ({ progress, isComplete }: QuizProgressProps) => {
  return (
    <div className="w-full bg-navy-card border-b border-navy-border sticky top-0 z-10">
      <div className="max-w-xl mx-auto px-4 py-3">
        {isComplete ? (
          <p className="text-center text-xs font-semibold font-inter" style={{ color: "hsl(43 80% 55%)" }}>
            ✦ Completo!
          </p>
        ) : (
          <p className="text-center text-xs font-inter text-muted-foreground mb-2">
            <span className="text-gold font-semibold">{progress}%</span> Concluído
          </p>
        )}
        <div className="progress-track h-2 w-full">
          <div className="progress-fill h-2" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};
