import { Home, Coffee, Music, Calendar, Users, ArrowLeft, Maximize2, Languages, LogIn } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Header({ showBack, onBack, showImmersive, onImmersive }) {
  const { currentPage } = useApp();

  const navItems = [
    { id: 'scenes', label: '场景', icon: Coffee },
    { id: 'music', label: '音乐', icon: Music },
    { id: 'plan', label: '计划', icon: Calendar },
    { id: 'members', label: '会员', icon: Users },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={onBack}
              className="btn-glass flex items-center gap-2 px-4 py-2 mr-4"
            >
              <ArrowLeft size={16} />
              <span>返回首页</span>
            </button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Coffee size={18} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg tracking-wide">
              StudyWithMe AI
            </span>
          </div>
        </div>

        {currentPage === 'home' ? (
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
        ) : null}

        <div className="flex items-center gap-3">
          {currentPage === 'study' && showImmersive && (
            <button
              onClick={onImmersive}
              className="btn-glass flex items-center gap-2 px-4 py-2"
            >
              <Maximize2 size={16} />
              <span>沉浸模式</span>
            </button>
          )}
          {currentPage === 'home' && (
            <>
              <button className="btn-glass flex items-center gap-2 px-4 py-2">
                <Languages size={16} />
                <span>中文</span>
              </button>
              <button className="btn-primary flex items-center gap-2">
                <LogIn size={16} />
                <span>登录</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}