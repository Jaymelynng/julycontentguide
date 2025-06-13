import React, { useState } from 'react';
import { EditableContent } from '../EditableContent';

const gymOptions = [
  {
    name: 'Capital Gymnastics - Cedar Park',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/Capital%20Gymnastics%20-%20Cedar%20Park?csf=1&web=1&e=LSalqg'
  },
  {
    name: 'Capital Gymnastics - Pflugerville',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/Capital%20Gymnastics%20-%20Pflugerville?csf=1&web=1&e=HZBfgS'
  },
  {
    name: 'Capital Gymnastics - Round Rock',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/Capital%20Gymnastics%20-%20Round%20Rock?csf=1&web=1&e=6D54oe'
  },
  {
    name: 'Estrella Gymnastics',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/Estrella%20Gymnastics?csf=1&web=1&e=VeQEiD'
  },
  {
    name: 'Houston Gymnastics Academy',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/Houston%20Gymnastics%20Academy?csf=1&web=1&e=S7sVj3'
  },
  {
    name: 'Oasis Gymnastics',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/Oasis%20Gymnastics?csf=1&web=1&e=CHTySq'
  },
  {
    name: 'RB Atascocita',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/RB%20Atascocita?csf=1&web=1&e=IYHIRT'
  },
  {
    name: 'RB Kingwood',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/RB%20Kingwood?csf=1&web=1&e=BZAnZe'
  },
  {
    name: 'Scottsdale Gymnastics & Trampoline',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/Scottsdale%20Gymnastics%20%26%20Trampoline?csf=1&web=1&e=JQGBve'
  },
  {
    name: 'TIGAR Gymnastics',
    url: 'https://powersgym.sharepoint.com/:f:/r/sites/gym-operations/Shared%20Documents/Social%20Media/TIGAR%20Gymnastics?csf=1&web=1&e=Cea83Z'
  }
];

