import React, { useState } from 'react';
import { EditableContent } from '../EditableContent';

export function IntroSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="mission-page">
      {/* Hero Section */}
      <div className="mission-hero">
        <div className="floating-icons">
          <span className="floating-icon">🤸‍♀️</span>
          <span className="floating-icon">⭐</span>
          <span className="floating-icon">🏆</span>
          <span className="floating-icon">💪</span>
        </div>
        
        <EditableContent>
          <h1 className="mission-title">July Content Mission</h1>
        </EditableContent>
        <EditableContent>
          <p className="mission-subtitle">Your Guide to Capturing Summer Magic</p>
        </EditableContent>
      </div>

      {/* Mission Statement */}
      <div className="mission-statement">
        <div className="mission-icon">🎯</div>
        <EditableContent>
          <p className="mission-text">
            <strong>Show off the real moments that make your gyms so unique and special—kids learning, trying new things, and having a blast. Snap the smiles, teamwork, and big "I did it!" moments. These are what inspire families and show how amazing you are.</strong>
          </p>
        </EditableContent>
        <EditableContent>
          <div className="mission-highlight">
            All content must be collected in <strong>June</strong> and submitted by <span className="deadline">June 30, 2025</span> for posting in July.
          </div>
        </EditableContent>
      </div>

      {/* Your Role Section */}
      <div className="role-section">
        <EditableContent>
          <h2 className="role-title">Your Role as Content Creator</h2>
        </EditableContent>
        <div className="role-grid">
          <EditableContent>
            <div className="role-item">
              <div className="role-icon">✨</div>
              <span className="role-text">Represent the gym with professionalism and positivity</span>
            </div>
          </EditableContent>
          <EditableContent>
            <div className="role-item">
              <div className="role-icon">📸</div>
              <span className="role-text">Capture high-quality, on-brand content (photos and videos)</span>
            </div>
          </EditableContent>
          <EditableContent>
            <div className="role-item">
              <div className="role-icon">🛡️</div>
              <span className="role-text">Follow technique, safety, and privacy rules</span>
            </div>
          </EditableContent>
          <EditableContent>
            <div className="role-item">
              <div className="role-icon">🏷️</div>
              <span className="role-text">Use the correct file naming format for uploads</span>
            </div>
          </EditableContent>
          <EditableContent>
            <div className="role-item">
              <div className="role-icon">💬</div>
              <span className="role-text">Communicate questions — we're here to help!</span>
            </div>
          </EditableContent>
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="navigation-hint">
        <EditableContent>
          <p>👆 <strong>Use the sidebar navigation</strong> to explore each content assignment 👆</p>
        </EditableContent>
      </div>
      
      {/* Expandable Guidelines Cards */}
      <div className="guidelines-cards">
        <div className="interactive-card" onClick={() => toggleCard('guidelines')}>
          <div className="card-header">
            <span>📋 Content Guidelines & Rules</span>
            <div className={`expand-arrow ${expandedCard === 'guidelines' ? 'expanded' : ''}`}>⬇️</div>
          </div>
          <div className={`card-content ${expandedCard === 'guidelines' ? 'expanded' : ''}`}>
            <div className="do-dont-grid">
              <div className="do-section">
                <EditableContent>
                  <h4>Do This - What Makes Great Content</h4>
                </EditableContent>
                <EditableContent>
                  <ul>
                    <li>Kids learning and making genuine progress</li>
                    <li>Authentic smiles and breakthrough moments</li>
                    <li>Proper technique and safe skill execution</li>
                    <li>Clean, organized gym environment</li>
                    <li>Coaches actively teaching and encouraging</li>
                    <li>Natural interactions and teamwork</li>
                    <li>Good form and clean space</li>
                    <li>Natural joy and positive coach energy</li>
                    <li>Safe, appropriate filming</li>
                  </ul>
                </EditableContent>
              </div>
              <div className="dont-section">
                <EditableContent>
                  <h4>Not This - Red Flags</h4>
                </EditableContent>
                <EditableContent>
                  <ul>
                    <li>Skills with incorrect technique (arched backs, bent knees, heads turned wrong way)</li>
                    <li>Inappropriate angles or revealing positions</li>
                    <li>No low shots, wide straddles, nothing awkward</li>
                    <li>Clothing malfunctions or exposure</li>
                    <li>Blurry, dark, or poor quality footage</li>
                    <li>Cluttered backgrounds with equipment out of place</li>
                    <li>Kids who are upset, crying, or frustrated</li>
                    <li>Forced or awkward moments</li>
                    <li>Distracted or unengaged coaching</li>
                  </ul>
                </EditableContent>
              </div>
            </div>
            <div className="golden-rule">
              <EditableContent>
                <h3>💡 The Golden Rule</h3>
              </EditableContent>
              <EditableContent>
                <p>Before hitting record, ask yourself: <b>"Would I want this shared if it were my child?"</b> If yes—film it! If you hesitate, don't.</p>
              </EditableContent>
            </div>
          </div>
        </div>
        
        <div className="interactive-card" onClick={() => toggleCard('technical')}>
          <div className="card-header">
            <span>⚙️ Technical Standards & Quality</span>
            <div className={`expand-arrow ${expandedCard === 'technical' ? 'expanded' : ''}`}>⬇️</div>
          </div>
          <div className={`card-content ${expandedCard === 'technical' ? 'expanded' : ''}`}>
            <div className="requirements">
              <EditableContent>
                <h3>📱 Video & Photo Specs</h3>
              </EditableContent>
              <EditableContent>
                <ul>
                  <li><b>Photos:</b> High resolution, well-lit</li>
                  <li><b>Format:</b> Vertical preferred for social (landscape also acceptable)</li>
                  <li><b>Quality:</b> Clear, steady, in focus</li>
                  <li><b>Composition:</b> Full body in frame</li>
                </ul>
              </EditableContent>
            </div>
            <div className="requirements">
              <EditableContent>
                <h3>Before Submitting - Check These:</h3>
              </EditableContent>
              <EditableContent>
                <ul>
                  <li>Is the technique clean and safe?</li>
                  <li>Is the angle respectful and not awkward?</li>
                  <li>Is the moment authentic (not staged for the camera)?</li>
                  <li>Is the background good?</li>
                  <li>Is sound good?</li>
                  <li>Is the lighting solid?</li>
                </ul>
              </EditableContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}