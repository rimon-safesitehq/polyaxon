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
 * The version of the OpenAPI document: 1.0.95
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
} from './';

/**
 * 
 * @export
 * @interface V1EntityNotificationBody
 */
export interface V1EntityNotificationBody {
    /**
     * 
     * @type {string}
     * @memberof V1EntityNotificationBody
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof V1EntityNotificationBody
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof V1EntityNotificationBody
     */
    project?: string;
    /**
     * 
     * @type {string}
     * @memberof V1EntityNotificationBody
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1EntityNotificationBody
     */
    name?: string;
    /**
     * 
     * @type {V1StatusCondition}
     * @memberof V1EntityNotificationBody
     */
    condition?: V1StatusCondition;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1EntityNotificationBody
     */
    connections?: Array<string>;
}

export function V1EntityNotificationBodyFromJSON(json: any): V1EntityNotificationBody {
    return V1EntityNotificationBodyFromJSONTyped(json, false);
}

export function V1EntityNotificationBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EntityNotificationBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'condition': !exists(json, 'condition') ? undefined : V1StatusConditionFromJSON(json['condition']),
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
    };
}

export function V1EntityNotificationBodyToJSON(value?: V1EntityNotificationBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespace': value.namespace,
        'owner': value.owner,
        'project': value.project,
        'uuid': value.uuid,
        'name': value.name,
        'condition': V1StatusConditionToJSON(value.condition),
        'connections': value.connections,
    };
}


