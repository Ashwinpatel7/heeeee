'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HiddenComplimentsProps {
  children: React.ReactNode;
}

const compliments = [
  "Your laugh could light up the darkest room",
  "You have the kindest heart I've ever known",
  "Your strength inspires everyone around you",
  "You make the world a better place just by being in it",
  "Your smile is pure sunshine",
  "You have this amazing way of making people feel heard",
  "Your intelligence is matched only by your compassion",
  "You're the kind of person who makes others believe in goodness",
  "Your gentle spirit is a gift to this world",
  "You have the most beautiful soul",
  "Your wisdom always amazed me",
  "You're stronger than you know and more loved than you realize",
  "Your presence alone brings peace to chaotic moments",
  "You have this magical ability to see the best in people",
  "Your kindness creates ripples of joy wherever you go"
];

export default function HiddenCompliments({ children }: HiddenComplimentsProps) {
  const [showCompliment, setShowCompliment] = useState(false);
  const [currentCompliment, setCurrentCompliment] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCurrentCompliment(randomCompliment);
    setPosition({ x: e.clientX, y: e.clientY });
    setShowCompliment(true);
  };

  const handleMouseLeave = () => {
    setShowCompliment(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        {children}
      </div>

      <AnimatePresence>
        {showCompliment && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: position.x - 150,
              top: position.y - 60,
            }}
          >
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-pink-200 max-w-xs">
              <p className="text-sm text-gray-800 font-handwritten text-center leading-relaxed">
                {currentCompliment} ✨
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-gradient-to-r from-pink-100 to-purple-100 border-r border-b border-pink-200 rotate-45"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
