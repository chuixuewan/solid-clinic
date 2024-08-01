import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerUri, LeafUri, } from '@ldo/solid';
import { useSubject, useResource, useLdo, useSolidAuth } from '@ldo/solid-react';
import { PractitionerShapeType, ContactPointShapeType } from "../.ldo/fhir.shapeTypes";
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import styles from './DoctorProfile.module.css';

interface DoctorProfileProps {
    containerUri: ContainerUri;
  }

const DoctorProfile: React.FC<DoctorProfileProps> = ({containerUri}) => {
  
  
  const profileIndexUri = `${containerUri}index.ttl`;
  const ProfileIndexResource = useResource(profileIndexUri);
  const doctor = useSubject(PractitionerShapeType, profileIndexUri);
  const photoResource = useResource(doctor?.PractitionerPhoto?.['@id'] as LeafUri | undefined);
  const contactUri = doctor?.PractitionerTelecom?.[0]?.['@id'] as LeafUri | undefined;
  const contactResource = useResource(contactUri);
  const docContact = useSubject(ContactPointShapeType, contactUri);

  const blobUrl = useMemo(() => {
    if (photoResource && photoResource.isBinary()) {
      return URL.createObjectURL(photoResource.getBlob()!);
    }
    return undefined;
  }, [photoResource]);

  return (
    <Container maxWidth="sm" className={styles.doctorDetailContainer}>
      <Card>
        {blobUrl && (
          <CardMedia
            component="img"
            height="200"
            image={blobUrl}
            alt="Doctor Photo"
          />
        )}
        <CardContent>
          <Typography variant="h5" component="div">
            {doctor?.PractitionerName || 'Doctor'}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {docContact?.ContactPointValue || '112233'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            No description available.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DoctorProfile;
