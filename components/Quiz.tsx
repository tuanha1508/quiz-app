'use client';

import { useState } from 'react';
import { Answer, QuizResult } from '@/types/quiz';
import { QUESTIONS } from '@/data/questions';
import { calculateQuizResult } from '@/lib/quiz-calculator';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';

type QuizState = 'intro' | 'quiz' | 'result';

export default function Quiz() {
  const [state, setState] = useState<QuizState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleStart = () => {
    setState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const quizResult = calculateQuizResult(newAnswers);
      setResult(quizResult);
      setState('result');
    }
  };

  const handleRestart = () => {
    setState('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  if (state === 'intro') {
    return (
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Which Master of the Academy Are You?
          </h1>
          <p className="text-lg text-primary/70 mb-8">
            Discover your true nature through 10 revealing questions.
            Each choice shapes your destiny within the Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
          {[
            { name: 'Prescience', trait: 'Calculated & Visionary', emoji: '🔮' },
            { name: 'Legilimency', trait: 'Manipulative & Intuitive', emoji: '🧠' },
            { name: 'Machination', trait: 'Devious & Creative', emoji: '⚙️' },
            { name: 'Equanimity', trait: 'Stoic & Detached', emoji: '🌊' },
            { name: 'Monomania', trait: 'Obsessed & Relentless', emoji: '🔥' }
          ].map((master) => (
            <div
              key={master.name}
              className="bg-primary/5 rounded-lg p-4 border border-primary/10"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{master.emoji}</span>
                <div>
                  <h3 className="font-bold text-primary">{master.name}</h3>
                  <p className="text-sm text-primary/60">{master.trait}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold
                   hover:bg-primary/90 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-accent
                   shadow-lg hover:shadow-xl"
        >
          Begin Your Journey
        </button>
      </div>
    );
  }

  if (state === 'quiz') {
    return (
      <QuestionCard
        question={QUESTIONS[currentQuestionIndex]}
        onAnswer={handleAnswer}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={QUESTIONS.length}
      />
    );
  }

  if (state === 'result' && result) {
    return <ResultCard result={result} onRestart={handleRestart} />;
  }

  return null;
}
