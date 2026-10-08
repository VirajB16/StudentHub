# StudentHub — Enhancing Student Academic Productivity

A component-based, customizable academic productivity web application designed for students and college laboratory evaluations (**SDG 4 - Quality Education, Target 4.4**).

---

## 🌟 Key Features

1. **Customizable Drag-and-Drop Dashboard**:
   - 6 Academic widgets:
     - 📅 **Attendance**: Real-time progress bars per subject & overall attendance.
     - 📝 **Today's Tasks**: Quick checklist with priority tags (High/Medium/Low).
     - 🎓 **CGPA / Grades**: Highlighting overall CGPA and letter grades.
     - ⏰ **Weekly Timetable**: Today's active schedule and room allocation.
     - 📑 **Upcoming Exams**: Scheduled mid-term and final examinations.
     - 📢 **Notices**: Recent academic notifications and circulars.
   - Built with `react-grid-layout` — drag by widget headers to rearrange, resize cards, toggle visibility, and reset layout.
   - **Persistent layout**: Saved in browser `localStorage`.

2. **Dedicated Academic Sections**:
   - **Tasks Management**: Full CRUD interface — Add new tasks, toggle completed/pending status, delete tasks, and filter by status.
   - **Attendance View**: Individual subject attendance statistics, attended vs. conducted lectures, and progress indicators.
   - **Grades & Academic Standing**: CGPA overview and subject-wise score breakdown.
   - **Weekly Timetable**: Schedule view across Monday through Friday with time slots and classroom numbers.
   - **Examinations Schedule**: Exam schedule with course codes, timings, and venues.
   - **Notices Board**: Institutional circulars and announcements.
   - **Dashboard Customization Settings**: Toggle individual widgets on or off and restore default layout anytime.

3. **Authentication**:
   - Simulated JWT-based login (`AuthContext`) with demo account pre-configured.

4. **REST API Companion (Node.js/Express)**:
   - Complete endpoints matching the requirements in `TECH_STACK.md` (GET, POST, PUT, DELETE for tasks, academic data, and layout state).
   - Ready-to-import **Postman Collection** (`StudentHub_Postman_Collection.json`).

---

## 🚀 Quick Start (How to Run)

### Option 1: One-Click Launch (Windows)
Double-click `run-studenthub.bat` in the project root. This opens both frontend and backend and launches the browser automatically.

### Option 2: Manual Terminal Launch

#### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
> Open your browser at **http://localhost:5173**

#### Backend (Companion REST API)
```bash
cd backend
npm install
npm start
```
> REST API runs at **http://localhost:5000**

---

## 🔑 Demo Credentials
- **Email:** `arjun@university.edu` (or any valid email)
- **Password:** `student123` (or any password)

---

## 🧪 Experiment-to-Technology Mapping (For College Lab Evaluation)

| Experiment | Topic | Implementation in StudentHub |
|---|---|---|
| **Exp 1** | REST API & Postman Testing | Backend REST endpoints + `StudentHub_Postman_Collection.json` |
| **Exp 2** | React Components & JSX | Reusable `WidgetCard`, `Sidebar`, `Header`, `Layout` |
| **Exp 3** | Hooks & Context API | `useState`, `useEffect`, `useAuth`, `useDashboard` |
| **Exp 6** | REST CRUD Operations | Tasks create, read, update status, and delete |
| **Exp 7** | Data Modeling | Realistic relational schema defined in `TECH_STACK.md` and mock state |
| **Exp 8** | Client Authentication | Auth context with token simulation and localStorage persistence |

---

## 📂 Project Architecture

```
StudentHub/
├── run-studenthub.bat                # One-click launcher script
├── StudentHub_Postman_Collection.json # Postman collection for API demonstration
├── README.md                         # Project documentation & guide
├── DESIGN.md                         # Architecture and design specs
├── TECH_STACK.md                     # Technology stack documentation
│
├── frontend/                         # React 18 + Vite Web Application
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx                  # Entry point
│       ├── App.jsx                   # Router & Protected route configuration
│       ├── index.css                 # Global reset & typography
│       ├── styles/
│       │   └── variables.css         # CSS design tokens (colors, radii, shadows)
│       ├── contexts/
│       │   ├── AuthContext.jsx       # User authentication state
│       │   └── DashboardContext.jsx  # Layout & widget visibility state
│       ├── data/
│       │   └── mockData.js           # Academic sample datasets
│       ├── components/
│       │   ├── Layout/               # Sidebar, Header & responsive layout shell
│       │   ├── WidgetCard/           # Modular card wrapper with drag handles
│       │   └── Dashboard/            # 6 Dashboard widgets & drag-and-drop grid
│       └── pages/                    # 9 Complete pages (Login, Dashboard, Tasks, etc.)
│
└── backend/                          # Companion Express REST API
    ├── package.json
    └── server.js                     # REST endpoints for tasks, attendance, layout
```

---

