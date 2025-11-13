import { Answer, QuizResult, MasterType } from '@/types/quiz';
import { MASTERS, MASTER_ORDER } from '@/data/masters';

export function calculateQuizResult(answers: Answer[]): QuizResult {
  const scores: Record<MasterType, number> = {
    Machination: 0,
    Monomania: 0,
    Legilimency: 0,
    Prescience: 0,
    Sangfroid: 0
  };

  // Sum all scores from answers
  answers.forEach(answer => {
    (Object.keys(answer.scores) as MasterType[]).forEach(masterType => {
      scores[masterType] += answer.scores[masterType];
    });
  });

  // Find the master with highest score
  // Tie-breaker priority: Sangfroid > Prescience > Legilimency > Monomania > Machination
  let winningMaster: MasterType = 'Sangfroid';
  let highestScore = -1;

  // Check masters in reverse order of priority (lowest priority first)
  // This ensures that if there's a tie, the higher priority master wins
  [...MASTER_ORDER].reverse().forEach(masterType => {
    if (scores[masterType] >= highestScore) {
      highestScore = scores[masterType];
      winningMaster = masterType;
    }
  });

  return {
    master: MASTERS[winningMaster],
    scores
  };
}
