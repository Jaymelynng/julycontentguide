import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function BoredomSection() {
  const checklistItems = [
    { id: 'boredom1', label: 'Video 1: Group/Team Activity – High-Energy and Physical', type: 'video' as const },
    { id: 'boredom2', label: 'Video 2: Learning & Progress', type: 'video' as const },
    { id: 'boredom3', label: 'Video 3: Friendship & Connection', type: 'video' as const },
    { id: 'boredom4', label: 'Video 4: Gym Personality & Playfulness', type: 'video' as const },
    { id: 'boredom5', label: 'Video 5: Happy & Worn Out', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        5 Epic Ways to Beat Summer Boredom
        <ContentBadge type="series" label="REEL | 5 VIDEOS" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Five clips that visually show the variety and value of summer camp, highlighting fun for kids and demonstrating value to parents. Think energy, friendship, new skills, and adventure.</p>

        <h3>📌 Content Notes:</h3>
        <ul>
          <li>Record 5 clips total</li>
          <li>Each should be 15–20 seconds long</li>
          <li>You should only upload the final, trimmed clips—each one should show exactly what you want used in the final post.</li>
          <li>If you'd like to include multiple angles, effects, or cuts, that's encouraged—just edit them into a single 15–20 second clip before uploading.</li>
          <li>What you submit should be post-ready and require no further trimming or cleanup. I'll handle stitching the final clips together with transitions.</li>
        </ul>

        <h3>🎥 UPLOAD THESE 5 VIDEOS:</h3>
        
        <div className="upload-item">
          <h4>📹 Video 1: Group/Team Activity – High-Energy and Physical</h4>
          <p><strong>Kids feel:</strong> excited, energized—this place looks like so much fun!</p>
          <p><strong>Parents value:</strong> teamwork, physical activity</p>
        </div>

        <div className="upload-item">
          <h4>📹 Video 2: Learning & Progress</h4>
          <p><strong>Kids feel:</strong> eager to show off a new skill</p>
          <p><strong>Parents value:</strong> personal growth, progress</p>
        </div>

        <div className="upload-item">
          <h4>📹 Video 3: Friendship & Connection</h4>
          <p><strong>Kids feel:</strong> excited to have fun with friends or make new ones</p>
          <p><strong>Parents value:</strong> social growth, new experiences, lasting memories</p>
        </div>

        <div className="upload-item">
          <h4>📹 Video 4: Gym Personality & Playfulness</h4>
          <p><strong>Kids feel:</strong> how fun the gym is and how cool the coaches are</p>
          <p><strong>Parents value:</strong> playful, positive role models and a healthy environment</p>
        </div>

        <div className="upload-item">
          <h4>📹 Video 5: Happy & Worn Out</h4>
          <p><strong>Kids feel:</strong> fulfilled, can't wait to come back tomorrow</p>
          <p><strong>Parents value:</strong> a full, active, happy day</p>
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="boredom" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="multiple-videos" />
    </div>
  );
}