import { ArrowRight, Coffee } from 'lucide-react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';

export default function Home() {
  const { setCurrentPage } = useApp();

  const handleStart = () => {
    setCurrentPage('settings');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&q=80"
          alt="Morning Study Scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <Header />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        <div className="text-center max-w-2xl animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-white/60 text-sm tracking-widest">FOCUS · LEARN · GROW</span>
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl font-light mb-6 tracking-wide">
            开启你的清晨自习室
          </h1>
          
          <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">
            选择场景、音乐与节奏，把一天最清醒的时间留给真正重要的学习。
          </p>
          
          <button
            onClick={handleStart}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
          >
            <span>开始学习</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 px-6 py-8">
        <div className="glass-card-dark p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Coffee size={18} className="text-white/70" />
                <span className="text-white font-medium">StudyWithMe AI</span>
              </div>
              <p className="text-white/50 text-sm">
                结合沉浸式场景、专注音乐与智能计划，让每一次学习都更专注
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">产品</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><button className="hover:text-white transition-colors">场景</button></li>
                <li><button className="hover:text-white transition-colors">音乐</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">资源</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><button className="hover:text-white transition-colors">使用指南</button></li>
                <li><button className="hover:text-white transition-colors">学习方法</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">关于我们</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><button className="hover:text-white transition-colors">关于 StudyWithMe AI</button></li>
                <li><button className="hover:text-white transition-colors">隐私政策</button></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}