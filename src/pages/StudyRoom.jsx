import { Target, Volume2, Music, Play, Pause } from 'lucide-react';
import Header from '../components/Header';
import Timer from '../components/Timer';
import ControlBar from '../components/ControlBar';
import { useApp } from '../context/AppContext';
import { useTimer } from '../hooks/useTimer';
import { useEffect, useRef, useState } from 'react';

export default function StudyRoom() {
  const { currentScene, setCurrentPage, todayGoal, setTodayGoal, timerDuration, resetSettings, musicVolume, bgVolume } = useApp();
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  
  const {
    formattedTime,
    progress,
    isRunning,
    isPaused,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    skipTimer,
  } = useTimer(timerDuration);

  const handleEnd = () => {
    resetSettings();
    setCurrentPage('home');
  };

  const handleReset = () => {
    resetTimer(timerDuration);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = musicVolume / 100;
    }
  }, [musicVolume]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={currentScene.background}
          alt={currentScene.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
        <button
          onClick={toggleMusic}
          className="glass-card px-4 py-2 text-white/70 text-sm flex items-center gap-2 hover:text-white transition-colors"
        >
          {isMusicPlaying ? <Pause size={16} /> : <Play size={16} />}
          <span>钢琴曲</span>
        </button>
        <span className="glass-card px-4 py-2 text-white/70 text-sm">
          {currentScene.name}
        </span>
      </div>

      <audio
        ref={audioRef}
        src="/昼夜 - Five Hundred Miles (钢琴版).mp3"
        loop
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
          <Timer
            formattedTime={formattedTime}
            progress={progress}
            isRunning={isRunning}
            isPaused={isPaused}
            onStart={startTimer}
            onPause={pauseTimer}
            onResume={resumeTimer}
          />

          <div className="w-full md:w-80">
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Target size={16} className="text-white/70" />
                <span className="text-white/80 text-sm">今日目标</span>
              </div>
              <textarea
                value={todayGoal}
                onChange={(e) => setTodayGoal(e.target.value)}
                placeholder="写下今天想完成的事..."
                className="w-full h-24 bg-transparent border-none outline-none text-white/90 placeholder:text-white/40 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-24">
          <ControlBar
            onPause={isPaused ? resumeTimer : pauseTimer}
            onSkip={skipTimer}
            onReset={handleReset}
            onEnd={handleEnd}
          />
        </div>
      </div>
    </div>
  );
}
