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
    V1Statuses,
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Agent
 */
export interface V1Agent {
    /**
     * 
     * @type {string}
     * @memberof V1Agent
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Agent
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Agent
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Agent
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof V1Agent
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1Agent
     */
    namespace?: string;
    /**
     * 
     * @type {object}
     * @memberof V1Agent
     */
    version_api?: object;
    /**
     * 
     * @type {string}
     * @memberof V1Agent
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Agent
     */
    content?: string;
    /**
     * 
     * @type {Date}
     * @memberof V1Agent
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Agent
     */
    updated_at?: Date;
    /**
     * 
     * @type {V1Statuses}
     * @memberof V1Agent
     */
    status?: V1Statuses;
    /**
     * 
     * @type {object}
     * @memberof V1Agent
     */
    settings?: object;
}

export function V1AgentFromJSON(json: any): V1Agent {
    return V1AgentFromJSONTyped(json, false);
}

export function V1AgentFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Agent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'version_api': !exists(json, 'version_api') ? undefined : json['version_api'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'status': !exists(json, 'status') ? undefined : V1StatusesFromJSON(json['status']),
        'settings': !exists(json, 'settings') ? undefined : json['settings'],
    };
}

export function V1AgentToJSON(value?: V1Agent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'disabled': value.disabled,
        'namespace': value.namespace,
        'version_api': value.version_api,
        'version': value.version,
        'content': value.content,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'status': V1StatusesToJSON(value.status),
        'settings': value.settings,
    };
}


