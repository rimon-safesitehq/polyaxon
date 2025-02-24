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
    V1Dag,
    V1DagFromJSON,
    V1DagFromJSONTyped,
    V1DagToJSON,
    V1Dask,
    V1DaskFromJSON,
    V1DaskFromJSONTyped,
    V1DaskToJSON,
    V1Flink,
    V1FlinkFromJSON,
    V1FlinkFromJSONTyped,
    V1FlinkToJSON,
    V1Job,
    V1JobFromJSON,
    V1JobFromJSONTyped,
    V1JobToJSON,
    V1MPIJob,
    V1MPIJobFromJSON,
    V1MPIJobFromJSONTyped,
    V1MPIJobToJSON,
    V1PytorchJob,
    V1PytorchJobFromJSON,
    V1PytorchJobFromJSONTyped,
    V1PytorchJobToJSON,
    V1Ray,
    V1RayFromJSON,
    V1RayFromJSONTyped,
    V1RayToJSON,
    V1Service,
    V1ServiceFromJSON,
    V1ServiceFromJSONTyped,
    V1ServiceToJSON,
    V1Spark,
    V1SparkFromJSON,
    V1SparkFromJSONTyped,
    V1SparkToJSON,
    V1TFJob,
    V1TFJobFromJSON,
    V1TFJobFromJSONTyped,
    V1TFJobToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1RunSchema
 */
export interface V1RunSchema {
    /**
     * 
     * @type {V1Job}
     * @memberof V1RunSchema
     */
    job?: V1Job;
    /**
     * 
     * @type {V1Service}
     * @memberof V1RunSchema
     */
    service?: V1Service;
    /**
     * 
     * @type {V1Dag}
     * @memberof V1RunSchema
     */
    dag?: V1Dag;
    /**
     * 
     * @type {V1TFJob}
     * @memberof V1RunSchema
     */
    tfJob?: V1TFJob;
    /**
     * 
     * @type {V1PytorchJob}
     * @memberof V1RunSchema
     */
    pytorchJob?: V1PytorchJob;
    /**
     * 
     * @type {V1MPIJob}
     * @memberof V1RunSchema
     */
    mpiJob?: V1MPIJob;
    /**
     * 
     * @type {V1Dask}
     * @memberof V1RunSchema
     */
    dask?: V1Dask;
    /**
     * 
     * @type {V1Spark}
     * @memberof V1RunSchema
     */
    spark?: V1Spark;
    /**
     * 
     * @type {V1Flink}
     * @memberof V1RunSchema
     */
    flink?: V1Flink;
    /**
     * 
     * @type {V1Ray}
     * @memberof V1RunSchema
     */
    ruy?: V1Ray;
}

export function V1RunSchemaFromJSON(json: any): V1RunSchema {
    return V1RunSchemaFromJSONTyped(json, false);
}

export function V1RunSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'job': !exists(json, 'job') ? undefined : V1JobFromJSON(json['job']),
        'service': !exists(json, 'service') ? undefined : V1ServiceFromJSON(json['service']),
        'dag': !exists(json, 'dag') ? undefined : V1DagFromJSON(json['dag']),
        'tfJob': !exists(json, 'tfJob') ? undefined : V1TFJobFromJSON(json['tfJob']),
        'pytorchJob': !exists(json, 'pytorchJob') ? undefined : V1PytorchJobFromJSON(json['pytorchJob']),
        'mpiJob': !exists(json, 'mpiJob') ? undefined : V1MPIJobFromJSON(json['mpiJob']),
        'dask': !exists(json, 'dask') ? undefined : V1DaskFromJSON(json['dask']),
        'spark': !exists(json, 'spark') ? undefined : V1SparkFromJSON(json['spark']),
        'flink': !exists(json, 'flink') ? undefined : V1FlinkFromJSON(json['flink']),
        'ruy': !exists(json, 'ruy') ? undefined : V1RayFromJSON(json['ruy']),
    };
}

export function V1RunSchemaToJSON(value?: V1RunSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'job': V1JobToJSON(value.job),
        'service': V1ServiceToJSON(value.service),
        'dag': V1DagToJSON(value.dag),
        'tfJob': V1TFJobToJSON(value.tfJob),
        'pytorchJob': V1PytorchJobToJSON(value.pytorchJob),
        'mpiJob': V1MPIJobToJSON(value.mpiJob),
        'dask': V1DaskToJSON(value.dask),
        'spark': V1SparkToJSON(value.spark),
        'flink': V1FlinkToJSON(value.flink),
        'ruy': V1RayToJSON(value.ruy),
    };
}


