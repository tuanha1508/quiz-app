import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { userResponse, question } = await request.json();

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are an intelligent response analyzer. Your job is to determine if a user's response is relevant and appropriate to the question asked.

Analyze if the response:
1. Directly addresses the question
2. Provides a meaningful answer (not just random words, emojis, or off-topic statements)
3. Shows the user understood what was being asked

Respond with a JSON object containing:
- "isRelevant": boolean (true if the response is appropriate, false if not)
- "clarificationMessage": string (if isRelevant is false, provide a helpful message asking the user to answer the question clearly. Be polite and encouraging. Reference the specific question.)

Example:
Question: "How do you approach complex decisions?"
Response: "pizza" -> {"isRelevant": false, "clarificationMessage": "I'd like to understand how you approach complex decisions. Could you share your thoughts on this? For example, do you analyze carefully, trust your instincts, or consult with others?"}

Question: "How do you approach complex decisions?"
Response: "I usually think about it carefully and consider all options" -> {"isRelevant": true, "clarificationMessage": ""}`,
        },
        {
          role: 'user',
          content: `Question: "${question}"
User's Response: "${userResponse}"

Analyze if this response is relevant and appropriate.`,
        },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      max_tokens: 300,
      response_format: { type: 'json_object' },
    });

    const analysis = JSON.parse(completion.choices[0]?.message?.content || '{}');

    return NextResponse.json({
      isRelevant: analysis.isRelevant ?? true,
      clarificationMessage: analysis.clarificationMessage ?? '',
    });
  } catch (error) {
    console.error('Error analyzing response:', error);
    // On error, assume response is relevant to avoid blocking users
    return NextResponse.json({
      isRelevant: true,
      clarificationMessage: '',
    });
  }
}
