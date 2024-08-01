import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerUri, LeafUri } from '@ldo/solid';
import { useSubject, useResource, useLdo, useSolidAuth } from '@ldo/solid-react';
import DoctorProfile from '../../components/DoctorProfile';



const DoctorProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { session } = useSolidAuth();
  const { getResource } = useLdo();
  const [mainContainerUri, setMainContainerUri] = useState<ContainerUri | undefined>();
  useEffect(() => {
    if (session.webId) {
      const webIdResource = getResource(session.webId);
      webIdResource.getRootContainer().then((rootContainerResult) => {
        if (rootContainerResult.isError) return;

        const mainContainer = rootContainerResult.child("solid-clinic/profile/");
        setMainContainerUri(mainContainer.uri);
        
            
        
        mainContainer.createIfAbsent();
        
      });
    }
  }, [getResource, session.webId]);

  
    return (
        <div>
        {mainContainerUri && 
        (<DoctorProfile containerUri= {mainContainerUri}/>)}
        </div>
    );
  
};

export default DoctorProfilePage;
