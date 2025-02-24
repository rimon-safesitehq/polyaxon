// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.8.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1FileType
 */
export interface V1FileType {
    /**
     * 
     * @type {string}
     * @memberof V1FileType
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof V1FileType
     */
    filename?: string;
    /**
     * 
     * @type {string}
     * @memberof V1FileType
     */
    chmod?: string;
    /**
     * 
     * @type {string}
     * @memberof V1FileType
     */
    kind?: string;
}

export function V1FileTypeFromJSON(json: any): V1FileType {
    return V1FileTypeFromJSONTyped(json, false);
}

export function V1FileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FileType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : json['content'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'chmod': !exists(json, 'chmod') ? undefined : json['chmod'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
    };
}

export function V1FileTypeToJSON(value?: V1FileType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'filename': value.filename,
        'chmod': value.chmod,
        'kind': value.kind,
    };
}


