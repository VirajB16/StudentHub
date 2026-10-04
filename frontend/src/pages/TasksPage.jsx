import React, { useState } from 'react';
import { tasks as mockTasks } from '../data/mockData';
import { FiCheckCircle, FiCircle, FiTrash2, FiPlus } from 'react-icons/fi';
import './TasksPage.css';

const TasksPage = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [filter, setFilter] = useState('All');
  
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', priority: 'Medium' });

  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, status: t.status === 'COMPLETED' ? 'PENDING' : 'COMPLETED' } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    const task = {
      id: `t${Date.now()}`,
      ...newTask,
      status: 'PENDING'
    };
    setTasks([task, ...tasks]);
    setNewTask({ title: '', description: '', dueDate: '', priority: 'Medium' });
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'All') return true;
    return filter === 'Pending' ? t.status === 'PENDING' : t.status === 'COMPLETED';
  });

  return (
    <div className="tasks-page">
      <h1 className="page-title">Tasks Management</h1>
      
      <div className="add-task-card">
        <h3>Add New Task</h3>
        <form onSubmit={handleAdd} className="add-task-form">
          <input 
            type="text" 
            placeholder="Task Title" 
            value={newTask.title}
            onChange={e => setNewTask({...newTask, title: e.target.value})}
            required 
          />
          <input 
            type="date" 
            value={newTask.dueDate}
            onChange={e => setNewTask({...newTask, dueDate: e.target.value})}
            required
          />
          <select 
            value={newTask.priority}
            onChange={e => setNewTask({...newTask, priority: e.target.value})}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <textarea 
            placeholder="Description..." 
            value={newTask.description}
            onChange={e => setNewTask({...newTask, description: e.target.value})}
          />
          <button type="submit" className="add-btn"><FiPlus /> Add Task</button>
        </form>
      </div>

      <div className="tasks-filter">
        {['All', 'Pending', 'Completed'].map(f => (
          <button 
            key={f} 
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="tasks-list">
        {filteredTasks.map(task => (
          <div key={task.id} className={`task-card ${task.status === 'COMPLETED' ? 'completed' : ''}`}>
            <button className="toggle-btn" onClick={() => toggleTask(task.id)}>
              {task.status === 'COMPLETED' ? <FiCheckCircle className="icon-completed" /> : <FiCircle className="icon-pending" />}
            </button>
            <div className="task-content">
              <h4>{task.title}</h4>
              <p className="task-desc">{task.description}</p>
              <div className="task-meta">
                <span className={`priority-badge ${task.priority.toLowerCase()}`}>{task.priority}</span>
                <span className="due-date">Due: {task.dueDate}</span>
              </div>
            </div>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
