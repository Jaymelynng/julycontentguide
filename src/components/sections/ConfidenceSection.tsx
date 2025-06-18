import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function ConfidenceSection() {
  return (
    <div>
      <h1>
        Confidence That Lasts Beyond Summer
        <ContentBadge type="photo" label="PHOTO | 1 PHOTO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Core Visual: A pure "I-did-it!" face!</p>

        <h3>📌 Content Notes:</h3>
        <p>Choose one powerful, clear image that radiates confidence. It should be that photo that instantly makes you smile. Highlight the child's face and emotion in action.</p>
        <p>Close up or far away - as long as it gets the reaction and vibe. Well-lit and crisp.</p>

        <h3>📷 UPLOAD THIS 1 PHOTO:</h3>
        <div className="upload-details">
          <div className="upload-item">
            <h4>📸 One incredible photo of a kido/s beaming with pride (rope climb, ninja course, new skill, etc.)</h4>
          </div>
        </div>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}