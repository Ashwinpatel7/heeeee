'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Smile, Star, Music, Coffee } from 'lucide-react';
import SoundEffects from './SoundEffects';

interface Card {
  id: number;
  content: string;
  icon: React.ReactNode;
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryMatchProps {
  onComplete: () => void;
}

// Memoize card pairs to prevent recreation on every render
const cardPairs = [
  { content: "You said 'Hehe'", icon: <Smile className="w-6 h-6" /> },
  { content: "My mood lifted", icon: <Heart className="w-6 h-6" /> },
  { content: "Voice note laughing", icon: <Music className="w-6 h-6" /> },
  { content: "Pure joy", icon: <Star className="w-6 h-6" /> },
  { content: "Called me mate", icon: <MessageCircle className="w-6 h-6" /> },
  { content: "Heart backflips", icon: <Coffee className="w-6 h-6" /> },
];

export default function MemoryMatch({ onComplete }: MemoryMatchProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState(0);
  const [playGiggle, setPlayGiggle] = useState(false);

  useEffect(() => {
    // Create pairs and shuffle
    const gameCards: Card[] = [];
    cardPairs.forEach((pair, index) => {
      gameCards.push({
        id: index * 2,
        content: pair.content,
        icon: pair.icon,
        isFlipped: false,
        isMatched: false,
      });
      gameCards.push({
        id: index * 2 + 1,
        content: pair.content,
        icon: pair.icon,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }

    setCards(gameCards);
  }, []);

  const handleCardClick = useCallback((cardId: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (cards.find(card => card.id === cardId)?.isMatched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    // Update card state
    setCards(prev => prev.map(card =>
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);

      const [firstCard, secondCard] = newFlippedCards.map(id =>
        cards.find(card => card.id === id)
      );

      if (firstCard?.content === secondCard?.content) {
        // Match found!
        setPlayGiggle(true);
        setTimeout(() => setPlayGiggle(false), 100);

        setTimeout(() => {
          setCards(prev => prev.map(card =>
            newFlippedCards.includes(card.id)
              ? { ...card, isMatched: true }
              : card
          ));
          setMatchedPairs(prev => prev + 1);
          setFlippedCards([]);
        }, 800); // Reduced timeout for better performance
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card =>
            newFlippedCards.includes(card.id)
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1200); // Reduced timeout for better performance
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedPairs === cardPairs.length) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [matchedPairs, onComplete]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <SoundEffects playGiggle={playGiggle} />
      {/* Game Stats */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Moves: <span className="font-semibold">{moves}</span>
        </div>
        <div className="text-sm text-gray-600">
          Matches: <span className="font-semibold">{matchedPairs}/{cardPairs.length}</span>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square cursor-pointer ${
              card.isMatched ? 'cursor-default' : ''
            }`}
          >
            <div className="relative w-full h-full">
              {/* Card Back */}
              <motion.div
                initial={false}
                animate={{ 
                  rotateY: card.isFlipped || card.isMatched ? 180 : 0 
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blush-300 to-blush-400 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Card Front */}
              <motion.div
                initial={false}
                animate={{ 
                  rotateY: card.isFlipped || card.isMatched ? 0 : -180 
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 backface-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className={`w-full h-full rounded-xl flex flex-col items-center justify-center shadow-lg p-2 ${
                  card.isMatched 
                    ? 'bg-gradient-to-br from-green-200 to-green-300' 
                    : 'bg-white'
                }`}>
                  <div className={`mb-1 ${
                    card.isMatched ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {card.icon}
                  </div>
                  <div className={`text-xs text-center font-medium leading-tight ${
                    card.isMatched ? 'text-green-800' : 'text-gray-800'
                  }`}>
                    {card.content}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Completion Message */}
      <AnimatePresence>
        {matchedPairs === cardPairs.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Perfect! All memories matched!
            </h3>
            <p className="text-gray-600 font-handwritten">
              You completed it in {moves} moves ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
