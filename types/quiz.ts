export type MasterType = 'Machination' | 'Monomania' | 'Legilimency' | 'Prescience' | 'Sangfroid';

export interface Master {
  name: MasterType;
  trait: string;
  motto: string;
  keywords: string[];
  power: string;
  punishment: string;
  description: string;
}

export interface Answer {
  text: string;
  scores: Record<MasterType, number>;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface QuizResult {
  master: Master;
  scores: Record<MasterType, number>;
}
