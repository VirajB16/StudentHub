import React from 'react';
import { Link } from 'react-router-dom';
import WidgetCard from '../WidgetCard/WidgetCard';
import { FiCheckSquare } from 'react-icons/fi';
import { mockTasks } from '../../utils/mockData';
import './Dashboard.css';

const TasksWidget = () => {
  const getPriorityClass = (priority) => {
    switch(priority?.toLowerCase()) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-low';
    }
  };

  const todayTasks = mockTasks ? mockTasks.slice(0, 4) : [];

  return (
    <WidgetCard title="Today's Tasks" icon={<FiCheckSquare />}>
      {todayTasks.length > 0 ? (
        <div>
          {todayTasks.map((task, index) => (
            <div key={index} className="task-item">
              <input type="checkbox" checked={task.status === 'COMPLETED'} readOnly />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{task.title}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{task.dueDate}</span>
              </div>
              <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                {task.priority}
              </span>
            </div>
          ))}
          <Link to="/tasks" className="view-all-link">View All Tasks →</Link>
        </div>
      ) : (
        <div className="widget-empty">No tasks for today</div>
      )}
    </WidgetCard>
  );
};

export default TasksWidget;
