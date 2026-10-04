import React from 'react';
import { grades as mockGrades, cgpa } from '../data/mockData';
import './GradesPage.css';

const GradesPage = () => {
  return (
    <div className="grades-page">
      <h1 className="page-title">Grades</h1>
      <div className="cgpa-card">
        <h2>Cumulative GPA</h2>
        <div className="cgpa-value">{cgpa}</div>
      </div>
      <div className="grades-grid">
        {mockGrades.map((g, index) => (
          <div key={index} className="grade-card">
            <h3>{g.subject}</h3>
            <div className="grade-details">
              <span className="marks">Marks: {g.marks}</span>
              <span className={`grade-badge grade-${g.grade.toLowerCase()}`}>{g.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradesPage;
