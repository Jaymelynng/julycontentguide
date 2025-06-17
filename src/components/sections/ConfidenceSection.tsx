import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function ConfidenceSection() {
  const checklistItems = [
    { id: 'confidence1', label: 'A single, standout photo that radiates pride and confidence', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        The Secret to Confidence That Lasts Beyond Summer
        <ContentBadge type="photo" label="PHOTO" />
      </h1>

      <div className="desc">
        Select one amazing photo that showcases achievement and confidence—whether it's climbing to the top of the rope, mastering a new skill, or crossing the ninja course for the first time. The photo should display pride and accomplishment.
      </div>

      <UploadChecklist items={checklistItems} section="confidence" />

      <div className="requirements">
        <h3>💡 TIPS:</h3>
        <ul>
          <li>Focus on clear, bright imagery with a compelling subject</li>
          <li>Capture authentic emotions and genuine moments of achievement</li>
          <li>Show the "I did it!" feeling and pride in accomplishment</li>
          <li>Focus on clear, bright visuals that convey emotion - Like you can feel the moment through the image</li>
        </ul>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}