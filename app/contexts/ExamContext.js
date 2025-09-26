import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const ExamContext = createContext();

export function ExamProvider({ children }) {
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Load saved volume from localStorage on mount
  useEffect(() => {
    const savedVolume = localStorage.getItem("examVolume");
    if (savedVolume !== null) {
      setVolume(parseFloat(savedVolume));
    }
  }, []);

  // Persist volume changes to localStorage
  const handleVolumeChange = (newVolume) => {
    const clampedVolume = Math.min(1, Math.max(0, newVolume));
    setVolume(clampedVolume);
    localStorage.setItem("examVolume", clampedVolume.toString());
  };

  // Timer logic
  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsRunning(false);
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = useCallback((durationInMinutes) => {
    setDuration(durationInMinutes);
    setTimeLeft(durationInMinutes * 60);
    setIsRunning(true);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(0);
  }, []);

  const formatTime = useCallback((seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }, []);

  const value = {
    volume,
    setVolume: handleVolumeChange,
    timeLeft,
    formatTime,
    startTimer,
    resetTimer,
    isRunning,
  };

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return context;
}
