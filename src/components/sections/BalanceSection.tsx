import React from 'react';
import { ContentBadge } from '../ContentBadge';
import { UploadChecklist } from '../UploadChecklist';
import { GymSelector } from '../GymSelector';

export function BalanceSection() {
  const checklistItems = [
    { id: 'balance1', label: 'Video 1: Walking – Zoom on Feet', type: 'video' as const },
    { id: 'balance2', label: 'Video 2: Skill – Zoom to Movement', type: 'video' as const },
    { id: 'balance3', label: 'Video 3: Dismount – Zoom to Landing', type: 'video' as const },
  ];

  return (
    <div>
      <h1>
        Balance Reel
        <ContentBadge type="series" label="VIDEO SERIES" />
      </h1>

      <div className="content-section">
        <h3>📋 What to Upload:</h3>
        
        <div className="balance-videos">
          <div className="balance-video-item">
            <div className="video-number">1</div>
            <div className="video-content">
              <h4>Video 1: Walking – Zoom on Feet</h4>
              <span className="video-badge">VIDEO</span>
              <div className="scene-description">
                <h5>🎬 Scene 1: Walking – Zoom on Feet</h5>
                <p>Start with a view straight down the beam, showing how narrow it is. Gymnast walks slowly toward the viewer, centered on the beam.</p>
                <p><strong>Camera:</strong> Start wide → zoom in on the feet as they walk with control.</p>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">2</div>
            <div className="video-content">
              <h4>Video 2: Skill – Zoom to Movement</h4>
              <span className="video-badge">VIDEO</span>
              <div className="scene-description">
                <h5>🎬 Scene 2: Skill – Zoom to Movement</h5>
                <p>Switch to a side view of the gymnast on beam. Film any skill of their choice — leap, scale, arabesque, jump, etc.</p>
                <p><strong>Camera:</strong> Begin wide → zoom in on the movement to highlight precision.</p>
              </div>
            </div>
          </div>

          <div className="balance-video-item">
            <div className="video-number">3</div>
            <div className="video-content">
              <h4>Video 3: Dismount – Zoom to Landing</h4>
              <span className="video-badge">VIDEO</span>
              <div className="scene-description">
                <h5>🎬 Scene 3: Dismount – Zoom to Landing</h5>
                <p>Film from a new angle (diagonal or front corner preferred). Show the entire dismount, from prep to stick + salute.</p>
                <p><strong>Camera:</strong> Full shot → zoom in on the landing or arms lifting in salute.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tips-section">
          <h3>💡 TIPS:</h3>
          <ul>
            <li>Use smooth zoom transitions for dramatic effect</li>
            <li>Capture different angles for variety</li>
            <li>Focus on precision and control in movements</li>
            <li>Make sure each video shows clear skill progression</li>
          </ul>
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