import React, { useCallback, useState } from 'react';
import { ContainerUri, LeafUri } from '@ldo/solid';
import { useLdo, useResource } from '@ldo/solid-react';
import { ObservationShapeType } from "../../.ldo/fhir.shapeTypes";
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
import { v4 } from 'uuid';
import { Encounter } from '../../.ldo/fhir.typings';
import { getSimpleDate } from '../../utils/tool';
interface AddTestResultProps {
  containerUri: ContainerUri;
  open: boolean;
  onClose: () => void;
  record: Encounter;
  encounterUri: LeafUri;
}

const AddTestResult: React.FC<AddTestResultProps> = ({encounterUri, record, containerUri , open, onClose }) => {
  const { createData, commitData } = useLdo();

  
  const testContainer = useResource(containerUri);

  const [quantityValue, setQuantityValue] = useState<string | undefined>();
  const [quantityUnit, setQuantityUnit] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();
  const uid = v4();
  
  
  const handleAddTestResult = useCallback(async () => {
    const obResource = testContainer.child(`${uid}.ttl`);
    const ob = createData(ObservationShapeType, obResource.uri, obResource);
    ob.ObservationIdentifier = uid;
    ob.ObservationIssued = getSimpleDate();
    if(quantityValue)
    ob.ObservationQuantityValue =Number(quantityValue);
    if(quantityUnit)
    ob.ObservationQuantityUnit = quantityUnit;
    if(category)
    ob.ObservationCategory = category;        
    if(record?.EncounterParticipant?.[0])
    ob.ObservationPerformer = record?.EncounterParticipant?.[0];
    ob.ObservationSubject = record.EncounterAccount;
    ob.ObservationStatus = "finished";
    ob.ObservationEncounter = {"@id":encounterUri};
    

    const result = await commitData(ob);
    if (result.isError) {
      alert(result.message);
    } else {
      onClose();
    }

     
     
  },[quantityValue,quantityUnit,category]);

  const handleCloseDialog = () => {
    onClose();
  }

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Add Test Result</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the test result details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Observation Category"
            type="text"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Observation Quantity Value"
            type="number"
            fullWidth
            value={quantityValue}
            onChange={(e) => setQuantityValue(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Observation Quantity Unit"
            type="text"
            fullWidth
            value={quantityUnit}
            onChange={(e) => setQuantityUnit(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTestResult} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default AddTestResult;