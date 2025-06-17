import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function RiddleSection() {
  const checklistItems = [
    { id: 'riddle1', label: 'Hands Up High', type: 'photo' as const },
    { id: 'riddle2', label: 'Hands Down Low', type: 'photo' as const },
    { id: 'riddle3', label: 'Look at Your Belly', type: 'photo' as const },
    { id: 'riddle4', label: 'Over You Go – TADAA!', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        Riddle Week – Forward Roll Series
        <ContentBadge type="series" label="PHOTO SERIES" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Preschoolers in motion—showing curiosity, movement, and joyful progress through a forward roll.</p>

        <h3>📌 Content Notes:</h3>
        <p>Use one child to show all 4 steps clearly. Focus on progression and facial expression.</p>

        <h3>📷 What to Upload:</h3>
        <p>4 photos showing each stage of a forward roll:</p>
        <ul>
          <li>Hands Up High</li>
          <li>Hands Down Low</li>
          <li>Look at Your Belly</li>
          <li>Over You Go – TADAA!</li>
        </ul>
      </div>

      <UploadChecklist items={checklistItems} section="riddle" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}