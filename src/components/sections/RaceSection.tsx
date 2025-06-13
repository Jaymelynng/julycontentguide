import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function RaceSection() {
  const checklistItems = [
    { id: 'race1', label: 'Coach vs. Kids race with reactions at the end', type: 'video' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          🔥 "Can You Keep Up?" – Coach vs. Kid Race
          <ContentBadge type="video" label="VIDEO" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          Film an exciting, high-energy race between coaches and kids. Can the coach keep up, or will the kids leave them in the dust? 
          Capture playful rivalry, cheering, and fun moments! Time of video: start when "Ready, Set, Go!" begins, end after race/reactions.
        </div>
      </EditableContent>

      <UploadChecklist items={checklistItems} section="race" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <div className="requirements">
        <EditableContent>
          <h3>💡 TIPS:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Loud cheering (louder the better!)</li>
            <li>Steady surface</li>
          </ul>
        </EditableContent>
      </div>

      <div className="protips">
        <EditableContent>
          <h3>💡 Pro TIPS:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Highlight genuine reactions and celebrations at the end</li>
          </ul>
        </EditableContent>
      </div>
      <GymSelector postType="single" />
    </div>
  );
}