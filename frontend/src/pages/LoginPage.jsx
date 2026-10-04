import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">StudentHub</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p style={{ marginTop: '16px', fontSize: '0.82rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
          <strong>Demo Login:</strong> Enter any email &amp; password (e.g., <code>arjun@university.edu</code>)
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
