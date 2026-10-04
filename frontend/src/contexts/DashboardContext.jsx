import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultLayout as initialDefaultLayout } from '../data/mockData';

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

const defaultVisibility = {
  attendance: true,
  tasks: true,
  grades: true,
  timetable: true,
  exams: true,
  notices: true
};

export const DashboardProvider = ({ children }) => {
  const [layout, setLayout] = useState(initialDefaultLayout);
  const [widgetsVisibility, setWidgetsVisibility] = useState(defaultVisibility);

  useEffect(() => {
    // Load layout and visibility from localStorage if available
    const savedLayout = localStorage.getItem('dashboardLayout');
    const savedVisibility = localStorage.getItem('dashboardVisibility');
    
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
    if (savedVisibility) {
      setWidgetsVisibility(JSON.parse(savedVisibility));
    }
  }, []);

  const updateLayout = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem('dashboardLayout', JSON.stringify(newLayout));
  };

  const toggleWidget = (widgetKey) => {
    const updatedVisibility = {
      ...widgetsVisibility,
      [widgetKey]: !widgetsVisibility[widgetKey]
    };
    setWidgetsVisibility(updatedVisibility);
    localStorage.setItem('dashboardVisibility', JSON.stringify(updatedVisibility));
  };

  const resetLayout = () => {
    setLayout(initialDefaultLayout);
    setWidgetsVisibility(defaultVisibility);
    localStorage.setItem('dashboardLayout', JSON.stringify(initialDefaultLayout));
    localStorage.setItem('dashboardVisibility', JSON.stringify(defaultVisibility));
  };

  const value = {
    layout,
    widgetsVisibility,
    visibleWidgets: widgetsVisibility,
    widgets: widgetsVisibility,
    updateLayout,
    toggleWidget,
    resetLayout
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
