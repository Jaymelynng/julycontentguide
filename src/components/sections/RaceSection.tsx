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
        1 Video "Can You Keep Up?" – Coach vs. Kid Race
        <ContentBadge type="video" label="REEL | 1 VIDEO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Coaches participating in obstacle course/race activities with kids—showing coaches actually doing camp games and challenges alongside campers.</p>

        <h3>📌 Content Notes:</h3>
        <p>Film one continuous race from start ("Ready, Set, Go!") to final reactions. Capture both action and fun! Focus on the playful interaction between coaches and kids. can be one or multiple shots angles</p>

        <h3>🎥 UPLOAD THIS 1 VIDEO:</h3>
        <div className="upload-details">
          <div className="upload-item">
            <h4>📹 One full video: Start with "Ready, Set, Go!" → End after reactions</h4>
          </div>
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="race" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}