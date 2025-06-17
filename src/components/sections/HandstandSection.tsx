import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { GymSelector } from '../GymSelector';

export function HandstandSection() {
  const checklistItems = [
    { id: 'handstand1', label: 'One completed handstand contest video, 20–30 seconds long', type: 'video' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          Handstand Contest!!!
          <ContentBadge type="video" label="VIDEO" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          Organize a classic handstand contest. Can be walking or no walking! Include kids of any and all levels in your gym—the more mix, the better! Kids, coaches, or both. Get creative with locations: beam handstands, vault table, or any part of the gym. Any team gym cast handstand holds would be fun! Catch the fun energy and team spirit.
        </div>
      </EditableContent>

      <UploadChecklist items={checklistItems} section="handstand" />

      <div className="requirements">
        <EditableContent>
          <h3>💡 TIPS:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Clean background, good lighting</li>
            <li>Steady surface</li>
            <li>It's encouraged to include multiple clips, angles, or views—just make sure they are put together before uploading so it plays as one smooth video</li>
            <li>Consider including variations across different days, age groups, or programs to showcase growth and progress</li>
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