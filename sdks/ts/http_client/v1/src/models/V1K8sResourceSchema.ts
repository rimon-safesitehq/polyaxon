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
 * @interface V1K8sResourceSchema
 */
export interface V1K8sResourceSchema {
    /**
     * 
     * @type {string}
     * @memberof V1K8sResourceSchema
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1K8sResourceSchema
     */
    mountPath?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1K8sResourceSchema
     */
    items?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof V1K8sResourceSchema
     */
    defaultMode?: number;
}

export function V1K8sResourceSchemaFromJSON(json: any): V1K8sResourceSchema {
    return V1K8sResourceSchemaFromJSONTyped(json, false);
}

export function V1K8sResourceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1K8sResourceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'mountPath': !exists(json, 'mountPath') ? undefined : json['mountPath'],
        'items': !exists(json, 'items') ? undefined : json['items'],
        'defaultMode': !exists(json, 'defaultMode') ? undefined : json['defaultMode'],
    };
}

export function V1K8sResourceSchemaToJSON(value?: V1K8sResourceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'mountPath': value.mountPath,
        'items': value.items,
        'defaultMode': value.defaultMode,
    };
}


