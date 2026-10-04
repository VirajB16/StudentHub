# StudentHub — Technology Stack

## 1. Stack Overview

StudentHub uses a simple full-stack architecture that supports the required Web & Mobile Development laboratory experiments without unnecessary complexity.

```text
React Web Application
        │
        │ REST / JSON
        ▼
Kotlin + Spring Boot Backend
        │
        │ JPA / Hibernate
        ▼
MySQL / PostgreSQL Database
```

Optional mobile client:

```text
Flutter Mobile Application
        │
        │ REST / JSON
        ▼
Same Spring Boot Backend
```

---

## 2. Frontend

### React

**Purpose:** Build the StudentHub web interface using reusable components.

Used for:

- Dashboard
- Sidebar
- Header
- Academic widgets
- Tasks
- Attendance
- Grades
- Timetable
- Examinations
- Notices
- Dashboard customization

### JavaScript

**Purpose:** Application logic and interaction.

Used for:

- State updates
- Form handling
- Dashboard configuration
- API communication
- User interactions

### HTML5

**Purpose:** Structure and semantics.

Used for:

- Forms
- Navigation
- Sections
- Tables
- Lists
- Accessible page structure

### CSS3

**Purpose:** Visual design and responsive layout.

Used for:

- Dashboard grid
- Flexbox layouts
- Cards
- Sidebar
- Responsive behavior
- Theme variables
- Spacing and typography

---

## 3. React Concepts

### Components

Create reusable components such as:

- `Sidebar`
- `Header`
- `Dashboard`
- `WidgetCard`
- `AttendanceWidget`
- `TasksWidget`
- `GradesWidget`
- `TimetableWidget`
- `ExamsWidget`
- `NoticesWidget`

### JSX

Used to define component UI.

### useState

Used for:

- Dashboard customization mode
- Form values
- Task status
- UI state

### useEffect

Used when synchronization or side effects are required, such as loading saved data.

### Context API

Use only where shared state is genuinely required.

Possible shared state:

- Current user
- Dashboard layout
- Theme

Do not put every piece of application state into Context.

---

## 4. Dashboard Layout Technology

Use a stable React-compatible drag-and-drop/grid library.

Requirements:

- Drag widgets
- Reorder widgets
- Optional resize
- Responsive grid
- Simple integration

Do not introduce a large UI framework only for dashboard customization.

If resizing becomes unstable, keep drag-and-drop + hide/show + reset/save as the required customization features.

---

## 5. Backend

### Kotlin

**Purpose:** Backend programming language.

Use Kotlin for:

- Data classes
- Models
- Services
- Collections
- Exception handling
- REST controllers

Keep Kotlin code straightforward and beginner-readable.

### Spring Boot

**Purpose:** Create the backend REST API.

Main responsibilities:

- API endpoints
- Business logic
- Authentication
- Database access
- Validation
- Error handling

Suggested modules:

- Spring Web
- Spring Data JPA
- Spring Security

---

## 6. REST API

StudentHub follows REST-style API design.

### Authentication

```text
POST /api/auth/login
```

### Tasks

```text
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
```

### Academic information

```text
GET /api/attendance
GET /api/grades
GET /api/timetable
GET /api/exams
GET /api/notices
```

### Dashboard

```text
GET  /api/dashboard/layout
PUT  /api/dashboard/layout
POST /api/dashboard/reset
```

Keep the API small. Do not create unnecessary endpoints.

---

## 7. API Testing

### Postman

Use Postman to:

- Send GET requests.
- Send POST requests.
- Send PUT requests.
- Send DELETE requests.
- Check JSON responses.
- Test authentication.
- Demonstrate CRUD operations.

Postman is specifically useful for Experiment 1 and Experiment 8.

---

## 8. Database

Use either:

- MySQL
- PostgreSQL

Choose one and keep the implementation consistent.

### Main entities

```text
User
Task
Attendance
Grade
Timetable
Exam
Notice
DashboardLayout
```

### User

```text
id
name
email
passwordHash
role
```

### Task

```text
id
userId
title
description
dueDate
priority
status
```

### Attendance

```text
id
studentId
subject
attended
conducted
```

### Grade

```text
id
studentId
subject
marks
grade
```

### Timetable

```text
id
studentId
subject
day
startTime
endTime
```

### Exam

```text
id
studentId
subject
date
time
room
```

### Notice

```text
id
title
content
createdAt
```

### DashboardLayout

