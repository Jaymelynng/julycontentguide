import React from 'react';
import { useEditMode } from '../contexts/EditModeContext';

interface EditableContentProps {
  children: React.ReactNode;
  className?: string;
}

export function EditableContent({ children, className = '' }: EditableContentProps) {
  const { isEditMode } = useEditMode();

  return (
    <div
      className={`editable ${className}`}
      contentEditable={isEditMode}
      suppressContentEditableWarning={true}
    >
      {children}
    </div>
  );
}