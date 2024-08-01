import React, { useEffect } from 'react';
import { LeafUri } from '@ldo/solid';
import { useResource, useLdo } from '@ldo/solid-react';
import { ObservationShapeType } from '../../.ldo/fhir.shapeTypes';
interface Observation {
    id: string;
    status:string;
    subject: string;
    encounter: string;
    effectiveDateTime: string;
    issued: string;
    componentValue:number;
    componentUnit: string,
    componentSystem: string,
    componentCode: string
  }
  interface ObservationCardProps {
    observationUri: LeafUri;
    sessionKey: string;
  }
const ObservationCard: React.FC<ObservationCardProps> = ({ observationUri, sessionKey }) => {
    const { getSubject } = useLdo();
    const observationResource = useResource(observationUri);
    const observation = getSubject(ObservationShapeType, `${observationUri}`);
  
    useEffect(() => {
      if (observation) {
        const newObservation = {
          id: observation?.ObservationIdentifier,
          status: observation?.ObservationStatus,
          subject: observation?.ObservationSubject?.['@id'],
          encounter: observation?.ObservationEncounter?.['@id'],
          effectiveDateTime: observation?.ObservationEffectiveDateTime,
          issued: observation?.ObservationIssued,
          componentValue: observation?.ObservationQuantityValue,
          componentUnit: 'mm[Hg]',
          componentSystem: 'http://unitsofmeasure.org',
          componentCode: 'mm[Hg]',
        };
        
        // Store observation in session storage
        const storedObservations = JSON.parse(sessionStorage.getItem(sessionKey) || '[]');
        if (!storedObservations.some((obs: Observation) => obs.id === newObservation.id)) {
          storedObservations.push(newObservation);
          sessionStorage.setItem(sessionKey, JSON.stringify(storedObservations));
        }
      }
    }, [observation, sessionKey]);
  
    return null;
  };
  
  export default ObservationCard;