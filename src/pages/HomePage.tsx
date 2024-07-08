// src/pages/HomePage.tsx
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSolidAuth } from '@ldo/solid-react';

const HomePage: React.FC = () => {
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
    </div>
  );
};

export default HomePage;


