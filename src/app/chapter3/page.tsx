'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Cloud, CloudRain, Heart, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Chapter3() {
  const [showReflection, setShowReflection] = useState(false);
  const [currentMistake, setCurrentMistake] = useState(0);

  const mistakes = [
    {
      title: "When I panicked about Instagram",
      description: "I let my insecurities cloud my judgment and questioned your intentions instead of trusting you.",
      icon: <AlertCircle className="w-6 h-6" />,
      apology: "I'm sorry for doubting you when you were just being yourself."
    },
    {
      title: "When I texted too much",
      description: "I overwhelmed you with messages when you needed space to breathe and process.",
      icon: <CloudRain className="w-6 h-6" />,
      apology: "I'm sorry for not respecting your boundaries and giving you the space you needed."
    },
    {
      title: "When you needed space and I didn't give it",
      description: "I was so afraid of losing you that I held on too tight, pushing you further away.",
      icon: <Cloud className="w-6 h-6" />,
      apology: "I'm sorry for being selfish with your time and energy when you were already struggling."
    }
  ];

  const handleNext = () => {
    if (currentMistake < mistakes.length - 1) {
      setCurrentMistake(currentMistake + 1);
    } else {
      setShowReflection(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Optimized rain effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-6 bg-blue-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10px`,
            }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'linear',
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
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          <span className="font-handwritten text-blue-400">Chapter 3:</span>
          <br />
          Stormy Skies
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The moments when clouds gathered and I lost my way. 
          These are the storms I created, and the lessons they taught me.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
        <AnimatePresence mode="wait">
          {!showReflection ? (
            <motion.div
              key={currentMistake}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-700"
            >
              <div className="text-center mb-8">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {mistakes[currentMistake].icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">
                  {mistakes[currentMistake].title}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {mistakes[currentMistake].description}
                </p>
                
                <div className="bg-slate-700/50 rounded-2xl p-6 mb-8">
                  <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <p className="text-pink-300 font-handwritten text-xl leading-relaxed">
                    "{mistakes[currentMistake].apology}"
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {currentMistake < mistakes.length - 1 ? 'Next Lesson' : 'What I Learned'}
                </motion.button>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {mistakes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentMistake ? 'bg-blue-400' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-600"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">🌈</div>
                <h2 className="text-3xl font-bold text-slate-100 mb-6">
                  After Every Storm, There's Growth
                </h2>
                <div className="space-y-6 text-left max-w-2xl mx-auto">
                  <div className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">I learned to listen</h3>
                    <p className="text-slate-300">Instead of reacting from fear, I learned to pause and truly hear what you were saying.</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">I learned about boundaries</h3>
                    <p className="text-slate-300">Respecting space isn't rejection—it's love in its most understanding form.</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-pink-300 mb-3">I learned about trust</h3>
                    <p className="text-slate-300">Real connection means believing in someone's heart, even when insecurity whispers doubts.</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl">
                  <p className="text-slate-200 font-handwritten text-xl leading-relaxed">
                    "Every mistake was a teacher. Every storm made me stronger. 
                    I'm not the same person who hurt you—I'm someone who learned from loving you."
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
          href="/chapter2"
          className="flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm text-slate-200 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-600"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Mate Magic
        </Link>
        
        <Link
          href="/chapter4"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          You Changed Me
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
