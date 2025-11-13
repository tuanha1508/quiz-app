'use client';

import { useState, useRef, useEffect } from 'react';
import { Answer, QuizResult } from '@/types/quiz';
import { ChatMessage } from '@/types/chat';
import { QUESTIONS } from '@/data/questions';
import { calculateQuizResult } from '@/lib/quiz-calculator';
import { matchUserResponseToAnswer } from '@/lib/ai-matcher';
import { analyzeUserResponse } from '@/lib/response-analyzer';
import ResultCard from './ResultCard';

type ChatState = 'intro' | 'chat' | 'result';

export default function ChatBot() {
  const [state, setState] = useState<ChatState>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-start chat on component mount
  useEffect(() => {
    simulateTyping(() => {
      addMessage(
        "Welcome to the Elite Council! I'm here to help you discover which Boss you truly embody. Let's begin...",
        'bot'
      );
      setTimeout(() => {
        simulateTyping(() => {
          addMessage(QUESTIONS[0].question, 'bot');
          setShowSuggestions(true);
        }, 500);
      }, 1000);
    });
  }, []);

  const addMessage = (text: string, role: 'bot' | 'user') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      role,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateTyping = async (callback: () => void, delay = 800) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, delay));
    setIsTyping(false);
    callback();
    // Focus input after bot finishes responding
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleStart = () => {
    setState('chat');
    setShowSuggestions(false);
    simulateTyping(() => {
      addMessage(
        "Welcome to the Academy! I'm here to help you discover which Master you truly embody. Let's begin...",
        'bot'
      );
      setTimeout(() => {
        simulateTyping(() => {
          addMessage(QUESTIONS[0].question, 'bot');
          setShowSuggestions(true);
        }, 500);
      }, 1000);
    });
  };

  const processAnswer = async (answerText: string, answer: Answer) => {
    // Add user message
    addMessage(answerText, 'user');
    setShowSuggestions(false);

    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      // Move to next question
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);

      await simulateTyping(() => {
        addMessage(QUESTIONS[nextIndex].question, 'bot');
        setShowSuggestions(true);
      }, 1000);
    } else {
      // Calculate result
      await simulateTyping(() => {
        addMessage(
          "Thank you for your responses. Let me analyze your true nature...",
          'bot'
        );
      }, 1000);

      setTimeout(() => {
        const quizResult = calculateQuizResult(newAnswers);
        setResult(quizResult);
        setState('result');
      }, 2000);
    }
  };

  const handleSuggestionClick = async (answer: Answer) => {
    if (isProcessing) return;
    setIsProcessing(true);
    await processAnswer(answer.text, answer);
    setIsProcessing(false);
  };

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isProcessing) return;

    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const inputText = userInput.trim();
    setUserInput('');
    setIsProcessing(true);

    try {
      // First, analyze if the response is relevant to the question
      const analysis = await analyzeUserResponse(
        inputText,
        currentQuestion.question
      );

      if (!analysis.isRelevant) {
        // User gave an unclear or off-topic response
        addMessage(inputText, 'user');

        await simulateTyping(() => {
          addMessage(analysis.clarificationMessage, 'bot');
          setIsProcessing(false);
        }, 800);
        return;
      }

      // Response is relevant, proceed with matching and processing
      const matchedAnswer = await matchUserResponseToAnswer(
        inputText,
        currentQuestion.answers
      );
      await processAnswer(inputText, matchedAnswer);
    } catch (error) {
      console.error('Error processing response:', error);
      addMessage(
        "I'm sorry, I had trouble understanding that. Could you try selecting one of the suggestions?",
        'bot'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRestart = () => {
    setState('chat');
    setMessages([]);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setUserInput('');
    setShowSuggestions(false);

    // Restart with welcome message
    setTimeout(() => {
      simulateTyping(() => {
        addMessage(
          "Welcome to the Elite Council! I'm here to help you discover which Boss you truly embody. Let's begin...",
          'bot'
        );
        setTimeout(() => {
          simulateTyping(() => {
            addMessage(QUESTIONS[0].question, 'bot');
            setShowSuggestions(true);
          }, 500);
        }, 1000);
      });
    }, 100);
  };

  if (state === 'result' && result) {
    return <ResultCard result={result} onRestart={handleRestart} />;
  }

  // Chat UI
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col h-[80vh] bg-[#0E0000]/50 border border-[#9C0512]/30 rounded-2xl shadow-[0_0_50px_0_rgba(156,5,18,0.15)]">
      {/* Header */}
      <div className="bg-[#DC2639]/35 text-white p-4 rounded-t-2xl">
        <h2 className="text-xl font-bold text-[#EDD794]">Which Elite Council Boss Are You?</h2>
        <p className="text-sm text-white/80">
          Question {currentQuestionIndex + 1} of {QUESTIONS.length}
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-[#0E0000]/50 p-4 space-y-4 scrollbar-hide">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-3 ${
                message.role === 'user'
                  ? 'bg-[#9C0512] text-white border border-[#9C0512]/50 rounded-2xl rounded-tr-[8px]'
                  : 'bg-white/10 text-white rounded-2xl'
              }`}
              style={
                message.role === 'user'
                  ? { boxShadow: '0 0 20px 0 rgba(156, 5, 18, 0.3)' }
                  : undefined
              }
            >
              <p className="text-sm md:text-base break-words whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {!isTyping && !isProcessing && showSuggestions && (
        <div className="bg-[#0E0000]/50 p-4 space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
          <p className="text-xs text-gray-500 mb-2">
            Quick suggestions (or type your own below):
          </p>
          <div className="flex flex-wrap gap-2">
            {currentQuestion.answers.map((answer, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(answer)}
                className="px-3 py-2 bg-[#9C0512]/35 border border-[#9C0512]/50 rounded-full text-sm text-white
                         hover:bg-[#9C0512] hover:border-[#9C0512]
                         transition-colors text-left break-words whitespace-normal max-w-full cursor-pointer"
                disabled={isProcessing}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleTextSubmit} className="bg-white/5 p-4 rounded-b-2xl">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your response or choose a suggestion above..."
            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-[14px] text-white placeholder:text-white/50
                     focus:outline-none
                     disabled:bg-white/10 disabled:opacity-60"
            disabled={isTyping || isProcessing}
          />
          <button
            type="submit"
            disabled={!userInput.trim() || isTyping || isProcessing}
            className="px-6 py-2 bg-white/10 text-white rounded-[14px] font-semibold
                     hover:bg-white/20 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
