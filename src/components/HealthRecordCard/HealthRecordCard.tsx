import React from 'react';
import { LeafUri } from '@ldo/solid';
import { useResource ,useLdo } from '@ldo/solid-react';
import {  EncounterShapeType } from "../../.ldo/fhir.shapeTypes";
import styles from './HealthRecordCard.module.css';

interface HealthRecordCardProps {
  healthRecordUri: LeafUri;
}

const HealthRecordCard: React.FC<HealthRecordCardProps> = ({ healthRecordUri }) => {
  const { getSubject} = useLdo()
  const healthRecordResource = useResource(healthRecordUri);  
  const healthRecord = getSubject(EncounterShapeType, healthRecordUri);

  return (
    <div className={styles.heathRecordCard}>
      <div className={styles.heathRecordRow}>
        <span>Doctor:</span> {healthRecord?.EncounterParticipant?.[0]?.['@id']}
      </div>
      <div className={styles.heathRecordRow}>
        <span>status:</span> {healthRecord?.EncounterStatus}
      </div>
    
    </div>
  );
};

export default HealthRecordCard;