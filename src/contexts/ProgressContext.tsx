import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface ProgressContextType {
  checkedItems: Record<string, Set<string>>;
  toggleItem: (section: string, itemId: string) => void;
  getCheckedItems: (section: string) => Set<string>;
  clearProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [checkedItems, setCheckedItems] = useState<Record<string, Set<string>>>({});

  // Load progress from localStorage when user changes
  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`gym-progress-${user.id}`);
      if (savedProgress) {
        try {
          const parsed = JSON.parse(savedProgress);
          const converted: Record<string, Set<string>> = {};
          
          Object.keys(parsed).forEach(section => {
            converted[section] = new Set(parsed[section]);
          });
          
          setCheckedItems(converted);
        } catch (error) {
          console.error('Error loading progress:', error);
          setCheckedItems({});
        }
      } else {
        setCheckedItems({});
      }
    } else {
      setCheckedItems({});
    }
  }, [user]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (user && Object.keys(checkedItems).length > 0) {
      const toSave: Record<string, string[]> = {};
      
      Object.keys(checkedItems).forEach(section => {
        toSave[section] = Array.from(checkedItems[section]);
      });
      
      localStorage.setItem(`gym-progress-${user.id}`, JSON.stringify(toSave));
    }
  }, [checkedItems, user]);

  const toggleItem = (section: string, itemId: string) => {
    setCheckedItems(prev => {
      const newChecked = { ...prev };
      
      if (!newChecked[section]) {
        newChecked[section] = new Set();
      } else {
        newChecked[section] = new Set(newChecked[section]);
      }
      
      if (newChecked[section].has(itemId)) {
        newChecked[section].delete(itemId);
      } else {
        newChecked[section].add(itemId);
      }
      
      return newChecked;
    });
  };

  const getCheckedItems = (section: string): Set<string> => {
    return checkedItems[section] || new Set();
  };

  const clearProgress = () => {
    if (user) {
      localStorage.removeItem(`gym-progress-${user.id}`);
      setCheckedItems({});
    }
  };

  return (
    <ProgressContext.Provider value={{
      checkedItems,
      toggleItem,
      getCheckedItems,
      clearProgress
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