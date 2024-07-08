// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuidePage from './pages/GuidePage';
import RecordPage from './pages/testRecord/record'
import PatientDashboardPage from './pages/PatientDashboardPage'
import TestComponent from './pages/testRecord/Querytest';
import ChartTestPage from './pages/testRecord/ChartTestPage';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuidePage />} />
        <Route path="/home" element={<PatientDashboardPage />} />
        <Route path="/health-records" element={<RecordPage />} />
        <Route path="/query-test" element={<ChartTestPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
