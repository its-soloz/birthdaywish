
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

  const triggerConfetti = useCallback(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
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
    if (currentStep === AppStep.CAKE_TIME || currentStep === AppStep.SEALED) {
      triggerConfetti();
    }
  }, [currentStep, triggerConfetti]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-[#fff5f7]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50 floating"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-100 rounded-full blur-2xl opacity-60 floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-40 floating" style={{ animationDelay: '2s' }}></div>
        
        {/* Clouds & Hearts Simulation */}
        <div className="absolute top-[10%] left-[5%] text-4xl opacity-40 floating">☁️</div>
        <div className="absolute top-[15%] right-[10%] text-4xl opacity-40 floating" style={{ animationDelay: '1.5s' }}>☁️</div>
        <div className="absolute bottom-[20%] right-[5%] text-2xl opacity-30 floating">💖</div>
        <div className="absolute top-[40%] left-[8%] text-2xl opacity-30 floating" style={{ animationDelay: '0.8s' }}>✨</div>
        <div className="absolute top-[10%] left-[20%] text-sm text-pink-300">🌸</div>
        <div className="absolute top-[8%] right-[25%] text-sm text-pink-300">🎀</div>
      </div>

      <main className="relative z-10 w-full max-w-4xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentStep === AppStep.INTRO && <IntroStep key="intro" onNext={nextStep} />}
          {currentStep === AppStep.ENVELOPE && <EnvelopeStep key="envelope" onNext={nextStep} />}
          {currentStep === AppStep.READ_LETTER && <ReadLetterStep key="read-letter" onNext={nextStep} />}
          {currentStep === AppStep.CAKE_TIME && <CakeStep key="cake" onNext={nextStep} />}
          {currentStep === AppStep.WISH_TIME && <WishStep key="wish" onNext={nextStep} />}
          {currentStep === AppStep.SOUNDTRACK && <SoundtrackStep key="soundtrack" onNext={nextStep} />}
          {currentStep === AppStep.WISH_CARDS && <WishCardsStep key="wish-cards" onNext={nextStep} />}
          {currentStep === AppStep.FINAL_LETTER && <FinalLetterStep key="final-letter" onNext={nextStep} />}
          {currentStep === AppStep.SEALED && <SealedStep key="sealed" onReset={reset} />}
        </AnimatePresence>
      </main>

      <footer className="mt-8 text-pink-400 text-sm opacity-70 relative z-10">
        Made with endless love for your special day ✔️
      </footer>
    </div>
  );
};

export default App;
