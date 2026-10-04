import React from 'react';
import { exams as mockExams } from '../data/mockData';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import './ExamsPage.css';

const ExamsPage = () => {
  const getDaysRemaining = (dateStr) => {
    const examDate = new Date(dateStr);
    const today = new Date();
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="exams-page">
      <h1 className="page-title">Examinations</h1>
      <div className="exams-grid">
        {mockExams.map((exam, index) => {
          const daysLeft = getDaysRemaining(exam.date);
          return (
            <div key={index} className="exam-card">
              <div className="exam-header">
                <h3>{exam.subject}</h3>
                <span className={`days-left ${daysLeft < 7 ? 'urgent' : ''}`}>
                  {daysLeft} days left
                </span>
              </div>
              <div className="exam-details">
                <div className="detail-item"><FiCalendar /> {new Date(exam.date).toLocaleDateString()}</div>
                <div className="detail-item"><FiClock /> {exam.time}</div>
                <div className="detail-item"><FiMapPin /> {exam.room}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamsPage;
