import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    const newEditMode = !isEditMode;
    setIsEditMode(newEditMode);
    
    // Add/remove edit-mode class to body
    if (newEditMode) {
      document.body.classList.add('edit-mode');
      // Make all text elements editable
      setTimeout(() => {
        const editableElements = document.querySelectorAll('.edit-mode h1, .edit-mode h2, .edit-mode h3, .edit-mode h4, .edit-mode p, .edit-mode li, .edit-mode .desc, .edit-mode .requirements, .edit-mode .protips, .edit-mode .mission-text, .edit-mode .role-text, .edit-mode .task-label, .edit-mode .example-box, .edit-mode .golden-rule p');
        editableElements.forEach(element => {
          if (!element.hasAttribute('contenteditable')) {
            element.setAttribute('contenteditable', 'true');
          }
        });
      }, 100);
    } else {
      document.body.classList.remove('edit-mode');
      // Remove contenteditable from all elements
      const editableElements = document.querySelectorAll('[contenteditable="true"]');
      editableElements.forEach(element => {
        element.removeAttribute('contenteditable');
      });
    }
  };

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
}