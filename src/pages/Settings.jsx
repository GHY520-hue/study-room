import { ArrowRight, Music, Volume2, Timer } from 'lucide-react';
import Header from '../components/Header';
import SceneCard from '../components/SceneCard';
import { useApp } from '../context/AppContext';

export default function Settings() {
  const { 
    setCurrentPage, 
    scenes, 
    timerOptions, 
    timerDuration, 
    setTimerDuration,
    musicVolume,
    setMusicVolume,
    bgVolume,
    setBgVolume
  } = useApp();

  const handleEnter = () => {
    setCurrentPage('study');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1920&q=80"
          alt="Study Scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <Header showBack onBack={() => setCurrentPage('home')} />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white/40 text-xs tracking-widest">STEP 01</span>
              </div>
              <h2 className="text-white text-2xl font-light mb-6">选择你的学习场景</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scenes.map((scene, index) => (
                  <div 
                    key={scene.id} 
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <SceneCard scene={scene} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white/40 text-xs tracking-widest">STEP 02</span>
              </div>
              <h2 className="text-white text-xl font-light mb-6">设置声音氛围</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Music size={16} className="text-white/70" />
                      <span className="text-white/80 text-sm">音乐</span>
                    </div>
                    <span className="text-white/50 text-xs">{musicVolume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={musicVolume}
                    onChange={(e) => setMusicVolume(Number(e.target.value))}
                    className="slider"
                  />
                  <p className="text-white/40 text-xs mt-2">Lo-fi、轻音乐、钢琴等专注音乐</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Volume2 size={16} className="text-white/70" />
                      <span className="text-white/80 text-sm">背景音</span>
                    </div>
                    <span className="text-white/50 text-xs">{bgVolume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={bgVolume}
                    onChange={(e) => setBgVolume(Number(e.target.value))}
                    className="slider"
                  />
                  <p className="text-white/40 text-xs mt-2">根据当前场景自动匹配环境声</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white/40 text-xs tracking-widest">STEP 03</span>
              </div>
              <h2 className="text-white text-xl font-light mb-6">设置番茄钟</h2>
              
              <div className="grid grid-cols-2 gap-3">
                {timerOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setTimerDuration(option)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300
                      ${timerDuration === option 
                        ? 'bg-white/20 text-white border border-white/30' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-transparent'
                      }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Timer size={14} />
                      <span>{option}分钟</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleEnter}
              className="w-full btn-primary flex items-center justify-center gap-2 py-4"
            >
              <span>进入自习室</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}