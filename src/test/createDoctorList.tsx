import React, { useCallback } from 'react';
import { ContainerUri, Container, Leaf, LeafUri } from '@ldo/solid';
import { useLdo } from '@ldo/solid-react';
import { ClinicDoctorShapeType } from "../.ldo/fhir.shapeTypes";
import { v4 } from 'uuid';

interface Props {
  mainContainerUri: ContainerUri;
  doctorWebIds: string[];
}

const CreateDoctorList: React.FC<Props> = ({ mainContainerUri, doctorWebIds }) => {
  const { createData, commitData, getResource } = useLdo();

  const createSlots = useCallback(async () => {
    if (!mainContainerUri) return;

    const mainContainer = getResource(mainContainerUri);
    if (!mainContainer) return;

    for (const docWebId of doctorWebIds) {
      const doctorListContainerResult = await mainContainer.createChildAndOverwrite(
        `${v4()}/`
      );
      if (doctorListContainerResult.isError) {
        alert(doctorListContainerResult.message);
        return;
      }
      const doctorListContainer = doctorListContainerResult.resource;
      const docResource = doctorListContainer.child("index.ttl");
      const doc = createData(
        ClinicDoctorShapeType,
        docResource.uri,
        docResource
      );
      doc.DoctorWebId = docWebId;

      const result = await commitData(doc);
      if (result.isError) {
        alert(result.message);
      } else {
        console.log(`Doc ${docWebId} created successfully.`);
      }
    }
  }, [mainContainerUri, doctorWebIds, createData, commitData, getResource]);

  return (
    <div>
      <button onClick={createSlots}>Create Doctor Slots</button>
    </div>
  );
};

export default CreateDoctorList;
