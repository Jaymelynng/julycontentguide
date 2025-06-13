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
          4. The Secret to Confidence That Lasts Beyond Summer
          <ContentBadge type="video" label="VIDEO" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          Create one amazing 15-20 second video that makes you smile—no limits! Capture joy, pride, excitement, or pure happiness in motion.
        </div>
      </EditableContent>

      <UploadChecklist items={checklistItems} />
      <UploadChecklist items={checklistItems} section="confidence" />

      <GymSelector postType="single" />
    </div>
  );
}