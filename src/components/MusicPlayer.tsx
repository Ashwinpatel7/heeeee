'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Simplified audio implementation to reduce CPU usage
    let audioNodes: any = null;

    if (isPlaying && !isMuted) {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Single oscillator for better performance
        const osc = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        // Simple sine wave at low frequency
        osc.frequency.setValueAtTime(220, audioContext.currentTime);
        osc.type = 'sine';

        // Very low volume
        gainNode.gain.setValueAtTime(volume * 0.05, audioContext.currentTime);

        osc.connect(gainNode);
        gainNode.connect(audioContext.destination);

        osc.start();
        audioNodes = { osc, gainNode, audioContext };
      } catch (error) {
        console.log('Audio context not available');
      }
    }

    return () => {
      if (audioNodes) {
        try {
          audioNodes.osc.stop();
          audioNodes.audioContext.close();
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, [isPlaying, isMuted, volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg">
      <div className="flex items-center space-x-2">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-blush-400/20 hover:bg-blush-400/30 transition-colors"
          title={isPlaying ? 'Pause music' : 'Play gentle music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-blush-600" />
          ) : (
            <Play className="w-4 h-4 text-blush-600" />
          )}
        </button>
        
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-blush-400/20 hover:bg-blush-400/30 transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-blush-600" />
          ) : (
            <Volume2 className="w-4 h-4 text-blush-600" />
          )}
        </button>
        
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 h-1 bg-blush-200 rounded-lg appearance-none cursor-pointer"
          title="Volume"
        />
      </div>
      
      {isPlaying && (
        <div className="text-xs text-blush-600 mt-1 text-center font-handwritten">
          ♪ gentle vibes ♪
        </div>
      )}
    </div>
  );
}
