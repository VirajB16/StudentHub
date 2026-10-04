import React from 'react';
import { FiMenu } from 'react-icons/fi';
import './Header.css';

const Header = ({ onMenuClick }) => {
  return (
    <header className="mobile-header">
      <button className="menu-btn" onClick={onMenuClick}>
        <FiMenu />
      </button>
      <div className="header-brand">StudentHub</div>
      <div className="user-avatar">SH</div>
    </header>
  );
};

export default Header;
