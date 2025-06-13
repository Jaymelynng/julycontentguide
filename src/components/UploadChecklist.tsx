import React, { useState } from 'react';
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
  const { toggleItem, getCheckedItems } = useProgress();
  const checkedItems = getCheckedItems(section);

  return (
    <div className="upload-checklist">
      <h4>📋 What to Upload:</h4>
      
      <div>
        {items.map((item) => (
          <div key={item.id} className="upload-item">
            <input
              type="checkbox"
              id={item.id}
              className="upload-checkbox"
              checked={checkedItems.has(item.id)}
              onChange={() => toggleItem(section, item.id)}
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