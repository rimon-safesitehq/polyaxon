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
/**
 * 
 * @export
 * @interface V1ProjectSettings
 */
export interface V1ProjectSettings {
    /**
     * 
     * @type {string}
     * @memberof V1ProjectSettings
     */
    artifacts_store?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    connections?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1ProjectSettings
     */
    run_profile?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    run_profiles?: Array<string>;
}

export function V1ProjectSettingsFromJSON(json: any): V1ProjectSettings {
    return V1ProjectSettingsFromJSONTyped(json, false);
}

export function V1ProjectSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ProjectSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'artifacts_store': !exists(json, 'artifacts_store') ? undefined : json['artifacts_store'],
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
        'run_profile': !exists(json, 'run_profile') ? undefined : json['run_profile'],
        'run_profiles': !exists(json, 'run_profiles') ? undefined : json['run_profiles'],
    };
}

export function V1ProjectSettingsToJSON(value?: V1ProjectSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'artifacts_store': value.artifacts_store,
        'connections': value.connections,
        'run_profile': value.run_profile,
        'run_profiles': value.run_profiles,
    };
}


