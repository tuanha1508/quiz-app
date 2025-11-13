import { QuizResult } from '@/types/quiz';
import { MasterType } from '@/types/quiz';

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  const { master, scores } = result;

  // Get all personality types in order with their scores
  const personalityOrder: MasterType[] = ['Prescience', 'Legilimency', 'Monomania', 'Machination', 'Sangfroid'];
  const maxScore = 7; // Maximum possible score per personality

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div
        className="w-full max-w-2xl h-[80vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#EFEACD] to-[#EDD794] scrollbar-hide"
      >
        {/* Scrollable content container */}
        <div className="flex flex-col items-center p-8 gap-8">

          {/* ORIGINAL Personality Section */}
          <div className="w-full flex flex-col items-center gap-2 pb-6 border-b border-[#9C0512]/20">
            <h1 className="text-center font-normal text-6xl leading-tight font-[family-name:var(--font-cinzel)] text-[#9C0512]">
              {master.name}
            </h1>
            <p className="text-center font-normal text-xl font-[family-name:var(--font-poppins)] text-[#64080C]">
              {master.trait}
            </p>
          </div>

          {/* NEW: Motto Quote (Outside Card) */}
          <h2 className="w-full text-center text-2xl italic leading-relaxed font-[family-name:var(--font-cinzel)] text-[#9C0512]">
            &ldquo;{master.motto}&rdquo;
          </h2>

          {/* NEW: Top Card */}
          <div className="w-full rounded-3xl p-8 bg-white/30">
            <p className="text-left leading-loose mb-4 text-base text-black font-[family-name:var(--font-poppins)]">
              {master.description}
            </p>
            <p className="text-left text-sm font-medium font-[family-name:var(--font-poppins)] text-[#9C0512]">
              Domain: {master.keywords.map(k => k.charAt(0).toUpperCase() + k.slice(1)).join(', ')}
            </p>
          </div>

          {/* NEW: Secondary Quote Card */}
          <div className="w-full rounded-3xl p-6 bg-[#9C0512]/10 border-l-2 border-[#9C0512]">
            <p className="text-center italic leading-relaxed text-black text-[15px] font-[family-name:var(--font-poppins)]">
              &ldquo;{
                master.name === 'Prescience'
                  ? 'Knowing is not seeing. It\'s choosing when to look.'
                  : master.motto
              }&rdquo;
            </p>
          </div>

          {/* NEW: Personality Breakdown Section */}
          <div className="w-full bg-white/20 rounded-3xl p-6">
            <h3 className="font-semibold mb-6 text-2xl font-[family-name:var(--font-cinzel)] text-[#9C0512]">
              Personality Breakdown
            </h3>

            <div className="w-full mb-6 h-px bg-[#9C0512]/30" />

            {/* Score bars */}
            <div className="flex flex-col gap-6">
              {personalityOrder.map((personality) => {
                const score = scores[personality] || 0;
                const percentage = (score / maxScore) * 100;

                return (
                  <div key={personality}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg text-black font-normal font-[family-name:var(--font-poppins)]">
                        {personality}
                      </span>
                      <span className="text-lg text-black font-normal font-[family-name:var(--font-poppins)]">
                        {score}/{maxScore}
                      </span>
                    </div>
                    <div className="w-full rounded-full h-3 bg-[#9C0512]/10">
                      <div
                        className="rounded-full transition-all duration-500 h-full bg-[#9C0512]"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NEW: Action Buttons */}
          <div className="w-full flex gap-4 mt-4">
            <button
              onClick={() => {
                // TODO: Implement chat functionality
                console.log('Chat with', master.name);
              }}
              className="flex-1 py-3 rounded-2xl font-medium text-[14px] text-[#EFEACD] transition-all hover:opacity-90 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#9C0512] font-[family-name:var(--font-poppins)]"
            >
              Chat with {master.name}
            </button>
            <button
              onClick={onRestart}
              className="flex-1 py-3 rounded-2xl font-medium text-[14px] transition-all hover:opacity-90 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white/20 border border-[#9C0512]/20 text-[#64080C] font-[family-name:var(--font-poppins)]"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
