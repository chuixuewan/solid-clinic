import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  ContainerUri } from '@ldo/solid';
import { useResource, useSubject } from '@ldo/solid-react';
import { ClinicDoctorShapeType } from "../../.ldo/fhir.shapeTypes";
import styles from './DoctorCard.module.css';


interface DoctorCardProps {
  doctorUri: ContainerUri;
  index: number
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctorUri,index }) => {
  const navigate = useNavigate();
  const docIndexUri = `${doctorUri}index.ttl`;
  const docResource = useResource(docIndexUri);
  const doctor = useSubject(ClinicDoctorShapeType, docIndexUri);
  


 
  
  const handleCardClick = () => {
    navigate(`/doctor/${index}`, { state: { webId: doctor?.DoctorWebId } });
  };

  return (
    <div className={styles.doctorCard} onClick={handleCardClick}>
      <h3 className={styles.doctorCardTitle}>{doctor.DoctorWebId}</h3>
    </div>
  );

};

export default DoctorCard;

