import React from 'react';
import { LeafUri } from '@ldo/solid';
import { useResource ,useLdo } from '@ldo/solid-react';
import { AppointmentShapeType } from "../../.ldo/fhir.shapeTypes";
import styles from './AppointmentCard.module.css';

interface AppointmentCardProps {
  appointmentUri: LeafUri;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointmentUri }) => {
  const { getSubject} = useLdo()
  const appointmentResource = useResource(appointmentUri);  
  const appointment = getSubject(AppointmentShapeType, `${appointmentUri}`);

  return (
    <div className={styles.appointmentCard}>
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
    </div>
  );
};

export default AppointmentCard;