export function SubmissionSection() {
  const [selectedGym, setSelectedGym] = useState('');
  const [description, setDescription] = useState('');
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleGymSelect = (value: string) => {
    setSelectedGym(value);
    if (value) {
      setCurrentStep(2);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    if (e.target.value.trim()) {
      setCurrentStep(3);
    }
  };

  const openSharePoint = () => {
    if (selectedGym) {
      window.open(selectedGym, '_blank');
    }
  };

  const generateFilename = () => {
    if (!description) return '[YourDescription]';
    
    const cleanDesc = description.replace(/[^a-zA-Z0-9]/g, '');
    return cleanDesc;
  };

  const copyFilename = async () => {
    const filename = generateFilename();
    if (filename !== '[YourDescription]') {
      await navigator.clipboard.writeText(filename);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getStepStatus = (step: number) => {
    if (currentStep > step) return 'completed';
    if (currentStep === step) return 'active';
    return 'pending';
  };

  const handleOpenSharePoint = () => {
    if (selectedGym) {
      setCurrentStep(4);
      window.open(selectedGym, '_blank');
    }
  };

  return (
    <div>
      <EditableContent>
        <h1>Submission Process</h1>
      </EditableContent>

      <EditableContent>
        <div className="desc">
          All content must be submitted by <span style={{color:'var(--accent-color)', fontWeight:'700'}}>June 30, 2025</span> for July posting.
        </div>
      </EditableContent>

      <div className="gym-selector-container">
        <div className="process-header">
          <h3>🎯 4-Step Upload Process</h3>
          <p>Follow these steps to ensure your files are named correctly and uploaded properly</p>
        </div>

        {/* Progress Indicator */}
        <div className="progress-steps">
          <div className={`progress-step ${getStepStatus(1)}`}>
            <div className="step-circle">1</div>
            <span>Select Gym</span>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${getStepStatus(2)}`}>
            <div className="step-circle">2</div>
            <span>Name Content</span>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${getStepStatus(3)}`}>
            <div className="step-circle">3</div>
            <span>Upload Files</span>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${getStepStatus(4)}`}>
            <div className="step-circle">4</div>
            <span>Rename in SharePoint</span>
          </div>
        </div>

        {/* Step 1: Gym Selection */}
        <div className={`step-container ${currentStep >= 1 ? 'active' : ''}`}>
          <div className="step-header">
            <span className="step-number">1️⃣</span>
            <h4>Select Your Gym</h4>
          </div>
          
          <select
            value={selectedGym}
            onChange={(e) => handleGymSelect(e.target.value)}
            className="gym-dropdown"
          >
            <option value="">Choose your gym location...</option>
            {gymOptions.map((gym) => (
              <option key={gym.url} value={gym.url}>
                {gym.name}
              </option>
            ))}
          </select>
        </div>

        {/* Step 2: Content Naming */}
        {selectedGym && (
          <div className={`step-container ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="step-header">
              <span className="step-number">2️⃣</span>
              <h4>Name Your Content</h4>
            </div>
            
            <div className="naming-instructions">
              <p>📝 Enter a short, descriptive name (this step helps you think about what you're uploading!):</p>
              <div className="example-box">
                <strong>Examples:</strong> HandstandContest, BeatBoredom, ForwardRoll, ConfidencePhoto
              </div>
            </div>
            
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="e.g., HandstandContest"
              maxLength={30}
              className="description-input"
            />
            
            {description && (
              <div className="filename-preview">
                <h5>📁 Your file name will be:</h5>
                <div className="generated-filename">
                  {generateFilename()}
                </div>
                <button
                  onClick={copyFilename}
                  className="copy-filename-btn"
                >
                  {copied ? '✅ Copied!' : '📋 Copy to Clipboard'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Upload Instructions */}
        {description && (
          <div className={`step-container ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-header">
              <span className="step-number">3️⃣</span>
              <h4>Upload Your Files</h4>
            </div>
            
            <div className="upload-instructions">
              <div className="instruction-item">
                <span className="instruction-icon">📱</span>
                <span>Upload your files to SharePoint (any name is fine for now)</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">🚀</span>
                <span>Click the button below to open SharePoint</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">📤</span>
                <span>Drag and drop your files</span>
              </div>
            </div>
            
            <button
              onClick={handleOpenSharePoint}
              className="sharepoint-btn-large"
            >
              🚀 Open SharePoint Folder & Upload Files
            </button>
          </div>
        )}

        {/* Step 4: Manual Renaming */}
        {currentStep >= 4 && (
          <div className="step-container active">
            <div className="step-header">
              <span className="step-number">4️⃣</span>
              <h4>Rename Files in SharePoint</h4>
            </div>
            
            <div className="critical-reminder">
              <div className="critical-header">
                <span className="critical-icon">⚠️</span>
                <strong>CRITICAL: Manual File Renaming Required</strong>
              </div>
              <div className="critical-content">
                <p>After uploading, you MUST rename each file in SharePoint:</p>
                <ol>
                  <li>Right-click on each uploaded file</li>
                  <li>Select "Rename"</li>
                  <li>Paste the filename: <strong>{generateFilename()}</strong></li>
                  <li>Press Enter to save</li>
                </ol>
                <p><strong>Why?</strong> This ensures consistent naming across all content submissions and helps us organize everything properly.</p>
              </div>
            </div>
            
            <div className="upload-instructions">
              <div className="instruction-item">
                <span className="instruction-icon">📝</span>
                <span>Right-click each file and select "Rename"</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">📋</span>
                <span>Paste the filename: <strong>{generateFilename()}</strong></span>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">✅</span>
                <span>Repeat for all uploaded files</span>
              </div>
            </div>
          </div>
        )}

        {/* Quick Access Section */}
        {selectedGym && (
          <div className="important-warning">
            <span className="warning-icon">🚀</span>
            <span className="warning-text">
              <strong>Quick Access:</strong> Need to go straight to SharePoint? 
              <button 
                onClick={openSharePoint}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#721c24',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '5px'
                }}
              >
                Click here
              </button>
            </span>
          </div>
        )}

        {/* Important Reminders */}
        <div className="important-reminders">
          <div className="reminder-header">
            <span className="warning-icon">⚠️</span>
            <strong>Before You Upload - Double Check:</strong>
          </div>
          <div className="reminder-list">
            <div className="reminder-item">✅ Files are renamed correctly using the format above</div>
            <div className="reminder-item">✅ Content follows all guidelines and safety rules</div>
            <div className="reminder-item">✅ Quality is high (clear, well-lit, steady)</div>
            <div className="reminder-item">✅ All required items for each post type are included</div>
            <div className="reminder-item">✅ Content is appropriate and authentic</div>
          </div>
        </div>
      </div>

      <div className="requirements">
        <EditableContent>
          <h3 style={{ color: 'var(--text-main)' }}>💡 Why We Ask You to Name Each Piece</h3>
        </EditableContent>
        <EditableContent>
          <p style={{ color: 'var(--text-main)' }}>
            Some content has 1 item, others have 5+ items. By having you name each piece of content as you upload, 
            we ensure consistent file names across all your submissions.
          </p>
        </EditableContent>
        <EditableContent>
          <p style={{ color: 'var(--text-main)' }}>
            <strong>Important:</strong> You'll need to manually rename your files in SharePoint using the names provided. 
            This helps us organize everything properly and makes it easy to find your content later.
          </p>
        </EditableContent>
      </div>
    </div>
  );
}