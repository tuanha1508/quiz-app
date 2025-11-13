import { Question } from '@/types/quiz';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'When you face someone stronger than you, your instinct is to…',
    answers: [
      { text: 'Observe and analyze every move to find their weakness.', scores: { Machination: 1, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Refuse to lose — burn yourself to ashes if you must.', scores: { Machination: 0, Monomania: 1, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Twist their thoughts until they start doubting themselves.', scores: { Machination: 0, Monomania: 0, Legilimency: 1, Prescience: 0, Sangfroid: 0 } },
      { text: 'Wait for the exact moment to strike.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 1, Sangfroid: 0 } },
      { text: 'Keep a cold face — victory or defeat, they still fear you.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 1 } }
    ]
  },
  {
    id: 2,
    question: 'What makes you feel most alive?',
    answers: [
      { text: 'When my plan plays out flawlessly.', scores: { Machination: 1, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'When I win what no one believed I could have.', scores: { Machination: 0, Monomania: 1, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'When others dance exactly how I make them.', scores: { Machination: 0, Monomania: 0, Legilimency: 1, Prescience: 0, Sangfroid: 0 } },
      { text: 'When I walk into a future I\'ve already foreseen.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 1, Sangfroid: 0 } },
      { text: 'When I\'m in full control — of myself and everyone else.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 1 } }
    ]
  },
  {
    id: 3,
    question: 'If power were a blade, how would you use it?',
    answers: [
      { text: 'Play chess with destiny.', scores: { Machination: 1, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Cut down anyone in my way.', scores: { Machination: 0, Monomania: 1, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Strike without leaving a trace.', scores: { Machination: 0, Monomania: 0, Legilimency: 1, Prescience: 0, Sangfroid: 0 } },
      { text: 'Keep it sheathed until I\'m certain of victory.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 1, Sangfroid: 0 } },
      { text: 'Drive it into the table and silence the room.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 1 } }
    ]
  },
  {
    id: 4,
    question: 'In a team, you are usually the one who…',
    answers: [
      { text: 'Stays behind the scenes, calculating every move.', scores: { Machination: 1, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Pushes everyone forward — even if it hurts.', scores: { Machination: 0, Monomania: 1, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Reads minds and plays people against each other.', scores: { Machination: 0, Monomania: 0, Legilimency: 1, Prescience: 0, Sangfroid: 0 } },
      { text: 'Sees the path before anyone else.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 1, Sangfroid: 0 } },
      { text: 'Commands with silence — everyone follows instinctively.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 1 } }
    ]
  },
  {
    id: 5,
    question: 'When everything collapses, what do you do?',
    answers: [
      { text: 'Step back and turn the ruins into a new strategy.', scores: { Machination: 1, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Clench my fists and rebuild twice as hard.', scores: { Machination: 0, Monomania: 1, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Manipulate from the shadows until I regain control.', scores: { Machination: 0, Monomania: 0, Legilimency: 1, Prescience: 0, Sangfroid: 0 } },
      { text: 'Accept the fall — knowing it\'s part of a larger cycle.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 1, Sangfroid: 0 } },
      { text: 'Smile. Nothing can touch me anymore.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 1 } }
    ]
  },
  {
    id: 6,
    question: 'If you could rewrite one rule of the world, it would be…',
    answers: [
      { text: 'Luck favors the one who calculates it best.', scores: { Machination: 1, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Those who dream the biggest, live the longest.', scores: { Machination: 0, Monomania: 1, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'No secret stays buried forever.', scores: { Machination: 0, Monomania: 0, Legilimency: 1, Prescience: 0, Sangfroid: 0 } },
      { text: 'All futures can be rewritten.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 1, Sangfroid: 0 } },
      { text: 'Emotions are for the weak.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 1 } }
    ]
  },
  {
    id: 7,
    question: 'What do you fear the most?',
    answers: [
      { text: 'Losing control of the plan.', scores: { Machination: 1, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Not being strong enough to get what I want.', scores: { Machination: 0, Monomania: 1, Legilimency: 0, Prescience: 0, Sangfroid: 0 } },
      { text: 'Being seen through.', scores: { Machination: 0, Monomania: 0, Legilimency: 1, Prescience: 0, Sangfroid: 0 } },
      { text: 'Knowing the future but being unable to change it.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 1, Sangfroid: 0 } },
      { text: 'Feeling again.', scores: { Machination: 0, Monomania: 0, Legilimency: 0, Prescience: 0, Sangfroid: 1 } }
    ]
  }
];
