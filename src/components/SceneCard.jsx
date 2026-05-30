import { Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SceneCard({ scene }) {
  const { currentScene, setCurrentScene } = useApp();
  const isSelected = currentScene.id === scene.id;

  return (
    <button
      onClick={() => setCurrentScene(scene)}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer group
        ${isSelected ? 'ring-2 ring-white/50 shadow-lg scale-[1.02]' : 'hover:scale-[1.02] hover:shadow-lg'}`}
      style={{ width: '100%', maxWidth: '280px', aspectRatio: '4/3' }}
    >
      <div className="absolute inset-0">
        <img
          src={scene.background}
          alt={scene.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-4">
        <div className="flex items-center justify-between mb-2">
          {isSelected && (
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Check size={14} className="text-white" />
            </div>
          )}
          <span className="text-white/60 text-xs">SCENE</span>
        </div>
        <h3 className="text-white font-semibold text-lg mb-1">{scene.name}</h3>
        <p className="text-white/70 text-sm">{scene.description}</p>
        <div className="flex gap-2 mt-3">
          {scene.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-white/5 transition-opacity duration-300 ${
          isSelected ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </button>
  );
}