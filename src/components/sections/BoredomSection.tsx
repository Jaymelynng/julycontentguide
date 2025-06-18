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
        <div className="upload-details">
          <div className="upload-item">
            <h4>📹 Video 1: Group/Team Activity – High-Energy and Physical</h4>
            <ul>
              <li>Kids feel: excited, energized—this place looks like so much fun!</li>
              <li>Parents value: teamwork, physical activity</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>📹 Video 2: Learning & Progress</h4>
            <ul>
              <li>Kids feel: eager to show off a new skill</li>
              <li>Parents value: personal growth, progress</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>📹 Video 3: Friendship & Connection</h4>
            <ul>
              <li>Kids feel: excited to have fun with friends or make new ones</li>
              <li>Parents value: social growth, new experiences, lasting memories</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>📹 Video 4: Gym Personality & Playfulness</h4>
            <ul>
              <li>Kids feel: how fun the gym is and how cool the coaches are</li>
              <li>Parents value: playful, positive role models and a healthy environment</li>
            </ul>
          </div>

          <div className="upload-item">
            <h4>📹 Video 5: Happy & Worn Out</h4>
            <ul>
              <li>Kids feel: fulfilled, can't wait to come back tomorrow</li>
              <li>Parents value: a full, active, happy day</li>
            </ul>
          </div>
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