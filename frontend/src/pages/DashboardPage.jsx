import React from 'react';
import { Link } from 'react-router-dom';
import DashboardGrid from '../components/Dashboard/DashboardGrid';
import { FiSettings } from 'react-icons/fi';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <Link to="/settings" className="customize-btn">
          <FiSettings /> Customize
        </Link>
      </div>
      <DashboardGrid />
    </div>
  );
};

export default DashboardPage;
