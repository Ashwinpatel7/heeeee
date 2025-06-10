'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import ChatBubble from '@/components/ChatBubble';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'anshita';
  timestamp: string;
  delay: number;
}

const messages: Message[] = [
  {
    id: 1,
    text: "Hey, how are you feeling after the surgery?",
    sender: 'me',
    timestamp: "2:30 PM",
    delay: 1000
  },
  {
    id: 2,
    text: "I'm better now, thank you 😊",
    sender: 'anshita',
    timestamp: "2:45 PM",
    delay: 2500
  },
  {
    id: 3,
    text: "That's such a relief to hear! I was worried about you",
    sender: 'me',
    timestamp: "2:46 PM",
    delay: 4000
  },
  {
    id: 4,
    text: "You're so sweet for checking on me ❤️",
    sender: 'anshita',
    timestamp: "2:50 PM",
    delay: 5500
  },
  {
    id: 5,
    text: "Of course! That's what friends do, right? 😊",
    sender: 'me',
    timestamp: "2:51 PM",
    delay: 7000
  }
];

export default function Chapter1() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    messages.forEach((message) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message.id]);
      }, message.delay);
    });

    // Show navigation after all messages
    setTimeout(() => {
      setShowNavigation(true);
    }, 8000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-12 pb-8 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          <span className="font-handwritten text-pink-400">Chapter 1:</span>
          <br />
          The First Hi
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Remember when I texted after your surgery and you said "I'm better now, thank you"? 
          That was the start of everything.
        </p>
      </motion.div>

      {/* Chat Container */}
      <div className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 min-h-[500px] border border-slate-700">
          {/* Chat Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blush-400 to-blush-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">Anshita</h3>
              <p className="text-sm text-green-400">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                visibleMessages.includes(message.id) && (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <ChatBubble
                      message={message.text}
                      sender={message.sender}
                      timestamp={message.timestamp}
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Typing indicator when messages are appearing */}
          {visibleMessages.length < messages.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 mt-4 text-gray-500"
            >
              <div className="flex gap-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
              </div>
              <span className="text-sm">typing...</span>
            </motion.div>
          )}
        </div>

        {/* Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visibleMessages.length === messages.length ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <p className="text-gray-700 font-handwritten text-lg leading-relaxed">
              "Two simple words changed everything. Your kindness in that moment, 
              your gentle 'thank you'... it made my heart do backflips. 
              I knew right then that talking to you felt different. Special."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {showNavigation && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4"
          >
            <Link
              href="/"
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Start
            </Link>
            
            <Link
              href="/chapter2"
              className="flex items-center gap-2 bg-gradient-to-r from-blush-400 to-blush-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              The Good Days
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
