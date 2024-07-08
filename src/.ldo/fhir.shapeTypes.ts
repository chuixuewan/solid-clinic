import { ShapeType } from "@ldo/ldo";
import { fhirSchema } from "./fhir.schema";
import { fhirContext } from "./fhir.context";
import { MetaShape, resourceShape, PatientShape } from "./fhir.typings";

/**
 * =============================================================================
 * LDO ShapeTypes fhir
 * =============================================================================
 */

/**
 * MetaShape ShapeType
 */
export const MetaShapeShapeType: ShapeType<MetaShape> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/MetaShape",
  context: fhirContext,
};

/**
 * resourceShape ShapeType
 */
export const resourceShapeShapeType: ShapeType<resourceShape> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/resourceShape",
  context: fhirContext,
};

/**
 * PatientShape ShapeType
 */
export const PatientShapeShapeType: ShapeType<PatientShape> = {
  schema: fhirSchema,
  shape: "http://hl7.org/fhir/PatientShape",
  context: fhirContext,
};
