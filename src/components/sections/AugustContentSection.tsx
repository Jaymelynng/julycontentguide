import React from 'react';

interface AugustContentSectionProps {
  ideaNumber: string;
}

export function AugustContentSection({ ideaNumber }: AugustContentSectionProps) {
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