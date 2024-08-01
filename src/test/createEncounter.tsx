import React, { useCallback, useState } from 'react';
import { Container, Leaf, LeafUri } from '@ldo/solid';
import { useLdo, useSolidAuth } from '@ldo/solid-react';
import { EncounterShapeType } from "../.ldo/fhir.shapeTypes";
import CreateObservations from "./createObservation";
import { v4 } from 'uuid';

interface Props {
    mainContainer: Container;
    
    
  }

  const CreateEncounter: React.FC<Props> = ({ mainContainer }) => {
    const { createData, commitData } = useLdo();
    const { session } = useSolidAuth(); 
    const [showOb, setShowOb] = useState(false);
    const [enUri, setEnUri] = useState<string>();
    const createEncounter = useCallback(async () => {
      if (!mainContainer) return;
  
      const encounterContainer = mainContainer.child("encounter/");
      await encounterContainer.createIfAbsent();
       
     
        const id =v4();
        const enResource = encounterContainer.child(`${id}.ttl`);
        const enRe = createData(
          EncounterShapeType,
          enResource.uri,
          enResource
        );
        enRe.EncounterAccount = {"@id":session.webId as string};
        enRe.EncounterParticipant?.push({"@id":"https://solidweb.me/doctorAlice/profile/card#me"});
        enRe.EncounterIdentifier = id;
        enRe.EncounterDiagnosis = "Some conclusion based on observations";
        enRe.EncounterStatus = "finished";
        enRe.EncounterStart = "2024-07-16T09:00:00";
        enRe.EncounterEnd = new Date().toISOString();
        
        
        const result = await commitData(enRe);
        if (result.isError) {
          alert(result.message);
        } else {
          console.log(`enCounter ${ id } created successfully.`);
          setShowOb(true);
          setEnUri(enResource.uri as string);

        }
      
    }, [mainContainer, createData, commitData]);
  
    return (
   <div> 
      <div>
        <button onClick={createEncounter}>Create encounter</button>
      </div>
      { showOb && (
        <CreateObservations mainContainer={mainContainer} encounterUri={enUri as string} />
      )}
    </div> 
    );
  };
  
  export default CreateEncounter;
