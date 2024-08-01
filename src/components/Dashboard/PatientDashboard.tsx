import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardHeader } from '@mui/material';
import styles from './PatientDashboard.module.css';

const PatientDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const cards = [
    { title: 'Doctor', description: 'Discover more about our doctors.', path: '/doctors' },
    { title: 'Test Results', description: 'View your latest test results.', path: '/chart-test' },
    { title: 'Bills', description: 'Check your billing information.', path: '/bills' },
    { title: 'My Appointments', description: 'Manage your appointments.', path: '/appointments' },
    { title: 'Health Record', description: 'View your health records.', path: '/health-records' },
    { title: 'DataWrite Test', description: 'Test', path: '/doctor-write' }
  ];

  return (
    <Container className={styles.dashboardContainer}>
      <Typography variant="h4" component="h2" gutterBottom>
        Patient Dashboard
      </Typography>
      <Grid container spacing={3} className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardActionArea onClick={() => handleCardClick(card.path)}>
              <Card>
                <CardHeader title={card.title} />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PatientDashboard;


