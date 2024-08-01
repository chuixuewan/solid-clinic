import React, { Fragment, useEffect, useState } from 'react';
import {ContainerUri, Leaf } from '@ldo/solid'
import { useLdo, useResource, useSolidAuth } from '@ldo/solid-react';
import styles from '../AppointmentListPage.module.css';
import DocAppCard from '../../components/DocAppCard/DocAppCard';



const DocAppListPage: React.FC = () => {
    const { session } = useSolidAuth();
    const { getResource } = useLdo();
  
    const [mainContainerUri, setMainContainerUri] = useState<ContainerUri | undefined>();
   
    useEffect(() => {
    
      if (session.webId) {
        
        const webIdResource = getResource(session.webId);
        
        
        webIdResource.getRootContainer().then((rootContainerResult) => {
          
          if (rootContainerResult.isError) return;
         
          const mainContainer = rootContainerResult.child("solid-clinic/appointment/");
          setMainContainerUri(mainContainer.uri);
          mainContainer.createIfAbsent();
         
          
        });
      }
    }, [getResource, session.webId]);
  
    const mainContainer = useResource(mainContainerUri);

  return (
    <div className={styles.appointmentListContainer}>
      <h2>Appointments</h2>
      <div className="cards-container">
        {
          mainContainer?.children().filter((child): child is Leaf => child.type === "leaf")
          .map((child) => (
            <Fragment key={child.uri}>
              <DocAppCard key={child.uri} appointmentUri={child.uri} />
            </Fragment>
          ))
        }
      </div>
    </div>
  );
};

export default DocAppListPage;