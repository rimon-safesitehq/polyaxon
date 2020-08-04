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
    V1OptimizationMetric,
    V1OptimizationMetricFromJSON,
    V1OptimizationMetricFromJSONTyped,
    V1OptimizationMetricToJSON,
    V1OptimizationResource,
    V1OptimizationResourceFromJSON,
    V1OptimizationResourceFromJSONTyped,
    V1OptimizationResourceToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Hyperband
 */
export interface V1Hyperband {
    /**
     * 
     * @type {string}
     * @memberof V1Hyperband
     */
    kind?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof V1Hyperband
     */
    params?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof V1Hyperband
     */
    max_iterations?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Hyperband
     */
    eta?: number;
    /**
     * 
     * @type {V1OptimizationResource}
     * @memberof V1Hyperband
     */
    resource?: V1OptimizationResource;
    /**
     * 
     * @type {V1OptimizationMetric}
     * @memberof V1Hyperband
     */
    metric?: V1OptimizationMetric;
    /**
     * 
     * @type {boolean}
     * @memberof V1Hyperband
     */
    resume?: boolean;
    /**
     * 
     * @type {number}
     * @memberof V1Hyperband
     */
    seed?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Hyperband
     */
    concurrency?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1Hyperband
     */
    early_stopping?: Array<object>;
}

export function V1HyperbandFromJSON(json: any): V1Hyperband {
    return V1HyperbandFromJSONTyped(json, false);
}

export function V1HyperbandFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Hyperband {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'max_iterations': !exists(json, 'max_iterations') ? undefined : json['max_iterations'],
        'eta': !exists(json, 'eta') ? undefined : json['eta'],
        'resource': !exists(json, 'resource') ? undefined : V1OptimizationResourceFromJSON(json['resource']),
        'metric': !exists(json, 'metric') ? undefined : V1OptimizationMetricFromJSON(json['metric']),
        'resume': !exists(json, 'resume') ? undefined : json['resume'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'early_stopping': !exists(json, 'early_stopping') ? undefined : json['early_stopping'],
    };
}

export function V1HyperbandToJSON(value?: V1Hyperband | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'params': value.params,
        'max_iterations': value.max_iterations,
        'eta': value.eta,
        'resource': V1OptimizationResourceToJSON(value.resource),
        'metric': V1OptimizationMetricToJSON(value.metric),
        'resume': value.resume,
        'seed': value.seed,
        'concurrency': value.concurrency,
        'early_stopping': value.early_stopping,
    };
}


