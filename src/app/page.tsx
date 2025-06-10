'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import EasterEgg from '@/components/EasterEgg';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-blue-500/10 to-purple-500/10" />

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
        {/* Floating hearts */}
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
          <Heart className="w-8 h-8 text-pink-400 fill-current opacity-80" />
        </motion.div>

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
          <Heart className="w-6 h-6 text-purple-400 fill-current opacity-70" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-slate-100 mb-6"
        >
          <span className="font-handwritten text-pink-400">Hey Mate,</span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Can We Start Again?
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed"
        >
          A small space made with{' '}
          <span className="font-handwritten text-pink-400 text-2xl">big love</span>{' '}
          for someone{' '}
          <span className="font-handwritten text-purple-400 text-2xl">unforgettable</span>.
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
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
          className="mt-8 text-sm text-slate-400 font-handwritten"
        >
          Take your time. There's no rush here. 💕
        </motion.p>
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
