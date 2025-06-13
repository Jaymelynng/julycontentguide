import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function RiddleSection() {
  const checklistItems = [
    { id: 'riddle1', label: 'Photo 1: Hands Up High', type: 'photo' as const },
    { id: 'riddle2', label: 'Photo 2: Hands Down Low', type: 'photo' as const },
    { id: 'riddle3', label: 'Photo 3: Look at Your Belly', type: 'photo' as const },
    { id: 'riddle4', label: 'Photo 4: Over You Go: TADAA', type: 'photo' as const },
  ];

  return (
    <div>
      <EditableContent>
        <h1>
          6. ✅ Riddle Week
          <ContentBadge type="series" label="PHOTO SERIES" />
        </h1>
      </EditableContent>

      <div className="requirements">
        <EditableContent>
          <h3>🧠 Riddle:</h3>
        </EditableContent>
        <EditableContent>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem', textAlign: 'center' }}>
            "I roll without wheels and flip without wings. I'm the skill that starts it all. What am I?"
          </p>
        </EditableContent>
        <EditableContent>
          <p><b>➡️ Hint:</b> It's every preschooler's favorite intro move!</p>
        </EditableContent>
        <EditableContent>
          <p><b>✅ Answer:</b> Forward Roll</p>
        </EditableContent>
        <EditableContent>
          <p>Capture a preschool-age gymnast in each phase of a forward roll in 4 photos:</p>
        </EditableContent>
      </div>

      <UploadChecklist items={checklistItems} />

      <div className="photo-grid">
        <div className="photo-step">
          <EditableContent>
            <h4>Hands Up High: Photo 1</h4>
          </EditableContent>
        </div>
        <div className="photo-step">
          <EditableContent>
            <h4>Hands Down Low: Photo 2</h4>
          </EditableContent>
        </div>
        <div className="photo-step">
          <EditableContent>
            <h4>Look at Your Belly: Photo 3</h4>
          </EditableContent>
        </div>
        <div className="photo-step">
          <EditableContent>
            <h4>Over You Go: TADAA Photo 4</h4>
          </EditableContent>
        </div>
      </div>

      <div className="requirements">
        <EditableContent>
          <h3>📋 Requirements:</h3>
        </EditableContent>
        <EditableContent>
          <p>Clear, bright photos with no blur. If you can get a coach helping, that's extra awesome!</p>
        </EditableContent>
      </div>

      <div className="multiple-files-note">
        💡 Since you're uploading 4 photos, name them: ForwardRoll_1, ForwardRoll_2, ForwardRoll_3, ForwardRoll_4
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}