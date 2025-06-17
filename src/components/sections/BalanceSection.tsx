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

      <UploadChecklist items={checklistItems} section="balance" />

      <div className="requirements">
        <h3>💡 TIPS:</h3>
        <ul>
          <li>Use smooth zoom transitions for dramatic effect</li>
          <li>Capture different angles for variety</li>
          <li>Focus on precision and control in movements</li>
          <li>Make sure each video shows clear skill progression</li>
        </ul>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <div className="scene-grid">
        <div className="scene">
          <h4>🎬 Scene 1: Walking – Zoom on Feet</h4>
          <p>
            Start with a view straight down the beam, showing how narrow it is. 
            Gymnast walks slowly toward the viewer, centered on the beam.
          </p>
          <p>
            <b>Camera:</b> Start wide → zoom in on the feet as they walk with control.
          </p>
        </div>

        <div className="scene">
          <h4>🎬 Scene 2: Skill – Zoom to Movement</h4>
          <p>
            Switch to a side view of the gymnast on beam. Film any skill of their choice — 
            leap, scale, arabesque, jump, etc.
          </p>
          <p>
            <b>Camera:</b> Begin wide → zoom in on the movement to highlight precision.
          </p>
        </div>

        <div className="scene">
          <h4>🎬 Scene 3: Dismount – Zoom to Landing</h4>
          <p>
            Film from a new angle (diagonal or front corner preferred). 
            Show the entire dismount, from prep to stick + salute.
          </p>
          <p>
            <b>Camera:</b> Full shot → zoom in on the landing or arms lifting in salute.
          </p>
        </div>
      </div>

      <GymSelector postType="balance-videos" />
    </div>
  );
}