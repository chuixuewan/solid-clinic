// src/pages/GuidePage.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSolidAuth } from "@ldo/solid-react";

const GuidePage = () => {
  const {session, login} = useSolidAuth();

  const navigate = useNavigate();

  useEffect (() => {
    if(session.isLoggedIn){
        navigate('/home');
    }
  }, [session.isLoggedIn, navigate])

  const handleLogin = () => {
    const issuer = prompt('Enter your Solid Issuer', 'https://solidweb.me');
    if (!issuer) return;
    login(issuer);
  };

  
  return (
    <div>
      <h1>Welcome to the Hospital Management System</h1>
      {session.isLoggedIn ? (
        <p>Redirecting to home...</p>
      ) : (
        <>
          <p>Please login to continue</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default GuidePage;

