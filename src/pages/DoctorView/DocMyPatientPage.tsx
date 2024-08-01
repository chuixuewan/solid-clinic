import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLdo, useResource, useSolidAuth, useSubject } from "@ldo/solid-react";
import { Container, LeafUri } from '@ldo/solid';
import { MyPatientsShapeType } from '../../.ldo/fhir.shapeTypes';
import { Card, CardActionArea, CardContent, Typography, Container as MuiContainer, Grid } from '@mui/material';

const DoctorListPage: React.FC = () => {
  const { session } = useSolidAuth();
  const { getResource } = useLdo();
  const [indexResourceUri, setIndexResourceUri] = useState<LeafUri | undefined>();
  const iResource = useResource(indexResourceUri);
  const patientList = useSubject(MyPatientsShapeType, indexResourceUri);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (session.webId) {
      const webIdResource = getResource(session.webId);
      webIdResource.getRootContainer().then((rootContainerResult) => {
        if (rootContainerResult.isError) return;
        const indexResource = rootContainerResult.child("solid-clinic/myPatient/index.ttl");
        indexResource.createIfAbsent();
        setIndexResourceUri(indexResource.uri);
      });
    }
  }, [getResource, session.webId, patientList]);
  
  const handleCardClick = (webId: string) => {
    navigate(`/doc-patient-details/${encodeURIComponent(webId)}`);
  };

  return (
    <MuiContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        Patient List
      </Typography>
      <Grid container spacing={3}>
        {patientList?.MyPatients?.map((member: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(member["@id"])}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {member.name || `Patient ${index + 1}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member["@id"]}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MuiContainer>
  );
};

export default DoctorListPage;
