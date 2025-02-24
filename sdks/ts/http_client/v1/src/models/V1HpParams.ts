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
    V1HpChoice,
    V1HpChoiceFromJSON,
    V1HpChoiceFromJSONTyped,
    V1HpChoiceToJSON,
    V1HpGeomSpace,
    V1HpGeomSpaceFromJSON,
    V1HpGeomSpaceFromJSONTyped,
    V1HpGeomSpaceToJSON,
    V1HpLinSpace,
    V1HpLinSpaceFromJSON,
    V1HpLinSpaceFromJSONTyped,
    V1HpLinSpaceToJSON,
    V1HpLogNormal,
    V1HpLogNormalFromJSON,
    V1HpLogNormalFromJSONTyped,
    V1HpLogNormalToJSON,
    V1HpLogSpace,
    V1HpLogSpaceFromJSON,
    V1HpLogSpaceFromJSONTyped,
    V1HpLogSpaceToJSON,
    V1HpLogUniform,
    V1HpLogUniformFromJSON,
    V1HpLogUniformFromJSONTyped,
    V1HpLogUniformToJSON,
    V1HpNormal,
    V1HpNormalFromJSON,
    V1HpNormalFromJSONTyped,
    V1HpNormalToJSON,
    V1HpPChoice,
    V1HpPChoiceFromJSON,
    V1HpPChoiceFromJSONTyped,
    V1HpPChoiceToJSON,
    V1HpQLogNormal,
    V1HpQLogNormalFromJSON,
    V1HpQLogNormalFromJSONTyped,
    V1HpQLogNormalToJSON,
    V1HpQLogUniform,
    V1HpQLogUniformFromJSON,
    V1HpQLogUniformFromJSONTyped,
    V1HpQLogUniformToJSON,
    V1HpQNormal,
    V1HpQNormalFromJSON,
    V1HpQNormalFromJSONTyped,
    V1HpQNormalToJSON,
    V1HpQUniform,
    V1HpQUniformFromJSON,
    V1HpQUniformFromJSONTyped,
    V1HpQUniformToJSON,
    V1HpRange,
    V1HpRangeFromJSON,
    V1HpRangeFromJSONTyped,
    V1HpRangeToJSON,
    V1HpUniform,
    V1HpUniformFromJSON,
    V1HpUniformFromJSONTyped,
    V1HpUniformToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1HpParams
 */
export interface V1HpParams {
    /**
     * 
     * @type {V1HpChoice}
     * @memberof V1HpParams
     */
    choice?: V1HpChoice;
    /**
     * 
     * @type {V1HpPChoice}
     * @memberof V1HpParams
     */
    pchoice?: V1HpPChoice;
    /**
     * 
     * @type {V1HpRange}
     * @memberof V1HpParams
     */
    range?: V1HpRange;
    /**
     * 
     * @type {V1HpLinSpace}
     * @memberof V1HpParams
     */
    linspace?: V1HpLinSpace;
    /**
     * 
     * @type {V1HpLogSpace}
     * @memberof V1HpParams
     */
    logspace?: V1HpLogSpace;
    /**
     * 
     * @type {V1HpGeomSpace}
     * @memberof V1HpParams
     */
    geomspace?: V1HpGeomSpace;
    /**
     * 
     * @type {V1HpUniform}
     * @memberof V1HpParams
     */
    uniform?: V1HpUniform;
    /**
     * 
     * @type {V1HpQUniform}
     * @memberof V1HpParams
     */
    quniform?: V1HpQUniform;
    /**
     * 
     * @type {V1HpLogUniform}
     * @memberof V1HpParams
     */
    loguniform?: V1HpLogUniform;
    /**
     * 
     * @type {V1HpQLogUniform}
     * @memberof V1HpParams
     */
    qloguniform?: V1HpQLogUniform;
    /**
     * 
     * @type {V1HpNormal}
     * @memberof V1HpParams
     */
    normal?: V1HpNormal;
    /**
     * 
     * @type {V1HpQNormal}
     * @memberof V1HpParams
     */
    qnormal?: V1HpQNormal;
    /**
     * 
     * @type {V1HpLogNormal}
     * @memberof V1HpParams
     */
    lognormal?: V1HpLogNormal;
    /**
     * 
     * @type {V1HpQLogNormal}
     * @memberof V1HpParams
     */
    qlognormal?: V1HpQLogNormal;
}

export function V1HpParamsFromJSON(json: any): V1HpParams {
    return V1HpParamsFromJSONTyped(json, false);
}

export function V1HpParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'choice': !exists(json, 'choice') ? undefined : V1HpChoiceFromJSON(json['choice']),
        'pchoice': !exists(json, 'pchoice') ? undefined : V1HpPChoiceFromJSON(json['pchoice']),
        'range': !exists(json, 'range') ? undefined : V1HpRangeFromJSON(json['range']),
        'linspace': !exists(json, 'linspace') ? undefined : V1HpLinSpaceFromJSON(json['linspace']),
        'logspace': !exists(json, 'logspace') ? undefined : V1HpLogSpaceFromJSON(json['logspace']),
        'geomspace': !exists(json, 'geomspace') ? undefined : V1HpGeomSpaceFromJSON(json['geomspace']),
        'uniform': !exists(json, 'uniform') ? undefined : V1HpUniformFromJSON(json['uniform']),
        'quniform': !exists(json, 'quniform') ? undefined : V1HpQUniformFromJSON(json['quniform']),
        'loguniform': !exists(json, 'loguniform') ? undefined : V1HpLogUniformFromJSON(json['loguniform']),
        'qloguniform': !exists(json, 'qloguniform') ? undefined : V1HpQLogUniformFromJSON(json['qloguniform']),
        'normal': !exists(json, 'normal') ? undefined : V1HpNormalFromJSON(json['normal']),
        'qnormal': !exists(json, 'qnormal') ? undefined : V1HpQNormalFromJSON(json['qnormal']),
        'lognormal': !exists(json, 'lognormal') ? undefined : V1HpLogNormalFromJSON(json['lognormal']),
        'qlognormal': !exists(json, 'qlognormal') ? undefined : V1HpQLogNormalFromJSON(json['qlognormal']),
    };
}

export function V1HpParamsToJSON(value?: V1HpParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'choice': V1HpChoiceToJSON(value.choice),
        'pchoice': V1HpPChoiceToJSON(value.pchoice),
        'range': V1HpRangeToJSON(value.range),
        'linspace': V1HpLinSpaceToJSON(value.linspace),
        'logspace': V1HpLogSpaceToJSON(value.logspace),
        'geomspace': V1HpGeomSpaceToJSON(value.geomspace),
        'uniform': V1HpUniformToJSON(value.uniform),
        'quniform': V1HpQUniformToJSON(value.quniform),
        'loguniform': V1HpLogUniformToJSON(value.loguniform),
        'qloguniform': V1HpQLogUniformToJSON(value.qloguniform),
        'normal': V1HpNormalToJSON(value.normal),
        'qnormal': V1HpQNormalToJSON(value.qnormal),
        'lognormal': V1HpLogNormalToJSON(value.lognormal),
        'qlognormal': V1HpQLogNormalToJSON(value.qlognormal),
    };
}


