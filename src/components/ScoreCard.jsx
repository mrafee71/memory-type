import { levenshtein } from '../utils/levenshtein';

const ScoreCard = ({ original, typed }) => {
  const distance = levenshtein(original, typed);
  const maxLen = Math.max(original.length, 1);
  const accuracy = Math.max(0, 100 - (distance / maxLen) * 100).toFixed(2);

  return (
    <div className='mb-3 flex flex-col items-center bg-amber-300 p-4 rounded border-2 border-amber-500'>
      <h2 className='text-2xl font-bold textgreen-950 mb-2'>Results</h2>
      <p className='bg-green-500 py-1 px-2 rounded text-yellow-100 mb-2'><strong >Original:</strong> {original}</p>
      <p className={`py-1 px-2 rounded text-yellow-100 mb-2 ${accuracy >=60 ? "bg-green-500" : "bg-red-500"}`}><strong>Your Input:</strong> {typed}</p>
      <div className='flex flex-col items-start bg-white p-4 border-2 border-green-400 text-green-900'>
        <p><strong>Levenshtein Distance:</strong> {distance}</p>
        <p><strong>Accuracy:</strong> {accuracy}%</p>
        <p><strong>Stars:</strong> {accuracy >= 90 ? '★★★' : accuracy >= 70 ? '★★☆' : accuracy >= 50 ? '★☆☆' : '☆☆☆'}</p>
      </div>
    </div>
  );
};

export default ScoreCard;