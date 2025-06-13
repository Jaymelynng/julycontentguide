import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function BoredomSection() {
  const checklistItems = [
    { id: 'boredom1', label: 'A group of kids bursts with excitement and high energy.', type: 'photo' as const },
    { id: 'boredom2', label: 'Learning a New Skill', type: 'photo' as const },
    { id: 'boredom3', label: 'Friends Having Fun', type: 'photo' as const },
    { id: 'boredom4', label: 'Dancing or Silly Moments', type: 'photo' as const },
    { id: 'boredom5', label: 'Exhausted & Happy Kids', type: 'photo' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          1. 5 Epic Ways to Beat Summer Boredom
          <ContentBadge type="photo" label="PHOTO CAROUSEL" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">Create a carousel with five photos showcasing different summer activities.</div>
      </EditableContent>

      <UploadChecklist items={checklistItems} />

      <div className="multiple-files-note">
        💡 Since you're uploading 5 photos, name them: BeatBoredom_1, BeatBoredom_2, BeatBoredom_3, BeatBoredom_4, BeatBoredom_5
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}