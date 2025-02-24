/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/functions": {
    /** Gets a list of function specification that are available to the user */
    get: operations["getFunctions"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    FunctionListResponse: {
      functions: components["schemas"]["Function"][];
    };
    Function: {
      /** @example FOO */
      name: string;
      signatures?: components["schemas"]["FunctionSignature"][];
      /** @example 1.0.0 */
      dremioVersion?: string;
      functionCategories?: ("AGGREGATE" | "BINARY" | "BOOLEAN" | "BITWISE" | "CHARACTER" | "CONDITIONAL" | "CONTEXT" | "CONVERSION" | "DATETIME" | "DATETYPE" | "DIRECTORY" | "GEOSPATIAL" | "MATH" | "WINDOW")[];
      /** @example Description for the function */
      description?: string;
    };
    FunctionSignature: {
      /** @enum {string} */
      returnType?: "ANY" | "BOOLEAN" | "NUMERIC" | "STRING" | "DATEANDTIME" | "ARRAY" | "STRUCT" | "BYTES" | "CHARACTERS" | "FLOAT" | "DECIMAL" | "DOUBLE" | "INT" | "BIGINT" | "DATE" | "TIME" | "TIMESTAMP";
      parameters?: components["schemas"]["Parameter"][];
      /** @example Description of the signature goes here */
      description?: string;
      sampleCodes?: components["schemas"]["SampleCode"][];
      /** @example FOO(${1|BOTH,LEADING,TRAILING|} ${2:characterSet} FROM ${3:stringToTrim}) */
      snippetOverride?: string;
    };
    Parameter: {
      /** @enum {string} */
      kind?: "REGULAR" | "VARARG" | "OPTIONAL";
      /** @enum {string} */
      type?: "ANY" | "BOOLEAN" | "NUMERIC" | "STRING" | "DATEANDTIME" | "ARRAY" | "STRUCT" | "BYTES" | "CHARACTERS" | "FLOAT" | "DECIMAL" | "DOUBLE" | "INT" | "BIGINT" | "DATE" | "TIME" | "TIMESTAMP";
      /** @example myParameter */
      name?: string;
      /** @example The description of the parameter goes here */
      description?: string;
      /** @example MM-DD-YY */
      format?: string;
    };
    SampleCode: {
      /** @example FOO(42) */
      call?: string;
      /** @example 1337 */
      result?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** Gets a list of function specification that are available to the user */
  getFunctions: {
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["FunctionListResponse"];
        };
      };
    };
  };
}
