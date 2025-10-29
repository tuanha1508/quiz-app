import { Master, MasterType } from '@/types/quiz';

export const MASTERS: Record<MasterType, Master> = {
  Prescience: {
    name: 'Prescience',
    trait: 'Calculated, visionary, strategist',
    motto: 'I know your every move.',
    keywords: ['foresight', 'control', 'intellect'],
    power: 'Strategic Foresight',
    punishment: 'The burden of knowing what cannot be changed',
    description: 'You are the architect of fate itself. Your mind operates three moves ahead of everyone else, seeing patterns where others see chaos. You do not react to the world—you shape it before it even unfolds.'
  },
  Legilimency: {
    name: 'Legilimency',
    trait: 'Manipulative, intuitive, psychological',
    motto: 'I am inside your head before you even know it.',
    keywords: ['mind games', 'charm', 'deceit'],
    power: 'Psychological Manipulation',
    punishment: 'Trust becomes impossible, even with yourself',
    description: 'You are a master of the human psyche. Words are your weapons, and emotions are strings you pull with precision. You don\'t need force—you make people want to follow you, betray themselves, and believe it was their choice all along.'
  },
  Machination: {
    name: 'Machination',
    trait: 'Devious, scheming, creative',
    motto: 'I don\'t predict the results. I create them.',
    keywords: ['manipulation', 'construction', 'chaos'],
    power: 'Reality Manipulation',
    punishment: 'Your own creations may consume you',
    description: 'You are the weaver of reality\'s fabric. Where others accept the game, you rewrite the rules. Chaos is your canvas, and from it you construct elaborate systems that bend the world to your design.'
  },
  Equanimity: {
    name: 'Equanimity',
    trait: 'Stoic, detached, emotionless',
    motto: 'I am a presence beyond mortal feeling.',
    keywords: ['balance', 'numbness', 'apathy'],
    power: 'Absolute Detachment',
    punishment: 'You may forget what it means to truly live',
    description: 'You are the eye of every storm—unmoved, untouched, eternal. While others drown in their passions and fears, you exist beyond them. Victory and defeat hold no meaning. You simply are.'
  },
  Monomania: {
    name: 'Monomania',
    trait: 'Obsessed, relentless, burning',
    motto: 'I achieve my goals at all costs.',
    keywords: ['passion', 'obsession', 'drive'],
    power: 'Relentless Obsession',
    punishment: 'The fire that drives you may burn everything you love',
    description: 'You are pure will incarnate. Where others hesitate, you charge forward. Where others break, you adapt and push harder. Your hunger never fades, your drive never wavers. You are the flame that consumes everything in pursuit of perfection.'
  }
};

export const MASTER_ORDER: MasterType[] = ['Prescience', 'Legilimency', 'Machination', 'Equanimity', 'Monomania'];
