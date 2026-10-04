# StudentHub — Design Document

## 1. Project Overview

**Project:** StudentHub  
**Title:** Enhancing Student Academic Productivity using Component-Based Web Development with a Customizable Dashboard

StudentHub is a medium-simple academic productivity web application for students. It brings common academic information into one dashboard while allowing the student to customize the dashboard layout.

The project is intentionally designed to be easy to understand, modify, and demonstrate during a college laboratory evaluation.

---

## 2. Design Goals

The application should:

- Be simple enough for a beginner to understand.
- Look polished enough for a college project demonstration.
- Demonstrate the selected Web & Mobile Development experiments.
- Keep components modular and easy to modify.
- Make dashboard customization the main interactive feature.
- Avoid unnecessary complexity and features.

---

## 3. Target Users

### Student

Can:

- Log in.
- View academic information.
- View and manage tasks.
- View attendance.
- View grades/CGPA.
- View timetable.
- View upcoming examinations.
- View notices.
- Customize the dashboard.

### Admin

A simple admin role may be added later.

Admin functionality should remain limited to basic management of selected records such as tasks, notices, or student information.

Do not build a complete college ERP.

---

## 4. Main Pages

### 4.1 Login

Purpose:
- Allow the user to access StudentHub.
- Later connect to JWT authentication.

Elements:
- Email/username
- Password
- Login button
- Basic validation
- Error message

### 4.2 Dashboard

The main screen after login.

Widgets:

1. Attendance
2. Today's Tasks
3. CGPA / Grades
4. Weekly Timetable
5. Upcoming Exams
6. Notices

The dashboard should use a grid-based layout.

### 4.3 Tasks

Allow the student to:

- View tasks.
- Add a task.
- Edit a task.
- Mark a task as completed.
- Delete a task.
- View due date and priority.

### 4.4 Attendance

Display:

- Subject
- Attended classes
- Total classes
- Attendance percentage

Keep the visualization simple.

### 4.5 Grades

Display:

- Subject
- Marks/grade
- CGPA or overall result

### 4.6 Timetable

Display a simple weekly timetable.

### 4.7 Examinations

Display:

- Subject
- Date
- Time
- Room

### 4.8 Notices

Display recent academic notices.

### 4.9 Settings / Customize Dashboard

Allow:

- Moving widgets
- Hiding/showing widgets
- Resetting dashboard
- Saving layout
- Optional theme setting

---

## 5. Dashboard Customization

This is the primary differentiating feature.

### Default Layout

Example:

```text
┌───────────────────────────────────────────────┐
│ Attendance │ Today's Tasks │ CGPA              │
├────────────┼───────────────┼───────────────────┤
│ Timetable  │ Upcoming Exam │ Notices           │
└────────────┴───────────────┴───────────────────┘
```

The user can move widgets to different positions.

For example:

```text
┌───────────────────────────────────────────────┐
│ CGPA       │ Attendance     │ Today's Tasks    │
├────────────┼────────────────┼──────────────────┤
│ Notices    │ Timetable      │ Upcoming Exam    │
└────────────┴────────────────┴──────────────────┘
```

### Required operations

- Drag and drop
- Hide/show
- Reset to default
- Save layout

### Optional operation

- Resize widgets

Resize should only be included if it remains stable and easy to maintain.

### Persistence

Phase 1:
- Store layout using browser localStorage.

Later:
- Store layout in `DashboardLayout` in the backend database.

---

## 6. Navigation

Use a simple left sidebar on desktop.

Suggested navigation:

```text
StudentHub
────────────
Dashboard
Tasks
Attendance
Grades
Timetable
Examinations
Notices

────────────
Customize
Settings
Logout
```

On smaller screens, the sidebar should collapse into a mobile-friendly navigation.

---

## 7. Visual Design

### Style

Clean academic productivity application.

### Design principles

- Simple
- Professional
- Consistent
- Responsive
- Easy to read
- Easy to modify

### UI elements

Use:

- Cards
- Buttons
- Tables
- Badges
- Simple icons
- Progress indicators
- Form controls

### Avoid

- Excessive gradients
- Heavy glassmorphism
- Excessive animations
- Fake AI metrics
- Huge analytics dashboards
- Unnecessary charts
- Excessive decorative elements

The application should look like a strong student project, not an over-produced commercial SaaS template.

---

## 8. Responsive Design

The application must work on:

- Desktop
- Laptop
- Tablet
- Mobile-sized browser

Suggested behavior:

### Desktop

Sidebar + multi-column dashboard.

### Tablet

Collapsed/smaller sidebar + two-column or adaptive dashboard.

### Mobile

Top navigation or collapsible sidebar + single-column widgets.

---

## 9. Component Structure

Suggested React structure:

```text
App
├── Layout
│   ├── Sidebar
│   ├── Header
│   └── MainContent
│
├── Dashboard
│   ├── DashboardGrid
│   ├── AttendanceWidget
│   ├── TasksWidget
│   ├── GradesWidget
│   ├── TimetableWidget
│   ├── ExamsWidget
│   └── NoticesWidget
│
├── TasksPage
├── AttendancePage
├── GradesPage
├── TimetablePage
├── ExamsPage
├── NoticesPage
│
└── Settings
    └── DashboardCustomizer
```

Keep each component focused on one responsibility.

---

## 10. User Experience

Important interactions should be obvious.

Examples:

- `Customize Dashboard` button clearly enters customization mode.
- `Save Layout` clearly saves the arrangement.
- `Reset Layout` restores the default arrangement.
- Completed tasks should have a visible completed state.
- Invalid forms should show clear validation messages.
- Loading and error states should be understandable.

---

## 11. Demo-Friendly Design

The professor may ask for changes during the demonstration.

Therefore the design must make these changes easy:

- Move sidebar from left to right.
- Change widget order.
- Add a new widget.
- Remove/hide a widget.
- Change a widget title.
- Change sample academic data.
- Add a new navigation item.
- Change the primary accent colour.

Avoid tightly coupled code that makes simple UI changes require major rewrites.

---

## 12. Data Presentation

Use realistic but fictional student data.

Example:

```text
Attendance
DBMS              86%
Operating Systems  78%
WMD               84%
AIML              91%

CGPA
8.2
```

Tasks:

```text
□ WMD Experiment 3
□ DBMS Assignment
✓ OS Practical
```

Do not use fake AI/productivity scores.

---

## 13. Error, Loading and Empty States

Each major data section should have simple states:

### Loading

```text
Loading attendance...
```

### Empty

```text
No upcoming examinations.
```

### Error

```text
Unable to load attendance.
Try again.
```

These states make the application feel complete without adding unnecessary complexity.

---

## 14. Design Priority

Priority order:

1. Working dashboard
2. Dashboard customization
3. Clean navigation
4. Tasks
5. Academic information
6. Backend integration
7. Authentication
8. Mobile version
9. Optional advanced experiments

Do not sacrifice core functionality to add extra features.
