import React from 'react';
import WidgetCard from '../WidgetCard/WidgetCard';
import { FiAward } from 'react-icons/fi';
import { mockGrades, mockCgpa } from '../../utils/mockData';
import './Dashboard.css';

const GradesWidget = () => {
  const topGrades = mockGrades ? mockGrades.slice(0, 4) : [];

  return (
    <WidgetCard title="CGPA / Grades" icon={<FiAward />}>
      <div className="cgpa-label">Current CGPA</div>
      <div className="cgpa-display">{mockCgpa || '0.00'}</div>
      
      <div style={{ marginTop: '16px' }}>
        <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Recent Grades</h4>
        {topGrades.length > 0 ? (
          topGrades.map((grade, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: index < topGrades.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{grade.subject}</span>
              <span className="grade-badge">{grade.grade}</span>
            </div>
          ))
        ) : (
          <div className="widget-empty">No grades available</div>
        )}
      </div>
    </WidgetCard>
  );
};

export default GradesWidget;
