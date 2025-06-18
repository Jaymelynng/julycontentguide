import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function RiddleSection() {
  const checklistItems = [
    { id: 'riddle1', label: 'Photo 1: Hands Up High', type: 'photo' as const },
    { id: 'riddle2', label: 'Photo 2: Hands Down Low', type: 'photo' as const },
    { id: 'riddle3', label: 'Photo 3: Look at Your Belly', type: 'photo' as const },
    { id: 'riddle4', label: 'Photo 4: Over You Go – TADAA!', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        4 Photo Riddle Week – Forward Roll Series
        <ContentBadge type="series" label="PHOTOS | 4 PHOTOS" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Preschoolers in motion—showing curiosity, movement, and joyful progress through a forward roll.</p>

        <h3>📌 Content Notes:</h3>
        <p>Use one child to show all 4 steps clearly. You should clearly see each phase of the roll - full shot - clear no blur concept.</p>

        <h3>📷 UPLOAD THESE 4 PHOTOS:</h3>
        <div className="upload-details">
          <div className="upload-item">
            <h4>📸 4 photos showing each stage of a forward roll:</h4>
            <ol>
              <li><strong>📸 Photo 1:</strong> Hands Up High</li>
              <li><strong>📸 Photo 2:</strong> Hands Down Low</li>
              <li><strong>📸 Photo 3:</strong> Look at Your Belly</li>
              <li><strong>📸 Photo 4:</strong> Over You Go – TADAA!</li>
            </ol>
          </div>
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="riddle" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}