import ChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <div className="h-screen h-dvh w-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-24 sm:pb-8 overflow-hidden">
      <ChatBot />
    </div>
  );
}
