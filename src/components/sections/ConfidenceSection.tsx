import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function ConfidenceSection() {
  const checklistItems = [
    { id: 'confidence1', label: 'One amazing 15-20 second video showing joy, pride, excitement, or happiness', type: 'video' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          The Secret to Confidence That Lasts Beyond Summer
          <ContentBadge type="video" label="VIDEO" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          Create one amazing 15-20 second video that makes you smile—no limits! Capture joy, pride, excitement, or pure happiness in motion.
        </div>
      </EditableContent>

      <UploadChecklist items={checklistItems} section="confidence" />

      <div className="requirements">
        <EditableContent>
          <h3>💡 TIPS:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Focus on authentic emotions and genuine moments</li>
            <li>Capture the "I did it!" feeling</li>
            <li>Good lighting to show facial expressions clearly</li>
            <li>Let the joy and pride shine through naturally</li>
          </ul>
        </EditableContent>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}