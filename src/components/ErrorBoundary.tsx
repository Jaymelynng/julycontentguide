import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">
              <AlertTriangle />
            </div>
            <h3>Oops! Something went wrong</h3>
            <p>Don't worry, we're here to help you get back on track!</p>
            <div className="error-details">
              <p>We've encountered a technical hiccup, but your content planning journey doesn't have to stop here.</p>
            </div>
            <button onClick={this.handleRetry} className="retry-button">
              <RefreshCw className="retry-icon" />
              Try Again
            </button>
            <div className="error-message">
              <details>
                <summary>Technical Details</summary>
                <pre>{this.state.error?.message}</pre>
              </details>
            </div>
          </div>
          
          <style jsx>{`
            .error-boundary {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 400px;
              padding: 2rem;
              background: linear-gradient(135deg, #FEF2F2, #FAFAFA);
              border-radius: 1.5rem;
              border: 2px solid #FCA5A5;
              margin: 2rem 0;
            }
            
            .error-content {
              text-align: center;
              max-width: 500px;
              color: #374151;
            }
            
            .error-icon {
              margin-bottom: 1.5rem;
              color: #DC2626;
              display: flex;
              justify-content: center;
            }
            
            .error-icon svg {
              width: 4rem;
              height: 4rem;
            }
            
            .error-content h3 {
              color: #DC2626 !important;
              margin-bottom: 1rem;
              font-size: 1.5rem;
              font-weight: 700;
            }
            
            .error-content p {
              margin-bottom: 1.5rem;
              line-height: 1.6;
            }
            
            .error-details {
              background: rgba(255, 255, 255, 0.8);
              padding: 1rem;
              border-radius: 0.5rem;
              margin-bottom: 2rem;
              border-left: 4px solid #DC2626;
            }
            
            .retry-button {
              background: linear-gradient(135deg, #8B5CF6, #A855F7);
              color: white;
              border: none;
              padding: 0.75rem 2rem;
              border-radius: 0.75rem;
              cursor: pointer;
              font-size: 1rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              margin: 0 auto 2rem auto;
              transition: all 0.3s ease;
              box-shadow: 0 4px 14px -2px rgba(139, 92, 246, 0.3);
            }
            
            .retry-button:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px -2px rgba(139, 92, 246, 0.4);
            }
            
            .retry-icon {
              width: 1rem;
              height: 1rem;
            }
            
            .error-message {
              margin-top: 1rem;
            }
            
            .error-message details {
              text-align: left;
              background: #F9FAFB;
              padding: 1rem;
              border-radius: 0.5rem;
              border: 1px solid #E5E7EB;
            }
            
            .error-message summary {
              cursor: pointer;
              font-weight: 600;
              color: #6B7280;
              margin-bottom: 0.5rem;
            }
            
            .error-message pre {
              background: #1F2937;
              color: #F9FAFB;
              padding: 0.5rem;
              border-radius: 0.25rem;
              font-size: 0.8rem;
              overflow-x: auto;
              margin: 0.5rem 0 0 0;
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}