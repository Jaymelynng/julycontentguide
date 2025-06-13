import React, { useState } from 'react';
import { useGym } from '../contexts/GymContext';

interface GymSelectionProps {
  children: React.ReactNode;
}

const gymOptions = [
  { id: 'capital-cedar-park', name: 'Capital Gymnastics - Cedar Park' },
  { id: 'capital-pflugerville', name: 'Capital Gymnastics - Pflugerville' },
  { id: 'capital-round-rock', name: 'Capital Gymnastics - Round Rock' },
  { id: 'estrella', name: 'Estrella Gymnastics' },
  { id: 'houston', name: 'Houston Gymnastics Academy' },
  { id: 'oasis', name: 'Oasis Gymnastics' },
  { id: 'rb-atascocita', name: 'RB Atascocita' },
  { id: 'rb-kingwood', name: 'RB Kingwood' },
  { id: 'scottsdale', name: 'Scottsdale Gymnastics & Trampoline' },
  { id: 'tigar', name: 'TIGAR Gymnastics' },
];

export function GymSelection({ children }: GymSelectionProps) {
  const { selectedGym, setSelectedGym } = useGym();
  const [tempSelection, setTempSelection] = useState('');

  if (selectedGym) {
    return <>{children}</>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempSelection) {
      const gym = gymOptions.find(g => g.id === tempSelection);
      if (gym) {
        setSelectedGym(gym);
      }
    }
  };

  return (
    <div className="gym-selection-container">
      <div className="gym-selection-hero">
        <div className="floating-icons">
          <span className="floating-icon">🤸‍♀️</span>
          <span className="floating-icon">⭐</span>
          <span className="floating-icon">🏆</span>
          <span className="floating-icon">💪</span>
        </div>
        
        <h1 className="gym-selection-title">July Content Mission</h1>
        <p className="gym-selection-subtitle">Your Guide to Capturing Summer Magic</p>
      </div>

      <div className="gym-selection-form-container">
        <div className="gym-selection-header">
          <h2>Select Your Gym</h2>
          <p>Choose your gym location to access your personalized content guide</p>
        </div>

        <form onSubmit={handleSubmit} className="gym-selection-form">
          <div className="form-group">
            <label htmlFor="gym" className="form-label">
              Your Gym Location
            </label>
            <select
              id="gym"
              value={tempSelection}
              onChange={(e) => setTempSelection(e.target.value)}
              className="gym-selection-dropdown"
              required
            >
              <option value="">Choose your gym...</option>
              {gymOptions.map((gym) => (
                <option key={gym.id} value={gym.id}>
                  {gym.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!tempSelection}
            className="gym-selection-button"
          >
            Access Content Guide →
          </button>
        </form>

        <div className="gym-selection-note">
          <p>💡 Your progress will be automatically saved for your gym</p>
          <p>All gyms have access to the same content - this just personalizes your experience</p>
        </div>
      </div>
    </div>
  );
}