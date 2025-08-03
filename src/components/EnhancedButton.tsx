import React, { useState, useEffect } from 'react';
import { CheckCircle, Copy, ExternalLink } from 'lucide-react';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success';
  href?: string;
  className?: string;
  showSuccessState?: boolean;
}

export function EnhancedButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  href, 
  className = '',
  showSuccessState = false 
}: EnhancedButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    
    if (showSuccessState) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
    
    setTimeout(() => setIsPressed(false), 150);
    
    if (onClick) {
      onClick();
    }
  };

  const baseClasses = `
    enhanced-button
    ${variant}
    ${isPressed ? 'pressed' : ''}
    ${showSuccess ? 'success' : ''}
    ${className}
  `;

  const buttonContent = (
    <>
      <span className={`button-content ${showSuccess ? 'hidden' : ''}`}>
        {children}
      </span>
      {showSuccess && (
        <span className="success-content">
          <CheckCircle className="success-icon" />
          Success!
        </span>
      )}
      <div className="button-shine"></div>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
        <ExternalLink className="external-icon" />
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={handleClick}>
      {buttonContent}
    </button>
  );
}