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

import type { CatalogObjectMethods } from "./CatalogObject.js";
import type { CatalogReference } from "./CatalogReference.js";
import type { Grantee } from "./Grantee.js";

export type FolderProperties = {
  createdAt: Date;
  /**
   * @deprecated
   */
  id: string;
  path: string[];
};

export type FolderMethods = {
  children(): {
    data(): AsyncGenerator<CatalogReference>;
  };
} & CatalogObjectMethods;

export type Folder = FolderProperties & FolderMethods;

export type EnterpriseFolderMethods = {
  grants(): Promise<{
    availablePrivileges: string[];
    grants: { grantee: Grantee; privileges: string[] }[];
  }>;
};

export type EnterpriseFolder = Folder & EnterpriseFolderMethods;
