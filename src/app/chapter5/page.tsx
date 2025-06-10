'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Star, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import BridgeBuilder from '@/components/BridgeBuilder';

export default function Chapter5() {
  const [showGame, setShowGame] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [currentWish, setCurrentWish] = useState(0);

  const wishes = [
    {
      text: "What if we talked again like nothing happened?",
      description: "Just two friends sharing stories, laughing at silly things, being ourselves again.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      text: "What if the laughter came back?",
      description: "Those moments when you'd say something funny and I'd smile for hours afterward.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      text: "What if this time, we got it right?",
      description: "With all I've learned, all I've grown, what if we could build something beautiful?",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const handleWishClick = (index: number) => {
    setCurrentWish(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Optimized shooting stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
            }}
            animate={{
              x: [0, 150],
              y: [0, 75],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'easeOut',
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
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          <span className="font-handwritten text-indigo-400">Chapter 5:</span>
          <br />
          What If We Begin Again?
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Under this starry sky, I dare to dream of possibilities. 
          What if the best chapter of our story is still waiting to be written?
        </p>
      </motion.div>

      {/* Wishes Section */}
      <div className="max-w-4xl mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Click on the stars to make a wish ✨
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {wishes.map((wish, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWishClick(index)}
                className={`cursor-pointer bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                  currentWish === index 
                    ? 'border-indigo-400 bg-indigo-500/20' 
                    : 'border-slate-600 hover:border-slate-500'
                }`}
              >
                <div className="text-indigo-400 mb-4 flex justify-center">
                  {wish.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3">
                  {wish.text}
                </h3>
                <p className="text-slate-300 text-sm">
                  {wish.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Current wish display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWish}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-400/30"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                {wishes[currentWish].text}
              </h3>
              <p className="text-slate-200 font-handwritten text-xl leading-relaxed">
                {wishes[currentWish].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bridge Building Game Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-700"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-6 text-center">
            Build Our Bridge Back Together
          </h2>
          <p className="text-slate-300 text-center mb-8 leading-relaxed">
            Every relationship needs strong foundations. Help me build a bridge 
            back to your heart using the building blocks of trust, understanding, and love.
          </p>
          
          {!showGame ? (
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowGame(true)}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Building Our Bridge 🌉
              </motion.button>
            </div>
          ) : (
            <BridgeBuilder onComplete={() => setGameCompleted(true)} />
          )}
        </motion.div>

        {/* Completion Message */}
        <AnimatePresence>
          {gameCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-8 shadow-xl border border-pink-400/30"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-3xl font-bold text-slate-100 mb-6">
                  Our Bridge is Complete!
                </h3>
                <p className="text-slate-200 font-handwritten text-xl leading-relaxed max-w-2xl mx-auto">
                  "Look what we built together—a bridge made of trust, patience, laughter, 
                  space, respect, and support. This is what I believe we can have again. 
                  This is the foundation I want to offer you."
                </p>
                
                <motion.div
                  className="mt-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-12 h-12 text-pink-400 mx-auto" />
                </motion.div>
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
          href="/chapter4"
          className="flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm text-slate-200 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-600"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          You Changed Me
        </Link>
        
        <Link
          href="/final"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          Final Message
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
