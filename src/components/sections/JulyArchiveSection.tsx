import React, { useState } from 'react';
import { Archive, Calendar, CheckCircle, Download } from 'lucide-react';

export function JulyArchiveSection() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const julyContent = [
    {
      id: 'boredom',
      title: '5 Epic Ways to Beat Summer Boredom',
      type: 'REEL | 5 VIDEOS',
      status: 'Completed',
      description: 'Five clips showing variety and value of summer camp'
    },
    {
      id: 'fireworks',
      title: '4th of July Fireworks',
      type: 'PHOTO | 1 PHOTO',
      status: 'Completed',
      description: 'Kids caught mid-action at peak excitement moment'
    },
    {
      id: 'handstand',
      title: 'Handstand Contest!!!',
      type: 'REEL | 1 VIDEO',
      status: 'Completed',
      description: 'Creative handstand contest showcasing gym energy'
    },
    {
      id: 'confidence',
      title: 'The Secret to Confidence That Lasts Beyond Summer',
      type: 'PHOTO | 1 PHOTO',
      status: 'Completed',
      description: 'Pure "I-did-it!" moment capturing confidence'
    },
    {
      id: 'race',
      title: '"Can You Keep Up?" – Coach vs. Kid Race',
      type: 'REEL | 1 VIDEO',
      status: 'Completed',
      description: 'Coaches participating in activities with kids'
    },
    {
      id: 'riddle',
      title: 'Riddle Week – Forward Roll Series',
      type: 'PHOTOS | 4 PHOTOS',
      status: 'Completed',
      description: 'Four-step forward roll progression photos'
    },
    {
      id: 'trial',
      title: '"Not Sure What to Expect?" – We\'ll Show You- FREE TRIAL',
      type: 'PHOTOS | 3 PHOTOS',
      status: 'Completed',
      description: 'High-energy class action shots'
    },
    {
      id: 'balance',
      title: 'Balance Reel',
      type: 'REEL | 3 VIDEOS',
      status: 'Completed',
      description: 'Three-part balance beam skill showcase'
    }
  ];

  return (
    <div className="july-archive-page">
      <div className="archive-header">
        <div className="archive-icon-container">
          <Archive size={48} />
        </div>
        <h1>July Content Archive</h1>
        <p>Complete record of July 2025 content campaign</p>
        <div className="archive-stats">
          <div className="stat-item">
            <Calendar size={20} />
            <span>Created: June 2025</span>
          </div>
          <div className="stat-item">
            <CheckCircle size={20} />
            <span>Status: Completed</span>
          </div>
          <div className="stat-item">
            <Download size={20} />
            <span>8 Content Pieces</span>
          </div>
        </div>
      </div>

      <div className="archive-summary">
        <h3>📊 Campaign Summary</h3>
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-number">8</div>
            <div className="summary-label">Content Pieces</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">15</div>
            <div className="summary-label">Total Assets</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">10</div>
            <div className="summary-label">Gym Locations</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">100%</div>
            <div className="summary-label">Completion Rate</div>
          </div>
        </div>
      </div>

      <div className="archive-content">
        <h3>📁 Content Archive</h3>
        <div className="archive-list">
          {julyContent.map((item) => (
            <div key={item.id} className="archive-item">
              <div 
                className="archive-item-header"
                onClick={() => toggleItem(item.id)}
              >
                <div className="archive-item-info">
                  <h4>{item.title}</h4>
                  <div className="archive-item-meta">
                    <span className="content-type-badge">{item.type}</span>
                    <span className="status-badge completed">{item.status}</span>
                  </div>
                </div>
                <div className={`expand-arrow ${expandedItem === item.id ? 'expanded' : ''}`}>
                  ⬇️
                </div>
              </div>
              
              {expandedItem === item.id && (
                <div className="archive-item-content">
                  <p><strong>Description:</strong> {item.description}</p>
                  <div className="archive-actions">
                    <button className="archive-btn view-original">
                      👁️ View Original Instructions
                    </button>
                    <button className="archive-btn view-submissions">
                      📁 View Submissions
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="archive-notes">
        <h3>📝 Archive Notes</h3>
        <div className="notes-content">
          <p>
            <strong>Mission Accomplished:</strong> The July content campaign successfully captured 
            the energy and excitement of summer gymnastics across all gym locations.
          </p>
          <div className="key-learnings">
            <h4>Key Learnings:</h4>
            <ul>
              <li>High-energy content performed exceptionally well</li>
              <li>Coach-kid interaction videos generated strong engagement</li>
              <li>Step-by-step skill breakdowns were popular with parents</li>
              <li>Authentic moments resonated more than staged content</li>
            </ul>
          </div>
          <div className="recommendations">
            <h4>Recommendations for Future Campaigns:</h4>
            <ul>
              <li>Continue focus on authentic, unscripted moments</li>
              <li>Maintain coach participation in activities</li>
              <li>Keep technical skill breakdowns for educational value</li>
              <li>Emphasize seasonal themes and celebrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}