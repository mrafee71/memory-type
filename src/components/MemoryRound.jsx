import { useState, useEffect } from 'react';

const MemoryRound = ({ text, onComplete }) => {
  const [showText, setShowText] = useState(true);
  const [input, setInput] = useState('');
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000); // Show for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleFinish = () => {
    onComplete(input);
  };

  return (
    <div>
      {showText ? (
        <div className='bg-red-200 p-4 px-4 rounded border-1 text-green-950 border-red-700 font-bold'>{text}</div>
      ) : (
        <div className='p-4'>
          <textarea 
            className='w-full outline-none ring-2 ring-red-200 focus:ring-green-700 p-2 rounded mb-2'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setTypingStarted(true);
            }}
            rows={4}
            cols={60}
            placeholder="Type what you remember..."
          />
          {typingStarted && <button className='bg-green-400 px-3 py-1 text-white rounded hover:bg-red-400 cursor-pointer' onClick={handleFinish}>Finish</button>}
        </div>
      )}
    </div>
  );
};

export default MemoryRound;