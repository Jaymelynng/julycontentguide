import React from 'react';
import { EditableContent } from '../EditableContent';
import { ContentBadge } from '../ContentBadge';
import { GymSelector } from '../GymSelector';

export function HandstandSection() {
  return (
    <div>
      <EditableContent>
        <h1>
          Handstand Contest!!!
          <ContentBadge type="video" label="VIDEO" />
        </h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          Organize a handstand contest for groups of kids, coaches, or both.
          Can be walking or no walking!
          Get creative with locations: beam, vault table, or any part of the gym. Any team gym cast handstand holds would be fun! 
          Start filming with "Ready, Set, Go!" and keep recording until the last participant comes down.
        </div>
      </EditableContent>

      <div className="upload-checklist">
        <h4>📋 What to Upload:</h4>
        
        <div className="task-list">
          <div className="task-item">
            <div className="task-number">1</div>
            <div className="task-content">
              <EditableContent>
                <span className="task-label">
                  Hands Up High: Photo 1 feet together arms by ears Big reach for the sky!
                </span>
              </EditableContent>
              <span className="task-type photo-type">PHOTO</span>
            </div>
          </div>
          
          <div className="task-item">
            <div className="task-number">2</div>
            <div className="task-content">
              <EditableContent>
                <span className="task-label">
                  Hands Down Low: Photo 2 Squat low. Chin tucked. Hands on the floor like a tight ball.
                </span>
              </EditableContent>
              <span className="task-type photo-type">PHOTO</span>
            </div>
          </div>
          
          <div className="task-item">
            <div className="task-number">3</div>
            <div className="task-content">
              <EditableContent>
                <span className="task-label">
                  Look at Your Belly: Photo Mid-forward roll –
                </span>
              </EditableContent>
              <span className="task-type photo-type">PHOTO</span>
            </div>
          </div>
          
          <div className="task-item">
            <div className="task-number">4</div>
            <div className="task-content">
              <EditableContent>
                <span className="task-label">
                  Over You Go: TADAA Photo 4 TADAA! What a superstar!
                </span>
              </EditableContent>
              <span className="task-type photo-type">PHOTO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="requirements">
        <EditableContent>
          <h3>💡 TIPS:</h3>
        </EditableContent>
        <EditableContent>
          <ul>
            <li>Clean background, good lighting</li>
            <li>Steady surface</li>
            <li>Film multiple attempts to capture the best footage</li>
            <li>Capture authentic excitement and fun moments</li>
          </ul>
        </EditableContent>
      </div>

      <div className="fun-divider">
        <span className="fun-divider-icon">🚀</span>
      </div>

      <GymSelector postType="single" />
    </div>
  );
}