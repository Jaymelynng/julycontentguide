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
        <ContentBadge type="video" label="REEL | 1 VIDEO" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Create a handstand contest, but YOU get to decide how to make it most entertaining! Your creative freedom:</p>
        
        <div className="upload-details">
          <div className="upload-item">
            <h4>🎨 Ideas:</h4>
            <ul>
              <li><strong>Contest Style:</strong> One big contest with crazy high energy OR multiple mini-contests with different angles</li>
              <li><strong>Participants:</strong> Kids only, coaches only, OR mix kids and coaches together</li>
              <li><strong>Locations:</strong> Floor handstands, beam handstands, vault table, or any creative spot in your gym</li>
              <li><strong>Format:</strong> Walking handstands, stationary holds, team cast handstands, or whatever works best</li>
            </ul>
          </div>
          
          <div className="upload-item">
            <h4>🎯 The Goal:</h4>
            <p>Create whatever version YOU think will get the most engagement and show off the fun energy of your gym. You know your audience and what works best, so format it however you think will make people stop scrolling and want to come see all the fun! 🙌</p>
          </div>
        </div>

        <h3>📌 Content Notes:</h3>
        <p>Submit one final video, 20–30 seconds total, that captures YOUR version of a handstand contest. Multiple clips, angles, or creative editing encouraged—just put it together as one smooth video before uploading. If you need help editing, just let me know!</p>

        <h3>🎥 UPLOAD THIS 1 VIDEO:</h3>
        <div className="upload-item">
          <h4>📹 One 20–30 second video capturing YOUR handstand contest vision</h4>
          <p>Show us what makes your gym's handstand contest special and engaging!</p>
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