import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * fhirContext: JSONLD Context for fhir
 * =============================================================================
 */
export const fhirContext: ContextDefinition = {
  ObservationResourceType: {
    "@id": "http://hl7.org/fhir/Observation_resourceType",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  ObservationIdentifier: {
    "@id": "http://hl7.org/fhir/Observation_identifier",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  ObservationMeta: {
    "@id": "http://hl7.org/fhir/Observation_meta",
    "@type": "@id",
  },
  MetaProfile: {
    "@id": "http://hl7.org/fhir/Meta_profile",
    "@type": "@id",
    "@container": "@set",
  },
  ProfileValue: {
    "@id": "http://hl7.org/fhir/Profile_value",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  ObservationStatus: {
    "@id": "http://hl7.org/fhir/Observation_status",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  ObservationPerformer: {
    "@id": "http://hl7.org/fhir/Observation_performer",
    "@type": "@id",
  },
  ObservationCategory: {
    "@id": "http://hl7.org/fhir/Observation_category",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  ObservationCode: {
    "@id": "http://hl7.org/fhir/Observation_code",
    "@type": "@id",
  },
  CodeCoding: {
    "@id": "http://hl7.org/fhir/Code_coding",
    "@type": "@id",
    "@container": "@set",
  },
  CodingSystem: {
    "@id": "http://hl7.org/fhir/Coding_system",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  CodingCode: {
    "@id": "http://hl7.org/fhir/Coding_code",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  CodingDisplay: {
    "@id": "http://hl7.org/fhir/Coding_display",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  CodeText: {
    "@id": "http://hl7.org/fhir/Code_text",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  ObservationSubject: {
    "@id": "http://hl7.org/fhir/Observation_subject",
    "@type": "@id",
  },
  ObservationEncounter: {
    "@id": "http://hl7.org/fhir/Observation_encounter",
    "@type": "@id",
  },
  ObservationEffectiveDateTime: {
    "@id": "http://hl7.org/fhir/Observation_effectiveDateTime",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  ObservationIssued: {
    "@id": "http://hl7.org/fhir/Observation_issued",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  ObservationQuantityValue: {
    "@id": "http://hl7.org/fhir/Observation_quantityValue",
    "@type": "http://www.w3.org/2001/XMLSchema#decimal",
  },
  ObservationQuantityUnit: {
    "@id": "http://hl7.org/fhir/Observation_quantityUnit",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  ObservationQuantitySystem: {
    "@id": "http://hl7.org/fhir/Observation_quantitySystem",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  ObservationQuantityCode: {
    "@id": "http://hl7.org/fhir/Observation_quantityCode",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  EncounterIdentifier: {
    "@id": "http://hl7.org/fhir/Encounter_identifier",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  EncounterStatus: {
    "@id": "http://hl7.org/fhir/Encounter_status",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  EncounterParticipant: {
    "@id": "http://hl7.org/fhir/Encounter_participant",
    "@type": "@id",
    "@container": "@set",
  },
  EncounterDiagnosis: {
    "@id": "http://hl7.org/fhir/Encounter_diagnosis",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  EncounterAccount: {
    "@id": "http://hl7.org/fhir/Encounter_account",
    "@type": "@id",
  },
  EncounterStart: {
    "@id": "http://hl7.org/fhir/Encounter_start",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  EncounterEnd: {
    "@id": "http://hl7.org/fhir/Encounter_end",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  DoctorWebId: {
    "@id": "http://hl7.org/fhir/shape/Doctor_webId",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  MyPatients: {
    "@id": "http://solid-clinic/MyPatients",
    "@type": "@id",
    "@container": "@set",
  },
  PatientResourceType: {
    "@id": "http://hl7.org/fhir/Patient_resourceType",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  PatientIdentifier: {
    "@id": "http://hl7.org/fhir/Patient_identifier",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  PatientActive: {
    "@id": "http://hl7.org/fhir/Patient_active",
    "@type": "http://www.w3.org/2001/XMLSchema#boolean",
  },
  PatientName: {
    "@id": "http://hl7.org/fhir/Patient_name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  PatientTelecom: {
    "@id": "http://hl7.org/fhir/Patient_telecom",
    "@type": "@id",
    "@container": "@set",
  },
  ContactPointValue: {
    "@id": "http://hl7.org/fhir/ContactPoint_value",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  PatientGender: {
    "@id": "http://hl7.org/fhir/Patient_gender",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  PatientBirthDate: {
    "@id": "http://hl7.org/fhir/Patient_birthDate",
    "@type": "http://www.w3.org/2001/XMLSchema#date",
  },
  PatientDeceasedBoolean: {
    "@id": "http://hl7.org/fhir/Patient_deceasedBoolean",
    "@type": "http://www.w3.org/2001/XMLSchema#boolean",
  },
  PatientAddress: {
    "@id": "http://hl7.org/fhir/Patient_address",
    "@type": "@id",
    "@container": "@set",
  },
  AddressUse: {
    "@id": "http://hl7.org/fhir/Address_use",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AddressType: {
    "@id": "http://hl7.org/fhir/Address_type",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AddressText: {
    "@id": "http://hl7.org/fhir/Address_text",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AddressLine: {
    "@id": "http://hl7.org/fhir/Address_line",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  AddressCity: {
    "@id": "http://hl7.org/fhir/Address_city",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AddressDistrict: {
    "@id": "http://hl7.org/fhir/Address_district",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AddressState: {
    "@id": "http://hl7.org/fhir/Address_state",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AddressPostalCode: {
    "@id": "http://hl7.org/fhir/Address_postalCode",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AddressCountry: {
    "@id": "http://hl7.org/fhir/Address_country",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AddressPeriod: {
    "@id": "http://hl7.org/fhir/Address_period",
    "@type": "@id",
  },
  PeriodStart: {
    "@id": "http://hl7.org/fhir/Period_start",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  PeriodEnd: {
    "@id": "http://hl7.org/fhir/Period_end",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  PatientPhoto: {
    "@id": "http://hl7.org/fhir/Patient_photo",
    "@type": "@id",
  },
  PatientContact: {
    "@id": "http://hl7.org/fhir/Patient_contact",
    "@type": "@id",
    "@container": "@set",
  },
  ContactName: {
    "@id": "http://hl7.org/fhir/Contact_name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  ContactTelecom: {
    "@id": "http://hl7.org/fhir/Contact_telecom",
    "@type": "@id",
    "@container": "@set",
  },
  ContactAddress: {
    "@id": "http://hl7.org/fhir/Contact_address",
    "@type": "@id",
  },
  ContactGender: {
    "@id": "http://hl7.org/fhir/Contact_gender",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  PatientGeneralPractitioner: {
    "@id": "http://hl7.org/fhir/Patient_generalPractitioner",
    "@type": "@id",
    "@container": "@set",
  },
  PatientManagingOrganization: {
    "@id": "http://hl7.org/fhir/Patient_managingOrganization",
    "@type": "@id",
  },
  PractitionerResourceType: {
    "@id": "http://hl7.org/fhir/Practitioner_resourceType",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  PractitionerIdentifier: {
    "@id": "http://hl7.org/fhir/Practitioner_identifier",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  PractitionerActive: {
    "@id": "http://hl7.org/fhir/Practitioner_active",
    "@type": "http://www.w3.org/2001/XMLSchema#boolean",
  },
  PractitionerName: {
    "@id": "http://hl7.org/fhir/Practitioner_name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  PractitionerTelecom: {
    "@id": "http://hl7.org/fhir/Practitioner_telecom",
    "@type": "@id",
    "@container": "@set",
  },
  PractitionerGender: {
    "@id": "http://hl7.org/fhir/Practitioner_gender",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  PractitionerPhoto: {
    "@id": "http://hl7.org/fhir/Practitioner_photo",
    "@type": "@id",
  },
  PractitionerQualification: {
    "@id": "http://hl7.org/fhir/Practitioner_qualification",
    "@type": "@id",
  },
  identifier: {
    "@id": "http://hl7.org/fhir/identifier",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  status: {
    "@id": "http://hl7.org/fhir/status",
    "@type": "http://www.w3.org/2001/XMLSchema#boolean",
  },
  start: {
    "@id": "http://hl7.org/fhir/start",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  end: {
    "@id": "http://hl7.org/fhir/end",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  location: {
    "@id": "http://hl7.org/fhir/location",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  release: {
    "@id": "http://hl7.org/fhir/release",
    "@type": "@id",
  },
  book: {
    "@id": "http://hl7.org/fhir/book",
    "@type": "@id",
  },
  AppointmentIdentifier: {
    "@id": "http://hl7.org/fhir/Appointment_identifier",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AppointmentStatus: {
    "@id": "http://hl7.org/fhir/Appointment_status",
    "@type": "http://www.w3.org/2001/XMLSchema#boolean",
  },
  AppointmentStart: {
    "@id": "http://hl7.org/fhir/Appointment_start",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  AppointmentEnd: {
    "@id": "http://hl7.org/fhir/Appointment_end",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  AppointmentLocation: {
    "@id": "http://hl7.org/fhir/Appointment_location",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  AppointmentPatient: {
    "@id": "http://hl7.org/fhir/Appointment_patient",
    "@type": "@id",
  },
  AppointmentDoctor: {
    "@id": "http://hl7.org/fhir/Appointment_doctor",
    "@type": "@id",
  },
  QuantityValue: {
    "@id": "http://hl7.org/fhir/Quantity_value",
    "@type": "http://www.w3.org/2001/XMLSchema#decimal",
  },
  QuantityUnit: {
    "@id": "http://hl7.org/fhir/Quantity_unit",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  QuantitySystem: {
    "@id": "http://hl7.org/fhir/Quantity_system",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  QuantityCode: {
    "@id": "http://hl7.org/fhir/Quantity_code",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  CategoryCoding: {
    "@id": "http://hl7.org/fhir/Category_coding",
    "@type": "@id",
    "@container": "@set",
  },
};
