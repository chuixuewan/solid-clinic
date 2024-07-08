import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for fhir
 * =============================================================================
 */

/**
 * MetaShape Type
 */
export interface MetaShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  versionId: string;
  lastUpdated: string;
  source: string;
  profile?: string[];
  security?: string[];
  tag?: string[];
}

/**
 * resourceShape Type
 */
export interface resourceShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  id?: string;
  meta?: MetaShape;
  implicitRules?: string;
  language?: string;
}

/**
 * PatientShape Type
 */
export interface PatientShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  active?: boolean;
  name?: string;
  telecom?: string[];
  gender?: string;
  birthDate?: string;
  photo?: {
    "@id": string;
  };
  record?: string;
}
