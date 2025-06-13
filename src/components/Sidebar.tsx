import React from 'react';
import { Home, Camera, Video, Award, Users, Brain, FileText, Settings, Upload, Edit3 } from 'lucide-react';
import { useEditMode } from '../contexts/EditModeContext';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  // Home Base
  { id: 'intro', label: 'Welcome', icon: Home, category: 'home' },
  
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
  const { isEditMode, toggleEditMode } = useEditMode();

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
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>July Content</h2>
      </div>
      
      <ul className="nav-list">
        {renderSection('home', 'Welcome', navigationItems)}
        {renderSection('content', 'Content', navigationItems)}
        {renderSection('guides', 'Guides', navigationItems)}
      </ul>
      
      <div className="sidebar-footer">
        <button
          onClick={toggleEditMode}
          className={`admin-btn edit-btn ${isEditMode ? 'active' : ''}`}
        >
          <Edit3 size={16} />
          {isEditMode ? 'Exit Edit' : 'Edit Mode'}
        </button>
      </div>
    </aside>
  );
}