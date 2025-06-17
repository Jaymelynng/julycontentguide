import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { GymSelector } from '../GymSelector';
import { UploadChecklist } from '../UploadChecklist';

export function HandstandSection() {
  const checklistItems = [
    { id: 'handstand1', label: 'One 20–30 second continuous video capturing the full contest', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        Handstand Contest!!!
        <ContentBadge type="video" label="VIDEO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Organize a classic handstand contest. Can be walking or no walking! Include kids of any and all levels in your gym—the more mix, the better! Kids, coaches, or both. Get creative with locations: beam handstands, vault table, or any part of the gym. Any team gym cast handstand holds would be fun! Catch the fun energy and team spirit.</p>

        <h3>📌 Content Notes:</h3>
        <ul>
          <li>Submit one final video, 20–30 seconds total, from start to finish that captures a classic handstand contest.</li>
          <li>It's encouraged to include multiple clips, angles, or views—just make sure they are put together before uploading so it plays as one smooth video.</li>
          <li>If you're not sure how to do that, just let me know—I can help.</li>
        </ul>

        <h3>🎥 What to Upload:</h3>
        <p>One 20–30 second continuous video capturing the full contest</p>
      </div>

      <UploadChecklist items={checklistItems} section="handstand" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}