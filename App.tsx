
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { AppStep } from './types';
import IntroStep from './components/IntroStep';
import EnvelopeStep from './components/EnvelopeStep';
import ReadLetterStep from './components/ReadLetterStep';
import CakeStep from './components/CakeStep';
import WishStep from './components/WishStep';
import SoundtrackStep from './components/SoundtrackStep';
import WishCardsStep from './components/WishCardsStep';
import FinalLetterStep from './components/FinalLetterStep';
import SealedStep from './components/SealedStep';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.INTRO);

  const triggerConfetti = useCallback((style: 'default' | 'burst' = 'default') => {
    if (style === 'burst') {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    } else {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#ec4899', '#ffffff']
      });
    }
  }, []);

  const nextStep = () => {
    const steps = Object.values(AppStep);
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const reset = () => {
    setCurrentStep(AppStep.INTRO);
  };

  useEffect(() => {
    if (currentStep === AppStep.SEALED) {
      triggerConfetti('burst');
    }
  }, [currentStep, triggerConfetti]);

  const renderStepContent = () => {
    switch (currentStep) {
      case AppStep.INTRO: return <IntroStep key="intro" onNext={nextStep} />;
      case AppStep.ENVELOPE: return <EnvelopeStep key="envelope" onNext={nextStep} />;
      case AppStep.READ_LETTER: return <ReadLetterStep key="read-letter" onNext={nextStep} />;
      case AppStep.CAKE_TIME: return <CakeStep key="cake" onNext={nextStep} />;
      case AppStep.WISH_TIME: return <WishStep key="wish" onNext={nextStep} />;
      case AppStep.SOUNDTRACK: return <SoundtrackStep key="soundtrack" onNext={nextStep} />;
      case AppStep.WISH_CARDS: return <WishCardsStep key="wish-cards" onNext={nextStep} />;
      case AppStep.FINAL_LETTER: return <FinalLetterStep key="final-letter" onNext={nextStep} />;
      case AppStep.SEALED: return <SealedStep key="sealed" onReset={reset} />;
      default: return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-[#fff5f7] selection:bg-pink-200">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-pink-100 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px]"
        />
        
        {/* Floating elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 1000 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              y: [-100, 1100],
              x: Math.random() * 50 - 25
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5
            }}
            className="absolute text-2xl"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {['✨', '🌸', '💖', '☁️', '🎈', '🎁'][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="fixed bottom-6 text-pink-400 text-xs font-semibold tracking-widest uppercase z-10"
      >
        Created for a special soul • 2024
      </motion.footer>
    </div>
  );
};

export default App;
