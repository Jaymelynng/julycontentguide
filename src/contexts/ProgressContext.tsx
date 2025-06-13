import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGym } from './GymContext';
import { supabase } from '../lib/supabase';

interface ProgressContextType {
  checkedItems: Record<string, Set<string>>;
  toggleItem: (section: string, itemId: string) => void;
  getCheckedItems: (section: string) => Set<string>;
  clearProgress: () => void;
  isLoading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Generate a unique session ID for this browser session
const getSessionId = () => {
  let sessionId = localStorage.getItem('user-session-id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('user-session-id', sessionId);
  }
  return sessionId;
};

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { selectedGym } = useGym();
  const [checkedItems, setCheckedItems] = useState<Record<string, Set<string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Load progress from Supabase when gym changes
  useEffect(() => {
    if (selectedGym) {
      loadProgressFromSupabase();
    } else {
      setCheckedItems({});
    }
  }, [selectedGym]);

  const loadProgressFromSupabase = async () => {
    if (!selectedGym) return;
    
    setIsLoading(true);
    try {
      const sessionId = getSessionId();
      
      const { data, error } = await supabase
        .from('progress_tracking')
        .select('section, item_id, completed')
        .eq('gym_id', selectedGym.id)
        .eq('user_session', sessionId)
        .eq('completed', true);

      if (error) {
        console.error('Error loading progress:', error);
        // Fall back to localStorage if Supabase fails
        loadProgressFromLocalStorage();
        return;
      }

      const converted: Record<string, Set<string>> = {};
      
      if (data) {
        data.forEach(item => {
          if (!converted[item.section]) {
            converted[item.section] = new Set();
          }
          converted[item.section].add(item.item_id);
        });
      }
      
      setCheckedItems(converted);
    } catch (error) {
      console.error('Error loading progress:', error);
      // Fall back to localStorage if Supabase fails
      loadProgressFromLocalStorage();
    } finally {
      setIsLoading(false);
    }
  };

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

  const saveProgressToSupabase = async (section: string, itemId: string, completed: boolean) => {
    if (!selectedGym || !section || !itemId) {
      console.error('Missing required data for Supabase save:', { selectedGym, section, itemId });
      return;
    }
    
    try {
      const sessionId = getSessionId();
      
      console.log('Saving to Supabase:', {
        gym_id: selectedGym.id,
        gym_name: selectedGym.name,
        section,
        item_id: itemId,
        completed,
        user_session: sessionId
      });
      
      if (completed) {
        // Insert or update the progress record
        const { error } = await supabase
          .from('progress_tracking')
          .upsert({
            gym_id: selectedGym.id,
            gym_name: selectedGym.name,
            section: section,
            item_id: itemId,
            completed: true,
            completed_at: new Date().toISOString(),
            user_session: sessionId
          }, {
            onConflict: 'gym_id,section,item_id,user_session'
          });

        if (error) {
          console.error('Error saving progress:', error);
        } else {
          console.log('Successfully saved progress to Supabase');
        }
      } else {
        // Delete the progress record
        const { error } = await supabase
          .from('progress_tracking')
          .delete()
          .eq('gym_id', selectedGym.id)
          .eq('section', section)
          .eq('item_id', itemId)
          .eq('user_session', sessionId);

        if (error) {
          console.error('Error removing progress:', error);
        } else {
          console.log('Successfully removed progress from Supabase');
        }
      }
    } catch (error) {
      console.error('Error with Supabase operation:', error);
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

  const toggleItem = async (section: string, itemId: string) => {
    if (!section || !itemId) {
      console.error('Missing section or itemId:', { section, itemId });
      return;
    }

    const currentlyChecked = checkedItems[section]?.has(itemId) || false;
    const newCheckedState = !currentlyChecked;

    console.log('Toggling item:', { section, itemId, currentlyChecked, newCheckedState });

    // Update local state immediately for responsive UI
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

    // Save to both Supabase and localStorage
    await saveProgressToSupabase(section, itemId, newCheckedState);
    
    // Save to localStorage as backup
    setTimeout(() => {
      saveProgressToLocalStorage();
    }, 100);
  };

  const getCheckedItems = (section: string): Set<string> => {
    return checkedItems[section] || new Set();
  };

  const clearProgress = async () => {
    if (!selectedGym) return;
    
    try {
      const sessionId = getSessionId();
      
      // Clear from Supabase
      const { error } = await supabase
        .from('progress_tracking')
        .delete()
        .eq('gym_id', selectedGym.id)
        .eq('user_session', sessionId);

      if (error) {
        console.error('Error clearing progress:', error);
      }

      // Clear from localStorage
      localStorage.removeItem(`gym-progress-${selectedGym.id}`);
      
      // Clear local state
      setCheckedItems({});
    } catch (error) {
      console.error('Error clearing progress:', error);
    }
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