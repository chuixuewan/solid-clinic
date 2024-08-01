import React, { useCallback, useState } from 'react';
import { Container, Leaf, LeafUri } from '@ldo/solid';
import { useLdo } from '@ldo/solid-react';
import { PractitionerShapeType, ContactPointShapeType } from "../.ldo/fhir.shapeTypes";
import { ContactPoint } from '../.ldo/fhir.typings';

interface DoctorProfile {
  id: string;
  name: string;
  photo: File | null;
  qualification: string;
  resourseType: string;
  active: boolean;
  contact: {contact_value:string};
}

interface Props {
  mainContainer: Container;
  profile: DoctorProfile;
}

const CreateDoctorProfile: React.FC<Props> = ({ mainContainer, profile }) => {
  const { createData, commitData } = useLdo();
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedPhoto(event.target.files[0]);
    }
  };

  const createProfile = useCallback(async () => {
    if (!mainContainer) return;
   
    const profileContainer = mainContainer.child("profile/");
    await profileContainer.createIfAbsent();
    
    if (profileContainer.isError) {
      console.log("Profile container was not created");
      return;
    }

    let uploadedPhoto: Leaf | undefined;
    let contactEndpoint: ContactPoint | undefined;
    if(selectedPhoto){
      const result = await profileContainer.uploadChildAndOverwrite(
        selectedPhoto.name as LeafUri,
        selectedPhoto,
        selectedPhoto.type

      )
      if(result.isError) {
        alert(result.message);
        await profileContainer.delete();
        return;
      }
      uploadedPhoto = result.resource;
    }

    if(profile.contact.contact_value)
    {
      const result =  await profileContainer.createChildAndOverwrite("contact.ttl");
      if( result.isError) {
        alert(result.message);
        await profileContainer.delete();
        return;
      }
      const contactResource = result.resource;
      const contact = createData(
        ContactPointShapeType,
        contactResource.uri,
        contactResource
      );
      contact.ContactPointValue = profile.contact.contact_value;
      const contactResult = await commitData(contact);
      if(contactResult.isError)
      {
        alert(contactResult.message);
        return;
      }
      contactEndpoint = contact;
    }
    const indexResource = profileContainer.child("index.ttl");
    const doctor = createData(
      PractitionerShapeType,
      indexResource.uri,
      indexResource
    );
    doctor.PractitionerName = [profile.name];
    doctor.PractitionerIdentifier = profile.id;
    doctor.PractitionerActive = profile.active;
    doctor.PractitionerResourceType = profile.resourseType;
    doctor.PractitionerGender = "male";
    if(uploadedPhoto) {
      doctor.PractitionerPhoto = {"@id" : uploadedPhoto.uri};
    }
    if(contactEndpoint)
    {
      doctor.PractitionerTelecom?.push(contactEndpoint);
    }




    const result = await commitData(doctor);
    if (result.isError) {
      alert(result.message);
    } else {
      console.log("Doctor profile created successfully.");
    }
  }, [mainContainer, profile, createData, commitData]);

  return (
    <div>
    <input type="file" onChange={handlePhotoChange} accept="image/*" />
    <button onClick={createProfile}>Create Doctor Profile</button>
  </div>
  );
};

export default CreateDoctorProfile;


