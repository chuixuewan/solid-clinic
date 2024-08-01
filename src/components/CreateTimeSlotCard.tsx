import React, { useCallback, useState } from 'react';
import { Container } from '@ldo/solid';
import { useLdo } from '@ldo/solid-react';
import { TimeSlotShapeType } from "../.ldo/fhir.shapeTypes";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Box,
} from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { generate2ByteUUID } from '../utils/tool';

interface CreateTimeSlotCardProps {
  container: Container;
  open: boolean;
  onClose: () => void;
  onSave : () => void;
}

const CreateTimeSlotCard: React.FC<CreateTimeSlotCardProps> = ({ container, open, onClose, onSave }) => {
  const { createData, commitData } = useLdo();
  const [location, setLocation] = useState('');
  const [start, setStart] = useState<Dayjs | null>(dayjs());
  const [end, setEnd] = useState<Dayjs | null>(dayjs());
  
  const uid = generate2ByteUUID();
  
  const handleSave = useCallback(async () => {
    const indexResource = container.child(`${uid}.ttl`);
    const slot = createData(TimeSlotShapeType, indexResource.uri, indexResource);
    
    if (start) slot.start = start.toISOString();
    if (end) slot.end = end.toISOString();
    slot.location = location;
    slot.status = true;
    slot.identifier = uid;

    const result = await commitData(slot);
    if (result.isError) {
      alert(result.message);
    } else {
      onSave();
    }
  }, [commitData, container, start, end, location, uid, createData, onClose]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create Time Slot</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
          <DateTimePicker label="start time" onChange={(newValue) =>{setStart(newValue)} } />
          <DateTimePicker label="end time" onChange={(newValue) =>{setEnd(newValue)} }/>
            <TextField
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="outlined"
              fullWidth
            />
          </Box>
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
      </LocalizationProvider>
  );
};

export default CreateTimeSlotCard;

