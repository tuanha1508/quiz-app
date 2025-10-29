import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    const { userResponse, answers } = await request.json();

    if (!userResponse || !answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const answersText = answers
      .map((ans: any, idx: number) => `${idx + 1}. ${ans.text}`)
      .join('\n');

    const prompt = `You are analyzing a user's response to a personality quiz question. The user typed: "${userResponse}"

Here are the available answer choices:
${answersText}

Based on the semantic meaning and intent of the user's response, which answer choice (1-${answers.length}) best matches what they're trying to express?

Consider:
- Similar keywords and phrases
- Underlying personality traits
- Emotional tone
- Strategic approach

Respond with ONLY the number (1-${answers.length}) of the best matching answer.`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      max_tokens: 10,
    });

    const responseText = chatCompletion.choices[0]?.message?.content?.trim();
    const matchedIndex = parseInt(responseText || '1', 10) - 1;

    // Validate the index
    if (matchedIndex >= 0 && matchedIndex < answers.length) {
      return NextResponse.json({ matchedIndex });
    }

    // Fallback to first answer if parsing fails
    return NextResponse.json({ matchedIndex: 0 });
  } catch (error) {
    console.error('Error matching user response:', error);

    // Fallback: simple keyword matching
    const { userResponse, answers } = await request.json();
    const matchedIndex = fallbackKeywordMatch(userResponse, answers);

    return NextResponse.json({ matchedIndex });
  }
}

function fallbackKeywordMatch(userResponse: string, answers: any[]): number {
  const lowerResponse = userResponse.toLowerCase();

  let bestMatchIndex = 0;
  let bestScore = 0;

  answers.forEach((answer, index) => {
    const answerWords = answer.text.toLowerCase().split(/\s+/);
    let score = 0;

    for (const word of answerWords) {
      if (word.length > 3 && lowerResponse.includes(word)) {
        score++;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatchIndex = index;
    }
  });

  return bestMatchIndex;
}
