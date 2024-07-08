import React ,{ useCallback } from 'react';
import PatientDashboard from '../components/Dashboard/PatientDashboard';
import { useNavigate } from 'react-router-dom';
import { useSolidAuth } from '@ldo/solid-react';
const PatientDashboardPage: React.FC = () => {

    const { session, logout } = useSolidAuth();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await logout();
    navigate('/');
  }, [logout, navigate]);

  return (
    
    <div>
       <h1>Login successful! Welcome to the Home Page</h1>
      <p>You are logged in with the webId: {session.webId}</p>
      <button onClick={handleLogout}>Log Out</button> 
      <PatientDashboard />
    </div>
  );
};

export default PatientDashboardPage;
