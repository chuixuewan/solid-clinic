import React, { Fragment, useState } from 'react';

import { DoctorCard } from '../../components/DoctorCard';
import {  useResource } from "@ldo/solid-react";
import {  Container } from "@ldo/solid"  


const DoctorListPage: React.FC = () => {
  
  const clinicUri = "https://solidweb.me/SolidClinic1/solid-clinic/";
  
  const mainContainer = useResource(clinicUri);
  return (
    <div>
      <h2>Doctor List</h2>
      <div className="cards-container">
        {mainContainer
          ?.children()
          .filter((child): child is Container => child.type === "container")
          .map((child, idx) => (
          
            <Fragment key={child.uri}> 
            <DoctorCard key={child.uri} doctorUri={child.uri} index={idx} />
           </Fragment>))
        }
      </div>
    </div>
  );
};

export default DoctorListPage;
