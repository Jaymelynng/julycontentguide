import React, { useState } from 'react';
import { LogIn, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function LoginForm() {
  const [gymId, setGymId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

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
    { id: 'admin', name: 'Administrator' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = login(gymId, password);
    
    if (!success) {
      setError('Invalid gym selection or password. Please try again.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-hero">
        <div className="floating-icons">
          <span className="floating-icon">🤸‍♀️</span>
          <span className="floating-icon">⭐</span>
          <span className="floating-icon">🏆</span>
          <span className="floating-icon">💪</span>
        </div>
        
        <h1 className="login-title">July Content Mission</h1>
        <p className="login-subtitle">Gym Access Portal</p>
      </div>

      <div className="login-form-container">
        <div className="login-form-header">
          <LogIn className="login-icon" />
          <h2>Access Your Content Guide</h2>
          <p>Select your gym and enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="gym" className="form-label">
              Select Your Gym
            </label>
            <select
              id="gym"
              value={gymId}
              onChange={(e) => setGymId(e.target.value)}
              className="form-select"
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

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !gymId || !password}
            className="login-button"
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <>
                <LogIn size={20} />
                Access Content Guide
              </>
            )}
          </button>
        </form>

        <div className="login-help">
          <p>Need help accessing your account?</p>
          <p>Contact your gym administrator for password assistance.</p>
        </div>
      </div>
    </div>
  );
}