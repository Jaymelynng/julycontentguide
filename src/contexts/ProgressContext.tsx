import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGym } from './GymContext';

interface ProgressContextType {
  checkedItems: Record<string, Set<string>>;
  toggleItem: (section: string, itemId: string) => void;
  getCheckedItems: (section: string) => Set<string>;
  clearProgress: () => void;
  isLoading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { selectedGym } = useGym();
  const [checkedItems, setCheckedItems] = useState<Record<string, Set<string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Load progress from localStorage when gym changes
  useEffect(() => {
    if (selectedGym) {
      loadProgressFromLocalStorage();
    } else {
      setCheckedItems({});
    }
  }, [selectedGym]);

  const loadProgressFromLocalStorage = () => {
    if (!selectedGym) return;
    
    const savedProgress = localStorage.getItem(`gym-progress-${selectedGym.id}`);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        const converted: Record<string, Set<string>> = {};
        
        Object.keys(parsed).forEach(section => {
          converted[section] = new Set(parsed[section]);
        });
        
        setCheckedItems(converted);
      } catch (error) {
        console.error('Error loading local progress:', error);
        setCheckedItems({});
      }
    } else {
      setCheckedItems({});
    }
  };

  const saveProgressToLocalStorage = () => {
    if (!selectedGym || Object.keys(checkedItems).length === 0) return;
    
    const toSave: Record<string, string[]> = {};
    
    Object.keys(checkedItems).forEach(section => {
      toSave[section] = Array.from(checkedItems[section]);
    });
    
    localStorage.setItem(`gym-progress-${selectedGym.id}`, JSON.stringify(toSave));
  };

  const toggleItem = (section: string, itemId: string) => {
    if (!section || !itemId) {
      console.error('Missing section or itemId:', { section, itemId });
      return;
    }

    const currentlyChecked = checkedItems[section]?.has(itemId) || false;
    const newCheckedState = !currentlyChecked;

    // Update local state
    setCheckedItems(prev => {
      const newChecked = { ...prev };
      
      if (!newChecked[section]) {
        newChecked[section] = new Set();
      } else {
        newChecked[section] = new Set(newChecked[section]);
      }
      
      if (newCheckedState) {
        newChecked[section].add(itemId);
      } else {
        newChecked[section].delete(itemId);
      }
      
      return newChecked;
    });

    // Save to localStorage
    setTimeout(() => {
      saveProgressToLocalStorage();
    }, 100);
  };

  const getCheckedItems = (section: string): Set<string> => {
    return checkedItems[section] || new Set();
  };

  const clearProgress = () => {
    if (!selectedGym) return;
    
    // Clear from localStorage
    localStorage.removeItem(`gym-progress-${selectedGym.id}`);
    
    // Clear local state
    setCheckedItems({});
  };

  return (
    <ProgressContext.Provider value={{
      checkedItems,
      toggleItem,
      getCheckedItems,
      clearProgress,
      isLoading
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}