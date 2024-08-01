import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, CircularProgress, Box } from '@mui/material';
import { useLdo, useResource } from '@ldo/solid-react';
import { getStringBeforeProfile } from '../../utils/tool';
import { ContainerUri, Leaf } from '@ldo/solid';
import DocHealReCard from '../../components/HealthRecordCard/DocHealReCard';

const PatientDetailsPage: React.FC = () => {
  const { webId } = useParams<{ webId: string }>();
  const { getResource } = useLdo();

  // Retrieve the base URI for the patient's encounters
  const rootUri = getStringBeforeProfile(webId as string) + "solid-clinic/encounter/" as ContainerUri;
  const mainContainer = useResource(rootUri);
  console.log(mainContainer.uri);
  if (!mainContainer) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Patient Details
      </Typography>
      <Grid container spacing={3}>
        {mainContainer
          ?.children()
          .filter((child): child is Leaf => child.type === "leaf")
          .map((child) => {
            
            return (
              <Grid item xs={12} sm={6} md={4} key={child.uri}>
                <DocHealReCard healthRecordUri={child.uri} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
  
};

export default PatientDetailsPage;

