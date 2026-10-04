import React from 'react';
import WidgetCard from '../WidgetCard/WidgetCard';
import { FiClock } from 'react-icons/fi';
import { mockTimetable } from '../../utils/mockData';
import './Dashboard.css';

const TimetableWidget = () => {
  const todayClasses = mockTimetable && mockTimetable['Monday'] ? mockTimetable['Monday'] : [];

  return (
    <WidgetCard title="Timetable" icon={<FiClock />}>
      {todayClasses.length > 0 ? (
        todayClasses.map((item, index) => (
          <div key={index} className="schedule-item">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{item.subject}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {item.time} • Room {item.room || 'N/A'}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="widget-empty">No classes scheduled for today</div>
      )}
    </WidgetCard>
  );
};

export default TimetableWidget;
