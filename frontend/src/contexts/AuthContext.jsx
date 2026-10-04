import React, { createContext, useContext, useState, useEffect } from 'react';
import { user as mockUser } from '../data/mockData';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Load auth state from local storage on initial render
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const parsedAuth = JSON.parse(storedAuth);
      setUser(parsedAuth.user);
      setIsAuthenticated(parsedAuth.isAuthenticated);
    }
  }, []);

  const login = (email, password) => {
    // Simple check against mock data for demonstration
    if (email && password) {
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify({ user: mockUser, isAuthenticated: true }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
