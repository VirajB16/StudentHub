import React from 'react';
import { attendance as mockAttendance } from '../data/mockData';
import './AttendancePage.css';

const AttendancePage = () => {
  const totalClasses = mockAttendance.reduce((acc, curr) => acc + curr.total, 0);
  const attendedClasses = mockAttendance.reduce((acc, curr) => acc + curr.attended, 0);
  const overallPercentage = totalClasses > 0 ? ((attendedClasses / totalClasses) * 100).toFixed(1) : 0;

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'var(--success)';
    if (percentage >= 65) return 'var(--warning)';
    return 'var(--danger)';
  };

  return (
    <div className="attendance-page">
      <h1 className="page-title">Attendance</h1>

      <div className="overall-card">
        <h2>Overall Attendance</h2>
        <div className="overall-stat">
          <span className="overall-percent" style={{ color: getProgressColor(overallPercentage) }}>
            {overallPercentage}%
          </span>
          <span className="overall-classes">({attendedClasses}/{totalClasses} classes)</span>
        </div>
      </div>

      <div className="attendance-grid">
        {mockAttendance.map((sub, index) => {
          const percent = ((sub.attended / sub.total) * 100).toFixed(1);
          const color = getProgressColor(percent);
          return (
            <div key={index} className="subject-card">
              <div className="subject-header">
                <h3>{sub.subject}</h3>
                <span className="subject-percent" style={{ color }}>{percent}%</span>
              </div>
              <p className="subject-fraction">{sub.attended} / {sub.total} classes attended</p>
              <div className="progress-bg">
                <div 
                  className="progress-fill" 
                  style={{ width: `${percent}%`, backgroundColor: color }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendancePage;
