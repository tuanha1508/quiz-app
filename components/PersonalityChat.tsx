'use client';

import { useState, useRef, useEffect } from 'react';
import { Master } from '@/types/quiz';
import { personalityPrompts } from '@/data/personality-prompts';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface PersonalityChatProps {
  master: Master;
  onBack: () => void;
}

export default function PersonalityChat({ master, onBack }: PersonalityChatProps) {
  const personality = personalityPrompts[master.name];
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: personality.greetingMessage,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasAnsweredInitialQuestion, setHasAnsweredInitialQuestion] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount (only if initial question is answered)
  useEffect(() => {
    if (hasAnsweredInitialQuestion) {
      inputRef.current?.focus();
    }
  }, [hasAnsweredInitialQuestion]);

  const handleInitialResponse = async (response: string) => {
    // Add user's response as a message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setHasAnsweredInitialQuestion(true);

    try {
      // Prepare conversation history for API
      const conversationHistory = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const apiResponse = await fetch('/api/personality-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          masterType: master.name,
          messages: conversationHistory,
        }),
      });

      if (!apiResponse.ok) {
        throw new Error('Failed to get response');
      }

      const data = await apiResponse.json();

      // Simulate typing delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: 'An error occurred. Try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      // Focus input after bot responds
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Prepare conversation history for API
      const conversationHistory = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch('/api/personality-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          masterType: master.name,
          messages: conversationHistory,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Simulate typing delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: 'An error occurred. Try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      // Focus input after bot responds
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col max-h-[90vh] max-h-[90dvh] h-full bg-[#0E0000]/50 backdrop-blur-md border border-[#9C0512]/30 rounded-lg sm:rounded-2xl shadow-[0_0_50px_0_rgba(156,5,18,0.15)]">
      {/* Header */}
      <div className="bg-[#DC2639]/35 backdrop-blur-sm text-white p-3 sm:p-4 rounded-t-lg sm:rounded-t-2xl flex-shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-white/80 hover:text-white transition-colors text-xl"
            aria-label="Back to results"
          >
            ←
          </button>
          <div className="flex-1">
            <h2 className="text-base sm:text-xl font-bold text-[#EDD794]">
              Chat with {master.name}
            </h2>
            <p className="text-xs sm:text-sm text-white/80">{master.trait}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-[#0E0000]/30 backdrop-blur-sm p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-hide">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 ${
                message.role === 'user'
                  ? 'bg-[#9C0512] text-white border border-[#9C0512]/50 rounded-2xl rounded-tr-[8px] animate-[messageSlideIn_0.5s_ease-out_forwards]'
                  : 'bg-white/10 text-white rounded-2xl animate-[messageSlideIn_0.5s_ease-out_forwards]'
              }`}
              style={
                message.role === 'user'
                  ? { boxShadow: '0 0 20px 0 rgba(156, 5, 18, 0.3)' }
                  : undefined
              }
            >
              <p className="text-sm sm:text-base break-words whitespace-pre-wrap">{message.content}</p>
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

        {/* Yes/No buttons for initial question */}
        {!hasAnsweredInitialQuestion && !isTyping && (
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => handleInitialResponse("Yes, I'll be there!")}
              className="px-6 py-3 bg-[#9C0512] text-white rounded-xl font-semibold text-base
                       hover:bg-[#DC2639] transition-all transform hover:scale-105
                       shadow-[0_0_20px_0_rgba(156,5,18,0.3)]"
            >
              Yes, I'll attend
            </button>
            <button
              onClick={() => handleInitialResponse("No, I can't make it")}
              className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold text-base
                       hover:bg-white/20 transition-all transform hover:scale-105
                       border border-white/20"
            >
              No, I can't make it
            </button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-b-lg sm:rounded-b-2xl flex-shrink-0">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              !hasAnsweredInitialQuestion
                ? "Please choose Yes or No above first..."
                : `Speak to ${master.name}...`
            }
            className="flex-1 px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-[14px] text-white placeholder:text-white/50 text-base
                     focus:outline-none
                     disabled:bg-white/5 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isTyping || !hasAnsweredInitialQuestion}
            style={{ fontSize: '16px' }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping || !hasAnsweredInitialQuestion}
            className="px-4 sm:px-6 py-2 bg-white/10 text-white rounded-[14px] font-semibold text-sm sm:text-base
                     hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
