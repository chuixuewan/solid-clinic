import React, { useCallback, useState } from 'react';
import { Container, ContainerUri, changeData } from '@ldo/solid';
import { useLdo, useResource, useSolidAuth, useSubject } from '@ldo/solid-react';
import { EncounterShapeType, MyPatientsShapeType } from "../../.ldo/fhir.shapeTypes";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Box,
  DialogContentText,
} from '@mui/material';
import { getStringBeforeProfile } from '../../utils/tool';
import { Appointment } from '../../.ldo/fhir.typings';
import { v4 } from 'uuid';

interface DocGenEnProps {
  appoint: Appointment;
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

const DocGenEn: React.FC<DocGenEnProps> = ({ appoint, open, onClose, onSave }) => {
  const { createData, commitData } = useLdo();
  const { session } = useSolidAuth();
  const patientRootUri = getStringBeforeProfile(appoint.AppointmentPatient["@id"]);
  const patientEncoContainerUri = (patientRootUri + "solid-clinic/encounter/") as ContainerUri;
  const patientEncoContainer = useResource(patientEncoContainerUri);
  const doctorMypatientUri = (getStringBeforeProfile(session.webId as string) + "solid-clinic/myPatient/") as ContainerUri;
  const doctorMypatientContainer = useResource(doctorMypatientUri);
  
  doctorMypatientContainer.createIfAbsent();
  patientEncoContainer.createIfAbsent();
  const MypaIndexResource = doctorMypatientContainer.child(`index.ttl`);
  MypaIndexResource.createIfAbsent();
  const patientList = useSubject(MyPatientsShapeType, MypaIndexResource.uri);
  
  const uid = v4();
  
  const handleSave = useCallback(async () => {
    
    
    const cPatientList = changeData(patientList, MypaIndexResource);
    
    if(!patientList.MyPatients?.includes(appoint.AppointmentPatient))
        cPatientList.MyPatients?.push(appoint.AppointmentPatient)

    const cResult = await commitData(cPatientList);
    if (cResult.isError) 
      {alert(cResult.message);}

    
    const indexResource = patientEncoContainer.child(`${uid}.ttl`);
    const enco = createData(EncounterShapeType, indexResource.uri, indexResource);
    
    enco.EncounterIdentifier = uid;
    enco.EncounterAccount = appoint.AppointmentPatient;
    enco.EncounterParticipant?.push(appoint.AppointmentDoctor);
    enco.EncounterStart = appoint.AppointmentStart;
    enco.EncounterStatus = "in-progress";
     
   
    const result = await commitData(enco);
    if (result.isError) {
      alert(result.message);
    } else {
      onSave();
    }

    

  }, [commitData, createData, onClose, appoint]);

  return (
    
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>create medical record</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to generate a medical record for this appointment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    
  );
};

export default DocGenEn;