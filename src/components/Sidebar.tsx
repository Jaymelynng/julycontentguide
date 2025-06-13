import React from 'react';
import { Home, Camera, Video, Award, Users, Brain, FileText, Settings, Upload, LogOut, Edit3, BarChart3 } from 'lucide-react';
import { useGym } from '../contexts/GymContext';
import { useEditMode } from '../contexts/EditModeContext';

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
  { id: 'admin', label: 'Admin Dashboard', icon: BarChart3 },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { selectedGym, clearGym } = useGym();
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>July Content</h2>
        <div className="user-info">
          <span className="gym-name">{selectedGym?.name}</span>
        </div>
      </div>
      
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
      
      <div className="sidebar-footer">
        <button
          onClick={toggleEditMode}
          className={`admin-btn edit-btn ${isEditMode ? 'active' : ''}`}
        >
          <Edit3 size={16} />
          {isEditMode ? 'Exit Edit' : 'Edit Mode'}
        </button>
        
        <button
          onClick={clearGym}
          className="admin-btn logout-btn"
        >
          <LogOut size={16} />
          Change Gym
        </button>
      </div>
    </aside>
  );
}