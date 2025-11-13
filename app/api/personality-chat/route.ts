import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { MasterType } from '@/types/quiz';
import { personalityPrompts } from '@/data/personality-prompts';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { masterType, messages } = await request.json();

    if (!masterType || !messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Missing required fields: masterType and messages array' },
        { status: 400 }
      );
    }

    // Get personality prompt configuration
    const personality = personalityPrompts[masterType as MasterType];

    if (!personality) {
      return NextResponse.json(
        { error: 'Invalid master type' },
        { status: 400 }
      );
    }

    // Format conversation history for Groq
    const formattedMessages = [
      {
        role: 'system' as const,
        content: personality.systemPrompt,
      },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role === 'bot' ? ('assistant' as const) : ('user' as const),
        content: msg.content,
      })),
    ];

    // Call Groq API with personality-specific system prompt
    const completion = await groq.chat.completions.create({
      messages: formattedMessages,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.8,
      max_tokens: 500,
      top_p: 0.9,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Personality chat error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
