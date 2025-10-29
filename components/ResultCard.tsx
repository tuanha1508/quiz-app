import { QuizResult } from '@/types/quiz';

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  const { master, scores } = result;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="mb-6">
          <span className="text-4xl mb-4 block">🕯️</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Your Path Revealed
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6">
            {master.name}
          </h1>
        </div>

        <div className="bg-primary/5 rounded-lg p-6 mb-6 text-left">
          <p className="text-primary/80 text-lg leading-relaxed mb-4">
            {master.description}
          </p>

          <div className="space-y-3 border-t border-primary/10 pt-4">
            <div>
              <span className="font-semibold text-primary">Power: </span>
              <span className="text-primary/80">{master.power}</span>
            </div>
            <div>
              <span className="font-semibold text-primary">Punishment: </span>
              <span className="text-primary/80">{master.punishment}</span>
            </div>
            <div>
              <span className="font-semibold text-primary">Trait: </span>
              <span className="text-primary/80">{master.trait}</span>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 rounded-lg p-4 mb-6">
          <p className="text-primary font-semibold italic text-lg">
            "{master.motto}"
          </p>
        </div>

        <button
          onClick={onRestart}
          className="px-8 py-3 bg-primary text-white rounded-lg
                   hover:bg-primary/90 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-accent
                   font-semibold"
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}
