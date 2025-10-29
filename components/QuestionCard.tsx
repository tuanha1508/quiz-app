import { Question, Answer } from '@/types/quiz';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuestionCard({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-primary/60">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-6 rounded-full transition-colors ${
                  i < currentQuestion ? 'bg-accent' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer)}
            className="w-full p-4 text-left rounded-lg border-2 border-primary/20
                     hover:border-primary hover:bg-primary/5
                     transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-accent
                     active:scale-[0.98]"
          >
            <span className="text-primary font-medium">{answer.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
