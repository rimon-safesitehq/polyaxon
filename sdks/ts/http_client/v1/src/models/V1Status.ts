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
    V1StatusCondition,
    V1StatusConditionFromJSON,
    V1StatusConditionFromJSONTyped,
    V1StatusConditionToJSON,
    V1Statuses,
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Status
 */
export interface V1Status {
    /**
     * 
     * @type {string}
     * @memberof V1Status
     */
    uuid?: string;
    /**
     * 
     * @type {V1Statuses}
     * @memberof V1Status
     */
    status?: V1Statuses;
    /**
     * 
     * @type {Array<V1StatusCondition>}
     * @memberof V1Status
     */
    status_conditions?: Array<V1StatusCondition>;
}

export function V1StatusFromJSON(json: any): V1Status {
    return V1StatusFromJSONTyped(json, false);
}

export function V1StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Status {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'status': !exists(json, 'status') ? undefined : V1StatusesFromJSON(json['status']),
        'status_conditions': !exists(json, 'status_conditions') ? undefined : ((json['status_conditions'] as Array<any>).map(V1StatusConditionFromJSON)),
    };
}

export function V1StatusToJSON(value?: V1Status | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'status': V1StatusesToJSON(value.status),
        'status_conditions': value.status_conditions === undefined ? undefined : ((value.status_conditions as Array<any>).map(V1StatusConditionToJSON)),
    };
}


