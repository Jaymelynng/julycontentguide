import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = "Loading your content..." }: LoadingStateProps) {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-icon">
          <Loader2 className="spinner" />
          <Sparkles className="sparkle" />
        </div>
        <h3>{message}</h3>
        <p>Creating something amazing for you ✨</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
      
      <style jsx>{`
        .loading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          padding: 3rem;
          background: linear-gradient(135deg, #F3E8FF, #FAFAFA);
          border-radius: 1.5rem;
          border: 1px solid rgba(139, 92, 246, 0.1);
        }
        
        .loading-content {
          text-align: center;
          max-width: 300px;
        }
        
        .loading-icon {
          position: relative;
          margin-bottom: 1.5rem;
          display: inline-block;
        }
        
        .spinner {
          width: 3rem;
          height: 3rem;
          color: #8B5CF6;
          animation: spin 1s linear infinite;
        }
        
        .sparkle {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 1.5rem;
          height: 1.5rem;
          color: #10B981;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.7;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .loading-content h3 {
          color: #8B5CF6;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .loading-content p {
          color: #6B7280;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        
        .loading-bar {
          width: 200px;
          height: 4px;
          background: #E5E7EB;
          border-radius: 2px;
          overflow: hidden;
          margin: 0 auto;
        }
        
        .loading-progress {
          height: 100%;
          background: linear-gradient(90deg, #8B5CF6, #10B981);
          border-radius: 2px;
          animation: progress 2s ease-in-out infinite;
        }
        
        @keyframes progress {
          0% { 
            width: 0%;
            transform: translateX(-100%);
          }
          50% { 
            width: 100%;
            transform: translateX(0%);
          }
          100% { 
            width: 100%;
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}