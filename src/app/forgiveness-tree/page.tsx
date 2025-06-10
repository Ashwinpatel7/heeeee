'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Leaf, Heart, Star } from 'lucide-react';
import Link from 'next/link';

export default function ForgivenessTreePage() {
  const [shakenLeaves, setShakenLeaves] = useState<number[]>([]);
  const [isShaking, setIsShaking] = useState(false);
  const [revealedLessons, setRevealedLessons] = useState<number[]>([]);

  const lessons = [
    {
      id: 1,
      lesson: "Trust is not about immediate responses",
      detail: "Real friendship means believing in someone&apos;s character even when you can&apos;t see their actions.",
      color: "from-green-400 to-emerald-500",
      position: { x: 20, y: 15 }
    },
    {
      id: 2,
      lesson: "Good friends respect space",
      detail: "Sometimes the most caring thing you can do is step back and let a friend breathe.",
      color: "from-blue-400 to-cyan-500",
      position: { x: 80, y: 25 }
    },
    {
      id: 3,
      lesson: "Boundaries are healthy in friendship",
      detail: "When a friend sets a boundary, they&apos;re not rejecting you—they&apos;re taking care of themselves.",
      color: "from-purple-400 to-violet-500",
      position: { x: 15, y: 45 }
    },
    {
      id: 4,
      lesson: "Silence doesn&apos;t mean the friendship is over",
      detail: "Just because someone isn&apos;t speaking doesn&apos;t mean they don&apos;t value your friendship.",
      color: "from-pink-400 to-rose-500",
      position: { x: 75, y: 55 }
    },
    {
      id: 5,
      lesson: "Insecurity can damage friendships",
      detail: "When we&apos;re insecure, we often make everything about our own feelings instead of seeing our friend&apos;s perspective.",
      color: "from-yellow-400 to-orange-500",
      position: { x: 45, y: 35 }
    },
    {
      id: 6,
      lesson: "Patience strengthens friendships",
      detail: "Good friendships grow in their own time, not on our timeline.",
      color: "from-indigo-400 to-blue-500",
      position: { x: 25, y: 65 }
    },
    {
      id: 7,
      lesson: "Listening is more important than defending",
      detail: "Sometimes friends need to be heard and understood, not convinced.",
      color: "from-teal-400 to-green-500",
      position: { x: 70, y: 75 }
    },
    {
      id: 8,
      lesson: "Mistakes can teach us to be better friends",
      detail: "The hardest lessons help us understand what true friendship really means.",
      color: "from-red-400 to-pink-500",
      position: { x: 55, y: 20 }
    }
  ];

  const shakeTree = () => {
    if (isShaking) return;
    
    setIsShaking(true);
    
    // Release leaves one by one
    const availableLeaves = lessons.filter(lesson => !shakenLeaves.includes(lesson.id));
    if (availableLeaves.length > 0) {
      const randomLeaf = availableLeaves[Math.floor(Math.random() * availableLeaves.length)];
      
      setTimeout(() => {
        setShakenLeaves(prev => [...prev, randomLeaf.id]);
        setTimeout(() => {
          setRevealedLessons(prev => [...prev, randomLeaf.id]);
        }, 1000);
      }, 500);
    }
    
    setTimeout(() => {
      setIsShaking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-200"
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
            <Leaf className="w-4 h-4" />
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
          <span className="font-handwritten text-green-600">The Forgiveness Tree</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Each leaf holds a lesson learned from our friendship journey. Shake the tree gently
          to release the wisdom that grew from my mistakes.
        </p>
      </motion.div>

      {/* Main Tree Container */}
      <div className="max-w-4xl mx-auto px-6 pb-20 relative">
        {/* Tree */}
        <div className="relative h-96 mb-12">
          {/* Tree trunk */}
          <motion.div
            animate={isShaking ? { 
              rotate: [-1, 1, -1, 1, 0],
              scale: [1, 1.02, 1]
            } : {}}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-32 bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-lg"
          />
          
          {/* Tree crown */}
          <motion.div
            animate={isShaking ? { 
              rotate: [-2, 2, -2, 2, 0],
              scale: [1, 1.05, 1]
            } : {}}
            transition={{ duration: 0.5 }}
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-80"
          />
          
          {/* Leaves on tree */}
          {lessons.map((lesson) => (
            <motion.div
              key={lesson.id}
              className={`absolute cursor-pointer ${shakenLeaves.includes(lesson.id) ? 'pointer-events-none' : ''}`}
              style={{
                left: `${lesson.position.x}%`,
                top: `${lesson.position.y}%`,
              }}
              animate={shakenLeaves.includes(lesson.id) ? {
                y: [0, 300],
                rotate: [0, 180, 360],
                opacity: [1, 0.8, 0],
                scale: [1, 0.8, 0.6]
              } : isShaking ? {
                rotate: [-5, 5, -5, 5, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ 
                duration: shakenLeaves.includes(lesson.id) ? 2 : 0.5,
                ease: shakenLeaves.includes(lesson.id) ? "easeIn" : "easeInOut"
              }}
              onClick={shakeTree}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-8 h-8 bg-gradient-to-br ${lesson.color} rounded-full shadow-lg flex items-center justify-center`}
              >
                <Leaf className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Shake instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shakeTree}
            disabled={isShaking || shakenLeaves.length === lessons.length}
            className={`px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 ${
              isShaking || shakenLeaves.length === lessons.length
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-xl'
            }`}
          >
            {isShaking ? 'Shaking...' : shakenLeaves.length === lessons.length ? 'All Lessons Revealed' : 'Shake the Tree 🌳'}
          </motion.button>
          
          <p className="text-gray-500 text-sm mt-2 font-handwritten">
            {shakenLeaves.length} of {lessons.length} lessons revealed
          </p>
        </motion.div>

        {/* Revealed Lessons */}
        <div className="space-y-6">
          <AnimatePresence>
            {revealedLessons.map((lessonId) => {
              const lesson = lessons.find(l => l.id === lessonId);
              if (!lesson) return null;
              
              return (
                <motion.div
                  key={lessonId}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/60"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${lesson.color} rounded-full flex items-center justify-center`}>
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {lesson.lesson}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-handwritten">
                        {lesson.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Final Message */}
        {shakenLeaves.length === lessons.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8 shadow-xl border border-green-200"
          >
            <div className="text-center">
              <div className="text-6xl mb-6">🌳</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Tree of Wisdom
              </h2>
              
              <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-gray-800 font-handwritten text-xl leading-relaxed">
                  Every fallen leaf represents growth that came from mistakes, wisdom that emerged from reflection,
                  and friendship lessons that made me a better person. This tree will keep growing, and so will I.
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
                <Heart className="w-16 h-16 text-green-500 mx-auto fill-current" />
              </motion.div>
            </div>
          </motion.div>
        )}
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
