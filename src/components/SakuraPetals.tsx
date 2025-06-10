'use client';

import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export default function SakuraPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Create initial petals - reduced count for performance
    const initialPetals: Petal[] = [];
    for (let i = 0; i < 8; i++) {
      initialPetals.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 8, // 10-18 seconds
        size: 10 + Math.random() * 8, // 10-18px
        delay: Math.random() * 3, // 0-3 seconds delay
      });
    }
    setPetals(initialPetals);

    // Add new petals less frequently
    const interval = setInterval(() => {
      setPetals(prev => {
        const newPetal: Petal = {
          id: Date.now(),
          left: Math.random() * 100,
          animationDuration: 10 + Math.random() * 8,
          size: 10 + Math.random() * 8,
          delay: 0,
        };

        // Keep only the last 12 petals to prevent memory issues
        const updatedPetals = [...prev, newPetal];
        return updatedPetals.slice(-12);
      });
    }, 4000); // New petal every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal absolute"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M12 2C12 2 8 6 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 6 12 2 12 2Z"
              fill="#fce7f3"
              opacity="0.8"
            />
            <path
              d="M12 14C12 14 16 18 12 22C12 22 8 18 12 14Z"
              fill="#f9a8d4"
              opacity="0.6"
            />
            <path
              d="M12 14C12 14 6 12 2 16C2 16 6 20 12 14Z"
              fill="#fce7f3"
              opacity="0.7"
            />
            <path
              d="M12 14C12 14 18 12 22 16C22 16 18 20 12 14Z"
              fill="#f9a8d4"
              opacity="0.7"
            />
            <path
              d="M12 14C12 14 10 8 6 4C6 4 10 8 12 14Z"
              fill="#fce7f3"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
