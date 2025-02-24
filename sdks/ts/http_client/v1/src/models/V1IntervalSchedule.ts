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
 * @interface V1IntervalSchedule
 */
export interface V1IntervalSchedule {
    /**
     * 
     * @type {string}
     * @memberof V1IntervalSchedule
     */
    kind?: string;
    /**
     * 
     * @type {Date}
     * @memberof V1IntervalSchedule
     */
    startAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1IntervalSchedule
     */
    endAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof V1IntervalSchedule
     */
    maxRuns?: number;
    /**
     * 
     * @type {number}
     * @memberof V1IntervalSchedule
     */
    frequency?: number;
    /**
     * 
     * @type {boolean}
     * @memberof V1IntervalSchedule
     */
    dependsOnPast?: boolean;
}

export function V1IntervalScheduleFromJSON(json: any): V1IntervalSchedule {
    return V1IntervalScheduleFromJSONTyped(json, false);
}

export function V1IntervalScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IntervalSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'startAt': !exists(json, 'startAt') ? undefined : (new Date(json['startAt'])),
        'endAt': !exists(json, 'endAt') ? undefined : (new Date(json['endAt'])),
        'maxRuns': !exists(json, 'maxRuns') ? undefined : json['maxRuns'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
        'dependsOnPast': !exists(json, 'dependsOnPast') ? undefined : json['dependsOnPast'],
    };
}

export function V1IntervalScheduleToJSON(value?: V1IntervalSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'startAt': value.startAt === undefined ? undefined : (value.startAt.toISOString()),
        'endAt': value.endAt === undefined ? undefined : (value.endAt.toISOString()),
        'maxRuns': value.maxRuns,
        'frequency': value.frequency,
        'dependsOnPast': value.dependsOnPast,
    };
}


