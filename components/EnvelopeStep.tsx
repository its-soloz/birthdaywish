
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EnvelopeStepProps {
  onNext: () => void;
}

const EnvelopeStep: React.FC<EnvelopeStepProps> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(onNext, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="text-center"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-pink-600 mb-3">A Special Delivery 💌</h2>
        <p className="text-gray-500 font-medium">For the one who makes life magical...</p>
      </div>

      <div 
        className="relative cursor-pointer group flex justify-center"
        onClick={handleClick}
      >
        <div className="w-[340px] h-[240px] bg-pink-100 rounded-xl shadow-[0_20px_50px_rgba(244,114,182,0.2)] relative overflow-visible transition-transform duration-500 group-hover:scale-105">
          {/* Top Flap */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-pink-200 z-30 origin-top shadow-md flex items-center justify-center"
            animate={{ rotateX: isOpen ? -110 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              backfaceVisibility: 'hidden'
            }}
          >
             {!isOpen && (
               <div className="absolute bottom-2 w-10 h-10 bg-red-500 rounded-full border-2 border-red-600 shadow-inner flex items-center justify-center text-white text-xs font-bold">
                 ❤️
               </div>
             )}
          </motion.div>

          {/* Letter Peek */}
          <motion.div 
            className="absolute top-6 left-6 right-6 bottom-6 bg-white shadow-lg p-6 rounded-sm z-10 flex flex-col gap-2"
            animate={{ y: isOpen ? -110 : 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full h-3 bg-pink-50 rounded-full"></div>
            <div className="w-4/5 h-3 bg-pink-50 rounded-full"></div>
            <div className="w-full h-3 bg-pink-50 rounded-full"></div>
            <div className="w-3/4 h-3 bg-pink-100 rounded-full mt-4 self-end"></div>
          </motion.div>

          {/* Envelope Bottom/Sides */}
          <div className="absolute inset-0 bg-pink-50 z-20" style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}></div>
          <div className="absolute inset-0 bg-pink-50 z-20" style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}></div>
          <div className="absolute inset-0 bg-pink-100 z-20 shadow-inner" style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}></div>
        </div>

        <motion.div 
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="absolute -bottom-20 w-full text-center space-y-2"
        >
           <p className="text-pink-500 font-bold animate-pulse text-lg">Tap to Open ✨</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EnvelopeStep;
