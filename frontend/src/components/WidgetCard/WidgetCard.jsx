import React from 'react';
import './WidgetCard.css';

const WidgetCard = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`widget-card ${className}`}>
      <div className="widget-header">
        <span className="widget-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="widget-body">
        {children}
      </div>
    </div>
  );
};

export default WidgetCard;
