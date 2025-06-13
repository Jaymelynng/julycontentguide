import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Gym {
  id: string;
  name: string;
}

interface GymContextType {
  selectedGym: Gym | null;
  setSelectedGym: (gym: Gym) => void;
  clearGym: () => void;
}

const GymContext = createContext<GymContextType | undefined>(undefined);

export function GymProvider({ children }: { children: ReactNode }) {
  const [selectedGym, setSelectedGymState] = useState<Gym | null>(null);

  useEffect(() => {
    // Load saved gym from localStorage
    const savedGym = localStorage.getItem('selected-gym');
    if (savedGym) {
      try {
        setSelectedGymState(JSON.parse(savedGym));
      } catch (error) {
        localStorage.removeItem('selected-gym');
      }
    }
  }, []);

  const setSelectedGym = (gym: Gym) => {
    setSelectedGymState(gym);
    localStorage.setItem('selected-gym', JSON.stringify(gym));
  };

  const clearGym = () => {
    setSelectedGymState(null);
    localStorage.removeItem('selected-gym');
  };

  return (
    <GymContext.Provider value={{
      selectedGym,
      setSelectedGym,
      clearGym
    }}>
      {children}
    </GymContext.Provider>
  );
}

export function useGym() {
  const context = useContext(GymContext);
  if (context === undefined) {
    throw new Error('useGym must be used within a GymProvider');
  }
  return context;
}