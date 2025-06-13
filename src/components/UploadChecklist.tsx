import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  type: 'video' | 'photo';
}

interface UploadChecklistProps {
  items: ChecklistItem[];
}

export function UploadChecklist({ items }: UploadChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

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
              onChange={() => toggleItem(item.id)}
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