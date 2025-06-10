'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Heart, MessageSquare, AlertTriangle, Pause } from 'lucide-react';
import Link from 'next/link';

export default function DayEverythingChangedPage() {
  const [currentMoment, setCurrentMoment] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const timeline = [
    {
      time: "Morning",
      icon: <Clock className="w-6 h-6" />,
      moment: "Everything was normal",
      description: "We were talking like we always did. I felt secure in our friendship, maybe too secure.",
      emotion: "Comfortable, unaware",
      color: "from-blue-400 to-cyan-400"
    },
    {
      time: "The Trigger",
      icon: <MessageSquare className="w-6 h-6" />,
      moment: "I saw you active but not replying",
      description: "Instead of trusting you, instead of giving you space, I let my insecurities take over.",
      emotion: "Anxious, possessive",
      color: "from-yellow-400 to-orange-400"
    },
    {
      time: "The Mistake",
      icon: <AlertTriangle className="w-6 h-6" />,
      moment: "I questioned your intentions",
      description: "I sent messages that came from fear, not love. I made it about me instead of respecting your boundaries.",
      emotion: "Defensive, scared",
      color: "from-red-400 to-pink-400"
    },
    {
      time: "The Escalation",
      icon: <Heart className="w-6 h-6" />,
      moment: "I couldn't stop myself",
      description: "Each message made it worse. I was drowning and pulling you down with me instead of learning to swim.",
      emotion: "Desperate, overwhelming",
      color: "from-purple-400 to-violet-400"
    },
    {
      time: "The Breaking Point",
      icon: <Pause className="w-6 h-6" />,
      moment: "You needed space",
      description: "You asked for what you needed, and instead of honoring it, I made it about my pain. I failed you.",
      emotion: "Selfish, blind",
      color: "from-gray-400 to-slate-400"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentMoment(prev => {
          if (prev < timeline.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, timeline.length]);

  const startTimeline = () => {
    setCurrentMoment(0);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Floating clock elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-700"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            <Clock className="w-6 h-6" />
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="font-handwritten text-red-400">The Day Everything Changed</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A moment-by-moment account of how I let my fears destroy something beautiful. 
          This is my truth, my responsibility, my deepest regret.
        </p>
      </motion.div>

      {/* Timeline Control */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startTimeline}
            disabled={isPlaying}
            className={`px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 ${
              isPlaying 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:shadow-xl'
            }`}
          >
            {isPlaying ? 'Playing Timeline...' : 'Relive That Day'}
          </motion.button>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-red-500 to-gray-500 opacity-30"></div>

          {/* Timeline moments */}
          <div className="space-y-12">
            {timeline.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={{ 
                  opacity: currentMoment >= index ? 1 : 0.3,
                  scale: currentMoment === index ? 1.05 : currentMoment > index ? 1 : 0.9
                }}
                transition={{ duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    animate={{
                      scale: currentMoment === index ? [1, 1.3, 1] : 1,
                      boxShadow: currentMoment === index ? 
                        ['0 0 0 0 rgba(239, 68, 68, 0.7)', '0 0 0 20px rgba(239, 68, 68, 0)', '0 0 0 0 rgba(239, 68, 68, 0)'] : 
                        'none'
                    }}
                    transition={{ duration: 2, repeat: currentMoment === index ? Infinity : 0 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${moment.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {moment.icon}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {moment.time}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">
                        {moment.moment}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h5 className="font-semibold text-gray-200 mb-2">What Happened:</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {moment.description}
                        </p>
                      </div>

                      <div className="bg-red-500/20 rounded-xl p-4 border border-red-400/30">
                        <h5 className="font-semibold text-red-200 mb-2">My Emotional State:</h5>
                        <p className="text-red-100 text-sm leading-relaxed font-handwritten">
                          {moment.emotion}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: currentMoment >= timeline.length - 1 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-gray-800/80 to-black/80 rounded-3xl p-8 shadow-xl border border-gray-600"
        >
          <div className="text-center">
            <div className="text-6xl mb-6">💔</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              The Truth I Live With
            </h2>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-white font-handwritten text-xl leading-relaxed mb-4">
                That day, I chose fear over trust. I chose my comfort over your boundaries. 
                I chose to make your need for space about my insecurities instead of respecting 
                what you were going through.
              </p>
              
              <p className="text-gray-300 font-handwritten text-lg leading-relaxed">
                I can&apos;t change that day, but I carry its lessons every single day. 
                I learned that love means letting go, that friendship means trusting even in silence, 
                and that sometimes the most loving thing you can do is step back and let someone breathe.
              </p>
            </div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mt-6"
            >
              <Heart className="w-12 h-12 text-red-400 mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
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
