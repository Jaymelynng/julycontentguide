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
        1 Photo The Secret to Confidence That Lasts Beyond Summer
        <ContentBadge type="photo" label="PHOTO | 1 PHOTO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Core Visual: A pure "I-did-it!" face!</p>

        <h3>📌 Content Notes:</h3>
        <p>Choose one powerful, clear image that radiates confidence. It should be that photo that instantly makes you smile. Highlight the child's face and emotion in action.</p>

        <h3>📷 UPLOAD THIS 1 PHOTO:</h3>
        <div className="upload-details">
          <div className="upload-item">
            <h4>📸 One incredible photo of a child achieving something big (rope climb, ninja course, new skill, etc.)</h4>
          </div>
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="confidence" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}