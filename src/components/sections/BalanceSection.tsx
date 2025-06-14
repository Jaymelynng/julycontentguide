import React from 'react';
import { EditableContent } from '../EditableContent';
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
      <EditableContent>
        <h1>
          Balance Reel
          <ContentBadge type="series" label="VIDEO SERIES" />
        </h1>
      </EditableContent>

      <UploadChecklist items={checklistItems} section="balance" />

      <div className="requirements">
        <EditableContent>
          <h3>💡 TIPS:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Use smooth zoom transitions for dramatic effect</li>
            <li>Capture different angles for variety</li>
            <li>Focus on precision and control in movements</li>
            <li>Make sure each video shows clear skill progression</li>
          </ul>
        </EditableContent>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <div className="scene-grid">
        <div className="scene">
          <EditableContent>
            <h4>🎬 Scene 1: Walking – Zoom on Feet</h4>
          </EditableContent>
          <EditableContent>
            <p>
              Start with a view straight down the beam, showing how narrow it is. 
              Gymnast walks slowly toward the viewer, centered on the beam.
            </p>
          </EditableContent>
          <EditableContent>
            <p>
              <b>Camera:</b> Start wide → zoom in on the feet as they walk with control.
            </p>
          </EditableContent>
        </div>

        <div className="scene">
          <EditableContent>
            <h4>🎬 Scene 2: Skill – Zoom to Movement</h4>
          </EditableContent>
          <EditableContent>
            <p>
              Switch to a side view of the gymnast on beam. Film any skill of their choice — 
              leap, scale, arabesque, jump, etc.
            </p>
          </EditableContent>
          <EditableContent>
            <p>
              <b>Camera:</b> Begin wide → zoom in on the movement to highlight precision.
            </p>
          </EditableContent>
        </div>

        <div className="scene">
          <EditableContent>
            <h4>🎬 Scene 3: Dismount – Zoom to Landing</h4>
          </EditableContent>
          <EditableContent>
            <p>
              Film from a new angle (diagonal or front corner preferred). 
              Show the entire dismount, from prep to stick + salute.
            </p>
          </EditableContent>
          <EditableContent>
            <p>
              <b>Camera:</b> Full shot → zoom in on the landing or arms lifting in salute.
            </p>
          </EditableContent>
        </div>
      </div>

      <GymSelector postType="balance-videos" />
    </div>
  );
}