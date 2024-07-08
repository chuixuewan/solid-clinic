import { Schema } from "shexj";

/**
 * =============================================================================
 * fhirSchema: ShexJ Schema for fhir
 * =============================================================================
 */
export const fhirSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "http://hl7.org/fhir/MetaShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/versionId",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/lastUpdated",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/source",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/profile",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/security",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#token",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/tag",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#token",
              },
              min: 0,
              max: -1,
            },
          ],
        },
      },
    },
    {
      id: "http://hl7.org/fhir/resourceShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/id",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/meta",
              valueExpr: "http://hl7.org/fhir/MetaShape",
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/implicitRules",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/language",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#token",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
    {
      id: "http://hl7.org/fhir/PatientShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/active",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#boolean",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/telecom",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/gender",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/birthDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/photo",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/record",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
      },
    },
  ],
};
