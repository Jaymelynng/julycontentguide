import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function HandstandSection() {
  const checklistItems = [
    { id: 'handstand1', label: 'Handstand contest video (floor, beam, or vault table)', type: 'video' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          3. Handstand Contest!!!
          <ContentBadge type="video" label="VIDEO" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          Organize a handstand contest for groups of kids, coaches, or both.
          Can be walking or no walking!
          Get creative with locations: beam, vault table, or any part of the gym. Any team gym cast handstand holds would be fun! 
          Start filming with "Ready, Set, Go!" and keep recording until the last participant comes down.
        </div>
      </EditableContent>

      <UploadChecklist items={checklistItems} />

      <div className="requirements">
        <EditableContent>
          <h3>📋 Requirements:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Clean background, good lighting</li>
            <li>Steady surface</li>
          </ul>
        </EditableContent>
      </div>
      
      <div className="protips">
        <EditableContent>
          <h3>💡 Pro Tips:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Film multiple attempts to capture the best footage</li>
            <li>Capture authentic excitement and fun moments</li>
          </ul>
        </EditableContent>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}