import React from 'react';

interface ChecklistItem {
  id: string;
  label: string;
  type: 'video' | 'photo';
}

interface UploadChecklistProps {
  items: ChecklistItem[];
  section: string;
}

export function UploadChecklist({ items }: UploadChecklistProps) {
  return (
    <div className="upload-checklist">
      <h4>📋 What to Upload:</h4>
      
      <div className="task-list">
        {items.map((item, index) => (
          <div key={item.id} className="task-item">
            <div className="task-number">
              {index + 1}
            </div>
            
            <div className="task-content">
              <span className="task-label">
                {item.label}
              </span>
              
              <span className={`task-type ${item.type === 'video' ? 'video-type' : 'photo-type'}`}>
                {item.type.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}