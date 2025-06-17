import React from 'react';
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
      <h1>
        ✅ Riddle Week
        <ContentBadge type="series" label="PHOTO SERIES" />
      </h1>

      <div className="requirements">
        <h3>🧠 Riddle:</h3>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', textAlign: 'center' }}>
          "I roll without wheels and flip without wings. I'm the skill that starts it all. What am I?"
        </p>
        <p><b>➡️ Hint:</b> It's every preschooler's favorite intro move!</p>
        <p><b>✅ Answer:</b> Forward Roll</p>
        <p>Capture a preschool-age gymnast in each phase of a forward roll in 4 photos:</p>
      </div>

      <div className="requirements">
        <h3>💡 TIPS:</h3>
        <p>Clear, bright photos with no blur. If you can get a coach helping, that's extra awesome!</p>
      </div>

      <UploadChecklist items={checklistItems} section="riddle" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <div className="photo-grid">
        <div className="photo-step">
          <h4>Hands Up High: Photo 1</h4>
        </div>
        <div className="photo-step">
          <h4>Hands Down Low: Photo 2</h4>
        </div>
        <div className="photo-step">
          <h4>Look at Your Belly: Photo 3</h4>
        </div>
        <div className="photo-step">
          <h4>Over You Go: TADAA Photo 4</h4>
        </div>
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}