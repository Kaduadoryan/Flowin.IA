import { useState } from "react";
import { QuizProgress } from "@/components/QuizProgress";
import { QuizStep1 } from "@/components/QuizStep1";
import { QuizStep2 } from "@/components/QuizStep2";
import { QuizStep3 } from "@/components/QuizStep3";
import { QuizStep4 } from "@/components/QuizStep4";
import { QuizStep5 } from "@/components/QuizStep5";
import { QuizStep6 } from "@/components/QuizStep6";
import { QuizStep7 } from "@/components/QuizStep7";
import { QuizStep8 } from "@/components/QuizStep8";
import { QuizStep9 } from "@/components/QuizStep9";
import { QuizStep10 } from "@/components/QuizStep10";
import { QuizStep11 } from "@/components/QuizStep11";
import { QuizStep12 } from "@/components/QuizStep12";
import { QuizStep13 } from "@/components/QuizStep13";

const TOTAL_STEPS = 13;

// Progress percentages per step as shown in screenshots
const STEP_PROGRESS: Record<number, number> = {
  1: 0,
  2: 10,
  3: 20,
  4: 30,
  5: 40,
  6: 50,
  7: 60,
  8: 70,
  9: 85,
  10: 85,
  11: 90,
  12: 100,
  13: 100,
};

const Index = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState<"male" | "female" | null>(null);

  const progress = STEP_PROGRESS[step] ?? 0;
  const isComplete = step >= 12;

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-navy flex flex-col">
      <QuizProgress progress={progress} step={step} total={TOTAL_STEPS} isComplete={isComplete} />

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          {step === 1 && (
            <QuizStep1
              onSelect={(g) => {
                setGender(g);
                next();
              }}
            />
          )}
          {step === 2 && <QuizStep2 onNext={next} onBack={back} />}
          {step === 3 && <QuizStep3 onNext={next} onBack={back} />}
          {step === 4 && <QuizStep4 onNext={next} onBack={back} />}
          {step === 5 && <QuizStep5 key="step5" onNext={next} onBack={back} />}
          {step === 6 && <QuizStep6 onNext={next} onBack={back} />}
          {step === 7 && <QuizStep7 onNext={next} onBack={back} />}
          {step === 8 && <QuizStep8 onNext={next} onBack={back} />}
          {step === 9 && <QuizStep9 onNext={next} onBack={back} />}
          {step === 10 && <QuizStep10 onNext={next} onBack={back} />}
          {step === 11 && <QuizStep11 onNext={next} onBack={back} />}
          {step === 12 && <QuizStep12 onNext={next} onBack={back} />}
          {step === 13 && <QuizStep13 onBack={back} gender={gender} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
