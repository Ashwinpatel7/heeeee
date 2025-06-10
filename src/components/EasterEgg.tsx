'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface EasterEggProps {
  message: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export default function EasterEgg({ message, position }: EasterEggProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      setShowMessage(true);
      
      // Hide message after 4 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  };

  return (
    <div 
      className="easter-egg"
      style={position}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="cursor-pointer"
      >
        <Heart 
          className={`w-6 h-6 transition-all duration-300 ${
            isRevealed 
              ? 'text-blush-500 fill-current' 
              : 'text-blush-300 fill-current opacity-60 hover:opacity-100'
          }`}
        />
      </motion.div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-blush-200 max-w-xs">
              <p className="text-sm text-gray-700 font-handwritten text-center">
                {message}
              </p>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-white/95 border-l border-t border-blush-200 rotate-45"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
