import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Card,
  CardContent,
  Grid,
  Box,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from './DoctorDashboard.module.css';

const DoctorDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className={styles.dashboardContainer}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Doctor Dashboard
          </Typography>
          <IconButton edge="end" color="inherit" onClick={handleProfileClick}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box p={3}>
        <Grid container spacing={3} className={styles.cardsContainer}>
          <Grid item xs={12} md={4}>
            <Box onClick={() => handleCardClick('/doc-time-slots')} className={`${styles.card} ${styles.cardTimeSlots}`}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    TimeSlots
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manage your time slots.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box onClick={() => handleCardClick('/doc-appointments')} className={`${styles.card} ${styles.cardAppointments}`}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    My Appointments
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manage your appointments.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box onClick={() => handleCardClick('/doc-my-patient')} className={`${styles.card} ${styles.cardPatients}`}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    My Patients
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    View your patients.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DoctorDashboard;

