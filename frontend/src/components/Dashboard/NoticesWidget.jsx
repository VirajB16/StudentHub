import React from 'react';
import { Link } from 'react-router-dom';
import WidgetCard from '../WidgetCard/WidgetCard';
import { FiBell } from 'react-icons/fi';
import { mockNotices } from '../../utils/mockData';
import './Dashboard.css';

const NoticesWidget = () => {
  const recentNotices = mockNotices ? mockNotices.slice(0, 3) : [];

  return (
    <WidgetCard title="Notices" icon={<FiBell />}>
      {recentNotices.length > 0 ? (
        <div>
          {recentNotices.map((notice, index) => (
            <div key={index} className="notice-item">
              <div style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '4px' }}>{notice.title}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                {notice.content}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
                {notice.date}
              </div>
            </div>
          ))}
          <Link to="/notices" className="view-all-link">View All Notices →</Link>
        </div>
      ) : (
        <div className="widget-empty">No recent notices</div>
      )}
    </WidgetCard>
  );
};

export default NoticesWidget;
