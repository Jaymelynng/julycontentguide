import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function FireworksSection() {
  const checklistItems = [
    { id: 'fireworks1', label: 'One photo of kids celebrating', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        4th of July Fireworks
        <ContentBadge type="photo" label="PHOTO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>A joyful, festive celebration moment that feels like a summer "fireworks" finale.</p>

        <h3>📌 Content Notes:</h3>
        <p>Capture one clear, bright image of excitement at its peak—this will be used as a highlight image.</p>

        <h3>📷 What to Upload:</h3>
        <p>One photo of kids either:</p>
        <ul>
          <li>Throwing pit cubes in the air</li>
          <li>Or celebrating in a large, excited group</li>
        </ul>
      </div>

      <UploadChecklist items={checklistItems} section="fireworks" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}