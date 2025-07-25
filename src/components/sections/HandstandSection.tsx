import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { GymSelector } from '../GymSelector';
import { UploadChecklist } from '../UploadChecklist';

export function HandstandSection() {
  const checklistItems = [
    { id: 'handstand1', label: 'One 20–30 second continuous video capturing the full contest(s)', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        Handstand Contest!!!
        <ContentBadge type="video" label="REEL | 1 VIDEO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Create a handstand contest, but YOU get to decide how to make it most entertaining! Get creative with locations: beam handstands (english or side), vault table, or any part of the gym. Any team gym cast handstand holds would be fun! Kids and/or coaches—whatever you think will get the most engagement and show off your gym's fun energy and team spirit.</p>

        <h3>📌 Content Notes:</h3>
        <ul>
          <li>Submit one final video, 20–30 seconds total, from start to finish that captures a classic handstand contest.</li>
          <li>It's encouraged to include multiple clips, angles, or views—just make sure they are put together before uploading so it plays as one smooth video.</li>
          <li>If you're not sure how to do that, just let me know—I can help.</li>
        </ul>

        <h3>🎥 UPLOAD THIS 1 VIDEO:</h3>
        <div className="upload-item">
          <h4>📹 One 20–30 second continuous video capturing the full contest(s)</h4>
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="handstand" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}