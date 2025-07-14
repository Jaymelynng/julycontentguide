import React from 'react';
import { Calendar, Archive, Star } from 'lucide-react';

export function MonthSelectorSection() {
  return (
    <div className="month-selector-page">
      <div className="month-selector-hero">
        <div className="floating-icons">
          <span className="floating-icon">📅</span>
          <span className="floating-icon">🎯</span>
          <span className="floating-icon">✨</span>
          <span className="floating-icon">🚀</span>
        </div>
        
        <h1 className="month-selector-title">Content Campaign Manager</h1>
        <p className="month-selector-subtitle">Select which month's content you want to work on</p>
      </div>

      <div className="month-cards-grid">
        <div className="month-card active-month">
          <div className="month-card-header">
            <Calendar size={32} />
            <div className="month-badge current">CURRENT</div>
          </div>
          <h3>August Content</h3>
          <p>Content to be posted in August 2025</p>
          <div className="month-details">
            <div className="detail-item">
              <Star size={16} />
              <span>9 Content Ideas</span>
            </div>
            <div className="detail-item">
              <Calendar size={16} />
              <span>Create in July</span>
            </div>
          </div>
          <div className="month-status">
            <span className="status-indicator preparing">📝 Preparing</span>
          </div>
        </div>

        <div className="month-card archived-month">
          <div className="month-card-header">
            <Archive size={32} />
            <div className="month-badge archived">ARCHIVED</div>
          </div>
          <h3>July Content</h3>
          <p>Content posted in July 2025</p>
          <div className="month-details">
            <div className="detail-item">
              <Star size={16} />
              <span>8 Content Pieces</span>
            </div>
            <div className="detail-item">
              <Calendar size={16} />
              <span>Created in June</span>
            </div>
          </div>
          <div className="month-status">
            <span className="status-indicator completed">✅ Completed</span>
          </div>
        </div>
      </div>

      <div className="workflow-explanation">
        <h3>📋 How Our Content Workflow Works</h3>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Plan & Create</h4>
              <p>Content is created one month before it goes live (e.g., August content created in July)</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Review & Prepare</h4>
              <p>Content is reviewed, edited, and scheduled for posting</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Post & Archive</h4>
              <p>Content goes live and previous month's work is archived for reference</p>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-navigation">
        <h3>🚀 Quick Actions</h3>
        <div className="quick-nav-buttons">
          <button className="quick-nav-btn current-work">
            📝 Work on August Content
          </button>
          <button className="quick-nav-btn archive-access">
            📁 View July Archive
          </button>
        </div>
      </div>
    </div>
  );
}