'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, MessageCircle, Star, Mail } from 'lucide-react';
import Link from 'next/link';

export default function FinalPage() {
  const [showButtons, setShowButtons] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<'talk' | 'not-now' | null>(null);

  const handleReadComplete = () => {
    setShowButtons(true);
  };

  const handleChoice = (choice: 'talk' | 'not-now') => {
    setSelectedChoice(choice);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Optimized floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4,
            }}
          >
            <Heart className="w-3 h-3 text-pink-300/30" />
          </motion.div>
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
          <span className="font-handwritten text-pink-400">No Pressure.</span>
          <br />
          <span className="font-handwritten text-purple-400">Just Hope.</span>
        </h1>
      </motion.div>

      {/* Main Message */}
      <div className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-slate-700"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl mb-6"
            >
              💕
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-6 text-slate-200 leading-relaxed"
          >
            <div className="text-center">
              <h2 className="text-2xl font-handwritten text-pink-300 mb-6">
                Anshita,
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-xl font-handwritten leading-relaxed"
            >
              This space was made not to beg, not to guilt, but to remind you how deeply 
              loved you were, and always will be.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-lg md:text-xl font-handwritten leading-relaxed"
            >
              I miss us. I believe in us. But I also believe in your heart, 
              whatever it chooses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-lg md:text-xl font-handwritten leading-relaxed"
            >
              If you ever feel ready... I'll be here. If not, I understand that too, 
              and I'll carry the beautiful memories we made with gratitude in my heart.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              onAnimationComplete={handleReadComplete}
              className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-400/30 text-center"
            >
              <p className="text-xl font-handwritten text-pink-200 leading-relaxed">
                "Thank you for being the most beautiful chapter in my story. 
                Thank you for changing me, for believing in me, for showing me 
                what it means to care for someone with your whole heart."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="text-center pt-4"
            >
              <p className="text-slate-300 font-handwritten text-lg">
                With all my love and respect,
              </p>
              <p className="text-slate-300 font-handwritten text-lg mt-2">
                Someone who will always care about you 💙
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Choice Buttons */}
        <AnimatePresence>
          {showButtons && !selectedChoice && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-slate-300 mb-8 font-handwritten text-lg">
                The choice is yours, and whatever you choose, I respect completely.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleChoice('talk')}
                  className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Let's Talk Again 💕
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleChoice('not-now')}
                  className="flex items-center gap-3 bg-slate-700/80 backdrop-blur-sm text-slate-200 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-600"
                >
                  <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Not Now, But Thank You 🌟
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Response Messages */}
        <AnimatePresence>
          {selectedChoice === 'talk' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-8 border border-pink-400/30 text-center"
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                My heart is so full right now! 
              </h3>
              <p className="text-slate-200 mb-6 font-handwritten text-lg leading-relaxed">
                I can't wait to hear your voice again, to share stories, to laugh together. 
                Thank you for giving us another chance.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </motion.div>
          )}

          {selectedChoice === 'not-now' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-400/30 text-center"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                I understand, and I respect your choice.
              </h3>
              <p className="text-slate-200 font-handwritten text-lg leading-relaxed max-w-2xl mx-auto">
                Thank you for taking the time to go through this journey with me. 
                You'll always have a special place in my heart, and I wish you 
                nothing but happiness and beautiful moments ahead.
              </p>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mt-6"
              >
                <Heart className="w-12 h-12 text-blue-400 mx-auto" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-8 left-8 z-20"
      >
        <Link
          href="/chapter6-what-ifs"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to What If...
        </Link>
      </motion.div>
    </div>
  );
}
