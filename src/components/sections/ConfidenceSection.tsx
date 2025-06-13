import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function ConfidenceSection() {
  const checklistItems = [
    { id: 'confidence1', label: 'One amazing photo showing joy, pride, excitement, or happiness', type: 'photo' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          4. The Secret to Confidence That Lasts Beyond Summer
          <ContentBadge type="photo" label="PHOTO" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          Select one amazing photo that makes you smile—no limits! Capture joy, pride, excitement, or pure happiness.
        </div>
      </EditableContent>

      <UploadChecklist items={checklistItems} />

      <GymSelector postType="single" />
    </div>
  );
}