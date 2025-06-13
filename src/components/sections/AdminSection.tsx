import React, { useState } from 'react';
import { AdminDashboard } from '../AdminDashboard';
import { MonthSelector } from '../MonthSelector';
import { BarChart3, Calendar, Settings } from 'lucide-react';

export function AdminSection() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'months' | 'settings'>('dashboard');

  return (
    <div className="admin-section">
      <div className="admin-header">
        <h1>🔧 Admin Control Panel</h1>
        <p>Manage content calendars, view progress, and configure settings</p>
      </div>

      <div className="admin-tabs">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`admin-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
        >
          <BarChart3 size={16} />
          Progress Dashboard
        </button>
        
        <button
          onClick={() => setActiveTab('months')}
          className={`admin-tab ${activeTab === 'months' ? 'active' : ''}`}
        >
          <Calendar size={16} />
          Content Calendar
        </button>
        
        <button
          onClick={() => setActiveTab('settings')}
          className={`admin-tab ${activeTab === 'settings' ? 'active' : ''}`}
        >
          <Settings size={16} />
          Settings
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'dashboard' && <AdminDashboard />}
        {activeTab === 'months' && <MonthSelector />}
        {activeTab === 'settings' && (
          <div className="settings-panel">
            <h3>System Settings</h3>
            <div className="settings-info">
              <p>🚧 Settings panel coming soon!</p>
              <p>Future features:</p>
              <ul>
                <li>Gym management</li>
                <li>User permissions</li>
                <li>Notification settings</li>
                <li>Data export options</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}