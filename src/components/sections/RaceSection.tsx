import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function RaceSection() {
  const checklistItems = [
    { id: 'race1', label: 'Coach vs. Kids race with reactions at the end', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        🔥 "Can You Keep Up?" – Coach vs. Kid Race
        <ContentBadge type="video" label="VIDEO" />
      </h1>

      <div className="desc">
        Film an exciting, high-energy race between coaches and kids. Can the coach keep up, or will the kids leave them in the dust? 
        Capture playful rivalry, cheering, and fun moments! Time of video: start when "Ready, Set, Go!" begins, end after race/reactions.
      </div>

      <div className="requirements">
        <h3>💡 TIPS:</h3>
        <ul>
          <li>Loud cheering (louder the better!)</li>
          <li>Steady surface</li>
          <li>Highlight genuine reactions and celebrations at the end</li>
        </ul>
      </div>

      <UploadChecklist items={checklistItems} section="race" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}