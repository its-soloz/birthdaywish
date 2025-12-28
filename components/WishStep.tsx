
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WishStepProps {
  onNext: () => void;
}

const WishStep: React.FC<WishStepProps> = ({ onNext }) => {
  const [isWished, setIsWished] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-[3rem] p-12 shadow-2xl text-center max-w-2xl w-full relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-pink-100"></div>
      
      <div className="mb-10">
        <div className="flex justify-center mb-6">
           <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm5mNWF6Y3hyeXZ6ZXZycG95eXZ6ZXZycG95eXZ6ZXZycG95ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vRAnVvQByo330G8S9Y/giphy.gif" 
            className="w-40 h-40 object-contain drop-shadow-xl"
            alt="Kitty Wish"
          />
        </div>
        
        <h2 className="text-4xl font-bold text-pink-500 mb-2">Time to Make a Wish! ✨</h2>
        <p className="text-gray-600 text-lg font-medium">Close your eyes and make your birthday wish!</p>
        <p className="text-gray-400 text-sm mt-2 italic">Think of something wonderful for your new year!</p>
      </div>

      <button
        onClick={() => {
          setIsWished(true);
          setTimeout(onNext, 1500);
        }}
        className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all transform ${isWished ? 'scale-90 opacity-50' : 'hover:scale-105'}`}
      >
        {isWished ? 'Wish Sent to Universe... ✨' : "I've Made My Wish! ❤️"}
      </button>

      <div className="mt-8 flex justify-center gap-4 text-pink-100">
        <div className="text-2xl">☁️</div>
        <div className="text-2xl">✨</div>
        <div className="text-2xl">💖</div>
      </div>
    </motion.div>
  );
};

export default WishStep;
