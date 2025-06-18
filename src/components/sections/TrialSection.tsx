import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function TrialSection() {
  const checklistItems = [
    { id: 'trial1', label: 'A group action shot of a class in action', type: 'photo' as const },
    { id: 'trial2', label: 'A coach connecting with kids in class', type: 'photo' as const },
    { id: 'trial3', label: 'Anything that makes you smile and highlights your gym\'s personality', type: 'photo' as const },
  ];

  return (
    <div>
      <h1>
        3 Photos "Not Sure What to Expect?" – We'll Show You- FREE TRIAL
        <ContentBadge type="series" label="PHOTOS | 3 PHOTOS" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>A high-energy class in action—coaches involved, kids smiling, and real learning happening.</p>

        <h3>📌 Content Notes:</h3>
        <p>Grab those perfect moments where the energy and fun are obvious—think high-fives, big smiles, and kids in the middle of the action. No stiff poses, just real, awesome moments. Goal is to encourage people to try free trial classes and show off your gym equipment and fun atmosphere.</p>

        <h3>📷 UPLOAD THESE 3 PHOTOS:</h3>
        <div className="upload-details">
          <div className="upload-item">
            <ul>
              <li><strong>📸 Photo 1:</strong> A group action shot of a class in action—kids playing together, smiling, and having a blast.</li>
              <li><strong>📸 Photo 2:</strong> A coach connecting with kids in class—think high-fives, spotting a skill, or a teaching moment.</li>
              <li><strong>📸 Photo 3:</strong> Anything that makes you smile and highlights your gym's personality—use equipment, displays, or decorations that show off what makes your gym unique.</li>
            </ul>
          </div>
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="trial" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="multiple-photos" />
    </div>
  );
}