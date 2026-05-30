import { Music, Volume2, Pause, SkipForward, RotateCcw, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ControlBar({ onPause, onSkip, onReset, onEnd }) {
  const { musicVolume, setMusicVolume, bgVolume, setBgVolume } = useApp();

  return (
    <div className="glass-card-dark px-4 py-3 flex flex-wrap items-center gap-3 animate-fade-in justify-center">
      <div className="flex items-center gap-2 min-w-[120px]">
        <Music size={14} className="text-white/70" />
        <input
          type="range"
          min="0"
          max="100"
          value={musicVolume}
          onChange={(e) => setMusicVolume(Number(e.target.value))}
          className="slider flex-1"
        />
        <span className="text-white/50 text-xs w-7 text-right">{musicVolume}%</span>
      </div>

      <div className="flex items-center gap-2 min-w-[120px]">
        <Volume2 size={14} className="text-white/70" />
        <input
          type="range"
          min="0"
          max="100"
          value={bgVolume}
          onChange={(e) => setBgVolume(Number(e.target.value))}
          className="slider flex-1"
        />
        <span className="text-white/50 text-xs w-7 text-right">{bgVolume}%</span>
      </div>

      <div className="h-6 w-px bg-white/10" />

      <div className="flex items-center gap-2 flex-wrap justify-center">
        <button
          onClick={onPause}
          className="btn-glass flex items-center gap-1.5 px-3 py-1.5 text-sm"
        >
          <Pause size={14} />
          <span>暂停</span>
        </button>

        <button
          onClick={onSkip}
          className="btn-glass flex items-center gap-1.5 px-3 py-1.5 text-sm"
        >
          <SkipForward size={14} />
          <span>跳过</span>
        </button>

        <button
          onClick={onReset}
          className="btn-glass flex items-center gap-1.5 px-3 py-1.5 text-sm"
        >
          <RotateCcw size={14} />
          <span>重置</span>
        </button>

        <button
          onClick={onEnd}
          className="btn-glass flex items-center gap-1.5 px-3 py-1.5 text-sm text-red-300 hover:bg-red-500/20"
        >
          <X size={14} />
          <span>结束学习</span>
        </button>
      </div>
    </div>
  );
}