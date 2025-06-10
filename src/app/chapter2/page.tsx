'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Heart, Star, Smile } from 'lucide-react';
import Link from 'next/link';
import MemoryMatch from '@/components/MemoryMatch';

export default function Chapter2() {
  const [showGame, setShowGame] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const memories = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "You called me 'mate'",
      description: "and my heart did backflips"
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "That voice note laughing",
      description: "pure joy in audio form"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "You said 'Waahh yrr bohot shi'",
      description: "and I felt like I could conquer the world"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gold-200 rounded-full opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-blush-200 rounded-full opacity-25"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-12 pb-8 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          <span className="font-handwritten text-amber-400">Chapter 2:</span>
          <br />
          Mate Magic
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Those golden days when every conversation felt like sunshine, 
          and your laughter was the best sound in the world.
        </p>
      </motion.div>

      {/* Memory Cards */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="memory-card p-6 text-center"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                {memory.icon}
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">
                {memory.title}
              </h3>
              <p className="text-slate-300 font-handwritten text-lg">
                {memory.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Game Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-8"
        >
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              Memory Match Game
            </h2>
            <p className="text-slate-300 mb-6">
              Let's relive some of our sweetest moments together. 
              Match the cards to unlock precious memories!
            </p>
            
            {!showGame ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowGame(true)}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start the Game ✨
              </motion.button>
            ) : (
              <MemoryMatch onComplete={() => setGameCompleted(true)} />
            )}
          </div>
        </motion.div>

        {/* Reflection after game */}
        <AnimatePresence>
          {gameCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-gold-100 to-blush-100 rounded-3xl p-8 shadow-xl text-center"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Beautiful Memories Unlocked!
              </h3>
              <p className="text-gray-700 font-handwritten text-lg leading-relaxed max-w-2xl mx-auto">
                "Every single one of these moments is etched in my heart. 
                The way you laughed, the way you said 'mate' with such warmth, 
                the way you made ordinary conversations feel extraordinary. 
                Those were the days when everything felt possible."
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4"
      >
        <Link
          href="/chapter1"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          The First Hi
        </Link>
        
        <Link
          href="/chapter3"
          className="flex items-center gap-2 bg-gradient-to-r from-sky-400 to-sky-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          Stormy Skies
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
