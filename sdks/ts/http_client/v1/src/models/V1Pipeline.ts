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
import {
    V1PipelineKind,
    V1PipelineKindFromJSON,
    V1PipelineKindFromJSONTyped,
    V1PipelineKindToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Pipeline
 */
export interface V1Pipeline {
    /**
     * 
     * @type {string}
     * @memberof V1Pipeline
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Pipeline
     */
    name?: string;
    /**
     * 
     * @type {V1PipelineKind}
     * @memberof V1Pipeline
     */
    kind?: V1PipelineKind;
}

export function V1PipelineFromJSON(json: any): V1Pipeline {
    return V1PipelineFromJSONTyped(json, false);
}

export function V1PipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Pipeline {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'kind': !exists(json, 'kind') ? undefined : V1PipelineKindFromJSON(json['kind']),
    };
}

export function V1PipelineToJSON(value?: V1Pipeline | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'kind': V1PipelineKindToJSON(value.kind),
    };
}


