'use client';

import { motion } from 'framer-motion';

interface ChatBubbleProps {
  message: string;
  sender: 'me' | 'anshita';
  timestamp: string;
}

export default function ChatBubble({ message, sender, timestamp }: ChatBubbleProps) {
  const isMe = sender === 'me';

  return (
    <motion.div
      className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`max-w-[80%] ${isMe ? 'order-2' : 'order-1'}`}>
        <div
          className={`chat-bubble ${isMe ? 'sent' : 'received'} ${
            isMe 
              ? 'bg-gradient-to-r from-blush-400 to-blush-500 text-white ml-auto' 
              : 'bg-white text-gray-800 shadow-md'
          }`}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <div className={`text-xs text-gray-500 mt-1 ${isMe ? 'text-right' : 'text-left'}`}>
          {timestamp}
        </div>
      </div>
      
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex-shrink-0 ${isMe ? 'order-1 mr-2' : 'order-2 ml-2'} self-end mb-6`}>
        <div className={`w-full h-full rounded-full flex items-center justify-center text-xs font-semibold ${
          isMe 
            ? 'bg-gradient-to-br from-sky-400 to-sky-500 text-white' 
            : 'bg-gradient-to-br from-lavender-400 to-lavender-500 text-white'
        }`}>
          {isMe ? 'M' : 'A'}
        </div>
      </div>
    </motion.div>
  );
}
