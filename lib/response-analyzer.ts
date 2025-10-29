export interface ResponseAnalysis {
  isRelevant: boolean;
  clarificationMessage: string;
}

export async function analyzeUserResponse(
  userResponse: string,
  question: string
): Promise<ResponseAnalysis> {
  try {
    const response = await fetch('/api/analyze-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userResponse,
        question,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze response');
    }

    const data = await response.json();
    return {
      isRelevant: data.isRelevant ?? true,
      clarificationMessage: data.clarificationMessage ?? '',
    };
  } catch (error) {
    console.error('Error analyzing response:', error);
    // Default to assuming response is relevant if analysis fails
    return {
      isRelevant: true,
      clarificationMessage: '',
    };
  }
}
