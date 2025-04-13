"use client";
import React, { createContext, useContext, useState } from "react";

const VolumeContext = createContext();

export function VolumeProvider({ children }) {
  const [volume, setVolume] = useState(1); // Default volume is 100%

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
}

export function useVolume() {
  const context = useContext(VolumeContext);
  if (context === undefined) {
    throw new Error("useVolume must be used within a VolumeProvider");
  }
  return context;
}