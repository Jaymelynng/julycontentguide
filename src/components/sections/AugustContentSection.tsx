import React from 'react';

interface AugustContentSectionProps {
  ideaNumber: string;
}

const augustContent: Record<string, any> = {
  '1': {
    title: 'Back to School, Back to Balance',
    type: 'PHOTO CAROUSEL | 4 SQUARE PHOTOS',
    visual: 'Four square photos that showcase how beam balance builds confidence and directly translates to school readiness. "If they can conquer this level of balance and focus, they\'re ready for anything school throws at them." Each image tells a story — from concentration to play to composure — connecting gymnastics movement to real-world skills kids need for the classroom.',
    notes: [
      '🖼️ Take 4 photos in square (1:1) aspect ratio',
      '☀️ Prioritize clean lighting and visible kid expressions',
      '📐 Make posture and balance visually impressive — aim for the "Wow, my kid could do that" reaction',
      '⚙️ Check camera settings before shooting — pixel enhancement and rotation create delays',
      '✅ Submit post-ready images to streamline editing and carousel design'
    ],
    uploads: [
      {
        number: 1,
        title: 'Class Walking Uphill on Beam',
        theme: '📚 Academic Focus',
        description: 'Kids walking uphill with books balanced on their heads',
        details: 'Use a floor beam with trapezoid or carpet beam to simulate incline'
      },
      {
        number: 2,
        title: 'Forward Shot – One-Foot Balance',
        theme: '🦶 Handling Uncertainty',
        description: 'A child balancing on one foot with a school-themed item (book, pencil case, etc.)',
        details: 'Highlight narrow beam width and visual precision. Communicates steady focus and independent problem-solving'
      },
      {
        number: 3,
        title: 'Game Example – Skill Through Play',
        theme: '🎯 Problem-Solving Meets Movement',
        description: 'Capture a playful challenge like hula hoop balance or pit-throw game',
        details: 'Show how we teach hard skills through engaging, imaginative formats. Connects motor planning to flexible thinking and emotional regulation'
      },
      {
        number: 4,
        title: 'Final Balance Pose – "I\'m Ready" Moment',
        theme: '🎒 Composure and Confidence',
        description: 'Child finishing a skill or striking a balanced end pose (salute, arms out, steady stand)',
        details: 'Look for proud facial expression — "I\'ve got this" energy'
      }
    ]
  }
};

export function AugustContentSection({ ideaNumber }: AugustContentSectionProps) {
  const content = augustContent[ideaNumber];
  
  if (content) {
    return (
      <div className="august-content-section">
        <div className="content-header">
          <h1>POST #{ideaNumber}: {content.title}</h1>
          <div className="content-meta">
            <span className="filming-date">📅 Film July for August content</span>
            <div className="content-type-badge">{content.type}</div>
          </div>
        </div>

        <div className="content-section">
          <h3>🎯 Post Visual:</h3>
          <p>{content.visual}</p>

          <h3>📌 Content Notes:</h3>
          <ul>
            {content.notes.map((note: string, index: number) => (
              <li key={index}>{note}</li>
            ))}
          </ul>

          <h3>🎥 UPLOAD THESE 4 PHOTOS (With Storylines):</h3>
          <div className="upload-details">
            {content.uploads.map((upload: any) => (
              <div key={upload.number} className="upload-item august-photo-item">
                <div className="photo-number">{upload.number}</div>
                <div className="photo-content">
                  <h4>{upload.title}</h4>
                  <div className="photo-theme">{upload.theme}</div>
                  <p><strong>Description:</strong> {upload.description}</p>
                  {upload.details && <p><strong>Details:</strong> {upload.details}</p>}
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
        <h1>August Content Idea {ideaNumber}</h1>
        <div className="status-badge planning">🚧 In Development</div>
      </div>

      <div className="development-notice">
        <div className="notice-icon">🛠️</div>
        <div className="notice-content">
          <h3>Content Under Development</h3>
          <p>
            This content idea is currently being developed. Once finalized, it will include:
          </p>
          <ul>
            <li>📋 Detailed content requirements</li>
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
          Each August content idea will follow the same proven format as the July content:
        </p>
        
        <div className="format-preview">
          <div className="format-section">
            <h4>🎯 Post Visual</h4>
            <p>Clear description of what the content should capture emotionally and visually</p>
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
              <p>Content concepts being developed</p>
            </div>
          </div>
          
          <div className="timeline-step upcoming">
            <div className="step-indicator">✍️</div>
            <div className="step-info">
              <h4>Content Creation</h4>
              <p>Detailed instructions will be added</p>
            </div>
          </div>
          
          <div className="timeline-step upcoming">
            <div className="step-indicator">🚀</div>
            <div className="step-info">
              <h4>Ready for Production</h4>
              <p>Available for content creation in July</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}