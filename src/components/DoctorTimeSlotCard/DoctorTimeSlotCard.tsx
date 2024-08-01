import React, { useCallback, useEffect, useState } from 'react';
import { LeafUri } from '@ldo/solid';
import { useResource, useSubject, useLdo } from '@ldo/solid-react';
import { TimeSlotShapeType } from "../../.ldo/fhir.shapeTypes";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  TextField,
  Switch,
  FormControlLabel,
  CircularProgress,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatDate } from '../../utils/tool';
import styles from './DoctorTimeSlotCard.module.css';

interface DoctorTimeSlotCardProps {
  slotUri: LeafUri;
}

interface EditingState {
  start: boolean;
  end: boolean;
  location: boolean;
  status: boolean;
}

const DoctorTimeSlotCard: React.FC<DoctorTimeSlotCardProps> = ({ slotUri }) => {
  const slotResource = useResource(slotUri);
  const slot = useSubject(TimeSlotShapeType, slotUri);
  const { changeData, commitData, getResource } = useLdo();
  const [isEditing, setIsEditing] = useState<EditingState>({ start: false, end: false, location: false, status: false });
  const [values, setValues] = useState({
    start: '',
    end: '',
    location: '',
    status: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slot) {
      setValues({
        start: slot.start ? formatDate(slot.start) : '',
        end: slot.end ? formatDate(slot.end) : '',
        location: slot.location || '',
        status: slot.status || false,
      });
      setLoading(false);
    }
  }, [slot]);

  const deleteSlot = useCallback(async () => {
    const dslot = getResource(slotUri);
    await dslot.delete();
  }, [slotUri, getResource]);

  const handleEditToggle = (field: keyof EditingState) => {
    setIsEditing(prevState => ({ ...prevState, [field]: !prevState[field] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof EditingState) => {
    const value = field === 'status' ? e.target.checked : e.target.value;
    setValues(prevValues => ({ ...prevValues, [field]: value }));
  };

  const handleSave = async (field: keyof EditingState) => {
    if (!slot || !slotResource) return;
    const cslot = changeData(slot, slotResource);

    // Update the appropriate field
    switch (field) {
      case 'start':
        cslot.start = values.start;
        break;
      case 'end':
        cslot.end = values.end;
        break;
      case 'location':
        cslot.location = values.location;
        break;
      case 'status':
        cslot.status = values.status;
        break;
      default:
        break;
    }

    const slotResult = await commitData(cslot);
    if (slotResult.isError) {
      alert(slotResult.message);
    } else {
      setValues(prevValues => ({ ...prevValues, [field]: cslot[field] }));
      setIsEditing(prevState => ({ ...prevState, [field]: false }));
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Card className={styles.card}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div">
            {slot?.identifier || 'N/A'}
          </Typography>
          {isEditing.status ? (
            <Box display="flex" alignItems="center">
              <FormControlLabel
                control={
                  <Switch
                    checked={values.status}
                    onChange={(e) => handleChange(e, 'status')}
                    color="primary"
                  />
                }
                label={values.status ? 'Active' : 'Inactive'}
              />
              <IconButton onClick={() => handleSave('status')}>
                <SaveIcon />
              </IconButton>
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              <Typography>{values.status ? 'Active' : 'Inactive'}</Typography>
              <IconButton onClick={() => handleEditToggle('status')}>
                <EditIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="textSecondary">
            Location: {values.location || 'N/A'}
          </Typography>
          {isEditing.location ? (
            <Box display="flex" alignItems="center">
              <TextField
                value={values.location}
                onChange={(e) => handleChange(e as any, 'location')}
                variant="outlined"
                size="small"
              />
              <IconButton onClick={() => handleSave('location')}>
                <SaveIcon />
              </IconButton>
            </Box>
          ) : (
            <IconButton onClick={() => handleEditToggle('location')}>
              <EditIcon />
            </IconButton>
          )}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="textSecondary">
            Start: {values.start || 'N/A'}
          </Typography>
          {isEditing.start ? (
            <Box display="flex" alignItems="center">
              <TextField
                value={values.start}
                onChange={(e) => handleChange(e as any, 'start')}
                variant="outlined"
                size="small"
              />
              <IconButton onClick={() => handleSave('start')}>
                <SaveIcon />
              </IconButton>
            </Box>
          ) : (
            <IconButton onClick={() => handleEditToggle('start')}>
              <EditIcon />
            </IconButton>
          )}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="textSecondary">
            End: {values.end || 'N/A'}
          </Typography>
          {isEditing.end ? (
            <Box display="flex" alignItems="center">
              <TextField
                value={values.end}
                onChange={(e) => handleChange(e as any, 'end')}
                variant="outlined"
                size="small"
              />
              <IconButton onClick={() => handleSave('end')}>
                <SaveIcon />
              </IconButton>
            </Box>
          ) : (
            <IconButton onClick={() => handleEditToggle('end')}>
              <EditIcon />
            </IconButton>
          )}
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center" mt={2}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={deleteSlot}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DoctorTimeSlotCard;



