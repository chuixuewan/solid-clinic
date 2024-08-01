import { useSolidAuth, useLdo, useResource } from "@ldo/solid-react";
import { Container, ContainerUri } from '@ldo/solid';
import React, { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import CreateDoctorProfile from '../createDoctorProfile';
import CreateTimeSlots from "../../components/createTimeSlots"
import CreateACL from "../createACL"
import CreateDoctorList from "../createDoctorList";
import CreateEncounter from "../createEncounter";

interface DoctorProfile {
  id: string;
  name: string;
  photo: File | null;
  qualification: string;
  resourseType: string;
  active: boolean;
  contact: {contact_value:string};
}


interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  state: boolean;
}

export const DoctorWrite: React.FC = () => {
  const { session } = useSolidAuth();
  const { getResource } = useLdo();
  const [mainContainerUri, setMainContainerUri] = useState<ContainerUri | undefined>();
  const [initialize, setInitialize] = useState(true);

  useEffect(() => {
    if (session.webId) {
      const webIdResource = getResource(session.webId);
      webIdResource.getRootContainer().then((rootContainerResult) => {
        if (rootContainerResult.isError) return;

        const mainContainer = rootContainerResult.child("solid-clinic/");
        mainContainer.createIfAbsent();
        setMainContainerUri(mainContainer.uri);
      });
    }
  }, [getResource, session.webId]);

  const mainContainer = useResource(mainContainerUri);

  const doctorProfile: DoctorProfile = {
    id: session.webId as string,
    name: "Dr. John Doe",
    photo: null, // Replace with an actual File object if you have an image
    qualification: "An experienced general practitioner.",
    active: true,
    resourseType: "doctor",
    contact:{contact_value: "+44 7529334056"}
  };

  const timeSlots: TimeSlot[] = [
    { id: "111", startTime: "2024-07-16T09:00:00", endTime: "2024-07-16T09:30:00", state: true },
    { id: "222", startTime: "2024-07-16T10:00:00", endTime: "2024-07-16T10:30:00", state: true },
  ];

  const docList:  string [] = ["https://solidweb.me/doctorAlice/profile/card#me","https://solidweb.me/DoctorBob/profile/card#me"];

  

  return (
    <div>
      
      {initialize && mainContainer && (
        <>
        
          {/* <CreateDoctorProfile mainContainer={mainContainer} profile={doctorProfile} />
          <CreateTimeSlots mainContainer={mainContainer} doctorId={doctorProfile.id} slots={timeSlots} />
          <CreateACL mainContainer={mainContainer} />
          <CreateDoctorList mainContainerUri={mainContainer.uri} doctorWebIds={docList} />
          <CreateACL mainContainer={mainContainer} /> */}

          <CreateEncounter mainContainer={mainContainer}/>

        </>
      )}
    </div>
  );
};
