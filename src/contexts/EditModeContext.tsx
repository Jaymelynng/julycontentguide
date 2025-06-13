import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  saveChanges: () => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const saveChanges = () => {
    // Save all editable content to localStorage
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    const savedContent: Record<string, string> = {};
    
    editableElements.forEach((element, index) => {
      const content = element.innerHTML;
      const elementId = element.id || `editable-${index}`;
      savedContent[elementId] = content;
      
      // Add an ID if the element doesn't have one
      if (!element.id) {
        element.id = elementId;
      }
    });
    
    localStorage.setItem('edited-content', JSON.stringify(savedContent));
    
    // Show a brief success message
    const successMsg = document.createElement('div');
    successMsg.textContent = '✅ Changes saved!';
    successMsg.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 12px 20px;
      border-radius: 25px;
      font-weight: bold;
      z-index: 1001;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
      document.body.removeChild(successMsg);
    }, 2000);
  };

  const loadSavedContent = () => {
    const savedContent = localStorage.getItem('edited-content');
    if (savedContent) {
      try {
        const content = JSON.parse(savedContent);
        Object.keys(content).forEach(elementId => {
          const element = document.getElementById(elementId);
          if (element) {
            element.innerHTML = content[elementId];
          }
        });
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  };

  const toggleEditMode = () => {
    const newEditMode = !isEditMode;
    setIsEditMode(newEditMode);
    
    // Add/remove edit-mode class to body
    if (newEditMode) {
      document.body.classList.add('edit-mode');
      // Make all text elements editable
      setTimeout(() => {
        const editableElements = document.querySelectorAll('.edit-mode h1, .edit-mode h2, .edit-mode h3, .edit-mode h4, .edit-mode p, .edit-mode li, .edit-mode .desc, .edit-mode .requirements, .edit-mode .protips, .edit-mode .mission-text, .edit-mode .role-text, .edit-mode .task-label, .edit-mode .example-box, .edit-mode .golden-rule p');
        editableElements.forEach((element, index) => {
          if (!element.hasAttribute('contenteditable')) {
            element.setAttribute('contenteditable', 'true');
            // Add an ID if the element doesn't have one
            if (!element.id) {
              element.id = `editable-${index}`;
            }
          }
        });
        
        // Load any previously saved content
        loadSavedContent();
      }, 100);
    } else {
      // Save changes before exiting edit mode
      saveChanges();
      
      document.body.classList.remove('edit-mode');
      // Remove contenteditable from all elements
      const editableElements = document.querySelectorAll('[contenteditable="true"]');
      editableElements.forEach(element => {
        element.removeAttribute('contenteditable');
      });
    }
  };

  // Load saved content when the component mounts
  React.useEffect(() => {
    setTimeout(() => {
      loadSavedContent();
    }, 500);
  }, []);

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode, saveChanges }}>
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