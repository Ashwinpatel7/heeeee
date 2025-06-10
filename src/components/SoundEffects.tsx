'use client';

import { useEffect, useRef } from 'react';

interface SoundEffectsProps {
  playChime?: boolean;
  playGiggle?: boolean;
  onSoundEnd?: () => void;
}

export default function SoundEffects({ playChime, playGiggle, onSoundEnd }: SoundEffectsProps) {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize audio context
    if (typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playChimeSound = () => {
    if (!audioContextRef.current) return;

    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Create a gentle chime sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);

    oscillator.onended = () => {
      onSoundEnd?.();
    };
  };

  const playGiggleSound = () => {
    if (!audioContextRef.current) return;

    const audioContext = audioContextRef.current;
    
    // Create a series of quick notes to simulate a giggle
    const frequencies = [600, 700, 650, 750, 680];
    
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
      oscillator.type = 'sine';
      
      const startTime = audioContext.currentTime + (index * 0.1);
      const endTime = startTime + 0.08;
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.05, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, endTime);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.start(startTime);
      oscillator.stop(endTime);
      
      if (index === frequencies.length - 1) {
        oscillator.onended = () => {
          onSoundEnd?.();
        };
      }
    });
  };

  useEffect(() => {
    if (playChime) {
      playChimeSound();
    }
  }, [playChime]);

  useEffect(() => {
    if (playGiggle) {
      playGiggleSound();
    }
  }, [playGiggle]);

  return null; // This component doesn't render anything visible
}
