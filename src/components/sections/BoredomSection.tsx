import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function BoredomSection() {
  const checklistItems = [
    { id: 'boredom1', label: 'Video 1: A group of kids bursts with excitement and high energy (15-20 sec)', type: 'video' as const },
    { id: 'boredom2', label: 'Video 2: Learning a New Skill - super stoked (15-20 sec)', type: 'video' as const },
    { id: 'boredom3', label: 'Video 3: Friends Having Fun (15-20 sec)', type: 'video' as const },
    { id: 'boredom4', label: 'Video 4: Dancing or Silly Moments (15-20 sec)', type: 'video' as const },
    { id: 'boredom5', label: 'Video 5: Exhausted & Happy Kids (15-20 sec)', type: 'video' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          5 Epic Ways to Beat Summer Boredom
          <ContentBadge type="series" label="VIDEO SERIES" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">Create five 15-20 second video clips showcasing different summer activities that beat boredom.</div>
      </EditableContent>

      <UploadChecklist items={checklistItems} section="boredom" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="multiple-videos" />
    </div>
  );
}