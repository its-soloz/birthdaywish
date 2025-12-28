
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WISH_CARDS_DATA } from '../constants';

interface WishCardsStepProps {
  onNext: () => void;
}

const WishCardsStep: React.FC<WishCardsStepProps> = ({ onNext }) => {
  const [cards, setCards] = useState(WISH_CARDS_DATA);
  const [revealedCount, setRevealedCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleFlip = (id: number) => {
    setCards(prev => prev.map(card => {
      if (card.id === id && !card.isRevealed) {
        setRevealedCount(curr => curr + 1);
        return { ...card, isRevealed: true };
      }
      return card;
    }));

    if (revealedCount === 2) {
      setTimeout(() => setShowModal(true), 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-5xl"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pink-600 flex items-center justify-center gap-2">
           Birthday Wishes Cards 🎁
        </h2>
        <p className="text-gray-500">Click each card to reveal a birthday message!</p>
      </div>

      <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-pink-50 min-h-[400px] flex flex-col justify-center">
        {revealedCount === 0 && (
          <p className="text-center text-gray-400 mb-8 animate-pulse">Start discovering your birthday surprises ✨</p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(card => (
            <div 
              key={card.id}
              className="relative h-64 w-full cursor-pointer perspective-1000"
              onClick={() => handleFlip(card.id)}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-700"
                animate={{ rotateY: card.isRevealed ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-pink-50 rounded-2xl flex items-center justify-center p-4 shadow-md border-2 border-pink-100 overflow-hidden">
                   <img src={card.frontImage} className="w-full h-full object-cover rounded-xl opacity-80" alt="Front" />
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-md border-2 border-pink-200 text-center transform rotate-y-180">
                  <p className="text-gray-700 font-medium mb-4">{card.message}</p>
                  <button className="text-xs bg-pink-100 text-pink-500 px-4 py-1 rounded-full font-bold">Tap to flip back</button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {revealedCount < 3 ? (
            <p className="text-pink-400 font-medium">{revealedCount} of 3 birthday wishes unlocked! Keep going 🎉</p>
          ) : (
            <p className="text-green-400 font-bold animate-bounce">Amazing! All birthday wishes revealed!! ✨</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl text-center border-4 border-pink-100"
            >
              <div className="mb-6 flex justify-center">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5bXF6ZXZycG95eXZ6ZXZycG95eXZ6ZXZycG95eXZ6ZXZycG95ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vRAnVvQByo330G8S9Y/giphy.gif" className="w-24" alt="Celebration" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">All Birthday Wishes Unlocked! 💖</h3>
              <p className="text-gray-500 mb-8">Each wish carries my love and hopes for your amazing new year ahead ✨</p>
              
              <div className="space-y-4">
                <button
                  onClick={onNext}
                  className="w-full bg-pink-500 text-white font-bold py-4 rounded-full shadow-lg hover:bg-pink-600 transition-all flex items-center justify-center gap-2"
                >
                  Open Final Birthday Letter <span className="text-xl">💌</span>
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-gray-50 text-gray-400 font-bold py-2 rounded-full hover:bg-gray-100 transition-all"
                >
                  Enjoy the wishes a bit longer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </motion.div>
  );
};

export default WishCardsStep;
