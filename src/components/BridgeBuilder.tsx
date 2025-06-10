'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, Smile, Clock, Handshake, Users } from 'lucide-react';

interface BridgeBuilderProps {
  onComplete: () => void;
}

interface Brick {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  placed: boolean;
  position?: { x: number; y: number };
}

export default function BridgeBuilder({ onComplete }: BridgeBuilderProps) {
  const [bricks, setBricks] = useState<Brick[]>([
    {
      id: 'trust',
      name: 'Trust',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      placed: false
    },
    {
      id: 'patience',
      name: 'Patience',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      placed: false
    },
    {
      id: 'laughter',
      name: 'Laughter',
      icon: <Smile className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      placed: false
    },
    {
      id: 'respect',
      name: 'Respect',
      icon: <Handshake className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      placed: false
    },
    {
      id: 'support',
      name: 'Support',
      icon: <Users className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      placed: false
    },
    {
      id: 'love',
      name: 'Love',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      placed: false
    }
  ]);

  const [bridgeProgress, setBridgeProgress] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleBrickClick = useCallback((brickId: string) => {
    setBricks(prev => prev.map(brick =>
      brick.id === brickId ? { ...brick, placed: true } : brick
    ));

    setBridgeProgress(prev => prev + 1);
  }, []);

  useEffect(() => {
    if (bridgeProgress === bricks.length) {
      setShowCelebration(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  }, [bridgeProgress, bricks.length, onComplete]);

  const bridgePositions = [
    { x: 10, y: 80 },
    { x: 25, y: 70 },
    { x: 40, y: 60 },
    { x: 55, y: 60 },
    { x: 70, y: 70 },
    { x: 85, y: 80 }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Instructions */}
      <div className="text-center mb-8">
        <p className="text-slate-300 mb-4">
          Click on each building block to place it on our bridge
        </p>
        <div className="text-sm text-slate-400">
          Progress: {bridgeProgress}/{bricks.length} blocks placed
        </div>
      </div>

      {/* Bridge Canvas */}
      <div className="relative bg-gradient-to-b from-slate-700/30 to-slate-800/50 rounded-2xl p-8 mb-8 h-64 overflow-hidden">
        {/* River */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-b-2xl">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Left side (Me) */}
        <div className="absolute left-4 bottom-16 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">Me</span>
        </div>

        {/* Right side (Anshita) */}
        <div className="absolute right-4 bottom-16 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">You</span>
        </div>

        {/* Bridge blocks */}
        <AnimatePresence>
          {bricks.map((brick, index) => {
            if (!brick.placed) return null;
            
            const position = bridgePositions[index];
            return (
              <motion.div
                key={brick.id}
                initial={{ y: -100, opacity: 0, scale: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  x: `${position.x}%`,
                  bottom: `${position.y}px`
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: index * 0.2
                }}
                className={`absolute w-16 h-12 bg-gradient-to-r ${brick.color} rounded-lg flex flex-col items-center justify-center shadow-lg border border-white/20`}
                style={{ 
                  left: `${position.x}%`,
                  bottom: `${position.y}px`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="text-white text-xs">
                  {brick.icon}
                </div>
                <div className="text-white text-xs font-medium">
                  {brick.name}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Optimized celebration effects */}
        <AnimatePresence>
          {showCelebration && (
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0],
                    y: [-15, -45]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: Math.random() * 0.8,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Available Bricks */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {bricks.map((brick) => (
          <motion.button
            key={brick.id}
            whileHover={!brick.placed ? { scale: 1.05, y: -5 } : {}}
            whileTap={!brick.placed ? { scale: 0.95 } : {}}
            onClick={() => !brick.placed && handleBrickClick(brick.id)}
            disabled={brick.placed}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              brick.placed
                ? 'bg-slate-700/30 border-slate-600 opacity-50 cursor-not-allowed'
                : `bg-gradient-to-r ${brick.color} border-white/20 hover:border-white/40 cursor-pointer shadow-lg hover:shadow-xl`
            }`}
          >
            <div className="text-white mb-2 flex justify-center">
              {brick.icon}
            </div>
            <div className="text-white font-medium text-sm">
              {brick.name}
            </div>
            {brick.placed && (
              <div className="text-green-300 text-xs mt-1">
                ✓ Placed
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Message */}
      <AnimatePresence>
        {bridgeProgress > 0 && bridgeProgress < bricks.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mt-6"
          >
            <p className="text-slate-300 font-handwritten text-lg">
              {bridgeProgress === 1 && "Great start! Keep building..."}
              {bridgeProgress === 2 && "The foundation is getting stronger..."}
              {bridgeProgress === 3 && "Halfway there! You're doing amazing..."}
              {bridgeProgress === 4 && "Almost complete! Just a little more..."}
              {bridgeProgress === 5 && "One more piece and we'll be connected..."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion Message */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            <div className="text-4xl mb-4">🌉✨</div>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Bridge Complete!
            </h3>
            <p className="text-slate-300 font-handwritten text-lg">
              "Together, we built something beautiful. This bridge represents 
              everything I want our friendship to be built on."
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
