/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { CatalogObjectMethods } from "../../interfaces/CatalogObject.js";
import { FileCatalogReference } from "./CatalogReference.js";
import { pathString } from "./utils.js";

export class File implements CatalogObjectMethods {
  readonly catalogReference: FileCatalogReference;
  /**
   * @deprecated
   */
  readonly id: string;
  /**
   * @deprecated
   */
  readonly path: string[];
  constructor(properties: any) {
    this.catalogReference = properties.catalogReference;
    this.id = properties.id;
    this.path = properties.path;
  }

  /**
   * @deprecated
   */
  get name() {
    return this.path[this.path.length - 1]!;
  }

  /**
   * @deprecated
   */
  pathString = pathString(() => this.path);

  /**
   * @deprecated
   */
  get referenceType() {
    return "FILE" as const;
  }

  static fromResource(properties: any, retrieve: any) {
    return new File({
      catalogReference: new FileCatalogReference({
        id: properties.id,
        path: properties.path,
      }),
      id: properties.id,
      path: properties.path,
    });
  }
}
