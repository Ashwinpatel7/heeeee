'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import Link from 'next/link';

export default function MateChroniclesPage() {

  const mateMemories = [
    {
      date: "The First Time",
      context: "After your surgery, when I asked how you were feeling",
      quote: "I'm better now, thank you mate",
      feeling: "My heart literally skipped a beat. 'Mate'—such a simple word, but the way you said it felt like home.",
      impact: "I knew right then that this friendship was going to be special.",
      color: "from-pink-400 to-rose-400"
    },
    {
      date: "The Casual Mate",
      context: "During one of our random conversations about books",
      quote: "That's so cool, mate!",
      feeling: "The excitement in your voice, the way 'mate' just rolled off your tongue so naturally—it made me feel like I belonged.",
      impact: "I started looking forward to every conversation, hoping to hear it again.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      date: "The Encouraging Mate",
      context: "When I was stressed about exams",
      quote: "You've got this, mate. I believe in you.",
      feeling: "In that moment, 'mate' wasn't just a word—it was a warm hug, a vote of confidence, a reminder that someone cared.",
      impact: "I carried those words with me through every difficult moment.",
      color: "from-green-400 to-emerald-400"
    },
    {
      date: "The Laughing Mate",
      context: "After I told you a terrible joke",
      quote: "Haha, you're so silly, mate!",
      feeling: "Your laugh followed by 'mate'—it was like sunshine and warmth wrapped in four letters.",
      impact: "I started telling more jokes just to hear that combination again.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      date: "The Concerned Mate",
      context: "When I mentioned feeling overwhelmed",
      quote: "Take care of yourself, mate. You matter.",
      feeling: "The gentleness in how you said 'mate' that time—it wasn't casual, it was tender, caring, protective.",
      impact: "I realized that 'mate' from you meant 'I care about you' in the most beautiful way.",
      color: "from-purple-400 to-violet-400"
    },
    {
      date: "The Last Mate",
      context: "In our final conversation before everything changed",
      quote: "See you around, mate.",
      feeling: "I didn't know it would be the last time. If I had known, I would have treasured it more, held onto it longer.",
      impact: "Now I replay it in my mind, wishing I could hear it just one more time.",
      color: "from-indigo-400 to-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Floating mate bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-200 font-handwritten text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          >
            mate
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
          <span className="font-handwritten text-orange-600">The Mate Chronicles</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every time you called me "mate" and what it meant to my heart. 
          Four letters that became my favorite word in the entire world.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* Mate Memory Cards */}
        <div className="space-y-8 mb-12">
          {mateMemories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60"
            >
              <div className="flex items-start gap-6">
                <div className={`text-white flex-shrink-0 bg-gradient-to-r ${memory.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                  <Heart className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {memory.date}
                    </h3>
                    <div className="text-orange-500">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <h4 className="font-semibold text-orange-700 mb-2">Context:</h4>
                      <p className="text-orange-600 text-sm">
                        {memory.context}
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
                      <h4 className="font-semibold text-pink-700 mb-2">What You Said:</h4>
                      <p className="text-pink-600 font-handwritten text-lg italic">
                        "{memory.quote}"
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-700 mb-2">How It Made Me Feel:</h4>
                      <p className="text-blue-600 text-sm leading-relaxed">
                        {memory.feeling}
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">The Impact:</h4>
                      <p className="text-green-600 text-sm leading-relaxed font-handwritten">
                        {memory.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Meaning of Mate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-3xl p-8 shadow-xl border border-orange-200"
        >
          <div className="text-center">
            <div className="text-6xl mb-6">🤝</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What "Mate" Meant to Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/60 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">More Than a Word</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When you called me "mate," it wasn't just casual slang. It was acceptance, 
                  friendship, warmth, and belonging all wrapped up in four letters.
                </p>
              </div>
              
              <div className="bg-white/60 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">A Feeling of Home</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every time you said it, I felt like I had found my place in your world. 
                  Like I mattered. Like I was seen and valued.
                </p>
              </div>
            </div>

            <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-800 font-handwritten text-xl leading-relaxed">
                "If I could hear you say 'mate' just one more time, with that same warmth, 
                that same genuine affection—it would heal something in my heart that's been 
                broken since we stopped talking. It was never just a word. It was love 
                disguised as casual friendship, and it meant everything to me."
              </p>
            </div>

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
              <div className="text-4xl">💛</div>
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
