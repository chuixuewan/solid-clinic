import React, { useState, useCallback,useEffect } from 'react';
import { LeafUri } from '@ldo/solid';
import { useResource, useLdo, useSubject } from '@ldo/solid-react';
import {ContainerUri} from "@ldo/solid"
import { EncounterShapeType, ObservationShapeType } from "../../.ldo/fhir.shapeTypes";
import { TextField, Button, Card, CardContent, Typography,  Grid, Box } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import styles from './DocHealReCard.module.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddTestResult from './AddTestResult';
import { getStringBeforeProfile } from '../../utils/tool';


interface DocHealReCardProps {
  healthRecordUri: LeafUri;
}

const DocHealReCard: React.FC<DocHealReCardProps> = ({ healthRecordUri }) => {
  const { changeData, commitData } = useLdo();
  const healthRecordResource = useResource(healthRecordUri);
  const healthRecord = useSubject(EncounterShapeType, healthRecordUri);
  const [obContainerUri, setObContainerUri] = useState<ContainerUri | undefined>();
  const [encounterEnd, setEncounterEnd] = useState<Dayjs | null>(dayjs());
  const [encounterDiagnosis, setEncounterDiagnosis] = useState(healthRecord?.EncounterDiagnosis || '');
  const [openDialog, setOpenDialog] = useState(false);
  

   useEffect(()=>{
    if(healthRecord&&healthRecord?.EncounterAccount?.['@id'])
    {

         const obConUri = getStringBeforeProfile(healthRecord?.EncounterAccount?.['@id']) +"solid-clinic/observation/" as ContainerUri;
        setObContainerUri(obConUri);
    }

   },[healthRecord]);
  

  const handleConfirm = useCallback(async () => {
    if (!healthRecord) return;
    const chealthRecord = changeData(healthRecord, healthRecordResource);
    if (encounterEnd) chealthRecord.EncounterEnd = encounterEnd?.toISOString();
    chealthRecord.EncounterDiagnosis = encounterDiagnosis;
    chealthRecord.EncounterStatus = "finished";
    const result = await commitData(chealthRecord);
    if (result.isError) {
      alert(result.message);
    }
  }, [commitData, healthRecord, encounterEnd, encounterDiagnosis]);

  const handleAddTestResult = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
 <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Card className={styles.healthRecordCard}>
     
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Health Record
        </Typography>
        <Box mb={2}>
          <Typography variant="body1">
            <strong>Doctor:</strong> {healthRecord?.EncounterParticipant?.[0]?.['@id']}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">
            <strong>Status:</strong> {healthRecord?.EncounterStatus}
          </Typography>
        </Box>
        {healthRecord?.EncounterStatus === 'finished' ? (
          <>
            <Box mb={2}>
              <Typography variant="body1">
                <strong>Identifier:</strong> {healthRecord?.EncounterIdentifier}
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                <strong>Diagnosis:</strong> {healthRecord?.EncounterDiagnosis}
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                <strong>Account:</strong> {healthRecord?.EncounterAccount?.['@id']}
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                <strong>Start:</strong> {healthRecord?.EncounterStart}
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1">
                <strong>End:</strong> {healthRecord?.EncounterEnd}
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <TextField
              label="Encounter Diagnosis"
              variant="outlined"
              fullWidth
              margin="normal"
              value={encounterDiagnosis}
              onChange={(e) => setEncounterDiagnosis(e.target.value)}
            />
           <DateTimePicker label="end time" onChange={(newValue) =>{setEncounterEnd(newValue)} }/>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" color="primary" fullWidth onClick={handleAddTestResult}>
                  Add Test Result
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" color="secondary" fullWidth onClick={handleConfirm}>
                  Confirm
                </Button>
              </Grid>
            </Grid>
           
          </>
        )}
      </CardContent>
      
    </Card>
    {obContainerUri && (
             <AddTestResult encounterUri={healthRecordUri} open={openDialog} onClose={handleCloseDialog} record={healthRecord} containerUri={obContainerUri} />
              )}
</LocalizationProvider>
        
  );
};

export default DocHealReCard;
