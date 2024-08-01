import React, { useEffect, useState } from 'react';
import { ContainerUri, Leaf } from '@ldo/solid';
import { useLdo, useResource, useSolidAuth } from '@ldo/solid-react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import styles from './TestViewPage.module.css';
import { ObservationShapeType } from '../../.ldo/fhir.shapeTypes';
import DataPresent from '../../components/DataPresent';


  
  
  interface Reference {
    reference: string;
  }
  
  interface ValueQuantity {
    value: number;
    unit: string;
    system: string;
    
  }
  
  
  interface Observation {
    id: string;
    status:string;
    subject: Reference;
    encounter: Reference;
    effectiveDateTime: string;
    issued: string;
    component: ValueQuantity;
  }


const TestViewPage: React.FC = () => {
    const { session } = useSolidAuth();
    
    const [showData, setShowData] = useState(false);
    const [observations, setObservations] = useState<Observation[]>([]);
    const [mainContainerUri, setMainContainerUri] = useState<ContainerUri | undefined>();
    const {getResource, getSubject} = useLdo()
    
   
    
  useEffect(() => {
    const fetchMainContainerUri = async () => {
      if (session.webId) {
        const webIdResource = getResource(session.webId);
        const rootContainerResult = await webIdResource.getRootContainer();
        if (rootContainerResult.isError) return;
        
        const mainContainer = rootContainerResult.child("solid-clinic/observation/");
        setMainContainerUri(mainContainer.uri);
        await mainContainer.createIfAbsent();
      }
    };

    fetchMainContainerUri();
  }, [session.webId, getResource]);

   const mainContainer = useResource(mainContainerUri);
    

    return (
        <div className={styles.container}>
          {mainContainer && (<DataPresent mainContainer={mainContainer} />)}
        </div>
      );
      
    };


export default TestViewPage;