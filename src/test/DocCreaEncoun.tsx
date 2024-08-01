import React, { useCallback, useState } from 'react';
import { Container } from '@ldo/solid';
import { useLdo, useSolidAuth } from '@ldo/solid-react';
import { EncounterShapeType } from "../.ldo/fhir.shapeTypes";
import { v4 } from 'uuid';
import { Button, Container as MuiContainer, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import styles from './DocCreaEncoun.module.css';

interface Props {
  mainContainer: Container;
}

const DocCreaEncoun: React.FC<Props> = ({ mainContainer }) => {
  const { createData, commitData } = useLdo();
  const { session } = useSolidAuth();
  const [showOb, setShowOb] = useState(false);
  const [enUri, setEnUri] = useState<string>();
  const [doctorUrl, setDoctorUrl] = useState<string>('');
  const [encounterDiagnosis, setEncounterDiagnosis] = useState<string>('');
  const [encounterStatus, setEncounterStatus] = useState<string>('finished');

  const createEncounter = useCallback(async () => {
    if (!mainContainer) return;

    const encounterContainer = mainContainer.child("encounter/");
    await encounterContainer.createIfAbsent();

    const id = v4();
    const enResource = encounterContainer.child(`${id}.ttl`);
    const enRe = createData(
      EncounterShapeType,
      enResource.uri,
      enResource
    );

    enRe.EncounterAccount = { "@id": session.webId as string };
    enRe.EncounterParticipant?.push({ "@id": doctorUrl });
    enRe.EncounterIdentifier = id;
    enRe.EncounterDiagnosis = encounterDiagnosis;
    enRe.EncounterStatus = encounterStatus;
    enRe.EncounterStart = "2024-07-16T09:00:00";
    enRe.EncounterEnd = new Date().toISOString();

    const result = await commitData(enRe);
    if (result.isError) {
      alert(result.message);
    } else {
      console.log(`Encounter ${id} created successfully.`);
      setShowOb(true);
      setEnUri(enResource.uri as string);
    }
  }, [mainContainer, createData, commitData, doctorUrl, encounterDiagnosis, encounterStatus, session.webId]);

  return (
    <MuiContainer className={styles.container}>
      <Typography variant="h4" component="h2" gutterBottom>
        Create Encounter
      </Typography>
      <TextField
        label="Encounter Diagnosis"
        variant="outlined"
        fullWidth
        margin="normal"
        value={encounterDiagnosis}
        onChange={(e) => setEncounterDiagnosis(e.target.value)}
      />
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="encounter-status-label">Encounter Status</InputLabel>
        <Select
          labelId="encounter-status-label"
          value={encounterStatus}
          onChange={(e) => setEncounterStatus(e.target.value as string)}
          label="Encounter Status"
        >
          <MenuItem value="finished">Finished</MenuItem>
          <MenuItem value="in-progress">In Progress</MenuItem>
          <MenuItem value="cancelled">Cancelled</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={createEncounter} className={styles.button}>
        Create Encounter
      </Button>
    </MuiContainer>
  );
};

export default DocCreaEncoun;