```text
id
userId
layoutJson
updatedAt
```

---

## 9. JPA / Hibernate

Use Spring Data JPA and Hibernate for ORM.

Purpose:

- Map Kotlin classes to database tables.
- Perform CRUD operations.
- Reduce manual SQL.
- Persist dashboard layout and academic data.

Keep entity relationships simple.

Do not create unnecessary complex relationships.

---

## 10. Authentication

### Spring Security + JWT

Use JWT for basic authentication.

Roles:

```text
STUDENT
ADMIN
```

### Student

Can:

- View own academic information.
- Manage own tasks.
- Customize own dashboard.

### Admin

Keep permissions simple.

Admin can manage selected records such as:

- Notices
- Tasks
- Student records

Do not build a complete administration system.

---

## 11. Mobile Application

### Flutter

**Purpose:** Demonstrate the mobile-development part of the subject.

Use Flutter/Dart to create a simple mobile version.

Recommended screens:

- Login
- Home/Dashboard
- Tasks
- Attendance
- Timetable
- Notices

Do not rebuild every web page in Flutter.

### State Management

Use:

**Provider**

Use it for simple shared application state such as:

- Tasks
- Attendance
- Current user
- Dashboard data

---

## 12. Firebase

Firebase is optional until the core system works.

If required for the advanced experiments, implement only a useful feature such as:

- Firebase Authentication
or
- Firebase Cloud Messaging

Do not add Firebase to every part of the application.

---

## 13. Microservices

For Experiment 9, use the smallest reasonable implementation.

Only two services:

```text
Academic Service
      │
      │ REST
      ▼
Notification Service
```

### Academic Service

Handles academic/task-related operations.

### Notification Service

Handles simple notification-related operations.

Do not create more microservices unless explicitly required.

---

## 14. Deployment

Deployment should be simple.

Possible structure:

```text
React Frontend
      ↓
Static/Web Hosting

Spring Boot Backend
      ↓
Cloud Server / Local Server

Database
      ↓
MySQL/PostgreSQL
```

Do not spend project time on complex infrastructure.

---

## 15. Development Tools

Recommended:

- VS Code
- IntelliJ IDEA / Android Studio where required
- Node.js + npm
- Java/JDK compatible with selected Spring Boot version
- Kotlin
- Spring Boot
- MySQL/PostgreSQL
- Postman
- Git/GitHub
- Flutter SDK
- Android Studio for emulator if required

Use current stable versions compatible with one another.

---

## 16. Experiment-to-Technology Mapping

| Experiment | Main Technology |
|---|---|
| 1. REST API + Postman | Spring Boot REST + Postman |
| 2. React components + JSX | React + JavaScript |
| 3. Hooks + Context + forms | React |
| 4. Kotlin core/OOP | Kotlin |
| 5. Exceptions + collections | Kotlin |
| 6. REST CRUD | Kotlin + Spring Boot |
| 7. ORM/database | JPA + Hibernate + MySQL/PostgreSQL |
| 8. Authentication | Spring Security + JWT + Postman |
| 9. Microservices | Spring Boot + REST |
| 10. Deployment | Spring Boot + web hosting |
| 11. Flutter foundations | Flutter + Dart |
| 12. Flutter state management | Flutter + Provider |

---

## 17. Technology Selection Rules

1. Prefer the simplest stable technology that satisfies the experiment.
2. Do not add a dependency unless it solves a real requirement.
3. Do not replace working libraries without a reason.
4. Keep the project understandable for a beginner.
5. Keep frontend, backend and database responsibilities separate.
6. Reuse the same backend for the Flutter application.
7. Avoid technologies that are not required by the project.
8. Keep the architecture easy to modify during a live demonstration.

---

## 18. Final Architecture

```text
                    ┌──────────────────┐
                    │   React Web App  │
                    └────────┬─────────┘
                             │
                         REST/JSON
                             │
                    ┌────────▼─────────┐
                    │ Kotlin + Spring  │
                    │      Boot        │
                    └────────┬─────────┘
                             │
                         JPA/Hibernate
                             │
                    ┌────────▼─────────┐
                    │ MySQL/PostgreSQL │
                    └──────────────────┘

Optional:
                    ┌──────────────────┐
                    │ Flutter Mobile   │
                    └────────┬─────────┘
                             │
                         REST/JSON
                             │
                       Spring Boot
```

This architecture is intentionally small enough to build, understand, modify and demonstrate.
