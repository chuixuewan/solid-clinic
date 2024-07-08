import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * fhirContext: JSONLD Context for fhir
 * =============================================================================
 */
export const fhirContext: ContextDefinition = {
  versionId: {
    "@id": "http://hl7.org/fhir/versionId",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  lastUpdated: {
    "@id": "http://hl7.org/fhir/lastUpdated",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  source: {
    "@id": "http://hl7.org/fhir/source",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  profile: {
    "@id": "http://hl7.org/fhir/profile",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
    "@container": "@set",
  },
  security: {
    "@id": "http://hl7.org/fhir/security",
    "@type": "http://www.w3.org/2001/XMLSchema#token",
    "@container": "@set",
  },
  tag: {
    "@id": "http://hl7.org/fhir/tag",
    "@type": "http://www.w3.org/2001/XMLSchema#token",
    "@container": "@set",
  },
  id: {
    "@id": "http://hl7.org/fhir/id",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  meta: {
    "@id": "http://hl7.org/fhir/meta",
    "@type": "@id",
  },
  implicitRules: {
    "@id": "http://hl7.org/fhir/implicitRules",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  language: {
    "@id": "http://hl7.org/fhir/language",
    "@type": "http://www.w3.org/2001/XMLSchema#token",
  },
  active: {
    "@id": "http://hl7.org/fhir/active",
    "@type": "http://www.w3.org/2001/XMLSchema#boolean",
  },
  name: {
    "@id": "http://hl7.org/fhir/name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  telecom: {
    "@id": "http://hl7.org/fhir/telecom",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  gender: {
    "@id": "http://hl7.org/fhir/gender",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  birthDate: {
    "@id": "http://hl7.org/fhir/birthDate",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  photo: {
    "@id": "http://hl7.org/fhir/photo",
    "@type": "@id",
  },
  record: {
    "@id": "http://hl7.org/fhir/record",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
};
