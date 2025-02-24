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
    ProtobufAny,
    ProtobufAnyFromJSON,
    ProtobufAnyFromJSONTyped,
    ProtobufAnyToJSON,
} from './';

/**
 * 
 * @export
 * @interface RuntimeError
 */
export interface RuntimeError {
    /**
     * 
     * @type {string}
     * @memberof RuntimeError
     */
    error?: string;
    /**
     * 
     * @type {number}
     * @memberof RuntimeError
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof RuntimeError
     */
    message?: string;
    /**
     * 
     * @type {Array<ProtobufAny>}
     * @memberof RuntimeError
     */
    details?: Array<ProtobufAny>;
}

export function RuntimeErrorFromJSON(json: any): RuntimeError {
    return RuntimeErrorFromJSONTyped(json, false);
}

export function RuntimeErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ProtobufAnyFromJSON)),
    };
}

export function RuntimeErrorToJSON(value?: RuntimeError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'code': value.code,
        'message': value.message,
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ProtobufAnyToJSON)),
    };
}


