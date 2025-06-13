import React from 'react';
import { useProgress } from '../contexts/ProgressContext';

interface ChecklistItem {
  id: string;
  label: string;
  type: 'video' | 'photo';
}

interface UploadChecklistProps {
  items: ChecklistItem[];
  section: string;
}

export function UploadChecklist({ items, section }: UploadChecklistProps) {
  const { toggleItem, getCheckedItems, isLoading } = useProgress();
  const checkedItems = getCheckedItems(section);

  return (
    <div className="upload-checklist">
      <h4>📋 What to Upload:</h4>
      
      {isLoading && (
        <div className="loading-indicator">
          <span>Loading progress...</span>
        </div>
      )}
      
      <div>
        {items.map((item) => (
          <div key={item.id} className="upload-item">
            <input
              type="checkbox"
              id={item.id}
              className="upload-checkbox"
              checked={checkedItems.has(item.id)}
              onChange={() => toggleItem(section, item.id)}
              disabled={isLoading}
            />
            
            <label htmlFor={item.id} className="upload-label">
              {item.label}
            </label>
            
            <span className={`upload-type ${item.type === 'video' ? 'video-type' : 'photo-type'}`}>
              {item.type.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}