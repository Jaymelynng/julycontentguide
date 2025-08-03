import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, Shield, ShieldCheck } from 'lucide-react';

export function ReliabilityIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [appHealth, setAppHealth] = useState<'excellent' | 'good' | 'warning'>('excellent');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate app health check
    const healthCheck = setInterval(() => {
      const randomHealth = Math.random();
      if (randomHealth > 0.8) {
        setAppHealth('excellent');
      } else if (randomHealth > 0.5) {
        setAppHealth('good');
      } else {
        setAppHealth('warning');
      }
    }, 10000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(healthCheck);
    };
  }, []);

  const getStatusColor = () => {
    if (!isOnline) return '#DC2626';
    switch (appHealth) {
      case 'excellent': return '#10B981';
      case 'good': return '#F59E0B';
      case 'warning': return '#EF4444';
      default: return '#10B981';
    }
  };

  const getStatusText = () => {
    if (!isOnline) return 'Offline';
    switch (appHealth) {
      case 'excellent': return 'All Systems Go';
      case 'good': return 'Running Smoothly';
      case 'warning': return 'Minor Issues';
      default: return 'Healthy';
    }
  };

  return (
    <div className="reliability-indicator">
      <div className="status-badge" style={{ borderColor: getStatusColor() }}>
        <div className="status-icon" style={{ color: getStatusColor() }}>
          {isOnline ? (
            appHealth === 'excellent' ? <ShieldCheck /> : <Shield />
          ) : (
            <WifiOff />
          )}
        </div>
        <div className="status-info">
          <div className="status-text" style={{ color: getStatusColor() }}>
            {getStatusText()}
          </div>
          <div className="connection-indicator">
            {isOnline ? <Wifi className="wifi-icon" /> : <WifiOff className="wifi-icon offline" />}
            <span className="connection-text">
              {isOnline ? 'Connected' : 'Offline'}
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .reliability-indicator {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        
        .status-badge {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 2px solid;
          border-radius: 12px;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          min-width: 160px;
        }
        
        .status-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .status-icon {
          flex-shrink: 0;
        }
        
        .status-icon svg {
          width: 1.5rem;
          height: 1.5rem;
        }
        
        .status-info {
          flex: 1;
          min-width: 0;
        }
        
        .status-text {
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }
        
        .connection-indicator {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.75rem;
          color: #6B7280;
        }
        
        .wifi-icon {
          width: 0.875rem;
          height: 0.875rem;
          color: #10B981;
        }
        
        .wifi-icon.offline {
          color: #DC2626;
        }
        
        .connection-text {
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .reliability-indicator {
            bottom: 80px;
            right: 15px;
          }
          
          .status-badge {
            padding: 0.5rem;
            min-width: 140px;
          }
          
          .status-text {
            font-size: 0.8rem;
          }
          
          .connection-indicator {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}