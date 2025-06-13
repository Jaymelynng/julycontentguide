import React, { useState } from 'react';
import { Calendar, Plus, Copy, Archive } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export function MonthSelector() {
  const { currentMonth, availableMonths, switchToMonth, createNewMonth } = useContent();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newMonthData, setNewMonthData] = useState({
    name: '',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    title: '',
    subtitle: ''
  });

  const handleCreateMonth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await createNewMonth({
      ...newMonthData,
      sections: [] // Start with empty sections - admin can add them
    });
    
    setShowCreateForm(false);
    setNewMonthData({
      name: '',
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      title: '',
      subtitle: ''
    });
  };

  const handleCloneCurrentMonth = async () => {
    if (!currentMonth) return;
    
    const nextMonth = currentMonth.month === 12 ? 1 : currentMonth.month + 1;
    const nextYear = currentMonth.month === 12 ? currentMonth.year + 1 : currentMonth.year;
    
    await createNewMonth({
      name: getMonthName(nextMonth).toLowerCase(),
      year: nextYear,
      month: nextMonth,
      title: `${getMonthName(nextMonth)} Content Mission`,
      subtitle: 'Your Guide to Creating Amazing Content',
      sections: currentMonth.sections // Clone all sections
    });
  };

  const getMonthName = (monthNum: number) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNum - 1];
  };

  return (
    <div className="month-selector">
      <div className="month-selector-header">
        <div className="current-month-info">
          <Calendar size={20} />
          <div>
            <h3>{currentMonth?.title || 'No Month Selected'}</h3>
            <p>{currentMonth?.subtitle}</p>
          </div>
        </div>
        
        <div className="month-actions">
          <button
            onClick={() => setShowCreateForm(true)}
            className="action-btn create-btn"
          >
            <Plus size={16} />
            New Month
          </button>
          
          {currentMonth && (
            <button
              onClick={handleCloneCurrentMonth}
              className="action-btn clone-btn"
            >
              <Copy size={16} />
              Clone Current
            </button>
          )}
        </div>
      </div>

      {/* Month Selection Dropdown */}
      <div className="month-selection">
        <label htmlFor="month-select">Switch to Month:</label>
        <select
          id="month-select"
          value={currentMonth?.id || ''}
          onChange={(e) => switchToMonth(e.target.value)}
          className="month-dropdown"
        >
          {availableMonths.map(month => (
            <option key={month.id} value={month.id}>
              {getMonthName(month.month)} {month.year} 
              {month.isactive ? ' (Active)' : ''}
            </option>
          ))}
        </select>
      </div>

      {/* Create New Month Form */}
      {showCreateForm && (
        <div className="create-month-modal">
          <div className="modal-overlay" onClick={() => setShowCreateForm(false)} />
          <div className="modal-content">
            <h3>Create New Content Month</h3>
            
            <form onSubmit={handleCreateMonth}>
              <div className="form-group">
                <label htmlFor="month-name">Month Name (URL-friendly):</label>
                <input
                  id="month-name"
                  type="text"
                  value={newMonthData.name}
                  onChange={(e) => setNewMonthData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., august, september"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="month-year">Year:</label>
                  <input
                    id="month-year"
                    type="number"
                    value={newMonthData.year}
                    onChange={(e) => setNewMonthData(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                    min="2024"
                    max="2030"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="month-number">Month:</label>
                  <select
                    id="month-number"
                    value={newMonthData.month}
                    onChange={(e) => setNewMonthData(prev => ({ ...prev, month: parseInt(e.target.value) }))}
                    required
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {getMonthName(i + 1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="month-title">Display Title:</label>
                <input
                  id="month-title"
                  type="text"
                  value={newMonthData.title}
                  onChange={(e) => setNewMonthData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., August Content Mission"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="month-subtitle">Subtitle:</label>
                <input
                  id="month-subtitle"
                  type="text"
                  value={newMonthData.subtitle}
                  onChange={(e) => setNewMonthData(prev => ({ ...prev, subtitle: e.target.value }))}
                  placeholder="e.g., Your Guide to Back-to-School Content"
                />
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={() => setShowCreateForm(false)} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Create Month
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Historical Months */}
      <div className="historical-months">
        <h4>
          <Archive size={16} />
          Content History
        </h4>
        <div className="month-history-list">
          {availableMonths
            .filter(month => !month.isactive)
            .map(month => (
              <div key={month.id} className="history-item">
                <span>{getMonthName(month.month)} {month.year}</span>
                <button
                  onClick={() => switchToMonth(month.id)}
                  className="view-btn"
                >
                  View
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}