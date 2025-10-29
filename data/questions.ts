import { Question } from '@/types/quiz';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'How do you approach a new challenge?',
    answers: [
      { text: 'I analyze every angle before making my move', scores: { Prescience: 2, Legilimency: 0, Machination: 1, Equanimity: 1, Monomania: 0 } },
      { text: 'I read the room and use others\' reactions to my advantage', scores: { Prescience: 0, Legilimency: 2, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'I jump in headfirst and adapt as I go', scores: { Prescience: 0, Legilimency: 0, Machination: 2, Equanimity: 0, Monomania: 1 } },
      { text: 'I stay calm — emotions cloud judgment', scores: { Prescience: 1, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'I throw myself into it completely, no matter the cost', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 2,
    question: 'What drives you the most?',
    answers: [
      { text: 'Control over outcome', scores: { Prescience: 2, Legilimency: 0, Machination: 1, Equanimity: 1, Monomania: 0 } },
      { text: 'Understanding others\' motives', scores: { Prescience: 0, Legilimency: 2, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'The thrill of outsmarting chaos', scores: { Prescience: 0, Legilimency: 0, Machination: 2, Equanimity: 0, Monomania: 1 } },
      { text: 'Inner peace and detachment', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'The hunger to win and prove myself', scores: { Prescience: 0, Legilimency: 0, Machination: 1, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 3,
    question: 'In a team, your role usually is:',
    answers: [
      { text: 'The planner who sets every move', scores: { Prescience: 2, Legilimency: 0, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'The one who influences everyone subtly', scores: { Prescience: 0, Legilimency: 2, Machination: 0, Equanimity: 0, Monomania: 0 } },
      { text: 'The mastermind connecting all the chaos', scores: { Prescience: 1, Legilimency: 1, Machination: 2, Equanimity: 0, Monomania: 0 } },
      { text: 'The calm stabilizer keeping emotions in check', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'The motivator who never gives up', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 4,
    question: 'Your greatest weakness is:',
    answers: [
      { text: 'Overthinking', scores: { Prescience: 2, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 0 } },
      { text: 'Manipulating people too much', scores: { Prescience: 0, Legilimency: 2, Machination: 0, Equanimity: 0, Monomania: 0 } },
      { text: 'Losing control in the game I designed', scores: { Prescience: 0, Legilimency: 0, Machination: 2, Equanimity: 0, Monomania: 1 } },
      { text: 'Feeling detached from life', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'Pushing myself past the breaking point', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 5,
    question: 'What would you do if you lost everything?',
    answers: [
      { text: 'Rebuild slowly — I\'ve already calculated the path', scores: { Prescience: 2, Legilimency: 0, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'Make them believe I still have control', scores: { Prescience: 0, Legilimency: 2, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'Twist reality until it bends in my favor', scores: { Prescience: 0, Legilimency: 0, Machination: 2, Equanimity: 0, Monomania: 1 } },
      { text: 'Accept it. Everything ends eventually', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'Keep fighting. I\'d rather die trying', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 6,
    question: 'Which phrase resonates most with you?',
    answers: [
      { text: 'Everything is a move, and I play the long game.', scores: { Prescience: 2, Legilimency: 0, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'Knowledge of others is the sharpest weapon.', scores: { Prescience: 0, Legilimency: 2, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'Reality is what I decide it to be.', scores: { Prescience: 0, Legilimency: 0, Machination: 2, Equanimity: 0, Monomania: 1 } },
      { text: 'Peace lies in stillness, not victory.', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'Victory demands sacrifice.', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 7,
    question: 'When facing betrayal, you...',
    answers: [
      { text: 'Already anticipated it.', scores: { Prescience: 2, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 0 } },
      { text: 'Twist their guilt into your weapon.', scores: { Prescience: 0, Legilimency: 2, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'Let the chaos consume them.', scores: { Prescience: 0, Legilimency: 0, Machination: 2, Equanimity: 0, Monomania: 1 } },
      { text: 'Feel nothing. Everything passes.', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'Channel the rage into pure fuel.', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 8,
    question: 'Pick your signature move:',
    answers: [
      { text: 'Strategic foresight', scores: { Prescience: 2, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 0 } },
      { text: 'Psychological manipulation', scores: { Prescience: 0, Legilimency: 2, Machination: 0, Equanimity: 0, Monomania: 0 } },
      { text: 'Game-altering deception', scores: { Prescience: 0, Legilimency: 0, Machination: 2, Equanimity: 0, Monomania: 1 } },
      { text: 'Complete emotional detachment', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'Obsessive pursuit of perfection', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 9,
    question: 'How do you see power?',
    answers: [
      { text: 'As the ability to control outcomes', scores: { Prescience: 2, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 0 } },
      { text: 'As the ability to control minds', scores: { Prescience: 0, Legilimency: 2, Machination: 0, Equanimity: 0, Monomania: 0 } },
      { text: 'As the ability to shape systems', scores: { Prescience: 0, Legilimency: 0, Machination: 2, Equanimity: 0, Monomania: 1 } },
      { text: 'As something meaningless without balance', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'As a burden I\'d gladly bear', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  },
  {
    id: 10,
    question: 'When victory is near, you feel…',
    answers: [
      { text: 'Quiet satisfaction — the plan worked.', scores: { Prescience: 2, Legilimency: 0, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'Thrill from watching others realize their defeat.', scores: { Prescience: 0, Legilimency: 2, Machination: 1, Equanimity: 0, Monomania: 0 } },
      { text: 'Delight in how perfectly everything unfolded.', scores: { Prescience: 1, Legilimency: 1, Machination: 2, Equanimity: 0, Monomania: 0 } },
      { text: 'Nothing. Triumph and failure are the same.', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 2, Monomania: 0 } },
      { text: 'Fire — the hunger never ends.', scores: { Prescience: 0, Legilimency: 0, Machination: 0, Equanimity: 0, Monomania: 2 } }
    ]
  }
];
