import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function BalanceSection() {
  const checklistItems = [
    { id: 'balance1', label: 'Video 1: Walking on Beam', type: 'video' as const },
    { id: 'balance2', label: 'Video 2: Skill – Zoom to Movement', type: 'video' as const },
    { id: 'balance3', label: 'Video 3: Dismount – Zoom to Landing', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        3 Video Balance Reel
        <ContentBadge type="series" label="REEL | 3 VIDEOS" />
      </h1>

      <div className="content-section">
        <h3>🎯 Post Visual:</h3>
        <p>Show off balance in a fun, creative way using three short clips. Capture movement with control, cool angles, and a confident finish—something that feels interactive and visually interesting. Give parents a view they don't usually get to see.</p>

        <h3>📌 Content Notes:</h3>
        <p>Use smooth zoom transitions for dramatic effect. Capture different angles for variety. Focus on precision and control in movements.</p>

        <h3>🎥 UPLOAD THESE 3 VIDEOS:</h3>
        
        <div className="balance-videos">
          <div className="balance-video-item">
            <div className="video-number">1</div>
            <div className="video-content">
              <h4>📹 Video 1: Walking on Beam</h4>
              <span className="video-badge">VIDEO</span>
              <div className="scene-description">
                <h5>🎬 Scene 1: Walking on Beam</h5>
                <p>Start with a straight-down-the-beam view. Gymnast walks slowly toward the camera. This is perspective from the end of the beam so they see what doing skills on a 4 inch beam really looks like.</p>
                <p><strong>Camera:</strong> Start wide → zoom in closer towards their feet as they balance</p>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">2</div>
            <div className="video-content">
              <h4>📹 Video 2: Skill – Zoom to Movement</h4>
              <span className="video-badge">VIDEO</span>
              <div className="scene-description">
                <h5>🎬 Scene 2: Skill – Zoom to Movement</h5>
                <p>Switch to a side view of the gymnast on beam. Film one dynamic beam skill of the athlete's choice—anything that shows action and control.</p>
                <p><strong>Camera:</strong> Begin wide → zoom in on the movement to highlight precision.</p>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">3</div>
            <div className="video-content">
              <h4>📹 Video 3: Dismount – Zoom to Landing</h4>
              <span className="video-badge">VIDEO</span>
              <div className="scene-description">
                <h5>🎬 Scene 3: Dismount – Zoom to Landing</h5>
                <p>Film from a new angle (diagonal or front corner preferred). Show the entire dismount, from prep to stick + salute.</p>
                <p><strong>Camera:</strong> Full shot → zoom in on the landing or arms lifting in salute.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UploadChecklist items={checklistItems} section="balance" />

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="balance-videos" />
    </div>
  );
}