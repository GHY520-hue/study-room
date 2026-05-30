import { Play, Pause } from 'lucide-react';

export default function Timer({ formattedTime, progress, isRunning, isPaused, onStart, onPause, onResume }) {
  return (
    <div className="glass-card p-8 min-w-[280px] animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/60 text-sm font-medium tracking-wider">POMODORO #1</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/80 text-sm">学习中</span>
        </div>
      </div>
      
      <div className="relative">
        <h2 className="text-white text-6xl font-light tracking-wider text-center mb-6">
          {formattedTime}
        </h2>
        
        <div className="relative h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-white/80 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between mt-2 text-white/50 text-xs">
          <span>本轮进度</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <button
        onClick={isPaused ? onResume : isRunning ? onPause : onStart}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 
          flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        {isPaused ? (
          <Play size={24} className="text-white ml-1" />
        ) : isRunning ? (
          <Pause size={24} className="text-white" />
        ) : (
          <Play size={24} className="text-white ml-1" />
        )}
      </button>
    </div>
  );
}