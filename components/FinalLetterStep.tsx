
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FinalLetterStepProps {
  onNext: () => void;
}

const FinalLetterStep: React.FC<FinalLetterStepProps> = ({ onNext }) => {
  const [isSealing, setIsSealing] = useState(false);

  const handleSeal = () => {
    setIsSealing(true);
    setTimeout(onNext, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-600">Final Birthday Letter</h2>
        <p className="text-gray-500">A special message sealed with love ✔️</p>
      </div>

      <div className="bg-[#fffdf9] rounded-3xl p-12 shadow-2xl relative border-2 border-pink-50 overflow-hidden min-h-[500px] flex flex-col">
        <div className="flex items-center gap-3 text-pink-500 mb-8 border-b border-pink-100 pb-4">
          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">💌</div>
          <h3 className="font-bold text-xl">Final Birthday Love Letter</h3>
        </div>

        <div className="absolute top-10 right-10">
           <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3orieUe6ejxSFxYCXe/giphy.gif" 
            className="w-20" 
            alt="cat hat" 
          />
        </div>

        <div className="cursive text-3xl text-gray-800 space-y-8 flex-1">
          <p className="text-pink-400 font-bold">My dearest birthday princess,</p>
          <p className="leading-relaxed">
            May this new year bring you everything your heart desires and more joy than you can imagine. 
          </p>
          <p className="leading-relaxed">
            Happy Birthday, my love. You deserve the world and so much more. ✨💖
          </p>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-pink-100 pt-8">
          <div className="text-gray-400 text-sm italic">Sealing will complete your birthday experience.</div>
          <div className="flex gap-4">
             <button
              onClick={() => window.location.reload()}
              className="bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold py-3 px-8 rounded-full transition-all"
            >
              Experience Again
            </button>
            <button
              onClick={handleSeal}
              disabled={isSealing}
              className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all flex items-center gap-2 ${isSealing ? 'opacity-50' : ''}`}
            >
              {isSealing ? 'Sealing your birthday wishes...' : 'Seal The Letter 💌'}
            </button>
          </div>
        </div>

        {isSealing && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 text-6xl"
          >
            ❤️
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FinalLetterStep;
