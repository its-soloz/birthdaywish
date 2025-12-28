
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface CakeStepProps {
  onNext: () => void;
}

const CakeStep: React.FC<CakeStepProps> = ({ onNext }) => {
  const [isCut, setIsCut] = useState(false);
  const knifeX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (_: any, info: any) => {
    if (isCut) return;
    
    // If the knife is dragged past 70% of the container width, trigger the cut
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (info.point.x > rect.left + rect.width * 0.7) {
        setIsCut(true);
        setTimeout(onNext, 2500);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center w-full max-w-xl px-4"
    >
      <h2 className="text-4xl font-bold text-pink-600 mb-2">It's Cake Time! 🎂</h2>
      <p className="text-gray-500 mb-8">Make your birthday wish come true!</p>

      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-2 border-pink-50 relative overflow-hidden">
        <div className="mb-10">
          <p className="text-pink-500 font-bold mb-1 text-xl">Cut your birthday cake!! 🔪</p>
          <p className="text-gray-400 text-sm">Drag the knife across the cake to slice it ✨</p>
        </div>

        <div 
          ref={containerRef}
          className="relative h-64 flex justify-center items-center touch-none select-none"
        >
          {/* The Cake */}
          <div className="relative">
            <motion.img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3orieUe6ejxSFxYCXe/giphy.gif"
              className="w-56 h-56 object-contain"
              animate={isCut ? { 
                x: [0, -20], 
                opacity: [1, 0], 
                scale: [1, 0.8],
                rotate: [0, -5] 
              } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              alt="Cake Left"
              style={{ clipPath: isCut ? 'inset(0 50% 0 0)' : 'none', position: isCut ? 'absolute' : 'relative' }}
            />
            {isCut && (
              <motion.img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3orieUe6ejxSFxYCXe/giphy.gif"
                className="w-56 h-56 object-contain"
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: 20, opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                alt="Cake Right"
                style={{ clipPath: 'inset(0 0 0 50%)' }}
              />
            )}
            
            {/* Cut Effect Sparkles */}
            {isCut && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
              >
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/26FL3U1G6v6I0C9uM/giphy.gif"
                  className="w-32 mb-4"
                  alt="Celebrate"
                />
                <h3 className="text-3xl font-bold text-pink-500 drop-shadow-sm">Perfect Cut!! ✨</h3>
                <p className="text-gray-500 italic mt-2 font-medium">Enjoy your virtual slice! ❤️</p>
              </motion.div>
            )}

            {/* Knife Drag Area */}
            {!isCut && (
              <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
                 <div className="w-full h-1 border-t-2 border-dashed border-pink-200 opacity-50"></div>
              </div>
            )}
            
            {!isCut && (
              <motion.div
                drag="x"
                dragConstraints={containerRef}
                dragElastic={0.1}
                onDrag={handleDrag}
                className="absolute left-[-40px] z-30 cursor-grab active:cursor-grabbing pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="text-5xl filter drop-shadow-lg transform -rotate-45">🔪</div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-pink-500 text-white text-[10px] px-2 py-1 rounded-full animate-bounce">
                  Slide to cut
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-8 text-sm text-pink-300 font-medium">
          {isCut ? "A magical start to a magical year!" : "Slide the knife from left to right 🍰"}
        </div>

        {/* Decorative corner sparkles */}
        <div className="absolute top-4 left-4 text-xl opacity-20">✨</div>
        <div className="absolute bottom-4 right-4 text-xl opacity-20">✨</div>
      </div>
    </motion.div>
  );
};

export default CakeStep;
