import { QuizResult } from '@/types/quiz';

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  const { master } = result;

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div
        className="w-full max-w-2xl h-[80vh] overflow-y-auto rounded-2xl"
        style={{
          background: 'linear-gradient(180deg, #EFEACD 0%, #EDD794 100%)',
        }}
      >
        {/* Scrollable content container */}
        <div className="flex flex-col items-center p-8 gap-8">

          {/* Personality Section */}
          <div className="w-full flex flex-col items-center gap-2 pb-6" style={{ borderBottom: '1px solid rgba(156, 5, 18, 0.2)' }}>
            <h1
              className="text-center font-normal"
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '60px',
                color: '#9C0512',
                lineHeight: '1.2'
              }}
            >
              {master.name}
            </h1>
            <p
              className="text-center font-normal"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '20px',
                color: '#64080C',
              }}
            >
              {master.trait}
            </p>
          </div>

          {/* Description Section */}
          <div className="w-full">
            <p
              className="text-center leading-relaxed"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                color: '#64080C',
              }}
            >
              {master.description}
            </p>
          </div>

          {/* Power Section */}
          <div className="w-full flex flex-col items-center gap-2 pb-6" style={{ borderBottom: '1px solid rgba(156, 5, 18, 0.2)' }}>
            <h2
              className="font-semibold"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '20px',
                color: '#9C0512',
              }}
            >
              Power
            </h2>
            <p
              className="text-center"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                color: '#64080C',
              }}
            >
              {master.power}
            </p>
          </div>

          {/* Punishment Section */}
          <div className="w-full flex flex-col items-center gap-2 pb-6" style={{ borderBottom: '1px solid rgba(156, 5, 18, 0.2)' }}>
            <h2
              className="font-semibold"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '20px',
                color: '#9C0512',
              }}
            >
              Punishment
            </h2>
            <p
              className="text-center"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                color: '#64080C',
              }}
            >
              {master.punishment}
            </p>
          </div>

          {/* Motto Section */}
          <div className="w-full flex flex-col items-center gap-2 pb-6" style={{ borderBottom: '1px solid rgba(156, 5, 18, 0.2)' }}>
            <h2
              className="font-semibold"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '20px',
                color: '#9C0512',
              }}
            >
              Motto
            </h2>
            <p
              className="text-center italic"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                color: '#64080C',
              }}
            >
              &ldquo;{master.motto}&rdquo;
            </p>
          </div>

          {/* Restart Button */}
          <button
            onClick={onRestart}
            className="px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '16px',
              backgroundColor: '#9C0512',
              color: '#FFFFFF',
              focusRingColor: '#9C0512',
            }}
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
}
