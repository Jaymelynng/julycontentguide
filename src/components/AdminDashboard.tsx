import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { BarChart3, Users, CheckCircle, Clock } from 'lucide-react';

interface ProgressData {
  id: string;
  gym_id: string;
  gym_name: string;
  section: string;
  item_id: string;
  completed: boolean;
  completed_at: string;
  user_session: string;
  created_at: string;
}

interface GymProgress {
  gymName: string;
  totalItems: number;
  completedItems: number;
  completionRate: number;
  sections: Record<string, { completed: number; total: number }>;
  lastActivity: string;
}

export function AdminDashboard() {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [gymProgress, setGymProgress] = useState<Record<string, GymProgress>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGym, setSelectedGym] = useState<string>('all');

  // Define all possible items for progress calculation
  const allSections = {
    'boredom': 5,
    'fireworks': 1,
    'handstand': 1,
    'confidence': 1,
    'race': 1,
    'riddle': 4,
    'trial': 1,
    'balance': 3
  };

  const totalPossibleItems = Object.values(allSections).reduce((sum, count) => sum + count, 0);

  useEffect(() => {
    loadProgressData();
    
    // Set up real-time subscription
    const subscription = supabase
      .channel('progress_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'progress_tracking' },
        () => {
          loadProgressData();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadProgressData = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('progress_tracking')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading progress data:', error);
        return;
      }

      setProgressData(data || []);
      processProgressData(data || []);
    } catch (error) {
      console.error('Error loading progress data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const processProgressData = (data: ProgressData[]) => {
    const gymMap: Record<string, GymProgress> = {};

    // Group by gym and user session
    const gymSessions: Record<string, Record<string, ProgressData[]>> = {};
    
    data.forEach(item => {
      if (!gymSessions[item.gym_id]) {
        gymSessions[item.gym_id] = {};
      }
      if (!gymSessions[item.gym_id][item.user_session]) {
        gymSessions[item.gym_id][item.user_session] = [];
      }
      gymSessions[item.gym_id][item.user_session].push(item);
    });

    // Calculate progress for each gym
    Object.keys(gymSessions).forEach(gymId => {
      const sessions = gymSessions[gymId];
      const sessionCount = Object.keys(sessions).length;
      
      if (sessionCount === 0) return;

      // Get gym name from first item
      const firstItem = Object.values(sessions)[0][0];
      const gymName = firstItem?.gym_name || gymId;

      // Calculate completion stats across all sessions
      let totalCompleted = 0;
      const sectionStats: Record<string, { completed: number; total: number }> = {};
      let lastActivity = '';

      Object.values(sessions).forEach(sessionItems => {
        const completedItems = sessionItems.filter(item => item.completed);
        totalCompleted += completedItems.length;

        // Track latest activity
        sessionItems.forEach(item => {
          if (item.completed_at && item.completed_at > lastActivity) {
            lastActivity = item.completed_at;
          }
        });

        // Count section completions
        completedItems.forEach(item => {
          if (!sectionStats[item.section]) {
            sectionStats[item.section] = { completed: 0, total: allSections[item.section] || 1 };
          }
          sectionStats[item.section].completed++;
        });
      });

      // Ensure all sections are represented
      Object.keys(allSections).forEach(section => {
        if (!sectionStats[section]) {
          sectionStats[section] = { completed: 0, total: allSections[section] };
        }
      });

      const totalPossible = totalPossibleItems * sessionCount;
      const completionRate = totalPossible > 0 ? (totalCompleted / totalPossible) * 100 : 0;

      gymMap[gymId] = {
        gymName,
        totalItems: totalPossible,
        completedItems: totalCompleted,
        completionRate,
        sections: sectionStats,
        lastActivity
      };
    });

    setGymProgress(gymMap);
  };

  const filteredData = selectedGym === 'all' 
    ? progressData 
    : progressData.filter(item => item.gym_id === selectedGym);

  const gymList = Object.keys(gymProgress);

  if (isLoading) {
    return (
      <div className="admin-dashboard loading">
        <div className="loading-spinner">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>📊 Content Progress Dashboard</h1>
        <p>Real-time tracking of content creation progress across all gyms</p>
      </div>

      {/* Summary Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{gymList.length}</div>
            <div className="stat-label">Active Gyms</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-number">
              {Object.values(gymProgress).reduce((sum, gym) => sum + gym.completedItems, 0)}
            </div>
            <div className="stat-label">Total Completed</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <BarChart3 size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-number">
              {Object.values(gymProgress).length > 0 
                ? Math.round(Object.values(gymProgress).reduce((sum, gym) => sum + gym.completionRate, 0) / Object.values(gymProgress).length)
                : 0}%
            </div>
            <div className="stat-label">Avg Completion</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-number">
              {progressData.filter(item => {
                const completedAt = new Date(item.completed_at || item.created_at);
                const today = new Date();
                return completedAt.toDateString() === today.toDateString();
              }).length}
            </div>
            <div className="stat-label">Today's Activity</div>
          </div>
        </div>
      </div>

      {/* Gym Filter */}
      <div className="filter-section">
        <label htmlFor="gym-filter">Filter by Gym:</label>
        <select
          id="gym-filter"
          value={selectedGym}
          onChange={(e) => setSelectedGym(e.target.value)}
          className="gym-filter-dropdown"
        >
          <option value="all">All Gyms</option>
          {gymList.map(gymId => (
            <option key={gymId} value={gymId}>
              {gymProgress[gymId].gymName}
            </option>
          ))}
        </select>
      </div>

      {/* Gym Progress Cards */}
      <div className="gym-progress-grid">
        {(selectedGym === 'all' ? gymList : [selectedGym]).map(gymId => {
          const gym = gymProgress[gymId];
          if (!gym) return null;

          return (
            <div key={gymId} className="gym-progress-card">
              <div className="gym-card-header">
                <h3>{gym.gymName}</h3>
                <div className="completion-badge">
                  {Math.round(gym.completionRate)}%
                </div>
              </div>
              
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${gym.completionRate}%` }}
                ></div>
              </div>
              
              <div className="gym-stats">
                <span>{gym.completedItems} / {gym.totalItems} items completed</span>
                {gym.lastActivity && (
                  <span className="last-activity">
                    Last activity: {new Date(gym.lastActivity).toLocaleDateString()}
                  </span>
                )}
              </div>

              <div className="section-breakdown">
                <h4>Section Progress:</h4>
                {Object.entries(gym.sections).map(([section, stats]) => (
                  <div key={section} className="section-stat">
                    <span className="section-name">{section}</span>
                    <span className="section-progress">
                      {stats.completed} / {stats.total}
                    </span>
                    <div className="mini-progress-bar">
                      <div 
                        className="mini-progress-fill"
                        style={{ width: `${(stats.completed / stats.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {filteredData
            .filter(item => item.completed)
            .slice(0, 20)
            .map(item => (
              <div key={item.id} className="activity-item">
                <div className="activity-gym">{item.gym_name}</div>
                <div className="activity-details">
                  Completed <strong>{item.item_id}</strong> in <strong>{item.section}</strong>
                </div>
                <div className="activity-time">
                  {new Date(item.completed_at || item.created_at).toLocaleString()}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}