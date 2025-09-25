import { createContext, useContext, useState, useEffect } from "react";

const VolumeContext = createContext();

export function VolumeProvider({ children }) {
  const [volume, setVolume] = useState(1);

  // Load saved volume from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVolume = localStorage.getItem("examVolume");
      if (savedVolume !== null) {
        setVolume(parseFloat(savedVolume));
      }
    }
  }, []);

  const handleVolumeChange = (newVolume) => {
    const clampedVolume = Math.min(1, Math.max(0, newVolume));
    setVolume(clampedVolume);
    if (typeof window !== "undefined") {
      localStorage.setItem("examVolume", clampedVolume.toString());
    }
  };

  const value = {
    volume,
    setVolume: handleVolumeChange,
  };

  return (
    <VolumeContext.Provider value={value}>{children}</VolumeContext.Provider>
  );
}

export function useVolume() {
  const context = useContext(VolumeContext);
  if (!context) {
    throw new Error("useVolume must be used within a VolumeProvider");
  }
  return context;
}
