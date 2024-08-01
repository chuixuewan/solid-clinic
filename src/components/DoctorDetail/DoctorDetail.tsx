import React , {Fragment, useEffect, useMemo} from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { ContainerUri, LeafUri, Leaf  } from '@ldo/solid';
import { useSubject, useResource, useLdo } from '@ldo/solid-react';
import { PractitionerShapeType, ContactPointShapeType } from "../../.ldo/fhir.shapeTypes";
import { TimeSlotCard } from '../TimeSlotCard';
import styles from './DoctorDetail.module.css';
import { getStringBeforeProfile } from '../../utils/tool';



const DoctorDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getResource } = useLdo();

  // Retrieve webId from location state or sessionStorage
 
  const webId = (location.state as { webId: string } | null)?.webId || sessionStorage.getItem('webId');

  useEffect(() => {
    if (webId) {
      // Store webId in sessionStorage if it exists
      sessionStorage.setItem('webId', webId);
    } else {
      // Redirect to homepage if webId is not found
      navigate('/');
    }
  }, [webId, navigate]);

  const rootUri = getStringBeforeProfile(webId as string) + "solid-clinic/" as ContainerUri;
  const mainContainer = getResource(rootUri);
  const profileContainer = mainContainer.child("profile/");
  const profileIndexUri = `${profileContainer.uri}index.ttl`;

  const ProfileIndexResource = useResource(profileIndexUri);
  const doctor = useSubject(PractitionerShapeType, profileIndexUri);
  const photoResource = useResource(doctor?.PractitionerPhoto?.['@id'] as LeafUri | undefined);
  
  const contactUri = doctor?.PractitionerTelecom?.[0]?.['@id'] as LeafUri | undefined;
   const contactResource = useResource(contactUri);
   const docContact = useSubject(ContactPointShapeType, contactUri);
   const timeSlotContainer = mainContainer.child("timeSlots/");
   const slotsUri = timeSlotContainer.uri;
   const slotsResource = useResource(slotsUri);
   
   const blobUrl = useMemo(() => {
    if (photoResource && photoResource.isBinary()) {
      return URL.createObjectURL(photoResource.getBlob()!);
    }
    return undefined;
  }, [photoResource]);
  


  return (
    <div className={styles.doctorDetailContainer}>
      <div className={styles.doctorInfo}>
        {blobUrl && (
          <img src={blobUrl} className={styles.doctorPhoto} alt="Doctor Photo" />
        )} 
         <div className={styles.doctorDescription}>
          <h3>{doctor?.PractitionerName || 'Doctor'}</h3>
          <h4>{ docContact?.ContactPointValue ||'112233'}</h4>
          <p>{ 'No description available.'}</p>
        </div>
      </div>
      <div className={styles.timeSlotsContainer}>
        <h4>Available Time Slots</h4>
        <div className={styles.cardsContainer}>
          {slotsResource?.children().filter((child) => child.type === "leaf")
            .map((child) => (
              <Fragment key={child.uri}>
                <TimeSlotCard key={child.uri} slotUri={child.uri as LeafUri} doctor={doctor} doctorWebId={webId as string} />
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
