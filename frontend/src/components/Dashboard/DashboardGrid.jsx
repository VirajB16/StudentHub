import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout/legacy';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { useDashboard } from '../../contexts/DashboardContext';

import AttendanceWidget from './AttendanceWidget';
import TasksWidget from './TasksWidget';
import GradesWidget from './GradesWidget';
import TimetableWidget from './TimetableWidget';
import ExamsWidget from './ExamsWidget';
import NoticesWidget from './NoticesWidget';

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardGrid = () => {
  const { layout, updateLayout, visibleWidgets } = useDashboard();

  const widgets = {
    attendance: <AttendanceWidget />,
    tasks: <TasksWidget />,
    grades: <GradesWidget />,
    timetable: <TimetableWidget />,
    exams: <ExamsWidget />,
    notices: <NoticesWidget />
  };

  const filteredLayout = layout.filter(item => visibleWidgets[item.i] !== false);

  const handleLayoutChange = (newLayout) => {
    updateLayout(newLayout);
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: filteredLayout, md: filteredLayout, sm: filteredLayout, xs: filteredLayout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
      cols={{ lg: 12, md: 8, sm: 4, xs: 2 }}
      rowHeight={150}
      isDraggable={true}
      isResizable={true}
      draggableHandle=".widget-header"
      onLayoutChange={handleLayoutChange}
    >
      {filteredLayout.map((item) => (
        <div key={item.i}>
          {widgets[item.i]}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default DashboardGrid;
