import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';
import './SettingsPage.css';

const SettingsPage = () => {
  const { widgets, toggleWidget, resetLayout } = useDashboard();

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>
      
      <div className="settings-card">
        <h2>Dashboard Widgets</h2>
        <p className="settings-desc">Toggle the widgets you want to see on your dashboard.</p>
        
        <div className="widgets-list">
          {Object.entries(widgets).map(([widgetId, isEnabled]) => (
            <div key={widgetId} className="widget-toggle-item">
              <span className="widget-name">{widgetId.charAt(0).toUpperCase() + widgetId.slice(1)}</span>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={isEnabled} 
                  onChange={() => toggleWidget(widgetId)} 
                />
                <span className="slider"></span>
              </label>
            </div>
          ))}
        </div>

        <div className="settings-actions">
          <button className="reset-btn" onClick={resetLayout}>
            Reset Dashboard Layout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
