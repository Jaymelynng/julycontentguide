import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Heart, Zap } from 'lucide-react';

export function EnhancedWelcome() {
  const [isVisible, setIsVisible] = useState(false);
  const [sparkleCount, setSparkleCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const sparkleInterval = setInterval(() => {
      setSparkleCount(prev => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(sparkleInterval);
  }, []);

  const motivationalQuotes = [
    "✨ Create content that sparks joy and inspires movement! ✨",
    "🌟 Your vision will bring her gymnastics dreams to life! 🌟",
    "💜 Building reliable tools for amazing content creators! 💜",
    "🚀 Taking your content planning to the next level! 🚀"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % motivationalQuotes.length);
    }, 4000);

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <div className={`enhanced-welcome ${isVisible ? 'visible' : ''}`}>
      <div className="welcome-hero">
        <div className="floating-elements">
          <Sparkles className="floating-icon sparkle-1" />
          <Star className="floating-icon sparkle-2" />
          <Heart className="floating-icon sparkle-3" />
          <Zap className="floating-icon sparkle-4" />
        </div>
        
        <div className="welcome-content">
          <h1 className="welcome-title">
            Welcome to Your Vision ✨
          </h1>
          
          <div className="quote-carousel">
            <p className="motivational-quote">
              {motivationalQuotes[currentQuote]}
            </p>
          </div>
          
          <div className="vision-statement">
            <div className="vision-card">
              <h3>🎨 Her Colors, Her Vision</h3>
              <p>A vibrant, energetic design that reflects the joy and excitement of gymnastics</p>
            </div>
            
            <div className="vision-card">
              <h3>🛡️ Reliable & Trustworthy</h3>
              <p>Built with care to ensure your content planning is always smooth and dependable</p>
            </div>
            
            <div className="vision-card">
              <h3>🚀 Next Level Experience</h3>
              <p>Enhanced features and beautiful interactions that make content creation a joy</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .enhanced-welcome {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .enhanced-welcome.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .welcome-hero {
          position: relative;
          background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #10B981 100%);
          border-radius: 25px;
          padding: 4rem 2rem;
          margin-bottom: 2rem;
          overflow: hidden;
          box-shadow: 0 10px 25px -3px rgba(139, 92, 246, 0.3);
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .floating-icon {
          position: absolute;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.5rem;
          animation: float 6s ease-in-out infinite;
        }
        
        .sparkle-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .sparkle-2 {
          top: 20%;
          right: 15%;
          animation-delay: 1.5s;
        }
        
        .sparkle-3 {
          bottom: 25%;
          left: 15%;
          animation-delay: 3s;
        }
        
        .sparkle-4 {
          bottom: 15%;
          right: 10%;
          animation-delay: 4.5s;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        
        .welcome-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }
        
        .welcome-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          background: linear-gradient(45deg, #FFFFFF, #F3E8FF);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .quote-carousel {
          margin-bottom: 3rem;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .motivational-quote {
          font-size: 1.3rem;
          font-weight: 600;
          opacity: 0.95;
          animation: fadeInOut 4s ease-in-out infinite;
          margin: 0;
        }
        
        @keyframes fadeInOut {
          0%, 20%, 80%, 100% { opacity: 0.95; transform: translateY(0); }
          40%, 60% { opacity: 1; transform: translateY(-5px); }
        }
        
        .vision-statement {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .vision-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .vision-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .vision-card h3 {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          color: white !important;
        }
        
        .vision-card p {
          margin: 0;
          opacity: 0.9;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .welcome-title {
            font-size: 2rem;
          }
          
          .motivational-quote {
            font-size: 1.1rem;
          }
          
          .welcome-hero {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}