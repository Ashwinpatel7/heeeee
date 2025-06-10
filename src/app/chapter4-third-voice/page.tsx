'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, MessageSquare, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ThirdVoiceChapter() {
  const [poppedBubbles, setPoppedBubbles] = useState<number[]>([]);
  const [showTruth, setShowTruth] = useState(false);

  const whisperBubbles = [
    {
      id: 1,
      whisper: "He's too much",
      truth: "He never once stopped caring.",
      position: { top: '20%', left: '15%' }
    },
    {
      id: 2,
      whisper: "You deserve better friends",
      truth: "He was always the first to ask if you were okay.",
      position: { top: '35%', right: '20%' }
    },
    {
      id: 3,
      whisper: "He's just dramatic",
      truth: "He only overtexted because he was scared of losing you.",
      position: { top: '60%', left: '25%' }
    },
    {
      id: 4,
      whisper: "He doesn't understand you",
      truth: "He listened to every word you said with his whole heart.",
      position: { top: '45%', right: '15%' }
    },
    {
      id: 5,
      whisper: "Move on from him",
      truth: "Some friendships are worth fighting for.",
      position: { top: '75%', left: '40%' }
    }
  ];

  const handleBubblePop = (bubbleId: number) => {
    if (!poppedBubbles.includes(bubbleId)) {
      setPoppedBubbles([...poppedBubbles, bubbleId]);
      
      // Show truth revelation after all bubbles are popped
      if (poppedBubbles.length + 1 === whisperBubbles.length) {
        setTimeout(() => setShowTruth(true), 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Subtle floating shadows */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gray-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-12 pb-8 px-6 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className="font-handwritten text-purple-600">Chapter 4:</span>
          <br />
          The Third Voice
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Sometimes the loudest voices aren't the truest ones. 
          Let's uncover what was really happening behind the whispers.
        </p>
      </motion.div>

      {/* Main Scene */}
      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40 min-h-[500px]">
          
          {/* Anshita Character */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-8 bottom-8"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="mt-2 text-center">
                <p className="text-sm font-medium text-gray-700">Anshita</p>
              </div>
            </div>
          </motion.div>

          {/* Ashwin Character (at distance) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-8 bottom-8"
          >
            <div className="relative opacity-60">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">Me</span>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-500">Quietly caring</p>
              </div>
            </div>
          </motion.div>

          {/* Shreya Character (whispering) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-32 bottom-16"
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-600">The Third Voice</p>
              </div>
            </div>
          </motion.div>

          {/* Whisper Bubbles */}
          <AnimatePresence>
            {whisperBubbles.map((bubble) => {
              const isPopped = poppedBubbles.includes(bubble.id);
              
              return (
                <motion.div
                  key={bubble.id}
                  className="absolute cursor-pointer"
                  style={bubble.position}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isPopped ? 0 : 1, 
                    opacity: isPopped ? 0 : 1 
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleBubblePop(bubble.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="relative">
                    <div className="bg-gray-300/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-gray-200/50 max-w-xs">
                      <p className="text-sm text-gray-700 font-medium">
                        "{bubble.whisper}"
                      </p>
                    </div>
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-gray-300/80 rotate-45 border-r border-b border-gray-200/50"></div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Truth Bubbles (appear after whispers are popped) */}
          <AnimatePresence>
            {whisperBubbles.map((bubble) => {
              const isPopped = poppedBubbles.includes(bubble.id);
              
              if (!isPopped) return null;
              
              return (
                <motion.div
                  key={`truth-${bubble.id}`}
                  className="absolute"
                  style={bubble.position}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative">
                    <div className="bg-gradient-to-r from-pink-200 to-purple-200 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-pink-300/50 max-w-xs">
                      <p className="text-sm text-gray-800 font-medium">
                        "{bubble.truth}"
                      </p>
                    </div>
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-gradient-to-r from-pink-200 to-purple-200 rotate-45 border-r border-b border-pink-300/50"></div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Instructions */}
          {poppedBubbles.length < whisperBubbles.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg border border-white/60">
                <p className="text-sm text-gray-700 text-center">
                  Click on the whisper bubbles to reveal the truth behind them
                </p>
                <p className="text-xs text-gray-500 text-center mt-1">
                  {poppedBubbles.length}/{whisperBubbles.length} revealed
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Final Truth Revelation */}
        <AnimatePresence>
          {showTruth && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 shadow-xl border border-pink-200"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  The Truth Revealed
                </h3>
                <p className="text-gray-700 font-handwritten text-xl leading-relaxed max-w-2xl mx-auto mb-6">
                  "Sometimes the loudest voices aren't the truest ones. Behind every whisper of doubt 
                  was a heart that never stopped caring, never stopped hoping, never stopped believing 
                  in the beautiful friendship we had."
                </p>
                
                <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
                  <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                  <p className="text-gray-800 font-medium">
                    This chapter isn't about blame or anger. It's about understanding that sometimes, 
                    well-meaning voices can cloud the truth. What matters is what was real between us—
                    and that was always genuine, always caring, always worth protecting.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20"
      >
        <Link
          href="/chapter3"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Stormy Skies
        </Link>
        
        <Link
          href="/chapter5-realization"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          You Changed Me
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
