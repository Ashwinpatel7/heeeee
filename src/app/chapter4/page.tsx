'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sprout, Heart, Star, User, Users } from 'lucide-react';
import Link from 'next/link';

export default function Chapter4() {
  const [currentTransformation, setCurrentTransformation] = useState(0);
  const [showComparison, setShowComparison] = useState(false);

  const transformations = [
    {
      title: "Emotional Intelligence",
      before: "I used to react without thinking, letting emotions control me.",
      after: "You taught me to pause, breathe, and respond with intention.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Listening Skills",
      before: "I heard words but missed the feelings behind them.",
      after: "You showed me how to listen with my heart, not just my ears.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Confidence",
      before: "I doubted myself and sought validation constantly.",
      after: "Your belief in me helped me find strength I didn't know I had.",
      icon: <Star className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Empathy",
      before: "I struggled to see beyond my own perspective.",
      after: "You taught me that understanding others is a superpower.",
      icon: <User className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTransformation((prev) => {
        if (prev < transformations.length - 1) {
          return prev + 1;
        } else {
          setShowComparison(true);
          return prev;
        }
      });
    }, 5000); // Increased interval for better performance

    return () => clearInterval(timer);
  }, [transformations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Optimized floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
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
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          <span className="font-handwritten text-purple-400">Chapter 4:</span>
          <br />
          You Changed Me
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The beautiful transformation that happened not overnight, but through every conversation, 
          every laugh, every moment you believed in me.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <AnimatePresence mode="wait">
          {!showComparison ? (
            <motion.div
              key={currentTransformation}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-700 max-w-4xl mx-auto">
                <div className={`text-white mb-6 flex justify-center bg-gradient-to-r ${transformations[currentTransformation].color} w-20 h-20 rounded-full items-center mx-auto`}>
                  {transformations[currentTransformation].icon}
                </div>
                
                <h2 className="text-3xl font-bold text-slate-100 mb-8">
                  {transformations[currentTransformation].title}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Before */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-slate-700/50 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-red-300 mb-4">Before You</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {transformations[currentTransformation].before}
                    </p>
                  </motion.div>

                  {/* After */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30"
                  >
                    <h3 className="text-xl font-semibold text-green-300 mb-4">After You</h3>
                    <p className="text-slate-200 leading-relaxed">
                      {transformations[currentTransformation].after}
                    </p>
                  </motion.div>
                </div>

                {/* Growing plant animation */}
                <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Sprout className="w-12 h-12 text-green-400" />
                </motion.div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {transformations.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index <= currentTransformation ? 'bg-purple-400' : 'bg-slate-600'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-500/30">
                <div className="text-6xl mb-6">🦋</div>
                <h2 className="text-4xl font-bold text-slate-100 mb-8">
                  The Complete Transformation
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-red-300 mb-4">Who I Was</h3>
                    <div className="space-y-3">
                      <div className="bg-slate-700/50 rounded-lg p-4 text-left">
                        <p className="text-slate-300">Reactive and impulsive</p>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4 text-left">
                        <p className="text-slate-300">Poor listener</p>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4 text-left">
                        <p className="text-slate-300">Insecure and doubtful</p>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-4 text-left">
                        <p className="text-slate-300">Self-centered perspective</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-green-300 mb-4">Who I Became</h3>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 text-left border border-purple-400/30">
                        <p className="text-slate-200">Thoughtful and intentional</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 text-left border border-purple-400/30">
                        <p className="text-slate-200">Empathetic listener</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 text-left border border-purple-400/30">
                        <p className="text-slate-200">Confident and self-aware</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 text-left border border-purple-400/30">
                        <p className="text-slate-200">Understanding and compassionate</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-pink-400/30">
                  <p className="text-slate-100 font-handwritten text-2xl leading-relaxed">
                    "You didn't just change my days, Anshita. You changed who I am. 
                    You saw potential in me that I couldn't see in myself, and your belief 
                    became the foundation of my growth. I am forever grateful for the person 
                    you helped me become."
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
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20"
      >
        <Link
          href="/chapter3"
          className="flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm text-slate-200 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-600"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Stormy Skies
        </Link>
        
        <Link
          href="/chapter5"
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          What If...
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
