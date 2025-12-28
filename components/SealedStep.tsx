
import React from 'react';
import { motion } from 'framer-motion';

interface SealedStepProps {
  onReset: () => void;
}

const SealedStep: React.FC<SealedStepProps> = ({ onReset }) => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-[4rem] p-16 shadow-2xl text-center max-w-2xl w-full relative border-8 border-pink-50"
    >
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className="bg-pink-100 rounded-full p-6 shadow-xl border-4 border-white">
          <span className="text-5xl">💖</span>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-pink-600 leading-tight">
          Birthday Letter Sealed with Love 💌
        </h1>
        <p className="text-gray-500 text-xl font-medium">Happy Birthday, My Everything 🥂</p>
        
        <div className="py-4 text-pink-200 text-2xl tracking-widest">
          ♡ ♡ ♡ ♡ ♡ ♡ ♡
        </div>

        <div className="space-y-1">
          <p className="text-gray-800 font-bold text-lg">Forever Yours, Happy Birthday! ✨👑</p>
          <p className="text-gray-400 text-sm italic">{formattedDate}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={onReset}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Experience Birthday Magic Again ✨
          </button>
          <button
            onClick={() => alert("Millions of birthday kisses sent! 💋💋💋")}
            className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2"
          >
            Send Birthday Kisses 💋
          </button>
        </div>
      </div>

      {/* Floating Kisses Simulation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-20 opacity-40 pointer-events-none flex justify-around items-end pb-4">
        <span className="text-3xl animate-bounce">💋</span>
        <span className="text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>💋</span>
        <span className="text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>💋</span>
        <span className="text-2xl animate-bounce" style={{animationDelay: '0.1s'}}>💋</span>
        <span className="text-3xl animate-bounce" style={{animationDelay: '0.7s'}}>💋</span>
      </div>

      <div className="absolute top-10 right-10">
         <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3orieUe6ejxSFxYCXe/giphy.gif" 
          className="w-20" 
          alt="cat hat" 
        />
      </div>
    </motion.div>
  );
};

export default SealedStep;
