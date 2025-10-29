import { Answer, QuizResult, MasterType } from '@/types/quiz';
import { MASTERS, MASTER_ORDER } from '@/data/masters';

export function calculateQuizResult(answers: Answer[]): QuizResult {
  const scores: Record<MasterType, number> = {
    Prescience: 0,
    Legilimency: 0,
    Machination: 0,
    Equanimity: 0,
    Monomania: 0
  };

  // Sum all scores from answers
  answers.forEach(answer => {
    (Object.keys(answer.scores) as MasterType[]).forEach(masterType => {
      scores[masterType] += answer.scores[masterType];
    });
  });

  // Find the master with highest score
  let winningMaster: MasterType = 'Prescience';
  let highestScore = scores.Prescience;

  // Check remaining masters in order of dominance
  MASTER_ORDER.forEach(masterType => {
    if (scores[masterType] > highestScore) {
      highestScore = scores[masterType];
      winningMaster = masterType;
    }
  });

  return {
    master: MASTERS[winningMaster],
    scores
  };
}
