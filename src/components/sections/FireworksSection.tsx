import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function FireworksSection() {
  const checklistItems = [
    { id: 'fireworks1', label: 'Kids throwing pit cubes in the air OR celebrating in large group', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        4th of July Fireworks
        <ContentBadge type="photo" label="PHOTO" />
      </h1>

      <div className="desc"><b>Description:</b> Capture kids throwing pit cubes in the air or celebrating in a large group.</div>

      <UploadChecklist items={checklistItems} section="fireworks" />

      <div className="requirements">
        <h3>💡 TIPS:</h3>
        <ul>
          <li>Capture the moment of celebration at its peak</li>
          <li>Make sure all kids are visible and engaged</li>
          <li>Good lighting and clear background</li>
          <li>High energy and festive atmosphere</li>
        </ul>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}