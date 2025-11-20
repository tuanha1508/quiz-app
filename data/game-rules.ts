/**
 * Game Rules Module
 * Contains detailed regulations for tournament games
 */

export interface GameRule {
  name: string;
  objective: string;
  setup: string;
  cardRankings: string;
  gameplay: string;
  winning: string;
  combinations?: string;
  specialRules?: string;
}

export const baccaratRules: GameRule = {
  name: 'Baccarat',
  objective: 'Be the winner with the highest point',
  setup: 'The cards are dealt to each person by a representative, each person has three cards. Players can view their cards privately or publicly and calculate points.',
  cardRankings: `
    • Cards: 2, 3, 4, 5, 6, 7, 8, 9, 10 - each card has a number of points corresponding to that number.
    • Cards: J, Q, K, A - each count 0 points.
  `,
  gameplay: `
    • The player's score in each game is the odd number of the total three-card score.
    • If player has 3 cards of either J, Q, K, they will automatically win.
    • For example, if the total of three cards is 27 points, you get 7 points; if you have 10 points, you get 0 points.
  `,
  winning: 'The person with the highest point is the winner.'
};

export const tienLenRules: GameRule = {
  name: 'Tiến Lên',
  objective: 'Be the first person to get rid of all your cards.',
  setup: `
    • This game works best with 4 players.
    • Using a standard 52-card deck, deal each player 13 cards.
  `,
  cardRankings: `
    • Cards ranked from highest to lowest: 2 A K Q J 10 9 8 7 6 5 4 3.
    • Suits ranked from highest to lowest: Hearts ♥ Diamonds ♦ Clubs ♣ Spades ♠.
    • Card rank takes precedence over suit rank, so the 8♣ is higher than the 7♦.
  `,
  gameplay: `
    • The person with the 3♠ starts the game. If it isn't the first game, the previous game's winner starts to play.
    • Each player must beat the card(s) played on the previous turn.
    • Play continues until no one can beat a combination.
    • The person who played that combination gets to clear the table and start a new round.
    • If 2 players win with the same number of points, the player with the higher score in the last round will go forward.
    • One round got 3 attempts:
      - 1st place: 4pts
      - 2nd place: 3pts
      - 3rd place: 2pts
      - 4th place: 1pt
    • The player(s) with highest total score will go forward.
  `,
  combinations: `
    • Single: One card. The smallest single is a 3♠, and the highest is a 2♥.
    • Pair: Two cards with the same rank. Example: 6♥ 6♣.
    • Triple: Three cards with the same rank. Example: 8♣ 8♥ 8♦.
    • Run: Three or more cards of consecutive ranks. Example: 10♥ J♣ K♦.
    • The only thing that can beat a combination is a higher combination of the same type and number of cards.
  `,
  specialRules: `
    • You can beat a single 2 (the highest card) with another 2 of higher suit. Example: 2♥ beats 2♣.
    • You can beat any single 2 with a combination of 3 pairs in sequence, or a four of a kind and take the next turn (if no other players are having a higher combination or pairs in sequence).
      Example: 3♥ 3♦ 4♣ 4♠ or 3♥ 3♦ 4♣ 4♦ 5♣ 5♦
    • You can cut a pair of 2s (two cards with number 2) with four of a kind or 4 pairs in sequence.
      Example: 3♥ 3♦ 4♦ 4♦ 5♣ 5♦ 6♣ 6♦
    • The rankings of the combinations are:
      - A single 2 < 3 pairs in sequence < A pair of 2s < Four of a kind < 4 pairs in sequence.
    • If you don't have any playable combinations, you can pass; however, you will be locked out or play until someone wins the round.
    • A run or sequence can only be beaten by another sequence. In this case, the suits don't matter; just look at the highest card in each sequence.
    • If two people are tied, the scores from the previous round will be taken into account.
    • If a player wins immediately after dealing according to a special rule, the table will re-deal the hand.
  `,
  winning: `
    • The first person to run out of cards wins.
    • There is no way to win instantly. If a player dealt the following, they should notify the dealer and the table would re-deal the hand.
    • There are also a few ways to win the game instantly:
      - Having all four 2s: 2♥ 2♦ 2♣ 2♠
      - Having five pairs in sequence: 3♥ 3♦ 4♣ 4♦ 5♣ 5♦ 6♣ 6♦ 7♣ 7♦
      - Having three triples in sequence: 5♥ 5♣ 5♦ 6♦ 6♥ 6♣ 7♣ 7♥ 7♦
      - Having a dragon, or all individual cards in sequence: 3♥ 4♦ 5♥ 6♥ 7♥ 8♦ 9♥ 10♥ J♥ Q♥ K♥ A♥ 2♥
  `
};

export const gameRules = {
  baccarat: baccaratRules,
  tienLen: tienLenRules
};

/**
 * Get formatted game rules for AI context
 */
export function getGameRulesContext(): string {
  return `
TOURNAMENT GAME RULES:

1. BACCARAT RULES:
${baccaratRules.objective}
${baccaratRules.setup}
${baccaratRules.cardRankings}
${baccaratRules.gameplay}
${baccaratRules.winning}

2. TIẾN LÊN RULES:
${tienLenRules.objective}
${tienLenRules.setup}
${tienLenRules.cardRankings}
${tienLenRules.gameplay}
${tienLenRules.combinations}
${tienLenRules.specialRules}
${tienLenRules.winning}
  `.trim();
}

/**
 * Get specific game rule by name
 */
export function getGameRule(gameName: 'baccarat' | 'tienLen'): GameRule {
  return gameRules[gameName];
}