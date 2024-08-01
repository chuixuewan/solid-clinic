import React, { useEffect, useState } from 'react';
import { ContainerUri, Leaf, Container, LeafUri } from '@ldo/solid';
import {useLdo, useResource, useSolidAuth } from '@ldo/solid-react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import styles from './DataPresent.module.css';
import { ObservationShapeType } from '../.ldo/fhir.shapeTypes';
import ObservationCard from './ObservationCard/ObservationCard';

  
  
  
  
  
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
    componentCode: string;
  }
  interface Props {
    mainContainer: Container;
   
  }


  
  const DataPresent: React.FC<Props> = ({ mainContainer }) => {
    const sessionKey = 'observations';
    const [observations, setObservations] = useState<Observation[]>([]);
  
    useEffect(() => {
        const storedObservations: Observation[] = JSON.parse(sessionStorage.getItem(sessionKey) || '[]');
        storedObservations.sort((a, b) => new Date(a.issued).getTime() - new Date(b.issued).getTime());
        setObservations(storedObservations);
      }, [observations]);
  
    return (
      <div className={styles.container}>
        {mainContainer.children()
          .filter((child) => child.type === 'leaf')
          .map((child) => (
            <ObservationCard
              key={child.uri}
              observationUri={child.uri as LeafUri}
              sessionKey={sessionKey}
            />
          ))}
        {observations.length > 0 ? (
          <div className={styles.chartContainer}>
            <h3 className={styles.chartTitle}>Blood Pressure Over Time</h3>
            <LineChart width={600} height={300} data={observations}>
              <Line type="monotone" dataKey="componentValue" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="issued">
                <Label value="Day" offset={-5} position="insideBottom" />
              </XAxis>
              <YAxis>
                <Label value="mm[Hg]" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Legend />
            </LineChart>
          </div>
        ) : (
          <p className={styles.noDataMessage}>No data available</p>
        )}
      </div>
    );
  };
  
  export default DataPresent;