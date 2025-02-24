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
    V1ComponentVersion,
    V1ComponentVersionFromJSON,
    V1ComponentVersionFromJSONTyped,
    V1ComponentVersionToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1ListComponentVersionsResponse
 */
export interface V1ListComponentVersionsResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListComponentVersionsResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1ComponentVersion>}
     * @memberof V1ListComponentVersionsResponse
     */
    results?: Array<V1ComponentVersion>;
    /**
     * 
     * @type {string}
     * @memberof V1ListComponentVersionsResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListComponentVersionsResponse
     */
    next?: string;
}

export function V1ListComponentVersionsResponseFromJSON(json: any): V1ListComponentVersionsResponse {
    return V1ListComponentVersionsResponseFromJSONTyped(json, false);
}

export function V1ListComponentVersionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListComponentVersionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1ComponentVersionFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListComponentVersionsResponseToJSON(value?: V1ListComponentVersionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1ComponentVersionToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}


