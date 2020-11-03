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
 * The version of the OpenAPI document: 1.2.2-rc2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1Param,
    V1ParamFromJSON,
    V1ParamFromJSONTyped,
    V1ParamToJSON,
    V1Statuses,
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Hook
 */
export interface V1Hook {
    /**
     * 
     * @type {string}
     * @memberof V1Hook
     */
    hub_ref?: string;
    /**
     * 
     * @type {V1Statuses}
     * @memberof V1Hook
     */
    trigger?: V1Statuses;
    /**
     * 
     * @type {string}
     * @memberof V1Hook
     */
    connection?: string;
    /**
     * 
     * @type {{ [key: string]: V1Param; }}
     * @memberof V1Hook
     */
    params?: { [key: string]: V1Param; };
    /**
     * 
     * @type {object}
     * @memberof V1Hook
     */
    run_patch?: object;
}

export function V1HookFromJSON(json: any): V1Hook {
    return V1HookFromJSONTyped(json, false);
}

export function V1HookFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Hook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hub_ref': !exists(json, 'hub_ref') ? undefined : json['hub_ref'],
        'trigger': !exists(json, 'trigger') ? undefined : V1StatusesFromJSON(json['trigger']),
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'params': !exists(json, 'params') ? undefined : (mapValues(json['params'], V1ParamFromJSON)),
        'run_patch': !exists(json, 'run_patch') ? undefined : json['run_patch'],
    };
}

export function V1HookToJSON(value?: V1Hook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hub_ref': value.hub_ref,
        'trigger': V1StatusesToJSON(value.trigger),
        'connection': value.connection,
        'params': value.params === undefined ? undefined : (mapValues(value.params, V1ParamToJSON)),
        'run_patch': value.run_patch,
    };
}


