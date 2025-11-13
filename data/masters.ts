import { Master, MasterType } from '@/types/quiz';

export const MASTERS: Record<MasterType, Master> = {
  Machination: {
    name: 'Machination',
    trait: 'The Strategist',
    motto: 'Even fate can be bluffed if you know how to deal.',
    keywords: ['strategy', 'luck', 'calculation'],
    power: 'Strategy, Luck',
    punishment: 'Losing control of the plan',
    description: 'The deck is chaos — I am the hand that arranges it.\n\nYou\'re a tactician who thrives on uncertainty. To you, every move, every risk, every misstep is a data point to weaponize. You turn chance into advantage and failure into foresight.'
  },
  Monomania: {
    name: 'Monomania',
    trait: 'The Obsession',
    motto: 'The fire in my chest doesn\'t ask for permission — it devours.',
    keywords: ['desire', 'obsession', 'ambition'],
    power: 'Desire, Obsession',
    punishment: 'Not being strong enough to get what I want',
    description: 'I burn, therefore I conquer.\n\nYou are ambition incarnate — a flame that refuses to die. You crave control, victory, and transcendence, even if it consumes you. To you, pain is proof you\'re still alive.'
  },
  Legilimency: {
    name: 'Legilimency',
    trait: 'The Mind Weaver',
    motto: 'To control the world, you must first understand what haunts it.',
    keywords: ['mind', 'manipulation', 'perception'],
    power: 'Mind, Manipulation',
    punishment: 'Being seen through',
    description: 'Every thought has a thread — and I pull the right ones.\n\nYou understand people at a terrifying depth. You don\'t fight with fists or force — you fight with knowledge. Every word, every glance is a trap you\'ve already built.'
  },
  Prescience: {
    name: 'Prescience',
    trait: 'The Oracle',
    motto: 'Knowing is not seeing. It\'s choosing when to look.',
    keywords: ['fate', 'foresight', 'control'],
    power: 'Fate, Foresight',
    punishment: 'Knowing the future but being unable to change it',
    description: 'Every card I play has already been played.\n\nYou see beyond moments — beyond outcomes. The future bends to your understanding, and destiny is simply another move in your game.'
  },
  Sangfroid: {
    name: 'Sangfroid',
    trait: 'The Sovereign',
    motto: 'When they break, I remain — calm, unshaken, eternal.',
    keywords: ['control', 'domination', 'composure'],
    power: 'Control, Domination',
    punishment: 'Feeling again',
    description: 'To feel nothing is the highest form of control.\n\nYou are composed of flesh. Where others rage or panic, you remain still — a storm contained within skin. Your silence dominates more than any scream ever could.'
  }
};

export const MASTER_ORDER: MasterType[] = ['Sangfroid', 'Prescience', 'Legilimency', 'Monomania', 'Machination'];
