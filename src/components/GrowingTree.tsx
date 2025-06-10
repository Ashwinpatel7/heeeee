'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GrowingTree() {
  const [visitedPages, setVisitedPages] = useState<string[]>([]);
  const [treeStage, setTreeStage] = useState(0);

  useEffect(() => {
    // Get visited pages from localStorage
    const stored = localStorage.getItem('anshita-visited-pages');
    if (stored) {
      const pages = JSON.parse(stored);
      setVisitedPages(pages);
      setTreeStage(Math.min(pages.length, 8)); // Max 8 stages
    }

    // Add current page to visited
    const currentPage = window.location.pathname;
    const updatedPages = stored ? JSON.parse(stored) : [];
    
    if (!updatedPages.includes(currentPage)) {
      updatedPages.push(currentPage);
      localStorage.setItem('anshita-visited-pages', JSON.stringify(updatedPages));
      setVisitedPages(updatedPages);
      setTreeStage(Math.min(updatedPages.length, 8));
    }
  }, []);

  const getTreeEmoji = () => {
    switch (treeStage) {
      case 0: return '🌱'; // Seed
      case 1: return '🌿'; // Sprout
      case 2: return '🌳'; // Small tree
      case 3: return '🌲'; // Growing tree
      case 4: return '🌳'; // Mature tree
      case 5: return '🌸'; // Flowering tree
      case 6: return '🌺'; // Full bloom
      case 7: return '🌈'; // Rainbow (hope)
      default: return '✨'; // Magic
    }
  };

  const getTreeMessage = () => {
    switch (treeStage) {
      case 0: return 'A seed of hope is planted...';
      case 1: return 'Hope begins to sprout...';
      case 2: return 'Growing stronger with each step...';
      case 3: return 'Roots of friendship run deep...';
      case 4: return 'Branches reaching toward you...';
      case 5: return 'Blossoming with possibilities...';
      case 6: return 'In full bloom, just like our memories...';
      case 7: return 'A rainbow of hope shines through...';
      default: return 'Magic happens when hearts connect...';
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-pink-200 max-w-xs"
      >
        <div className="text-center">
          <motion.div
            key={treeStage}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl mb-2"
          >
            {getTreeEmoji()}
          </motion.div>
          
          <p className="text-sm text-gray-700 font-handwritten leading-relaxed">
            {getTreeMessage()}
          </p>
          
          <div className="mt-2 text-xs text-gray-500">
            Pages visited: {visitedPages.length}
          </div>
          
          {/* Progress bar */}
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-pink-400 to-purple-400 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(treeStage / 8) * 100}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
