import React, { Fragment, useEffect, useState } from 'react';
import { ContainerUri, Leaf } from '@ldo/solid';
import { useLdo, useResource, useSolidAuth } from '@ldo/solid-react';
import { Container, Typography, Box, Card, CardContent, Grid, Button } from '@mui/material';
import styles from './DoctorTimeSlotsPage.module.css';
import { DoctorTimeSlotCard } from '../../components/DoctorTimeSlotCard';
import CreateTimeSlotCard from '../../components/CreateTimeSlotCard';

const DoctorTimeSlotsPage: React.FC = () => {
  const { session } = useSolidAuth();
  const { getResource } = useLdo();
  const [mainContainerUri, setMainContainerUri] = useState<ContainerUri | undefined>();
  const [open, setOpen] = useState(false);
  const [save, setSave] = useState(false);
  useEffect(() => {
    if (session.webId) {
      const webIdResource = getResource(session.webId);
      webIdResource.getRootContainer().then((rootContainerResult) => {
        if (rootContainerResult.isError) return;

        const mainContainer = rootContainerResult.child("solid-clinic/timeSlots/");
        setMainContainerUri(mainContainer.uri);
        mainContainer.createIfAbsent();
      });
    }
  }, [getResource, session.webId, save]);

  const mainContainer = useResource(mainContainerUri);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    setOpen(false);
    setSave(!save);
  }
 
  return (
    <Container maxWidth="md" className={styles.appointmentListContainer}>
      <Typography variant="h4" component="h2" gutterBottom>
        TimeSlots
      </Typography>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Create Time Slot
        </Button>
      </Box>
      <Grid container spacing={3}>
        {mainContainer?.children().filter((child): child is Leaf => child.type === "leaf")
          .map((child) => (
            <Grid item xs={12} sm={6} md={4} key={child.uri}>
              
                <CardContent className={styles.cardContent}>
                  <DoctorTimeSlotCard key={child.uri} slotUri={child.uri} />
                </CardContent>
            </Grid>
          ))
        }
      </Grid>
      {mainContainer && (
        <CreateTimeSlotCard container={mainContainer} open={open} onClose={handleClose} onSave={handleSave} />
      )}
    </Container>
  );
};

export default DoctorTimeSlotsPage;

