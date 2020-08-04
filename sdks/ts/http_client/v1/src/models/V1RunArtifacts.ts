// Copyright 2018-2020 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.1.6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1RunArtifact,
    V1RunArtifactFromJSON,
    V1RunArtifactFromJSONTyped,
    V1RunArtifactToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1RunArtifacts
 */
export interface V1RunArtifacts {
    /**
     * 
     * @type {Array<V1RunArtifact>}
     * @memberof V1RunArtifacts
     */
    artifacts?: Array<V1RunArtifact>;
}

export function V1RunArtifactsFromJSON(json: any): V1RunArtifacts {
    return V1RunArtifactsFromJSONTyped(json, false);
}

export function V1RunArtifactsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunArtifacts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'artifacts': !exists(json, 'artifacts') ? undefined : ((json['artifacts'] as Array<any>).map(V1RunArtifactFromJSON)),
    };
}

export function V1RunArtifactsToJSON(value?: V1RunArtifacts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'artifacts': value.artifacts === undefined ? undefined : ((value.artifacts as Array<any>).map(V1RunArtifactToJSON)),
    };
}


