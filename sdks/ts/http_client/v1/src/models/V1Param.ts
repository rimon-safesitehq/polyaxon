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
    V1ParamSearch,
    V1ParamSearchFromJSON,
    V1ParamSearchFromJSONTyped,
    V1ParamSearchToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Param
 */
export interface V1Param {
    /**
     * 
     * @type {object}
     * @memberof V1Param
     */
    value?: object;
    /**
     * 
     * @type {string}
     * @memberof V1Param
     */
    ref?: string;
    /**
     * 
     * @type {V1ParamSearch}
     * @memberof V1Param
     */
    search?: V1ParamSearch;
    /**
     * 
     * @type {boolean}
     * @memberof V1Param
     */
    context_only?: boolean;
}

export function V1ParamFromJSON(json: any): V1Param {
    return V1ParamFromJSONTyped(json, false);
}

export function V1ParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Param {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'ref': !exists(json, 'ref') ? undefined : json['ref'],
        'search': !exists(json, 'search') ? undefined : V1ParamSearchFromJSON(json['search']),
        'context_only': !exists(json, 'context_only') ? undefined : json['context_only'],
    };
}

export function V1ParamToJSON(value?: V1Param | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'ref': value.ref,
        'search': V1ParamSearchToJSON(value.search),
        'context_only': value.context_only,
    };
}


