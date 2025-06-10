'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Sun, Star, Smile, Rainbow, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function YourHappinessPage() {
  const [currentWish, setCurrentWish] = useState(0);

  const wishes = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "I hope you wake up excited about your day",
      description: "That you have things to look forward to, dreams that make you smile, and moments that fill your heart with joy.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "I hope you feel deeply loved",
      description: "By family, friends, and most importantly, by yourself. You deserve all the love this world has to offer.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "I hope your dreams come true",
      description: "Every goal you've set, every aspiration you hold dear—I hope they unfold beautifully in your life.",
      color: "from-purple-400 to-violet-400"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "I hope you laugh often",
      description: "That genuine, beautiful laugh of yours—I hope it fills your days and brings light to everyone around you.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <Rainbow className="w-8 h-8" />,
      title: "I hope you find peace in storms",
      description: "When life gets difficult, I hope you remember how strong you are and find calm in the chaos.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "I hope you know your worth",
      description: "You are extraordinary, kind, intelligent, and deserving of every beautiful thing life has to offer.",
      color: "from-indigo-400 to-purple-400"
    }
  ];

  const selfCareReminders = [
    "Drink water and nourish your body",
    "Get enough sleep—you deserve rest",
    "Spend time with people who appreciate you",
    "Do things that make you feel alive",
    "Be gentle with yourself on hard days",
    "Celebrate your small victories",
    "Trust your instincts—they're usually right",
    "Take breaks when you need them"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Floating happiness elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          >
            {i % 4 === 0 && <Sun className="w-6 h-6" />}
            {i % 4 === 1 && <Heart className="w-6 h-6" />}
            {i % 4 === 2 && <Star className="w-6 h-6" />}
            {i % 4 === 3 && <Sparkles className="w-6 h-6" />}
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className="font-handwritten text-yellow-600">Your Happiness</span>
          <br />
          <span className="font-handwritten text-pink-600">Matters Most</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Above everything else—above our friendship, above my feelings, above any history we have—
          your happiness and well-being matter most to me.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* Wishes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/60 cursor-pointer"
              onClick={() => setCurrentWish(index)}
            >
              <div className={`text-white mb-4 flex justify-center bg-gradient-to-r ${wish.color} w-16 h-16 rounded-full items-center mx-auto`}>
                {wish.icon}
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                {wish.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed text-center font-handwritten">
                {wish.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Self-Care Reminders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 shadow-xl border border-pink-200 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Gentle Reminders for You
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {selfCareReminders.map((reminder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                className="bg-white/60 rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="text-pink-500">💝</div>
                  <p className="text-gray-700 text-sm font-handwritten">
                    {reminder}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-3xl p-8 shadow-xl border border-yellow-200"
        >
          <div className="text-center">
            <div className="text-6xl mb-6">🌈</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              No Matter What
            </h2>
            
            <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-800 font-handwritten text-xl leading-relaxed mb-4">
                "Whether we talk again or not, whether we rebuild our friendship or not, 
                whether you forgive me or not—I want you to be happy. I want you to thrive. 
                I want you to live a life so beautiful that it takes your breath away."
              </p>
              
              <p className="text-gray-800 font-handwritten text-lg leading-relaxed">
                "Your happiness doesn't depend on me, and it shouldn't. You deserve joy 
                that comes from within, love that surrounds you, and dreams that come true. 
                That's what I wish for you, always."
              </p>
            </div>

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
              className="mt-6"
            >
              <Heart className="w-16 h-16 text-pink-500 mx-auto fill-current" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="fixed bottom-8 left-8 z-20"
      >
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
