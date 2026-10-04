export const user = {
  name: 'Arjun Mehta',
  email: 'arjun@university.edu',
  role: 'STUDENT'
};

export const attendance = [
  { subject: 'DBMS', attended: 43, total: 50, percentage: 86 },
  { subject: 'Operating Systems', attended: 39, total: 50, percentage: 78 },
  { subject: 'WMD', attended: 42, total: 50, percentage: 84 },
  { subject: 'AIML', attended: 46, total: 50, percentage: 92 },
  { subject: 'Computer Networks', attended: 40, total: 50, percentage: 80 },
  { subject: 'Software Engineering', attended: 44, total: 50, percentage: 88 }
];

export const tasks = [
  { id: 1, title: 'WMD Experiment 3', description: 'Complete web dev experiment 3', dueDate: '2026-10-10', priority: 'HIGH', status: 'PENDING' },
  { id: 2, title: 'DBMS Assignment', description: 'SQL queries assignment', dueDate: '2026-10-12', priority: 'MEDIUM', status: 'PENDING' },
  { id: 3, title: 'OS Practical', description: 'Process scheduling algorithms', dueDate: '2026-10-05', priority: 'HIGH', status: 'COMPLETED' },
  { id: 4, title: 'AIML Lab Report', description: 'Submit machine learning lab report', dueDate: '2026-10-15', priority: 'LOW', status: 'PENDING' },
  { id: 5, title: 'CN Project Submission', description: 'Final networking project', dueDate: '2026-10-20', priority: 'HIGH', status: 'PENDING' }
];

export const grades = [
  { subject: 'DBMS', marks: 82, grade: 'A' },
  { subject: 'Operating Systems', marks: 74, grade: 'B+' },
  { subject: 'WMD', marks: 88, grade: 'A+' },
  { subject: 'AIML', marks: 91, grade: 'A+' },
  { subject: 'Computer Networks', marks: 78, grade: 'A' },
  { subject: 'Software Engineering', marks: 85, grade: 'A' }
];

export const cgpa = 8.2;

export const timetable = {
  Monday: [
    { time: '09:00 - 10:00', subject: 'DBMS', room: '101' },
    { time: '10:00 - 11:00', subject: 'AIML', room: '102' }
  ],
  Tuesday: [
    { time: '09:00 - 10:00', subject: 'WMD', room: 'Lab 1' },
    { time: '10:00 - 12:00', subject: 'Operating Systems', room: '105' }
  ],
  Wednesday: [
    { time: '11:00 - 12:00', subject: 'Computer Networks', room: '103' },
    { time: '13:00 - 15:00', subject: 'Software Engineering', room: '104' }
  ],
  Thursday: [
    { time: '09:00 - 11:00', subject: 'AIML', room: 'Lab 2' },
    { time: '11:00 - 12:00', subject: 'DBMS', room: '101' }
  ],
  Friday: [
    { time: '10:00 - 11:00', subject: 'Operating Systems', room: '105' },
    { time: '11:00 - 13:00', subject: 'WMD', room: 'Lab 1' }
  ]
};

export const exams = [
  { id: 1, subject: 'DBMS', date: '2026-11-01', time: '10:00 - 12:00', room: 'Exam Hall A' },
  { id: 2, subject: 'Operating Systems', date: '2026-11-03', time: '10:00 - 12:00', room: 'Exam Hall B' },
  { id: 3, subject: 'WMD', date: '2026-11-05', time: '14:00 - 16:00', room: 'Lab 1' }
];

export const notices = [
  { id: 1, title: 'Mid-term Exams Schedule Released', content: 'The schedule for the upcoming mid-term examinations is now available on the portal.', createdAt: '2026-10-01' },
  { id: 2, title: 'Campus Placements Registration', content: 'Final year students are requested to register for campus placements by 15th October.', createdAt: '2026-09-28' },
  { id: 3, title: 'Library Book Return Notice', content: 'Please return all overdue library books by the end of this week to avoid fines.', createdAt: '2026-09-25' },
  { id: 4, title: 'Annual Tech Fest "TechNova"', content: 'Registrations are open for events in our annual technical festival.', createdAt: '2026-09-20' }
];

export const defaultLayout = [
  { i: 'attendance', x: 0, y: 0, w: 4, h: 2 },
  { i: 'tasks', x: 4, y: 0, w: 4, h: 2 },
  { i: 'grades', x: 8, y: 0, w: 4, h: 2 },
  { i: 'timetable', x: 0, y: 2, w: 4, h: 2 },
  { i: 'exams', x: 4, y: 2, w: 4, h: 2 },
  { i: 'notices', x: 8, y: 2, w: 4, h: 2 }
];

export const mockUser = user;
export const mockAttendance = attendance;
export const mockTasks = tasks;
export const mockGrades = grades;
export const mockCgpa = cgpa;
export const mockTimetable = timetable;
export const mockExams = exams;
export const mockNotices = notices;
export const mockDefaultLayout = defaultLayout;
