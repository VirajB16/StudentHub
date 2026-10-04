import React from 'react';
import { timetable as mockTimetable } from '../data/mockData';
import './TimetablePage.css';

const TimetablePage = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const todayIndex = new Date().getDay() - 1; 
  const currentDay = days[todayIndex >= 0 && todayIndex < 5 ? todayIndex : 0];

  return (
    <div className="timetable-page">
      <h1 className="page-title">Timetable</h1>
      <div className="timetable-container">
        <table className="timetable-table">
          <thead>
            <tr>
              <th>Time</th>
              {days.map(day => (
                <th key={day} className={day === currentDay ? 'current-day-col' : ''}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockTimetable.map((slot, index) => (
              <tr key={index}>
                <td className="time-col">{slot.time}</td>
                {days.map(day => (
                  <td key={day} className={day === currentDay ? 'current-day-col' : ''}>
                    {slot[day] ? (
                      <div className="class-block">
                        <div className="class-subject">{slot[day].subject}</div>
                        <div className="class-room">{slot[day].room}</div>
                      </div>
                    ) : (
                      <div className="free-period">-</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimetablePage;
