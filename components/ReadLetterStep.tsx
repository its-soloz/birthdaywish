
import React from 'react';
import { motion } from 'framer-motion';

interface ReadLetterStepProps {
  onNext: () => void;
}

const ReadLetterStep: React.FC<ReadLetterStepProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -100 }}
      className="bg-[#fffdf9] rounded-2xl p-10 shadow-xl max-w-2xl w-full relative border border-orange-50"
    >
      <div className="flex items-center gap-2 text-pink-500 mb-6 border-b border-pink-50 pb-4">
        <span className="text-xl">💌</span>
        <h3 className="font-bold">To My Birthday Princess</h3>
      </div>

      <div className="absolute top-10 right-10">
         <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3orieUe6ejxSFxYCXe/giphy.gif" 
            className="w-16" 
            alt="cat hat" 
          />
      </div>

      <div className="cursive text-2xl text-gray-800 space-y-6 leading-relaxed">
        <p className="text-pink-400 font-bold">My dearest birthday girl,</p>
        <p>
          Today marks another year of your incredible existence, and I couldn't be more grateful to celebrate it with you. 
          You bring so much joy, laughter, and love into this world — and into my life.
        </p>
        <p>
          You deserve all the magic, all the dreams, and all the love this world has to offer.
        </p>
        <div className="text-right">
          <p className="text-pink-500">Forever yours ❤️</p>
          <span className="text-sm italic opacity-50">F</span>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={onNext}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all"
        >
          Continue !! ✨
        </button>
      </div>

      <div className="absolute bottom-6 left-6 text-2xl text-pink-200">✨</div>
    </motion.div>
  );
};

export default ReadLetterStep;
