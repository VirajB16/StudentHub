/**
 * App.jsx — Root component for StudentHub
 * 
 * Sets up:
 * - React Router with all page routes
 * - Auth and Dashboard context providers
 * - Protected route wrapper (redirects to login if not authenticated)
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DashboardProvider } from './contexts/DashboardContext';

// Layout
import Layout from './components/Layout/Layout';

// Pages
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import AttendancePage from './pages/AttendancePage';
import GradesPage from './pages/GradesPage';
import TimetablePage from './pages/TimetablePage';
import ExamsPage from './pages/ExamsPage';
import NoticesPage from './pages/NoticesPage';
import SettingsPage from './pages/SettingsPage';

// Global styles
import './styles/variables.css';

/**
 * ProtectedRoute — Redirects to /login if user is not authenticated
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

/**
 * AppRoutes — All application routes
 */
function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Login page — redirect to dashboard if already logged in */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />
        }
      />

      {/* Protected routes — wrapped in Layout with sidebar */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardProvider>
              <Layout />
            </DashboardProvider>
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="attendance" element={<AttendancePage />} />
        <Route path="grades" element={<GradesPage />} />
        <Route path="timetable" element={<TimetablePage />} />
        <Route path="examinations" element={<ExamsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Catch-all — redirect to dashboard or login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

/**
 * App — Root component
 */
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
