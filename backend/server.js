/**
 * StudentHub REST API Server
 * 
 * Implements the REST API endpoints specified in TECH_STACK.md (Sections 6 & 8)
 * for academic tasks, attendance, grades, timetable, exams, notices, and dashboard layout.
 * Supports college lab evaluation (Experiment 1, Experiment 6 & Experiment 8).
 */

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Data Store (Initialized with standard mock data)
let userData = {
  id: 1,
  name: 'Arjun Mehta',
  email: 'arjun@university.edu',
  role: 'STUDENT',
  token: 'mock-jwt-token-xyz123'
};

let tasks = [
  { id: 1, userId: 1, title: 'WMD Experiment 3', description: 'Complete web dev experiment 3', dueDate: '2026-10-10', priority: 'HIGH', status: 'PENDING' },
  { id: 2, userId: 1, title: 'DBMS Assignment', description: 'SQL queries assignment', dueDate: '2026-10-12', priority: 'MEDIUM', status: 'PENDING' },
  { id: 3, userId: 1, title: 'OS Practical', description: 'Process scheduling algorithms', dueDate: '2026-10-05', priority: 'HIGH', status: 'COMPLETED' },
  { id: 4, userId: 1, title: 'AIML Lab Report', description: 'Submit machine learning lab report', dueDate: '2026-10-15', priority: 'LOW', status: 'PENDING' },
  { id: 5, userId: 1, title: 'CN Project Submission', description: 'Final networking project', dueDate: '2026-10-20', priority: 'HIGH', status: 'PENDING' }
];

let attendance = [
  { id: 1, studentId: 1, subject: 'DBMS', attended: 43, total: 50, percentage: 86 },
  { id: 2, studentId: 1, subject: 'Operating Systems', attended: 39, total: 50, percentage: 78 },
  { id: 3, studentId: 1, subject: 'WMD', attended: 42, total: 50, percentage: 84 },
  { id: 4, studentId: 1, subject: 'AIML', attended: 46, total: 50, percentage: 92 },
  { id: 5, studentId: 1, subject: 'Computer Networks', attended: 40, total: 50, percentage: 80 },
  { id: 6, studentId: 1, subject: 'Software Engineering', attended: 44, total: 50, percentage: 88 }
];

let grades = [
  { id: 1, studentId: 1, subject: 'DBMS', marks: 82, grade: 'A' },
  { id: 2, studentId: 1, subject: 'Operating Systems', marks: 74, grade: 'B+' },
  { id: 3, studentId: 1, subject: 'WMD', marks: 88, grade: 'A+' },
  { id: 4, studentId: 1, subject: 'AIML', marks: 91, grade: 'A+' },
  { id: 5, studentId: 1, subject: 'Computer Networks', marks: 78, grade: 'A' },
  { id: 6, studentId: 1, subject: 'Software Engineering', marks: 85, grade: 'A' }
];

let timetable = {
  Monday: [
    { id: 1, time: '09:00 - 10:00', subject: 'DBMS', room: '101' },
    { id: 2, time: '10:00 - 11:00', subject: 'AIML', room: '102' }
  ],
  Tuesday: [
    { id: 3, time: '09:00 - 10:00', subject: 'WMD', room: 'Lab 1' },
    { id: 4, time: '10:00 - 12:00', subject: 'Operating Systems', room: '105' }
  ],
  Wednesday: [
    { id: 5, time: '11:00 - 12:00', subject: 'Computer Networks', room: '103' },
    { id: 6, time: '13:00 - 15:00', subject: 'Software Engineering', room: '104' }
  ],
  Thursday: [
    { id: 7, time: '09:00 - 11:00', subject: 'AIML', room: 'Lab 2' },
    { id: 8, time: '11:00 - 12:00', subject: 'DBMS', room: '101' }
  ],
  Friday: [
    { id: 9, time: '10:00 - 11:00', subject: 'Operating Systems', room: '105' },
    { id: 10, time: '11:00 - 13:00', subject: 'WMD', room: 'Lab 1' }
  ]
};

let exams = [
  { id: 1, studentId: 1, subject: 'DBMS', date: '2026-11-01', time: '10:00 - 12:00', room: 'Exam Hall A' },
  { id: 2, studentId: 1, subject: 'Operating Systems', date: '2026-11-03', time: '10:00 - 12:00', room: 'Exam Hall B' },
  { id: 3, studentId: 1, subject: 'WMD', date: '2026-11-05', time: '14:00 - 16:00', room: 'Lab 1' }
];

