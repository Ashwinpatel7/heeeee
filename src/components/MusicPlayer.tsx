'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element for the background song
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;

      if (isPlaying && !isMuted) {
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted, volume]);

  // Auto-play immediately when component mounts
  useEffect(() => {
    // Set playing to true immediately
    setIsPlaying(true);

    // Try to play the audio immediately
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;

      // Attempt autoplay
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay failed, will try on first user interaction:', error);

          // Fallback: play on first user interaction
          const handleFirstInteraction = () => {
            if (audioRef.current) {
              audioRef.current.play().catch(e => console.log('Play failed:', e));
            }
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
          };

          document.addEventListener('click', handleFirstInteraction);
          document.addEventListener('keydown', handleFirstInteraction);
          document.addEventListener('touchstart', handleFirstInteraction);
        });
      }
    }
  }, [volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/Die With A Smile-(SambalpuriStar.In).mp3"
        preload="auto"
        autoPlay
        loop
      />

      <div className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-pink-400/20 hover:bg-pink-400/30 transition-colors"
            title={isPlaying ? 'Pause music' : 'Play gentle music'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-pink-600" />
            ) : (
              <Play className="w-4 h-4 text-pink-600" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-pink-400/20 hover:bg-pink-400/30 transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-pink-600" />
            ) : (
              <Volume2 className="w-4 h-4 text-pink-600" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 h-1 bg-pink-200 rounded-lg appearance-none cursor-pointer"
            title="Volume"
          />
        </div>

        {isPlaying && (
          <div className="text-xs text-pink-600 mt-1 text-center font-handwritten">
            ♪ Die With A Smile ♪
          </div>
        )}
      </div>
    </>
  );
}
