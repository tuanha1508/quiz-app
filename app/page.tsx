'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChatBot from '@/components/ChatBot';

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // After 4 seconds (3s fade in + 1s wait), start fade out
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // After fade out completes (5s total), show chatbot
    const transitionTimer = setTimeout(() => {
      setShowLanding(false);
    }, 5000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  if (!showLanding) {
    return (
      <div
        className="h-screen h-dvh w-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-24 sm:pb-8 overflow-hidden animate-[fadeIn_1s_ease-in-out_forwards] opacity-0"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <ChatBot />
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundImage: 'url(/BG.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Typography/Typo - centered with fade-in animation */}
        <div className="relative w-[400px] md:w-[500px] lg:w-[600px] animate-[fadeIn_3s_ease-in-out_forwards] opacity-0">
          <Image
            src="/Typo.png"
            alt="Typography"
            width={600}
            height={200}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Logo - overlapping and positioned with padding with fade-in animation */}
        <div className="absolute pb-110 animate-[fadeIn_3s_ease-in-out_forwards] opacity-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}