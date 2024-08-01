import React, { useCallback } from 'react';
import { Container } from '@ldo/solid';
import { useLdo, useSolidAuth } from '@ldo/solid-react';
import { ObservationShapeType } from "../.ldo/fhir.shapeTypes";
import { generate2ByteUUID, generateRandomIntegers  } from '../utils/tool';
import { v4 } from 'uuid';

interface Coding {
    code: string;
    display: string;
  }
  
  interface Category {
    coding: Coding[];
  }
  
  interface Reference {
    reference: string;
  }
  
  interface ValueQuantity {
    value: number;
    unit: string;
    system: string;
    code: string;
  }
  
  interface Code {
    text: string;
  }
  
  interface Component {
    code: Code;
    valueQuantity: ValueQuantity;
  }
  
  interface Meta {
    profile: string[];
  }
  
  interface Observation {
    resourceType: string;
    id: string;
    meta: Meta;
    status: string;
    category: Category[];
    subject: Reference;
    encounter: Reference;
    effectiveDateTime: string;
    issued: string;
    component: Component[];
  }

  interface Props {
    mainContainer: Container;
    encounterUri: string;
    
    
  }

  const CreateObservations: React.FC<Props> = ({ mainContainer, encounterUri }) => {
    const { createData, commitData } = useLdo();
    const { session } = useSolidAuth(); 
    const randomData = generateRandomIntegers(50,90,10);
    const randomDates: string[] = [
      "2024-07-02",
      "2024-07-03",
      "2024-07-04",
      "2024-07-05",
      "2024-07-06",
      "2024-07-07",
      "2024-07-08",
      "2024-07-09",
      "2024-07-10",
      "2024-07-11",
    ];
    const createObservations = useCallback(async () => {
      if (!mainContainer) return;
  
      const observationContainer = mainContainer.child("observation/");
      await observationContainer.createIfAbsent();
       
      for (let i = 0; i < randomData.length; i++) {
        const id =v4();
        const obResource = observationContainer.child(`${id}.ttl`);
        const obRe = createData(
          ObservationShapeType,
          obResource.uri,
          obResource
        );
        obRe.ObservationIdentifier = id;
        obRe.ObservationIssued = randomDates[i];
        obRe.ObservationQuantityValue = randomData[i];
        obRe.ObservationPerformer = {"@id":"https://solidweb.me/doctorAlice/profile/card#me"};
        obRe.ObservationSubject = {"@id": session.webId as string};
        obRe.ObservationStatus = "finished";
        obRe.ObservationEncounter = {"@id" : encounterUri };
        
        
        const result = await commitData(obRe);
        if (result.isError) {
          alert(result.message);
        } else {
          console.log(`observation ${ id } created successfully.`);
        }
      }
    }, [mainContainer, createData, commitData]);
  
    return (
      <div>
        <button onClick={createObservations}>Create ovservations</button>
      </div>
    );
  };
  
  export default CreateObservations;

