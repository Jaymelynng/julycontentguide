import React, { createContext, useContext, ReactNode } from 'react';

interface ProgressContextType {
  // Keep the interface for compatibility but make it non-functional
  checkedItems: Record<string, Set<string>>;
  toggleItem: (section: string, itemId: string) => void;
  getCheckedItems: (section: string) => Set<string>;
  clearProgress: () => void;
  isLoading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  // Simplified non-functional implementation
  const checkedItems: Record<string, Set<string>> = {};
  const isLoading = false;

  const toggleItem = () => {
    // No-op - not used anymore
  };

  const getCheckedItems = (): Set<string> => {
    return new Set();
  };

  const clearProgress = () => {
    // No-op - not used anymore
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

export default ProgressContext;