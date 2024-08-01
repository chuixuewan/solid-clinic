import { ShapeType } from "@ldo/ldo";
import { fhirSchema } from "./fhir.schema";
import { fhirContext } from "./fhir.context";
import {
  Observation,
  Encounter,
  ClinicDoctor,
  MyPatients,
  Patient,
  Practitioner,
  TimeSlot,
  Appointment,
  Address,
  Period,
  Contact,
  ContactPoint,
  Meta,
  Profile,
  Quantity,
  Category,
  Code,
  Coding,
} from "./fhir.typings";

/**
 * =============================================================================
 * LDO ShapeTypes fhir
 * =============================================================================
 */

/**
 * Observation ShapeType
 */
export const ObservationShapeType: ShapeType<Observation> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Observation",
  context: fhirContext,
};

/**
 * Encounter ShapeType
 */
export const EncounterShapeType: ShapeType<Encounter> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Encounter",
  context: fhirContext,
};

/**
 * ClinicDoctor ShapeType
 */
export const ClinicDoctorShapeType: ShapeType<ClinicDoctor> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Clinic_Doctor",
  context: fhirContext,
};

/**
 * MyPatients ShapeType
 */
export const MyPatientsShapeType: ShapeType<MyPatients> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/MyPatients",
  context: fhirContext,
};

/**
 * Patient ShapeType
 */
export const PatientShapeType: ShapeType<Patient> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Patient",
  context: fhirContext,
};

/**
 * Practitioner ShapeType
 */
export const PractitionerShapeType: ShapeType<Practitioner> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Practitioner",
  context: fhirContext,
};

/**
 * TimeSlot ShapeType
 */
export const TimeSlotShapeType: ShapeType<TimeSlot> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/TimeSlot",
  context: fhirContext,
};

/**
 * Appointment ShapeType
 */
export const AppointmentShapeType: ShapeType<Appointment> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Appointment",
  context: fhirContext,
};

/**
 * Address ShapeType
 */
export const AddressShapeType: ShapeType<Address> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Address",
  context: fhirContext,
};

/**
 * Period ShapeType
 */
export const PeriodShapeType: ShapeType<Period> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Period",
  context: fhirContext,
};

/**
 * Contact ShapeType
 */
export const ContactShapeType: ShapeType<Contact> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Contact",
  context: fhirContext,
};

/**
 * ContactPoint ShapeType
 */
export const ContactPointShapeType: ShapeType<ContactPoint> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/ContactPoint",
  context: fhirContext,
};

/**
 * Meta ShapeType
 */
export const MetaShapeType: ShapeType<Meta> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Meta",
  context: fhirContext,
};

/**
 * Profile ShapeType
 */
export const ProfileShapeType: ShapeType<Profile> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Profile",
  context: fhirContext,
};

/**
 * Quantity ShapeType
 */
export const QuantityShapeType: ShapeType<Quantity> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Quantity",
  context: fhirContext,
};

/**
 * Category ShapeType
 */
export const CategoryShapeType: ShapeType<Category> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Category",
  context: fhirContext,
};

/**
 * Code ShapeType
 */
export const CodeShapeType: ShapeType<Code> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Code",
  context: fhirContext,
};

/**
 * Coding ShapeType
 */
export const CodingShapeType: ShapeType<Coding> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/shape/Coding",
  context: fhirContext,
};
