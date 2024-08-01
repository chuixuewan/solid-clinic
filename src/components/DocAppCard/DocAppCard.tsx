import React, { useCallback, useState } from 'react';
import { LeafUri } from '@ldo/solid';
import { useResource, useLdo } from '@ldo/solid-react';
import { AppointmentShapeType } from "../../.ldo/fhir.shapeTypes";
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import styles from './DocAppCard.module.css';
import DocgenEn from './DocGenEn';

interface DocAppCardProps {
  appointmentUri: LeafUri;
}

const DocAppCard: React.FC<DocAppCardProps> = ({ appointmentUri }) => {
  const { getSubject } = useLdo();
  const appointmentResource = useResource(appointmentUri);  
  const appointment = getSubject(AppointmentShapeType, `${appointmentUri}`);
  
  const [open, setOpen] = useState(false);

  const handleCardClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const handleConfirm = useCallback(async () => {
  
    setOpen(false);
    await appointmentResource.delete();
  },[appointmentResource])

  return (
    <div>
      <Card className={styles.appointmentCard} onClick={handleCardClick}>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            <div className={styles.appointmentRow}>
              <span>Start:</span> {appointment?.AppointmentStart}
            </div>
            <div className={styles.appointmentRow}>
              <span>End:</span> {appointment?.AppointmentEnd}
            </div>
            <div className={styles.appointmentRow}>
              <span>Location:</span> {appointment?.AppointmentLocation}
            </div>
            <div className={styles.appointmentRow}>
              <span>Patient:</span> {appointment?.AppointmentPatient?.['@id']}
            </div>
            <div className={styles.appointmentRow}>
              <span>Doctor:</span> {appointment?.AppointmentDoctor?.['@id']}
            </div>
          </Typography>
        </CardContent>
      </Card>
      {appointmentResource && open && (
        <DocgenEn appoint={appointment} open={open} onClose={handleClose} onSave ={handleConfirm} />
      )}
    </div>
  );
};

export default DocAppCard;