let notices = [
  { id: 1, title: 'Mid-term Exams Schedule Released', content: 'The schedule for the upcoming mid-term examinations is now available on the portal.', createdAt: '2026-10-01' },
  { id: 2, title: 'Campus Placements Registration', content: 'Final year students are requested to register for campus placements by 15th October.', createdAt: '2026-09-28' },
  { id: 3, title: 'Library Book Return Notice', content: 'Please return all overdue library books by the end of this week to avoid fines.', createdAt: '2026-09-25' },
  { id: 4, title: 'Annual Tech Fest "TechNova"', content: 'Registrations are open for events in our annual technical festival.', createdAt: '2026-09-20' }
];

const defaultLayout = [
  { i: 'attendance', x: 0, y: 0, w: 4, h: 2 },
  { i: 'tasks', x: 4, y: 0, w: 4, h: 2 },
  { i: 'grades', x: 8, y: 0, w: 4, h: 2 },
  { i: 'timetable', x: 0, y: 2, w: 4, h: 2 },
  { i: 'exams', x: 4, y: 2, w: 4, h: 2 },
  { i: 'notices', x: 8, y: 2, w: 4, h: 2 }
];

let currentLayout = [...defaultLayout];

// --- 1. Authentication ---
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password required' });
  }
  return res.json({
    success: true,
    message: 'Login successful',
    token: userData.token,
    user: {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role
    }
  });
});

// --- 2. Tasks CRUD (Experiment 6) ---
// GET /api/tasks
app.get('/api/tasks', (req, res) => {
  res.json({ success: true, count: tasks.length, data: tasks });
});

// POST /api/tasks
app.post('/api/tasks', (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Title is required' });
  }
  const newTask = {
    id: Date.now(),
    userId: 1,
    title,
    description: description || '',
    dueDate: dueDate || new Date().toISOString().split('T')[0],
    priority: priority || 'MEDIUM',
    status: 'PENDING'
  };
  tasks.unshift(newTask);
  res.status(201).json({ success: true, message: 'Task created', data: newTask });
});

// PUT /api/tasks/:id
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body, id: taskId };
  res.json({ success: true, message: 'Task updated', data: tasks[taskIndex] });
});

// DELETE /api/tasks/:id
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== taskId);
  if (tasks.length === initialLength) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }
  res.json({ success: true, message: 'Task deleted successfully' });
});

// --- 3. Academic Information ---
// GET /api/attendance
app.get('/api/attendance', (req, res) => {
  const overallAttended = attendance.reduce((sum, item) => sum + item.attended, 0);
  const overallTotal = attendance.reduce((sum, item) => sum + item.total, 0);
  const overallPercentage = Math.round((overallAttended / overallTotal) * 100);

  res.json({
    success: true,
    overall: { attended: overallAttended, total: overallTotal, percentage: overallPercentage },
    data: attendance
  });
});

// GET /api/grades
app.get('/api/grades', (req, res) => {
  res.json({
    success: true,
    cgpa: 8.2,
    data: grades
  });
});

// GET /api/timetable
app.get('/api/timetable', (req, res) => {
  res.json({
    success: true,
    data: timetable
  });
});

// GET /api/exams
app.get('/api/exams', (req, res) => {
  res.json({
    success: true,
    count: exams.length,
    data: exams
  });
});

// GET /api/notices
app.get('/api/notices', (req, res) => {
  res.json({
    success: true,
    count: notices.length,
    data: notices
  });
});

// --- 4. Dashboard Customization Layout ---
// GET /api/dashboard/layout
app.get('/api/dashboard/layout', (req, res) => {
  res.json({
    success: true,
    data: currentLayout
  });
});

// PUT /api/dashboard/layout
app.put('/api/dashboard/layout', (req, res) => {
  const { layout } = req.body;
  if (!layout || !Array.isArray(layout)) {
    return res.status(400).json({ success: false, message: 'Invalid layout array' });
  }
  currentLayout = layout;
  res.json({
    success: true,
    message: 'Layout saved successfully',
    data: currentLayout
  });
});

// POST /api/dashboard/reset
app.post('/api/dashboard/reset', (req, res) => {
  currentLayout = [...defaultLayout];
  res.json({
    success: true,
    message: 'Layout reset to default',
    data: currentLayout
  });
});

// Root Healthcheck
app.get('/', (req, res) => {
  res.json({
    service: 'StudentHub REST API',
    status: 'ONLINE',
    version: '1.0.0',
    endpoints: [
      'POST /api/auth/login',
      'GET /api/tasks',
      'POST /api/tasks',
      'PUT /api/tasks/:id',
      'DELETE /api/tasks/:id',
      'GET /api/attendance',
      'GET /api/grades',
      'GET /api/timetable',
      'GET /api/exams',
      'GET /api/notices',
      'GET /api/dashboard/layout',
      'PUT /api/dashboard/layout',
      'POST /api/dashboard/reset'
    ]
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`StudentHub REST API running on http://localhost:${PORT}`);
});
