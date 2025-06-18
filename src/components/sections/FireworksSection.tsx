import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function FireworksSection() {
  const checklistItems = [
    { id: 'fireworks1', label: 'One group action shot', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        4th of July Fireworks
        <ContentBadge type="photo" label="PHOTO | 1 PHOTO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Kids caught mid-action, like jumping or cheering, at the peak moment-think fireworks.</p>

        <h3>📌 Content Notes:</h3>
        <p>Focus on capturing one clear, bright image that highlights excitement at its peak. Ensure the photo is well-lit and crisp no blur.</p>

        <h3>📷 UPLOAD THIS 1 PHOTO:</h3>
        <div className="upload-details">
          <div className="upload-item">
            <h4>📸 One group action shot</h4>
            <p>Example: Throwing pit cubs.jumping into pit</p>
          </div>
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="fireworks" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}