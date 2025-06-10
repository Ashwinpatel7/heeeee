'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HiddenCompliments from '@/components/HiddenCompliments';
import EasterEgg from '@/components/EasterEgg';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-blue-100/50 to-purple-100/50" />

      {/* Easter eggs scattered around */}
      <EasterEgg
        message="You once said 'Hehe' and my whole mood lifted."
        position={{ top: '15%', left: '10%' }}
      />
      <EasterEgg
        message="Your calm voice still lives in my head."
        position={{ top: '25%', right: '15%' }}
      />
      <EasterEgg
        message="Even now, I reread our chats just to feel close again."
        position={{ bottom: '20%', left: '20%' }}
      />

      {/* Main content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Floating hearts with hidden compliments */}
        <HiddenCompliments>
          <motion.div
            className="absolute -top-10 -left-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-8 h-8 text-pink-500 fill-current opacity-60" />
          </motion.div>
        </HiddenCompliments>

        <HiddenCompliments>
          <motion.div
            className="absolute -top-16 right-0"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Heart className="w-6 h-6 text-purple-500 fill-current opacity-50" />
          </motion.div>
        </HiddenCompliments>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
        >
          <span className="font-handwritten text-pink-600">Hey Mate,</span>
          <br />
          <span className="bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Can We Start Again?
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed"
        >
          A small space made with{' '}
          <span className="font-handwritten text-pink-600 text-2xl">big love</span>{' '}
          for someone{' '}
          <span className="font-handwritten text-purple-600 text-2xl">unforgettable</span>.
        </motion.p>

        {/* Enter button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/chapter1"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Heart className="w-5 h-5 fill-current group-hover:animate-pulse" />
            Enter Our Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Gentle message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 text-sm text-gray-500 font-handwritten"
        >
          Take your time. There's no rush here. 💕
        </motion.p>

        {/* Music notification */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-4 text-xs text-gray-400 font-handwritten"
        >
          🎵 Gentle music is playing for you 🎵
        </motion.p>

        {/* Special Pages Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/anshita-effect"
            className="text-xs text-pink-500 hover:text-pink-600 transition-colors font-handwritten"
          >
            The Anshita Effect ✨
          </Link>
          <Link
            href="/day-everything-changed"
            className="text-xs text-red-500 hover:text-red-600 transition-colors font-handwritten"
          >
            The Day Everything Changed 💔
          </Link>
          <Link
            href="/turn-back-time"
            className="text-xs text-blue-500 hover:text-blue-600 transition-colors font-handwritten"
          >
            If I Could Turn Back Time ⏰
          </Link>
          <Link
            href="/forgiveness-tree"
            className="text-xs text-green-500 hover:text-green-600 transition-colors font-handwritten"
          >
            The Forgiveness Tree 🌳
          </Link>
          <Link
            href="/your-happiness"
            className="text-xs text-yellow-500 hover:text-yellow-600 transition-colors font-handwritten"
          >
            Your Happiness Matters Most 🌟
          </Link>

          <Link
            href="/invisible-threads"
            className="text-xs text-purple-500 hover:text-purple-600 transition-colors font-handwritten"
          >
            Invisible Threads 🌌
          </Link>
          <Link
            href="/anshita-archive"
            className="text-xs text-rose-500 hover:text-rose-600 transition-colors font-handwritten"
          >
            The Anshita Archive 📚
          </Link>
        </motion.div>
      </div>

      {/* Optimized decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-500/20" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-500/20" />
      </motion.div>
    </div>
  );
}
