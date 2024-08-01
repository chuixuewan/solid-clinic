import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSolidAuth, useResource, useLdo } from '@ldo/solid-react';
import { Container, Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { ContainerUri } from '@ldo/solid';

const GuidePage = () => {
  const { session, login, logout } = useSolidAuth();
  const navigate = useNavigate();
  const { getResource } = useLdo();

  const [open, setOpen] = useState(false);
  const [staffCode, setStaffCode] = useState('');


  useEffect(() => {
    const isStaff = sessionStorage.getItem('isStaff');
    const staffCode = sessionStorage.getItem('staffCode');
    
    if (session.isLoggedIn) {
      if (isStaff === 'true' && staffCode === 'doc') {
        navigate('/doctor-home');
      } else if (isStaff === 'false') {
        navigate('/patient-home');
      } else {
        logout();
        navigate('/');
      }
    }
  }, [session.isLoggedIn, navigate, logout]);

  const handleLogin = () => {
    sessionStorage.setItem('isStaff', 'false');
    login('https://solidweb.me');
  };

  const handleStaffLogin = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStaffCodeSubmit = () => {
    sessionStorage.setItem('isStaff', 'true');
    sessionStorage.setItem('staffCode', staffCode);
    setOpen(false);
    login('https://solidweb.me');
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '5rem' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Solid-Clinic
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Your premier solution in the Solid ecosystem.
      </Typography>
      {session.isLoggedIn ? (
        <Typography variant="body1" color="textSecondary">
          Redirecting to home...
        </Typography>
      ) : (
        <>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Please log in to continue and access your personalized dashboard.
          </Typography>
          <Box mt={3}>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<LoginIcon />} 
              onClick={handleLogin}
              style={{ marginRight: '1rem' }}
            >
              Patient Login
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              startIcon={<LoginIcon />} 
              onClick={handleStaffLogin}
            >
              Staff Login
            </Button>
          </Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Staff Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter your StaffCode to continue.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="StaffCode"
                type="text"
                fullWidth
                variant="standard"
                value={staffCode}
                onChange={(e) => setStaffCode(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleStaffCodeSubmit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Container>
  );
};

export default GuidePage;



