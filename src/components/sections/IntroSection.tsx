import React, { useState } from 'react';

export function IntroSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="mission-page" className="mission-page">
      {/* Quick Navigation */}
      <div className="quick-navigation">
        <h3>Quick Access</h3>
        <div className="quick-nav-buttons">
          <button 
            onClick={() => scrollToSection('guidelines-section')}
            className="quick-nav-btn"
          >
            📋 Content Guidelines
          </button>
          <button 
            onClick={() => scrollToSection('technical-section')}
            className="quick-nav-btn"
          >
            ⚙️ Technical Standards & Quality
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mission-hero">
        <div className="floating-icons">
          <span className="floating-icon">🤸‍♀️</span>
          <span className="floating-icon">⭐</span>
          <span className="floating-icon">🏆</span>
          <span className="floating-icon">💪</span>
        </div>
        
        <h1 className="mission-title">July Content Mission</h1>
      </div>

      {/* Mission Statement */}
      <div className="mission-statement">
        <div className="mission-icon">🎯</div>
        <p className="mission-text">
          <strong>Show off the real moments that make your gyms so unique and special—kids learning, trying new things, and having a blast. Snap the smiles, teamwork, and big "I did it!" moments. These are what inspire families and show how amazing you are.</strong>
        </p>
        <div className="mission-highlight">
          All content must be collected in <strong>June</strong> and submitted by <span className="deadline">June 30, 2025</span> for posting in July.
        </div>
      </div>

      {/* Your Role Section */}
      <div className="role-section">
        <h2 className="role-title">Your Role as Content Creator</h2>
        <div className="role-grid">
          <div className="role-item">
            <div className="role-icon">✨</div>
            <span className="role-text">Represent the gym with professionalism and positivity</span>
          </div>
          <div className="role-item">
            <div className="role-icon">📸</div>
            <span className="role-text">Capture high-quality, on-brand content (photos and videos)</span>
          </div>
          <div className="role-item">
            <div className="role-icon">🛡️</div>
            <span className="role-text">Follow technique, safety, and privacy rules</span>
          </div>
          <div className="role-item">
            <div className="role-icon">🏷️</div>
            <span className="role-text">Use the correct file naming format for uploads</span>
          </div>
          <div className="role-item">
            <div className="role-icon">💬</div>
            <span className="role-text">Communicate questions — we're here to help!</span>
          </div>
          <div className="role-item">
            <div className="role-icon">🌟</div>
            <span className="role-text">Have fun and let your personality shine—people love real smiles and genuine moments!</span>
          </div>
        </div>
      </div>

      <div className="navigation-hint">
        <h3>🧭 How to Navigate This Guide</h3>
        <div className="navigation-instructions">
          <div className="nav-instruction">
            <span className="nav-icon">👈</span>
            <div className="nav-text">
              <strong>Use the sidebar navigation</strong> on the left to explore each content assignment
            </div>
          </div>
          <div className="nav-instruction">
            <span className="nav-icon">📋</span>
            <div className="nav-text">
              Click on any content section (Beat Boredom, Handstand Contest, etc.) to see detailed requirements
            </div>
          </div>
          <div className="nav-instruction">
            <span className="nav-icon">📤</span>
            <div className="nav-text">
              Each section includes upload checklists and direct SharePoint links for easy submission
            </div>
          </div>
          <div className="nav-instruction">
            <span className="nav-icon">📖</span>
            <div className="nav-text">
              Visit the "Guidelines" and "Technical" sections for detailed quality standards and best practices
            </div>
          </div>
        </div>
      </div>

      {/* News & Updates Section */}
      <div className="news-updates-section">
        <div className="news-header">
          <div className="news-icon">📢</div>
          <h2 className="news-title">News & Updates</h2>
          <div className="news-subtitle">Stay informed with the latest tips and announcements</div>
        </div>
        
        <div className="news-grid">
          <div style={{
            background: 'linear-gradient(135deg, #4a5568, #2d3748)',
            padding: '1.5rem',
            borderRadius: '0.8rem',
            border: '2px solid #718096',
            color: 'white'
          }}>
            <h3 style={{ 
              color: 'white', 
              margin: '0 0 1rem 0', 
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📄 PDF Downloads Available
            </h3>
            <p style={{ 
              color: '#e2e8f0', 
              margin: '0',
              lineHeight: '1.6'
            }}>
              Each content section now includes a <strong>"Download This Section as PDF"</strong> button at the top. 
              Perfect for offline reference, printing, or sharing with your team!
            </p>
          </div>
        </div>
        
        <div className="news-footer">
          <p>💬 Have questions or suggestions? Reach out anytime!</p>
        </div>
      </div>
      
      {/* Expandable Guidelines Cards */}
      <div className="guidelines-cards">
        <div id="guidelines-section" className="interactive-card" onClick={() => toggleCard('guidelines')}>
          <div className="card-header">
            <span>📋 Content Guidelines</span>
            <div className={`expand-arrow ${expandedCard === 'guidelines' ? 'expanded' : ''}`}>⬇️</div>
          </div>
          <div className={`card-content ${expandedCard === 'guidelines' ? 'expanded' : ''}`}>
            {expandedCard === 'guidelines' && (
              <div className="back-to-top-container">
                <button onClick={scrollToTop} className="back-to-top-btn">
                  ⬆️ Back to Top
                </button>
              </div>
            )}
            <div className="do-dont-grid">
              <div className="do-section">
                <h4>Do This - What Makes Great Content</h4>
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
              </div>
              <div className="dont-section">
                <h4>Not This - Red Flags</h4>
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
              </div>
            </div>
            <div className="golden-rule">
              <h3>💡 The Golden Rule</h3>
              <p>Before hitting record, ask yourself: <b>"Would I want this shared if it were my child?"</b> If yes—film it! If you hesitate, don't.</p>
            </div>
          </div>
        </div>
        
        <div id="technical-section" className="interactive-card" onClick={() => toggleCard('technical')}>
          <div className="card-header">
            <span>⚙️ Technical Standards & Quality</span>
            <div className={`expand-arrow ${expandedCard === 'technical' ? 'expanded' : ''}`}>⬇️</div>
          </div>
          <div className={`card-content ${expandedCard === 'technical' ? 'expanded' : ''}`}>
            {expandedCard === 'technical' && (
              <div className="back-to-top-container">
                <button onClick={scrollToTop} className="back-to-top-btn">
                  ⬆️ Back to Top
                </button>
              </div>
            )}
            <div className="requirements">
              <h3>📱 Video & Photo Specs</h3>
              <ul>
                <li><b>Photos:</b> High resolution, well-lit</li>
                <li><b>Format:</b> Vertical preferred for social (landscape also acceptable)</li>
                <li><b>Quality:</b> Clear, steady, in focus</li>
                <li><b>Composition:</b> Full body in frame</li>
              </ul>
            </div>
            <div className="requirements">
              <h3>Before Submitting - Check These:</h3>
              <ul>
                <li>Is the technique clean and safe?</li>
                <li>Is the angle respectful and not awkward?</li>
                <li>Is the moment authentic (not staged for the camera)?</li>
                <li>Is the background good?</li>
                <li>Is sound good?</li>
                <li>Is the lighting solid?</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="interactive-card" onClick={() => toggleCard('personality')}>
          <div className="card-header">
            <span>✨ Have Fun & Let Your Personality Shine</span>
            <div className={`expand-arrow ${expandedCard === 'personality' ? 'expanded' : ''}`}>⬇️</div>
          </div>
          <div className={`card-content ${expandedCard === 'personality' ? 'expanded' : ''}`}>
            <div className="golden-rule">
              <h3>🌟 The Secret Ingredient</h3>
              <p>Have fun and let your personality shine—people love real smiles and genuine moments! The best content comes from authentic joy and excitement. When you're having fun behind the camera, it shows in every shot.</p>
            </div>
            <div className="requirements">
              <h3>💫 What Makes Content Magical:</h3>
              <ul>
                <li>Your genuine enthusiasm and energy</li>
                <li>Natural interactions with kids and coaches</li>
                <li>Spontaneous moments of joy and celebration</li>
                <li>Your unique perspective and creativity</li>
                <li>Authentic reactions and emotions</li>
                <li>The fun you're having while creating</li>
              </ul>
            </div>
            <div className="requirements">
              <h3>🎉 Remember:</h3>
              <p>You're not just documenting gymnastics—you're capturing the spirit, joy, and magic that makes your gym special. Trust your instincts, be yourself, and let your passion for what you do shine through every piece of content you create!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}