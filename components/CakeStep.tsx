
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface CakeStepProps {
  onNext: () => void;
}

const CakeStep: React.FC<CakeStepProps> = ({ onNext }) => {
  const [isCut, setIsCut] = useState(false);
  const [isCutting, setIsCutting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsCutting(true);
  const handleMouseUp = () => {
    if (isCutting) {
      setIsCutting(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isCutting || isCut) return;
    
    // Simplistic detection: if mouse is in the middle horizontal area
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      
      // If user swipes near the center vertically across the width
      if (relativeX > rect.width * 0.2 && relativeX < rect.width * 0.8 && 
          relativeY > rect.height * 0.4 && relativeY < rect.height * 0.6) {
        setIsCut(true);
        setTimeout(onNext, 2000);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center w-full max-w-xl"
    >
      <h2 className="text-4xl font-bold text-pink-600 mb-2">It's Cake Time! 🎂</h2>
      <p className="text-gray-500 mb-8">Make your birthday wish come true!</p>

      <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-pink-50 relative">
        <div className="mb-6">
          <p className="text-pink-400 font-bold mb-1">Cut your birthday cake, birthday girl!! 🔪</p>
          <p className="text-gray-400 text-sm">Draw a line across the middle of the cake to cut it ✨</p>
        </div>

        <div 
          ref={containerRef}
          className="relative py-10 flex justify-center items-center cursor-crosshair touch-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="relative">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3orieUe6ejxSFxYCXe/giphy.gif"
              className={`w-64 h-64 object-contain transition-all duration-1000 ${isCut ? 'opacity-0 scale-50' : ''}`}
              alt="Cake"
            />
            
            {isCut && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9mcmx4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4cmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/26FL3U1G6v6I0C9uM/giphy.gif"
                  className="w-32 mb-4"
                  alt="Celebrate"
                />
                <h3 className="text-2xl font-bold text-pink-500">Perfect Cut!! ✨</h3>
                <p className="text-gray-500 italic mt-2">May this year bring you everything your heart desires! ❤️</p>
              </motion.div>
            )}

            {!isCut && (
              <div className="absolute top-1/2 left-0 w-full h-1 bg-pink-200 opacity-30 pointer-events-none border-dashed border-t"></div>
            )}
          </div>
        </div>

        <div className="mt-4 text-xs text-pink-300">
          Drag here to cut 🔪
        </div>
      </div>
    </motion.div>
  );
};

export default CakeStep;
