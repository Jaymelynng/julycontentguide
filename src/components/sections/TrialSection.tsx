import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function TrialSection() {
  const checklistItems = [
    { id: 'trial1', label: 'A kid actively participating', type: 'photo' as const },
    { id: 'trial2', label: 'A coach giving high-fives or encouragement', type: 'photo' as const },
    { id: 'trial3', label: 'A class in motion', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        "Not Sure What to Expect?" – We'll Show You - FREE TRIAL
        <ContentBadge type="series" label="PHOTO SERIES" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>A high-energy class in action—coaches engaged, kids smiling, and real learning in motion.</p>

        <h3>📌 Content Notes:</h3>
        <p>Focus on a well-timed shot with interaction (e.g. high-fives or coaching moments). Show action, not posing.</p>

        <h3>📷 What to Upload:</h3>
        <p>3 standout photo showing:</p>
        <ul>
          <li>A kid actively participating</li>
          <li>A coach giving high-fives or encouragement</li>
          <li>A class in motion</li>
        </ul>
      </div>

      <UploadChecklist items={checklistItems} section="trial" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}