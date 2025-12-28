
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EnvelopeStepProps {
  onNext: () => void;
}

const EnvelopeStep: React.FC<EnvelopeStepProps> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(onNext, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="text-center"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-2">A Birthday Love Letter 💌</h2>
        <p className="text-gray-500">From my heart to the birthday queen</p>
      </div>

      <div 
        className="relative cursor-pointer transition-transform hover:scale-105"
        onClick={handleClick}
      >
        <div className="w-80 h-56 bg-pink-100 rounded-lg shadow-xl relative overflow-hidden">
          {/* Envelope Body */}
          <div className="absolute inset-0 border-4 border-pink-200 rounded-lg"></div>
          
          {/* Top Flap */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-pink-200 z-20 origin-top"
            animate={{ rotateX: isOpen ? -180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          ></motion.div>

          {/* Sides */}
          <div className="absolute inset-0 bg-pink-50" style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}></div>
          <div className="absolute inset-0 bg-pink-50" style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}></div>
          <div className="absolute inset-0 bg-pink-100" style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}></div>

          {/* The Paper Inside */}
          <motion.div 
            className="absolute top-4 left-4 right-4 h-full bg-white shadow-md p-4 rounded z-10"
            animate={{ y: isOpen ? -80 : 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="w-full h-2 bg-pink-50 mb-2"></div>
            <div className="w-3/4 h-2 bg-pink-50 mb-2"></div>
            <div className="w-full h-2 bg-pink-50 mb-2"></div>
          </motion.div>
        </div>

        <div className="mt-8">
           <p className="text-pink-400 text-sm animate-pulse">Click to open your birthday surprise</p>
           <p className="text-gray-300 text-xs mt-1">Birthday Special Delivery !!!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EnvelopeStep;
