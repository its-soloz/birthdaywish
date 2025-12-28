
import React from 'react';
import { motion } from 'framer-motion';

interface IntroStepProps {
  onNext: () => void;
}

const IntroStep: React.FC<IntroStepProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="bg-white rounded-[3rem] p-12 shadow-2xl text-center max-w-lg relative border-4 border-pink-50"
    >
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5bXF6ZXZycG95eXZ6ZXZycG95eXZ6ZXZycG95eXZ6ZXZycG95ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vRAnVvQByo330G8S9Y/giphy.gif" 
          alt="Hello Kitty" 
          className="w-24 h-24 drop-shadow-lg"
        />
      </div>

      <span className="text-gray-400 text-sm font-semibold tracking-widest mb-4 block">Happy Birthday!</span>
      
      <h1 className="text-5xl font-bold text-pink-500 mb-6 leading-tight">
        Happy Birthday, Beautiful! 🎂✨
      </h1>
      
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        Today is all about celebrating the most amazing person in my world. I've created something magical just for you on your special day...
      </p>

      <div className="space-y-4">
        <p className="text-pink-400 font-medium">Ready for your birthday surprise?</p>
        <button
          onClick={onNext}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-pink-200 transition-all transform hover:scale-105 active:scale-95"
        >
          Let's Gooo
        </button>
      </div>

      {/* Decorations */}
      <div className="absolute -bottom-6 -left-6 transform -rotate-12">
         <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/26FL3U1G6v6I0C9uM/giphy.gif" className="w-16" alt="cat" />
      </div>
    </motion.div>
  );
};

export default IntroStep;
