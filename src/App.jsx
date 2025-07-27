import { useState } from 'react';
import { memoryTexts } from './data/sentences';
import MemoryRound from './components/MemoryRound';
import ScoreCard from './components/ScoreCard';

function App() {
  const [round, setRound] = useState(0);
  const [result, setResult] = useState(null);

  const handleComplete = (typed) => {
    setResult({ typed, original: memoryTexts[round] });
  };

  const nextRound = () => {
    setRound((prev) => prev + 1);
    setResult(null);
  };

  return (
    <div className='w-full p-2 py-6 md:p-4 md:py-8 lg:p-6 lg:py-10 xl:p-8'>
      <h1 className='text-green-950 font-extrabold text-2xl md:text-3xl lg:text-4xl text-center mb-4 uppercase'>🧠 Memory Type Game</h1>
      <div className='flex flex-col items-center'>
        <h2 className='text-center mb-2 text-lg bg-green-200 py-1 px-3 font-bold rounded-4xl'>Round {round + 1}</h2>
        {!result ? (
          <MemoryRound text={memoryTexts[round]} onComplete={handleComplete} />
        ) : (
          <>
            <ScoreCard {...result} />
            {round < memoryTexts.length - 1 && <button className='bg-green-500 hover:bg-red-400 cursor-pointer text-white px-3 py-1 rounded' onClick={nextRound}>Next Round</button>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;