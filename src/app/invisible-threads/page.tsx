'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, Star, Moon, Sun, Cloud } from 'lucide-react';
import Link from 'next/link';

export default function InvisibleThreadsPage() {
  const [connectedMoments, setConnectedMoments] = useState<number[]>([]);

  const threads = [
    {
      id: 1,
      time: "11:11 PM",
      myThought: "I wonder if you're looking at the same stars",
      yourMoment: "Maybe you're having a peaceful night",
      connection: "We're under the same sky, breathing the same air",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-400 to-indigo-400"
    },
    {
      id: 2,
      time: "Morning Coffee",
      myThought: "I hope you're having a good morning",
      yourMoment: "Maybe you're starting your day with hope",
      connection: "Two cups of warmth, miles apart but somehow together",
      icon: <Sun className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 3,
      time: "Rainy Days",
      myThought: "I hope you're staying warm and dry",
      yourMoment: "Maybe you're listening to the rain too",
      connection: "The same clouds that bring me peace might be over you",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 4,
      time: "When I See Something Funny",
      myThought: "You would have laughed at this",
      yourMoment: "Maybe you're laughing at something else right now",
      connection: "Joy connects us even when we're apart",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-400 to-rose-400"
    },
    {
      id: 5,
      time: "Before Sleep",
      myThought: "I hope you had a good day",
      yourMoment: "Maybe you're finding peace as the day ends",
      connection: "Two hearts wishing each other well in the quiet darkness",
      icon: <Moon className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-400"
    }
  ];

  useEffect(() => {
    // Animate threads appearing one by one
    threads.forEach((thread, index) => {
      setTimeout(() => {
        setConnectedMoments(prev => [...prev, thread.id]);
      }, (index + 1) * 1000);
    });
  }, [threads]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated connection lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100px',
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="font-handwritten text-purple-300">Invisible Threads</span>
        </h1>
        <p className="text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed">
          The connections that exist beyond words, beyond distance, beyond silence. 
          How we're still connected even when we're apart.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* Connection Visualization */}
        <div className="relative mb-12">
          <div className="flex justify-between items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-lg">Me</span>
              </div>
              <p className="text-purple-200 text-sm">Thinking of you</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-lg">You</span>
              </div>
              <p className="text-purple-200 text-sm">Living your life</p>
            </motion.div>
          </div>

          {/* Connecting threads */}
          <div className="relative">
            <svg className="w-full h-32" viewBox="0 0 400 100">
              <defs>
                <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
              
              {connectedMoments.map((_, i) => (
                <motion.path
                  key={i}
                  d={`M 50 50 Q 200 ${20 + i * 15} 350 50`}
                  stroke="url(#threadGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.3 }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Thread Cards */}
        <div className="space-y-6 mb-12">
          {threads.map((thread, index) => (
            <AnimatePresence key={thread.id}>
              {connectedMoments.includes(thread.id) && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-white bg-gradient-to-r ${thread.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                      {thread.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {thread.time}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-400/30">
                      <h4 className="font-semibold text-blue-200 mb-2">My Thought:</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        {thread.myThought}
                      </p>
                    </div>

                    <div className="bg-pink-500/20 rounded-xl p-4 border border-pink-400/30">
                      <h4 className="font-semibold text-pink-200 mb-2">Your Moment:</h4>
                      <p className="text-pink-100 text-sm leading-relaxed">
                        {thread.yourMoment}
                      </p>
                    </div>

                    <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-400/30">
                      <h4 className="font-semibold text-purple-200 mb-2">The Connection:</h4>
                      <p className="text-purple-100 text-sm leading-relaxed font-handwritten">
                        {thread.connection}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 shadow-xl border border-purple-400/30"
        >
          <div className="text-center">
            <div className="text-6xl mb-6">🌌</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Always Connected
            </h2>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-white font-handwritten text-xl leading-relaxed mb-4">
                "Distance doesn't break the threads that connect hearts. Silence doesn't cut the bonds 
                that tie souls together. Even when we don't speak, even when we're apart, 
                there's something invisible that keeps us connected."
              </p>
              
              <p className="text-purple-200 font-handwritten text-lg leading-relaxed">
                "Maybe you feel it too—those moments when you think of our friendship, 
                when you wonder how I'm doing, when you remember something we shared. 
                Those are the threads pulling gently, reminding us that some connections 
                are stronger than circumstances."
              </p>
            </div>

            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mt-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 7 }}
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
