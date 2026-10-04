import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  FiGrid, FiCheckSquare, FiCalendar, FiAward, FiClock, 
  FiFileText, FiBell, FiSettings, FiLogOut 
} from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { useAuth } from '../../contexts/AuthContext';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <HiOutlineAcademicCap className="brand-icon" />
          <span>StudentHub</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
            <FiGrid />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/tasks" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
            <FiCheckSquare />
            <span>Tasks</span>
          </NavLink>
          <NavLink to="/attendance" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
            <FiCalendar />
            <span>Attendance</span>
          </NavLink>
          <NavLink to="/grades" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
            <FiAward />
            <span>Grades</span>
          </NavLink>
          <NavLink to="/timetable" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
            <FiClock />
            <span>Timetable</span>
          </NavLink>
          <NavLink to="/examinations" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
            <FiFileText />
            <span>Examinations</span>
          </NavLink>
          <NavLink to="/notices" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
            <FiBell />
            <span>Notices</span>
          </NavLink>

          <div className="nav-separator"></div>

          <div className="bottom-links">
            <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
              <FiSettings />
              <span>Settings</span>
            </NavLink>
            <button className="nav-link logout-btn" onClick={handleLogout}>
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
