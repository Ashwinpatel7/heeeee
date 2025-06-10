'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, Users, Trophy, Smile, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

export default function AnshitaArchivePage() {
  const [currentCategory, setCurrentCategory] = useState(0);

  const categories = [
    {
      title: "Making Others Laugh",
      icon: <Smile className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-400",
      memories: [
        "That time you made the whole group chat laugh with your witty comeback",
        "How you always knew exactly what to say to lighten the mood",
        "Your infectious laugh that made everyone else start giggling",
        "The way you could turn any awkward moment into something funny"
      ]
    },
    {
      title: "Helping Others",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-400 to-rose-400",
      memories: [
        "When you stayed up late helping a friend with their problems",
        "How you always remembered to check on people who were struggling",
        "The way you offered help without being asked",
        "Your gentle advice that always came from a place of genuine care"
      ]
    },
    {
      title: "Your Achievements",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-purple-400 to-violet-400",
      memories: [
        "How proud I was when you aced that difficult exam",
        "Watching you grow more confident in yourself",
        "Your dedication to your studies and goals",
        "The way you never gave up, even when things got tough"
      ]
    },
    {
      title: "Your Kindness to Everyone",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-400 to-emerald-400",
      memories: [
        "How you treated everyone with equal respect and kindness",
        "The way you included people who felt left out",
        "Your patience with those who needed extra understanding",
        "How you never spoke badly about anyone, ever"
      ]
    },
    {
      title: "Your Wisdom",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-400",
      memories: [
        "Your thoughtful perspectives on life and relationships",
        "How you could see the good in every situation",
        "The way you helped others see things from different angles",
        "Your emotional intelligence that amazed everyone around you"
      ]
    },
    {
      title: "Just Being You",
      icon: <Star className="w-8 h-8" />,
      color: "from-indigo-400 to-purple-400",
      memories: [
        "Your genuine, authentic way of being in the world",
        "How you never pretended to be someone you weren't",
        "The way your presence alone made spaces feel warmer",
        "Your beautiful soul that shines through in everything you do"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Floating archive elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          >
            <BookOpen className="w-6 h-6" />
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
          <span className="font-handwritten text-rose-600">The Anshita Archive</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A collection of all the beautiful moments I witnessed—not just between us, 
          but how you touched everyone's lives. This is who you are as a whole person.
        </p>
      </motion.div>

      {/* Category Navigation */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentCategory(index)}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                currentCategory === index
                  ? 'bg-white shadow-lg border-2 border-rose-300'
                  : 'bg-white/60 hover:bg-white/80 border border-white/40'
              }`}
            >
              <div className={`text-white mb-2 bg-gradient-to-r ${category.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto`}>
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 text-center">
                {category.title}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60"
          >
            <div className="text-center mb-8">
              <div className={`text-white mb-4 bg-gradient-to-r ${categories[currentCategory].color} w-20 h-20 rounded-full flex items-center justify-center mx-auto`}>
                {categories[currentCategory].icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {categories[currentCategory].title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {categories[currentCategory].memories.map((memory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-white/60 to-white/40 rounded-xl p-6 shadow-md border border-white/60"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-rose-400 mt-1">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-handwritten">
                      {memory}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-100 to-purple-100 rounded-2xl p-6 border border-rose-200">
                <p className="text-gray-800 font-handwritten text-lg leading-relaxed">
                  "I noticed all of this because I see you—not just as my friend, 
                  but as the incredible human being you are. You make the world 
                  brighter just by being in it."
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 shadow-xl border border-pink-200"
        >
          <div className="text-center">
            <div className="text-6xl mb-6">📚</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Complete Picture
            </h2>
            
            <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-800 font-handwritten text-xl leading-relaxed mb-4">
                "This archive exists because I see you as a whole person—not just in relation to me, 
                but as someone who brings joy, kindness, and light to everyone around you. 
                Your worth isn't defined by our friendship; it exists independently and beautifully."
              </p>
              
              <p className="text-gray-800 font-handwritten text-lg leading-relaxed">
                "I'm grateful I got to witness even a small part of the amazing person you are. 
                The world is better because you're in it, and I hope you never forget that."
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
              <Star className="w-16 h-16 text-rose-500 mx-auto fill-current" />
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
