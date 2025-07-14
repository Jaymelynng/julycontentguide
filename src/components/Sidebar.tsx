import React, { useState } from 'react';
import { Home, Camera, Video, Award, Users, Brain, FileText, Settings, Upload, Archive, Calendar } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  // Home Base
  { id: 'intro', label: 'Welcome', icon: Home, category: 'home' },
  { id: 'month-selector', label: 'Select Month', icon: Calendar, category: 'home' },
  
  // August Content (Current Active)
  { id: 'august-intro', label: 'August Overview', icon: Home, category: 'august' },
  { id: 'august-1', label: 'POST #1: Back to School, Back to Balance', icon: Video, category: 'august' },
  { id: 'august-2', label: 'Post 2', icon: Camera, category: 'august' },
  { id: 'august-3', label: 'Post 3', icon: Award, category: 'august' },
  { id: 'august-4', label: 'Post 4', icon: Users, category: 'august' },
  { id: 'august-5', label: 'Post 5', icon: Brain, category: 'august' },
  { id: 'august-6', label: 'Post 6', icon: Video, category: 'august' },
  { id: 'august-7', label: 'Post 7', icon: Camera, category: 'august' },
  { id: 'august-8', label: 'Post 8', icon: Award, category: 'august' },
  { id: 'august-9', label: 'Post 9', icon: Users, category: 'august' },
  
  // July Archive
  { id: 'july-archive', label: 'July Archive', icon: Archive, category: 'archive' },
  
  // Content Assignments
  { id: 'boredom', label: 'Beat Boredom', icon: Video, category: 'content' },
  { id: 'fireworks', label: '4th of July', icon: Camera, category: 'content' },
  { id: 'handstand', label: 'Handstand Contest', icon: Award, category: 'content' },
  { id: 'confidence', label: 'Confidence Photo', icon: Camera, category: 'content' },
  { id: 'race', label: 'Coach vs Kid Race', icon: Users, category: 'content' },
  { id: 'riddle', label: 'Riddle Week', icon: Brain, category: 'content' },
  { id: 'trial', label: 'Trial Class', icon: Camera, category: 'content' },
  { id: 'balance', label: 'Balance Reel', icon: Video, category: 'content' },
  
  // Guides
  { id: 'guidelines', label: 'Guidelines', icon: FileText, category: 'guides' },
  { id: 'technical', label: 'Technical', icon: Settings, category: 'guides' },
  { id: 'submission', label: 'Submission', icon: Upload, category: 'guides' },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isMobileVisible, setIsMobileVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileVisible(!isMobileVisible);
  };

  const renderSection = (category: string, title: string, items: typeof navigationItems) => (
    <div className="nav-section">
      <div className="nav-section-title">{title}</div>
      {items
        .filter(item => item.category === category)
        .map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
    </div>
  );

  return (
    <>
      <button 
        className="mobile-nav-toggle"
        onClick={toggleMobileNav}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      
      <aside className={`sidebar ${isMobileVisible ? 'mobile-visible' : 'mobile-hidden'}`}>
      <div className="sidebar-header">
        <h2>July Content</h2>
      </div>
      
      <ul className="nav-list">
        {renderSection('home', 'Welcome', navigationItems)}
        {renderSection('august', 'August Content', navigationItems)}
        {renderSection('archive', 'Previous Months', navigationItems)}
        {renderSection('content', 'Content', navigationItems)}
        {renderSection('guides', 'Guides', navigationItems)}
      </ul>
    </aside>
    </>
  );
}