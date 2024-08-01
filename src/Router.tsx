// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuidePage from './pages/GuidePage';
import RecordPage from './test/testRecord/record'
import TestComponent from './test/testRecord/Querytest';
import ChartTestPage from './test/testRecord/ChartTestPage';
import DoctorListTestPage from './test/testRecord/DocterlistTestPage';
import DoctorListPage from './pages/PatientView/DoctorListPage';
import DoctorDetailPage from './pages/PatientView/DoctorDetailPage';


import { DoctorWrite } from './test/testRecord/DoctorWrite';
import AppointmentListPage from './pages/AppointmentListPage';
import TestViewPage from './pages/PatientView/TestViewPage';
import PatientHomePage from './pages/PatientView/PatientHomePage';
import DoctorHomePage from './pages/DoctorView/DoctorHomePage';
import DoctorProfile from './pages/DoctorView/DoctorProfilePage';
import DoctorTimeSlotsPage from './pages/DoctorView/DoctorTimeSlotsPage';
import HealthRecordPage from './pages/PatientView/HealthRecordPage';
import DocAppListPage from './pages/DoctorView/DocAppListPage';
import DocMyPatientPage from './pages/DoctorView/DocMyPatientPage';
import PatientDetailsPage from './pages/DoctorView/PatientDetailsPage';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuidePage />} />
        <Route path="/profile" element= {<DoctorProfile/>}/>
        <Route path="/patient-home" element={<PatientHomePage />} />
        <Route path="/health-records" element={<HealthRecordPage />} />
        <Route path="/query-test" element={<TestComponent />} />
        <Route path="/chart-test" element={<TestViewPage />} />
        <Route path='/appointments' element={<AppointmentListPage/>}/>
        <Route path="/doctor-home" element={<DoctorHomePage />} />
        <Route path="/docter-test" element={<DoctorListTestPage/>}/>
        <Route path="/doctors" element={<DoctorListPage />} />
        <Route path="/doctor/:id" element={<DoctorDetailPage />} />
        
        <Route path="/doctor-write" element={<DoctorWrite />} />
        <Route path="/doc-my-patient" element={<DocMyPatientPage />} />
        <Route path="/doc-time-slots" element={<DoctorTimeSlotsPage />} />
        <Route path='/doc-appointments' element={<DocAppListPage/>}/>
        <Route path="/doc-patient-details/:webId" element={<PatientDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
