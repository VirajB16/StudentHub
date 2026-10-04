import React from 'react';
import WidgetCard from '../WidgetCard/WidgetCard';
import { FiFileText } from 'react-icons/fi';
import { mockExams } from '../../utils/mockData';
import './Dashboard.css';

const ExamsWidget = () => {
  const upcomingExams = mockExams ? mockExams.slice(0, 3) : [];

  return (
    <WidgetCard title="Upcoming Exams" icon={<FiFileText />}>
      {upcomingExams.length > 0 ? (
        upcomingExams.map((exam, index) => (
          <div key={index} className="exam-item">
            <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '2px' }}>{exam.subject}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              {exam.date} • {exam.time}
            </div>
            {exam.room && (
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Room: {exam.room}</div>
            )}
          </div>
        ))
      ) : (
        <div className="widget-empty">No upcoming exams</div>
      )}
    </WidgetCard>
  );
};

export default ExamsWidget;
