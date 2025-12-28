
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SONGS } from '../constants';

interface SoundtrackStepProps {
  onNext: () => void;
}

const SoundtrackStep: React.FC<SoundtrackStepProps> = ({ onNext }) => {
  const [activeSong, setActiveSong] = useState(SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-4xl"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pink-600 flex items-center justify-center gap-2">
           Birthday Vibes Playlist 🎵
        </h2>
        <p className="text-gray-500">Songs to celebrate your special day</p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-pink-50">
        {/* Currently Playing Card */}
        <div className="bg-pink-50 rounded-2xl p-6 mb-10 flex items-center gap-6">
          <img src={activeSong.image} className="w-24 h-24 rounded-xl shadow-md object-cover" alt="Cover" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{activeSong.title}</h3>
            <p className="text-gray-500 text-sm">{activeSong.subtitle}</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="flex-1 h-1 bg-pink-100 rounded-full relative">
                 <div className="absolute top-0 left-0 w-1/3 h-full bg-pink-400 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">{activeSong.duration}</span>
            </div>
          </div>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-pink-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors"
          >
            {isPlaying ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            )}
          </button>
        </div>

        <div className="mb-8 text-center">
          <p className="text-gray-600 font-bold mb-6">Choose your birthday soundtrack</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SONGS.map(song => (
              <div 
                key={song.id}
                onClick={() => {
                  setActiveSong(song);
                  setIsPlaying(true);
                }}
                className={`cursor-pointer rounded-2xl p-4 transition-all transform hover:scale-105 border-2 ${activeSong.id === song.id ? 'border-pink-300 bg-pink-50' : 'border-gray-100'}`}
              >
                <div className="relative mb-3">
                  <img src={song.image} className="w-full aspect-square rounded-xl shadow-sm object-cover" alt={song.title} />
                  {activeSong.id === song.id && isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                       <div className="flex gap-1">
                          <div className="w-1 h-4 bg-white animate-bounce"></div>
                          <div className="w-1 h-6 bg-white animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-1 h-4 bg-white animate-bounce" style={{animationDelay: '0.2s'}}></div>
                       </div>
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-gray-800 text-sm truncate">{song.title}</h4>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{song.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-12 rounded-full shadow-lg transition-all"
          >
            Continue to Birthday Surprises ✨
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SoundtrackStep;
