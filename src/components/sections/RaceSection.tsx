import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function RaceSection() {
  const checklistItems = [
    { id: 'race1', label: 'One full video: Start with "Ready, Set, Go!" → End after reactions', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        "Can You Keep Up?" – Coach vs. Kid Race
        <ContentBadge type="video" label="VIDEO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>A fun, fast-paced showdown between kids and coaches full of laughter, cheering, and big energy.</p>

        <h3>📌 Content Notes:</h3>
        <p>Film one continuous race from start ("Ready, Set, Go!") to final reactions. Capture both action and fun!</p>

        <h3>🎥 What to Upload:</h3>
        <p>One full video: Start with "Ready, Set, Go!" → End after reactions</p>
      </div>

      <UploadChecklist items={checklistItems} section="race" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}