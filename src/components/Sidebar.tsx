import React from 'react';
import { Home, Camera, Video, Award, Users, Brain, FileText, Settings, Upload } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'intro', label: 'Welcome', icon: Home },
  { id: 'boredom', label: '1. Beat Boredom', icon: Video },
  { id: 'fireworks', label: '2. 4th of July', icon: Camera },
  { id: 'handstand', label: '3. Handstand Contest', icon: Award },
  { id: 'confidence', label: '4. Confidence Photo', icon: Camera },
  { id: 'race', label: '5. Coach vs Kid Race', icon: Users },
  { id: 'riddle', label: '6. Riddle Week', icon: Brain },
  { id: 'trial', label: '7. Trial Class', icon: Camera },
  { id: 'balance', label: '8. Balance Reel', icon: Video },
  { id: 'guidelines', label: 'Guidelines', icon: FileText },
  { id: 'technical', label: 'Technical', icon: Settings },
  { id: 'submission', label: 'Submission', icon: Upload },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h2>July Content</h2>
      
      <ul className="nav-list">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}