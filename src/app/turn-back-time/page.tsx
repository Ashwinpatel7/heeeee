'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Heart, MessageSquare, Shield, Pause } from 'lucide-react';
import Link from 'next/link';

export default function TurnBackTimePage() {
  const [currentRegret, setCurrentRegret] = useState(0);

  const regrets = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "The Instagram Panic",
      what: "I panicked when I saw you active on Instagram but not replying to my messages.",
      shouldHave: "I should have trusted that you had your reasons. I should have given you space instead of questioning your intentions.",
      learned: "Trust isn't about immediate responses—it's about believing in someone's heart even when you can't see their actions.",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "The Overwhelming Messages",
      what: "I sent too many messages when you needed space, thinking more words would fix things.",
      shouldHave: "I should have sent one message saying 'I'm here when you're ready' and then waited. Silence can be love too.",
      learned: "Sometimes the most loving thing you can do is step back and let someone breathe.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "The Defensive Reactions",
      what: "I got defensive and blamed you when I should have listened to understand, not to respond.",
      shouldHave: "I should have said 'Help me understand how you're feeling' instead of explaining why you were wrong.",
      learned: "Listening is an act of love. Defending is an act of fear.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Pause className="w-8 h-8" />,
      title: "Not Giving You Space",
      what: "When you said you needed space, I kept trying to fix things instead of respecting your boundary.",
      shouldHave: "I should have said 'I respect that. I'll be here when you're ready' and actually meant it.",
      learned: "Respecting boundaries isn't rejection—it's the highest form of love and respect.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Not Being Patient",
      what: "I wanted everything fixed immediately because I couldn't handle the uncertainty.",
      shouldHave: "I should have understood that healing takes time, and some things can't be rushed.",
      learned: "Good things—especially relationships—grow in their own time, not on our timeline.",
      color: "from-purple-400 to-violet-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Floating clock elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            <Clock className="w-8 h-8" />
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
          <span className="font-handwritten text-indigo-600">If I Could Turn Back Time</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The moments I wish I could redo, the words I wish I could take back, 
          and the lessons that came from my mistakes.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* Regret Cards */}
        <div className="space-y-8 mb-12">
          {regrets.map((regret, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60"
            >
              <div className="flex items-start gap-6">
                <div className={`text-white flex-shrink-0 bg-gradient-to-r ${regret.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                  {regret.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {regret.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                      <h4 className="font-semibold text-red-700 mb-2">What I Did:</h4>
                      <p className="text-red-600 leading-relaxed">
                        {regret.what}
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-700 mb-2">What I Should Have Done:</h4>
                      <p className="text-blue-600 leading-relaxed">
                        {regret.shouldHave}
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">What I Learned:</h4>
                      <p className="text-green-600 leading-relaxed font-handwritten">
                        {regret.learned}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-8 shadow-xl border border-indigo-200"
        >
          <div className="text-center">
            <div className="text-6xl mb-6">⏰</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              If I Had a Time Machine
            </h2>
            
            <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm mb-6">
              <p className="text-gray-800 font-handwritten text-xl leading-relaxed">
                "I can't change the past, but I can promise you this: every mistake taught me something. 
                Every moment I handled poorly made me more aware of how I want to handle things now. 
                If we ever get another chance, you'll meet a version of me who learned from every single regret."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/40 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Then:</h4>
                <p className="text-gray-600 text-sm">Reactive, defensive, impatient</p>
              </div>
              <div className="bg-white/40 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Now:</h4>
                <p className="text-gray-600 text-sm">Thoughtful, understanding, patient</p>
              </div>
            </div>

            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mt-6"
            >
              <Heart className="w-12 h-12 text-indigo-500 mx-auto" />
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
