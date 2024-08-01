import React, { useCallback,  useEffect,  useState } from 'react';
import { LeafUri, ContainerUri, changeData, GetWacRuleSuccess } from '@ldo/solid';
import { useResource, useSubject, useLdo, useSolidAuth } from '@ldo/solid-react';
import { TimeSlotShapeType, AppointmentShapeType } from "../../.ldo/fhir.shapeTypes";
import styles from './TimeSlotCard.module.css';
import { Practitioner } from '../../.ldo/fhir.typings';
import { generate2ByteUUID, getStringBeforeProfile } from '../../utils/tool';

interface TimeSlotCardProps {
  slotUri: LeafUri;
  doctorWebId: string;
  doctor: Practitioner
}

const TimeSlotCard: React.FC<TimeSlotCardProps> = ({ slotUri, doctorWebId, doctor }) => {

  
  const slotResource = useResource(slotUri);
  const slot = useSubject(TimeSlotShapeType, slotUri);
  const [showAlert, setShowAlert] = useState(false);
  const { createData, commitData } = useLdo();
  const [isActive, setIsActive] = useState(false);
  const { session } = useSolidAuth();
    const patientrootUri= getStringBeforeProfile(session.webId as string) as LeafUri;
    const patientApplicationUri = (patientrootUri + "solid-clinic/") as ContainerUri;
    const patientAppointmentUri = (patientrootUri + "solid-clinic/appointment/") as ContainerUri;
    const patientAppointmentContainer = useResource(patientAppointmentUri);
    const patientApplicationContainer = useResource(patientApplicationUri);
    patientAppointmentContainer.createIfAbsent();

    const doctorRootUri = getStringBeforeProfile(doctorWebId as string) as LeafUri;
    const doctorAppointmentUri = (doctorRootUri + "solid-clinic/appointment/") as ContainerUri;
    const doctorAppointmentContainer = useResource(doctorAppointmentUri);
    doctorAppointmentContainer.createIfAbsent();

    const appId = generate2ByteUUID();
  
    useEffect(() => {
      
        setIsActive(slot?.status);
        
      
    }, [slot]);
  const handleCardClick = () => {
    setShowAlert(true);
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Cancel clicked");
    event.stopPropagation(); // Prevents the click event from bubbling up
    setShowAlert(false);
  };


  const handleConfirm = useCallback(async () => {
    if (!slot) return;


    
    const wacRulesResult = await patientApplicationContainer.getWac()
if (!wacRulesResult.isError) {
  const wacRules  = (wacRulesResult as GetWacRuleSuccess).wacRule;
  if(wacRules.agent[doctorWebId])
    {console.log(wacRules.agent);}
  else{
    const wacRulesSetResult = await patientApplicationContainer.setWac({
      public: {
        read: true,
        write: false,
        append: false,
        control: false
      },
      authenticated: {
        read: true,
        write: true,
        append: true,
        control: true
      },
      agent: {
        [doctorWebId]: {
          read: true,
          write: true,
          append: true,
          control: false
        }
      }
    });
  }
}

    // Update the slot status to false
    const cslot = changeData(slot, slotResource);
    cslot.status = false;
     const slotResult = await commitData(cslot);
      if (slotResult.isError) {
       
       alert(slotResult.message);
      }

      setIsActive(cslot.status);
    //Create Appointment.ttl for patient
    


    const patientAppointmentResource = patientAppointmentContainer.child(`${appId}.ttl`);
     
    const patientAppointment = createData(
      AppointmentShapeType,
      patientAppointmentResource.uri,
      patientAppointmentResource
    )

    patientAppointment.AppointmentIdentifier = appId;
    patientAppointment.AppointmentStart = slot.start;
    patientAppointment.AppointmentEnd =slot.end;
    patientAppointment.AppointmentLocation = slot.location;
    

    patientAppointment.AppointmentDoctor = {"@id": doctorWebId};
    patientAppointment.AppointmentPatient ={"@id": session.webId as string};

    patientAppointment.AppointmentStatus = true;

    const patientResult = await commitData(patientAppointment);
      if (patientResult.isError) {
        alert(patientResult.message);
      }

     
    // Create doctor Appotintment.ttl
   
    const doctorAppointmentResource = doctorAppointmentContainer.child(`${appId}.ttl`);
    const doctorAppointment = createData(
  AppointmentShapeType,
  doctorAppointmentResource.uri,
  doctorAppointmentResource
   );

      doctorAppointment.AppointmentIdentifier = appId;
      doctorAppointment.AppointmentStart = slot.start;
      doctorAppointment.AppointmentEnd = slot.end;
      doctorAppointment.AppointmentLocation = slot.location;

      doctorAppointment.AppointmentDoctor = { "@id": doctorWebId };
      doctorAppointment.AppointmentPatient = { "@id": session.webId as string };

      doctorAppointment.AppointmentStatus = true;     
      const doctorResult = await commitData(doctorAppointment);
            if (doctorResult.isError) {
              alert(doctorResult.message);
            }
   

    setShowAlert(false);
  }, [slot, createData, commitData]);

  if (!slot || !slot.status) {
    // If the slot is not available or the status is false, return null
    return null;
  }

  
  return (
     (isActive ? ( <div className={styles.timeSlotCard} onClick={handleCardClick}>
      <div className={styles.timeSlotRow}>
        <span>Start:</span> {slot?.start}
      </div>
      <div className={styles.timeSlotRow}>
        <span>End:</span> {slot?.end}
      </div>
      <div className={styles.timeSlotRow}>
        <span>Location:</span> {"Southampton"}
      </div>

      {showAlert && (
        <div className={styles.alertOverlay}>
          <div className={styles.alertBox}>
            <p>Do you want to make an appointment with {doctor?.PractitionerName} at {slot?.start} in Southampton?</p>
            <div className={styles.buttonContainer}>
              <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
              <button onClick={handleConfirm} className={styles.confirmButton}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>) : null )
  );
};


export default TimeSlotCard;
