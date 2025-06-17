import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function ConfidenceSection() {
  const checklistItems = [
    { id: 'confidence1', label: 'One incredible photo of a child achieving something big', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        The Secret to Confidence That Lasts Beyond Summer
        <ContentBadge type="photo" label="PHOTO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>A moment of pride and accomplishment—capturing a big win or personal victory.</p>

        <h3>📌 Content Notes:</h3>
        <p>Choose one powerful, clear image that radiates confidence. Highlight the child's face and emotion in action.</p>

        <h3>📷 What to Upload:</h3>
        <p>One incredible photo of a child achieving something big (rope climb, ninja course, new skill, etc.)</p>
      </div>

      <UploadChecklist items={checklistItems} section="confidence" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}