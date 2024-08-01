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
      id: "http://hl7.org/fhir/shape/Observation",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_resourceType",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_identifier",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_meta",
              valueExpr: "http://hl7.org/fhir/shape/Meta",
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_status",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_performer",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_category",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_code",
              valueExpr: "http://hl7.org/fhir/shape/Code",
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_subject",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_encounter",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_effectiveDateTime",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_issued",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_quantityValue",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#decimal",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_quantityUnit",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_quantitySystem",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Observation_quantityCode",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Encounter",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Encounter_identifier",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Encounter_status",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Encounter_participant",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Encounter_diagnosis",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Encounter_account",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Encounter_start",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Encounter_end",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Clinic_Doctor",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://hl7.org/fhir/shape/Doctor_webId",
          valueExpr: {
            type: "NodeConstraint",
            datatype: "http://www.w3.org/2001/XMLSchema#string",
          },
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/MyPatients",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://solid-clinic/MyPatients",
          valueExpr: {
            type: "NodeConstraint",
            nodeKind: "iri",
          },
          min: 0,
          max: -1,
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Patient",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_resourceType",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_identifier",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_active",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#boolean",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_telecom",
              valueExpr: "http://hl7.org/fhir/shape/ContactPoint",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_gender",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_birthDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#date",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_deceasedBoolean",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#boolean",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_address",
              valueExpr: "http://hl7.org/fhir/shape/Address",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_photo",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_contact",
              valueExpr: "http://hl7.org/fhir/shape/Contact",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_generalPractitioner",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Patient_managingOrganization",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Practitioner",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Practitioner_resourceType",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Practitioner_identifier",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Practitioner_active",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#boolean",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Practitioner_name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Practitioner_telecom",
              valueExpr: "http://hl7.org/fhir/shape/ContactPoint",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Practitioner_gender",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Practitioner_photo",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Practitioner_qualification",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/TimeSlot",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/identifier",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/status",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#boolean",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/start",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/end",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/location",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/release",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/book",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Appointment",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Appointment_identifier",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Appointment_status",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#boolean",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Appointment_start",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Appointment_end",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Appointment_location",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Appointment_patient",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Appointment_doctor",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Address",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_use",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_text",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_line",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_city",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_district",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_state",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_postalCode",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_country",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Address_period",
              valueExpr: "http://hl7.org/fhir/shape/Period",
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Period",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Period_start",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Period_end",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Contact",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Contact_name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Contact_telecom",
              valueExpr: "http://hl7.org/fhir/shape/ContactPoint",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Contact_address",
              valueExpr: "http://hl7.org/fhir/shape/Address",
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Contact_gender",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/ContactPoint",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://hl7.org/fhir/ContactPoint_value",
          valueExpr: {
            type: "NodeConstraint",
            datatype: "http://www.w3.org/2001/XMLSchema#string",
          },
          min: 0,
          max: 1,
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Meta",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://hl7.org/fhir/Meta_profile",
          valueExpr: "http://hl7.org/fhir/shape/Profile",
          min: 0,
          max: -1,
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Profile",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://hl7.org/fhir/Profile_value",
          valueExpr: {
            type: "NodeConstraint",
            datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
          },
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Quantity",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Quantity_value",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#decimal",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Quantity_unit",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Quantity_system",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              min: 0,
              max: 1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Quantity_code",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Category",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://hl7.org/fhir/Category_coding",
          valueExpr: "http://hl7.org/fhir/shape/Coding",
          min: 0,
          max: -1,
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Code",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Code_coding",
              valueExpr: "http://hl7.org/fhir/shape/Coding",
              min: 0,
              max: -1,
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Code_text",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
    {
      id: "http://hl7.org/fhir/shape/Coding",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Coding_system",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Coding_code",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://hl7.org/fhir/Coding_display",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
            },
          ],
        },
        closed: true,
      },
    },
  ],
};
