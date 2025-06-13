import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function TrialSection() {
  const checklistItems = [
    { id: 'trial1', label: '1 super amazing photo: active class in motion with coach engagement & high fives', type: 'photo' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          7. "Not sure what to expect? That's okay—we'll show you." 👀🤸
          <ContentBadge type="photo" label="PHOTO" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          1 super amazing photo - Book a free trial class and see the magic for yourself—smiles, high-fives, and all.
          Action shot of an active class in motion: kid active, coach engaged, high fives, think motion!
        </div>
      </EditableContent>

      <UploadChecklist items={checklistItems} section="trial" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}