import React from 'react';
import WidgetCard from '../WidgetCard/WidgetCard';
import { FiCalendar } from 'react-icons/fi';
import { mockAttendance } from '../../utils/mockData';
import './Dashboard.css';

const AttendanceWidget = () => {
  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) return '#059669'; // Green
    if (percentage >= 65) return '#D97706'; // Yellow
    return '#DC2626'; // Red
  };

  return (
    <WidgetCard title="Attendance" icon={<FiCalendar />}>
      {mockAttendance && mockAttendance.length > 0 ? (
        mockAttendance.map((item, index) => (
          <div key={index} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
              <span>{item.subject}</span>
              <span style={{ fontWeight: '600' }}>{item.percentage}%</span>
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ 
                  width: `${item.percentage}%`,
                  backgroundColor: getProgressBarColor(item.percentage)
                }}
              ></div>
            </div>
          </div>
        ))
      ) : (
        <div className="widget-empty">No attendance data available</div>
      )}
    </WidgetCard>
  );
};

export default AttendanceWidget;
