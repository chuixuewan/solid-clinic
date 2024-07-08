import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './PatientDashboard.module.css';

const PatientDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2>Patient Dashboard</h2>
      <div className={styles.cardsContainer}>
        <div onClick={() => handleCardClick('/doctors')}>
          <Card title="Doctor" description="Discover more about our doctors." />
        </div>
        <div onClick={() => handleCardClick('/test-results')}>
          <Card title="Test Results" description="View your latest test results." />
        </div>
        <div onClick={() => handleCardClick('/bills')}>
          <Card title="Bills" description="Check your billing information." />
        </div>
        <div onClick={() => handleCardClick('/appointments')}>
          <Card title="My Appointments" description="Manage your appointments." />
        </div>
        <div onClick={() => handleCardClick('/health-records')}>
          <Card title="Health Record" description="View your health records." />
        </div>
        <div onClick={() => handleCardClick('/query-test')}>
          <Card title="Query Test" description=" Query Test " />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;

