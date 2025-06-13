import React from 'react';
import { Edit3, Save } from 'lucide-react';
import { useEditMode } from '../contexts/EditModeContext';

export function EditModeToggle() {
  const { isEditMode, toggleEditMode, saveChanges } = useEditMode();

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    saveChanges();
  };

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000, display: 'flex', gap: '10px' }}>
      {isEditMode && (
        <button
          onClick={handleSaveClick}
          style={{
            background: '#28a745',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
        >
          <Save size={16} />
          Save Changes
        </button>
      )}
      
      <button
        onClick={toggleEditMode}
        style={{
          background: isEditMode ? 'var(--accent-color)' : 'var(--sidebar-bg)',
          color: 'var(--white)',
          border: 'none',
          padding: '12px 20px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        }}
      >
        <Edit3 size={16} />
        {isEditMode ? 'Exit Edit' : 'Edit Mode'}
      </button>
    </div>
  );
}