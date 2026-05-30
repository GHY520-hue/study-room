import { createContext, useContext, useState, useEffect } from 'react';
import { scenes, timerOptions } from '../data/scenes';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentScene, setCurrentScene] = useState(scenes[0]);
  const [musicVolume, setMusicVolume] = useState(50);
  const [bgVolume, setBgVolume] = useState(30);
  const [timerDuration, setTimerDuration] = useState(45);
  const [todayGoal, setTodayGoal] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const resetSettings = () => {
    setCurrentScene(scenes[0]);
    setMusicVolume(50);
    setBgVolume(30);
    setTimerDuration(45);
    setTodayGoal('');
  };

  const value = {
    currentScene,
    setCurrentScene,
    musicVolume,
    setMusicVolume,
    bgVolume,
    setBgVolume,
    timerDuration,
    setTimerDuration,
    todayGoal,
    setTodayGoal,
    currentPage,
    setCurrentPage,
    resetSettings,
    scenes,
    timerOptions,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}