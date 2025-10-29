import { Answer } from '@/types/quiz';

export async function matchUserResponseToAnswer(
  userResponse: string,
  answers: Answer[]
): Promise<Answer> {
  try {
    const response = await fetch('/api/match-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userResponse,
        answers,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to match answer');
    }

    const { matchedIndex } = await response.json();

    // Validate the index and return the matched answer
    if (matchedIndex >= 0 && matchedIndex < answers.length) {
      return answers[matchedIndex];
    }

    // Fallback to first answer if parsing fails
    return answers[0];
  } catch (error) {
    console.error('Error matching user response:', error);
    // Fallback: simple keyword matching
    return fallbackKeywordMatch(userResponse, answers);
  }
}

// Fallback matching using simple keyword search
function fallbackKeywordMatch(userResponse: string, answers: Answer[]): Answer {
  const lowerResponse = userResponse.toLowerCase();

  // Find answer with most keyword matches
  let bestMatch = answers[0];
  let bestScore = 0;

  for (const answer of answers) {
    const answerWords = answer.text.toLowerCase().split(/\s+/);
    let score = 0;

    for (const word of answerWords) {
      if (word.length > 3 && lowerResponse.includes(word)) {
        score++;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = answer;
    }
  }

  return bestMatch;
}
