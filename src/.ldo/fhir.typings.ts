import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for fhir
 * =============================================================================
 */

/**
 * Observation Type
 */
export interface Observation {
  "@id"?: string;
  "@context"?: ContextDefinition;
  ObservationResourceType: string;
  ObservationIdentifier: string;
  ObservationMeta?: Meta;
  ObservationStatus: string;
  ObservationPerformer: {
    "@id": string;
  };
  ObservationCategory: string;
  ObservationCode: Code;
  ObservationSubject: {
    "@id": string;
  };
  ObservationEncounter: {
    "@id": string;
  };
  ObservationEffectiveDateTime: string;
  ObservationIssued: string;
  ObservationQuantityValue: number;
  ObservationQuantityUnit: string;
  ObservationQuantitySystem?: string;
  ObservationQuantityCode?: string;
}

/**
 * Encounter Type
 */
export interface Encounter {
  "@id"?: string;
  "@context"?: ContextDefinition;
  EncounterIdentifier: string;
  EncounterStatus: string;
  EncounterParticipant?: {
    "@id": string;
  }[];
  EncounterDiagnosis: string;
  EncounterAccount: {
    "@id": string;
  };
  EncounterStart: string;
  EncounterEnd: string;
}

/**
 * ClinicDoctor Type
 */
export interface ClinicDoctor {
  "@id"?: string;
  "@context"?: ContextDefinition;
  DoctorWebId: string;
}

/**
 * MyPatients Type
 */
export interface MyPatients {
  "@id"?: string;
  "@context"?: ContextDefinition;
  MyPatients?: {
    "@id": string;
  }[];
}

/**
 * Patient Type
 */
export interface Patient {
  "@id"?: string;
  "@context"?: ContextDefinition;
  PatientResourceType: string;
  PatientIdentifier: string;
  PatientActive?: boolean;
  PatientName?: string[];
  PatientTelecom?: ContactPoint[];
  PatientGender: string;
  PatientBirthDate?: string;
  PatientDeceasedBoolean?: boolean;
  PatientAddress?: Address[];
  PatientPhoto?: {
    "@id": string;
  };
  PatientContact?: Contact[];
  PatientGeneralPractitioner?: {
    "@id": string;
  }[];
  PatientManagingOrganization?: {
    "@id": string;
  };
}

/**
 * Practitioner Type
 */
export interface Practitioner {
  "@id"?: string;
  "@context"?: ContextDefinition;
  PractitionerResourceType: string;
  PractitionerIdentifier: string;
  PractitionerActive?: boolean;
  PractitionerName?: string[];
  PractitionerTelecom?: ContactPoint[];
  PractitionerGender: string;
  PractitionerPhoto?: {
    "@id": string;
  };
  PractitionerQualification?: {
    "@id": string;
  };
}

/**
 * TimeSlot Type
 */
export interface TimeSlot {
  "@id"?: string;
  "@context"?: ContextDefinition;
  identifier: string;
  status: boolean;
  start: string;
  end: string;
  location: string;
  release: {
    "@id": string;
  };
  book?: {
    "@id": string;
  };
}

/**
 * Appointment Type
 */
export interface Appointment {
  "@id"?: string;
  "@context"?: ContextDefinition;
  AppointmentIdentifier: string;
  AppointmentStatus: boolean;
  AppointmentStart: string;
  AppointmentEnd: string;
  AppointmentLocation: string;
  AppointmentPatient: {
    "@id": string;
  };
  AppointmentDoctor: {
    "@id": string;
  };
}

/**
 * Address Type
 */
export interface Address {
  "@id"?: string;
  "@context"?: ContextDefinition;
  AddressUse?: string;
  AddressType?: string;
  AddressText?: string;
  AddressLine?: string[];
  AddressCity?: string;
  AddressDistrict?: string;
  AddressState?: string;
  AddressPostalCode?: string;
  AddressCountry?: string;
  AddressPeriod?: Period;
}

/**
 * Period Type
 */
export interface Period {
  "@id"?: string;
  "@context"?: ContextDefinition;
  PeriodStart?: string;
  PeriodEnd?: string;
}

/**
 * Contact Type
 */
export interface Contact {
  "@id"?: string;
  "@context"?: ContextDefinition;
  ContactName?: string;
  ContactTelecom?: ContactPoint[];
  ContactAddress?: Address;
  ContactGender?: string;
}

/**
 * ContactPoint Type
 */
export interface ContactPoint {
  "@id"?: string;
  "@context"?: ContextDefinition;
  ContactPointValue?: string;
}

/**
 * Meta Type
 */
export interface Meta {
  "@id"?: string;
  "@context"?: ContextDefinition;
  MetaProfile?: Profile[];
}

/**
 * Profile Type
 */
export interface Profile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  ProfileValue: string;
}

/**
 * Quantity Type
 */
export interface Quantity {
  "@id"?: string;
  "@context"?: ContextDefinition;
  QuantityValue: number;
  QuantityUnit?: string;
  QuantitySystem?: string;
  QuantityCode?: string;
}

/**
 * Category Type
 */
export interface Category {
  "@id"?: string;
  "@context"?: ContextDefinition;
  CategoryCoding?: Coding[];
}

/**
 * Code Type
 */
export interface Code {
  "@id"?: string;
  "@context"?: ContextDefinition;
  CodeCoding?: Coding[];
  CodeText?: string;
}

/**
 * Coding Type
 */
export interface Coding {
  "@id"?: string;
  "@context"?: ContextDefinition;
  CodingSystem: string;
  CodingCode: string;
  CodingDisplay?: string;
}
