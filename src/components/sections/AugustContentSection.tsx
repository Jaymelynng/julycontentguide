import React from 'react';

interface AugustContentSectionProps {
  ideaNumber: string;
}

const augustContent: Record<string, any> = {
  '1': {
    title: 'Back to School, Back to Balance',
    date: 'Film July for August content',
    type: 'PHOTO CAROUSEL | 4 SQUARE PHOTOS',
    visual: 'Four square photos that showcase how beam balance builds confidence and directly translates to school readiness.\n\n"If they can conquer this level of balance and focus, they\'re ready for anything school throws at them."\n\nEach image tells a story — from concentration to play to composure — connecting gymnastics movement to real-world skills kids need for the classroom.',
    notes: [
      'Take 4 photos in square (1:1) aspect ratio',
      'Prioritize clean lighting and visible kid expressions',
      'Make posture and balance visually impressive — aim for the "Wow, my kid could do that" reaction',
      'Check camera settings before shooting — pixel enhancement and rotation create delays',
      'Submit post-ready images to streamline editing and carousel design'
    ],
    uploads: [
      {
        number: 1,
        title: 'Uphill Beam Walk with Props – Multitasking & Sensory Control',
        description: 'Clean visual line of incline: Use a floor beam with a trapezoid or carpet beam to show the incline.',
        details: 'Balancing an object on their head with arms extended. If you have any school-themed props to balance, that would be fantastic! The shot should be wide from the side, showing the whole class and the beam on the incline.'
      },
      {
        number: 2,
        title: 'One-Foot Beam Balance – "Steady Focus"',
        description: 'A kiddo balancing confidently on one foot',
        details: 'Shot from the front to show narrow beam width and control'
      },
      {
        number: 3,
        title: 'Beam Game Action – "Problem-Solving Play"',
        description: 'Capture a playful challenge like hula hoop balance or pit-throw game',
        details: 'Look for excitement, thinking faces, or teamwork'
      },
      {
        number: 4,
        title: 'Final Pose – "I\'m Ready" Moment',
        description: 'I\'ve got this" energy',
        details: 'A confident finish — lunge pose after landing, or strong jump with strong arms mid-air. Big proud smile, arms strong or overhead. Feels like a victory moment — "I nailed it"'
      }
    ]
  },
  '3': {
    title: 'Power Starts Here: Roundoff Power Source',
    type: 'PHOTOS + VIDEO | 2 PHOTOS + 1 VIDEO',
  }
};

export function AugustContentSection({ ideaNumber }: AugustContentSectionProps) {
  const content = augustContent[ideaNumber];
  
  if (content && content.visual && content.notes && content.uploads) {
    return (
      <div className="august-content-section">
        <div className="content-header">
          <h1>POST #{ideaNumber}: {content.title}</h1>
          <div className="content-meta">
            {content.date && <span className="filming-date">📅 {content.date}</span>}
            <span className="filming-date">📅 Film July for August content</span>
            <div className="content-type-badge">{content.type}</div>
          </div>
        </div>

        <div className="post-visual-section">
          <div className="section-header">
            <span className="section-icon">🎯</span>
            <h3>Post Visual</h3>
          </div>
          <div className="section-content">
            <p>{content.visual}</p>
          </div>
        </div>

        <div className="content-notes-section">
          <div className="section-header">
            <span className="section-icon">📌</span>
            <h3>Content Notes</h3>
          </div>
          <div className="section-content">
            <ul className="notes-list">
              {content.notes.map((note: string, index: number) => (
                <li key={index} className="note-item">
                  <span className="note-bullet">•</span>
                  <span className="note-text">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="what-to-upload-section">
          <div className="section-header">
            <span className="section-icon">📋</span>
            <h3>What to Upload:</h3>
          </div>
          <div className="upload-preview-list">
            {content.uploads.map((upload: any) => (
              <div key={upload.number} className="upload-preview-item">
                <div className="preview-number">{upload.number}</div>
                <div className="preview-content">
                  <h4 className="preview-title">{upload.title}</h4>
                  <span className="preview-badge">PHOTO</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="upload-details-section">
          <div className="section-header">
            <span className="section-icon">📸</span>
            <h3>UPLOAD THESE {content.uploads.length} PHOTOS{content.uploads.length === 4 ? ' (With Storylines)' : ''}</h3>
          </div>
          <div className="detailed-uploads">
            {content.uploads.map((upload: any, index: number) => (
              <div key={upload.number} className="detailed-upload-item">
                <div className="upload-number-badge">{upload.number}</div>
                <div className="upload-details-content">
                  <h4 className="upload-title">{upload.title}</h4>
                  {upload.theme && (
                    <div className="upload-theme-badge">
                      <span className="theme-icon">🎯</span>
                      <span className="theme-text">{upload.theme}</span>
                    </div>
                  )}
                  <div className="upload-description">
                    <span className="description-bullet">•</span>
                    <span>{upload.description}</span>
                  </div>
                  {upload.details && (
                    <div className="upload-details">
                      <span className="details-bullet">•</span>
                      <span>{upload.details}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fun-divider">
          <span className="fun-divider-icon">🚀</span>
        </div>

        <div className="gym-selector-placeholder">
          <div className="placeholder-content">
            <h3>📤 Upload Process</h3>
            <p>SharePoint upload integration will be added here, following the same proven process as July content.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="august-content-section">
      <div className="content-header">
        <h1>August Content Post {ideaNumber}</h1>
        <div className="status-badge planning">🚧 In Development</div>
      </div>

      <div className="development-notice">
        <div className="notice-icon">🛠️</div>
        <div className="notice-content">
          <h3>Post Under Development</h3>
          <p>
            This post is currently being developed. Once finalized, it will include:
          </p>
          <ul>
            <li>📋 Detailed post requirements</li>
            <li>🎯 Clear visual objectives</li>
            <li>📝 Step-by-step instructions</li>
            <li>📤 Upload checklists</li>
            <li>🔗 Direct SharePoint integration</li>
          </ul>
        </div>
      </div>

      <div className="placeholder-content">
        <h3>What to Expect</h3>
        <p>
          Each August post will follow the same proven format as the July content:
        </p>
        
        <div className="format-preview">
          <div className="format-section">
            <h4>🎯 Post Visual</h4>
            <p>Clear description of what the post should capture emotionally and visually</p>
          </div>
          
          <div className="format-section">
            <h4>📌 Content Notes</h4>
            <p>Technical requirements, timing, length, and quality standards</p>
          </div>
          
          <div className="format-section">
            <h4>📤 Upload Requirements</h4>
            <p>Specific list of what to upload (photos, videos, etc.)</p>
          </div>
          
          <div className="format-section">
            <h4>🚀 SharePoint Integration</h4>
            <p>Direct links to upload folders with file naming assistance</p>
          </div>
        </div>
      </div>

      <div className="timeline-info">
        <h3>📅 Development Timeline</h3>
        <div className="timeline-steps">
          <div className="timeline-step current">
            <div className="step-indicator">📝</div>
            <div className="step-info">
              <h4>Planning Phase</h4>
              <p>Post concepts being developed</p>
            </div>
          </div>
          
          <div className="timeline-step upcoming">
            <div className="step-indicator">✍️</div>
            <div className="step-info">
              <h4>Post Creation</h4>
              <p>Detailed instructions will be added</p>
            </div>
          </div>
          
          <div className="timeline-step upcoming">
            <div className="step-indicator">🚀</div>
            <div className="step-info">
              <h4>Ready for Production</h4>
              <p>Available for post creation in July</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}