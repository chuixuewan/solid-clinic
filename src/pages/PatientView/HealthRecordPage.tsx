import React, { Fragment, useEffect, useState } from 'react';
import {ContainerUri, Leaf } from '@ldo/solid'
import { useLdo, useResource, useSolidAuth } from '@ldo/solid-react';
import HealthRecordCard from '../../components/HealthRecordCard/HealthRecordCard';



const HealRecordPage: React.FC = () => {
    const { session } = useSolidAuth();
    const { getResource } = useLdo();
  
    const [mainContainerUri, setMainContainerUri] = useState<ContainerUri | undefined>();
   
    useEffect(() => {
    
      if (session.webId) {
        
        const webIdResource = getResource(session.webId);
        
        
        webIdResource.getRootContainer().then((rootContainerResult) => {
          
          if (rootContainerResult.isError) return;
         
          const mainContainer = rootContainerResult.child("solid-clinic/encounter/");
          setMainContainerUri(mainContainer.uri);
          mainContainer.createIfAbsent();
         
          
        });
      }
    }, [getResource, session.webId]);
  
    const mainContainer = useResource(mainContainerUri);

  return (
    <div >
      <h2>HealthRecord</h2>
      <div className="cards-container">
        {
          mainContainer?.children().filter((child): child is Leaf => child.type === "leaf")
          .map((child) => (
            <Fragment key={child.uri}>
              < HealthRecordCard
          key={child.uri} healthRecordUri={child.uri} />
            </Fragment>
          ))
        }
      </div>
    </div>
  );
};

export default HealRecordPage;