import React from 'react';
import { BarChart3 } from 'lucide-react';

export function AdminSection() {
  return (
    <div className="admin-section">
      <div className="admin-header">
        <h1>🔧 Admin Control Panel</h1>
        <p>Simple, reliable content management</p>
      </div>

      <div className="admin-content">
        <div className="simple-admin-panel">
          <div className="admin-info-card">
            <BarChart3 size={48} className="admin-icon" />
            <h3>Simplified Administration</h3>
            <p>
              This application now runs entirely in your browser with no external dependencies. 
              Your progress is saved locally and will persist between sessions.
            </p>
            
            <div className="admin-features">
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <span>Local progress tracking</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔗</span>
                <span>Direct SharePoint links</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💾</span>
                <span>Browser-based storage</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <span>100% reliable operation</span>
              </div>
            </div>

            <div className="admin-note">
              <h4>How it works:</h4>
              <ul>
                <li>Select your gym to get started</li>
                <li>Check off completed items as you go</li>
                <li>Use the direct SharePoint links to upload content</li>
                <li>Your progress saves automatically in your browser</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}