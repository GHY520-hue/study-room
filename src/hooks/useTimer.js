import { useState, useEffect, useCallback } from 'react';

export function useTimer(initialMinutes = 45) {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const startTimer = useCallback(() => {
    setIsRunning(true);
    setIsPaused(false);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeTimer = useCallback(() => {
    setIsPaused(false);
  }, []);

  const resetTimer = useCallback((newDuration) => {
    setSecondsLeft((newDuration || initialMinutes) * 60);
    setIsRunning(false);
    setIsPaused(false);
  }, [initialMinutes]);

  const skipTimer = useCallback(() => {
    setCompletedPomodoros(prev => prev + 1);
    setSecondsLeft(initialMinutes * 60);
    setIsRunning(false);
    setIsPaused(false);
  }, [initialMinutes]);

  const getProgress = useCallback(() => {
    const totalSeconds = initialMinutes * 60;
    return ((totalSeconds - secondsLeft) / totalSeconds) * 100;
  }, [initialMinutes, secondsLeft]);

  useEffect(() => {
    let interval = null;
    if (isRunning && !isPaused && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setCompletedPomodoros(p => p + 1);
            return initialMinutes * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isPaused, secondsLeft, initialMinutes]);

  return {
    secondsLeft,
    isRunning,
    isPaused,
    completedPomodoros,
    formattedTime: formatTime(secondsLeft),
    progress: getProgress(),
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    skipTimer,
  };
}