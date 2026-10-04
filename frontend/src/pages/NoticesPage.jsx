import React from 'react';
import { notices as mockNotices } from '../data/mockData';
import { FiBell } from 'react-icons/fi';
import './NoticesPage.css';

const NoticesPage = () => {
  return (
    <div className="notices-page">
      <h1 className="page-title">Notice Board</h1>
      <div className="notices-list">
        {mockNotices.map((notice, index) => (
          <div key={index} className="notice-card">
            <div className="notice-icon"><FiBell /></div>
            <div className="notice-content-wrapper">
              <div className="notice-header">
                <h3>{notice.title}</h3>
                <span className="notice-date">{notice.date}</span>
              </div>
              <p className="notice-desc">{notice.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesPage;
