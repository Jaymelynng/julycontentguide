import React from 'react';
import { Edit3, Save } from 'lucide-react';
import { useEditMode } from '../contexts/EditModeContext';

export function EditModeToggle() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <button
      onClick={toggleEditMode}
      className={`edit-mode-toggle ${isEditMode ? 'edit-mode-active' : ''}`}
    >
      {isEditMode ? '✅ Exit Edit' : '✏️ Edit Mode'}
    </button>
  );
}