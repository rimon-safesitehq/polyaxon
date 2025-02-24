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
 *
 */

import ApiClient from '../ApiClient';
import V1Dag from './V1Dag';
import V1Dask from './V1Dask';
import V1Flink from './V1Flink';
import V1Job from './V1Job';
import V1MPIJob from './V1MPIJob';
import V1PytorchJob from './V1PytorchJob';
import V1Ray from './V1Ray';
import V1Service from './V1Service';
import V1Spark from './V1Spark';
import V1TFJob from './V1TFJob';

/**
 * The V1RunSchema model module.
 * @module model/V1RunSchema
 * @version 1.8.3
 */
class V1RunSchema {
    /**
     * Constructs a new <code>V1RunSchema</code>.
     * @alias module:model/V1RunSchema
     */
    constructor() { 
        
        V1RunSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1RunSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RunSchema} obj Optional instance to populate.
     * @return {module:model/V1RunSchema} The populated <code>V1RunSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RunSchema();

            if (data.hasOwnProperty('job')) {
                obj['job'] = V1Job.constructFromObject(data['job']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = V1Service.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('dag')) {
                obj['dag'] = V1Dag.constructFromObject(data['dag']);
            }
            if (data.hasOwnProperty('tfJob')) {
                obj['tfJob'] = V1TFJob.constructFromObject(data['tfJob']);
            }
            if (data.hasOwnProperty('pytorchJob')) {
                obj['pytorchJob'] = V1PytorchJob.constructFromObject(data['pytorchJob']);
            }
            if (data.hasOwnProperty('mpiJob')) {
                obj['mpiJob'] = V1MPIJob.constructFromObject(data['mpiJob']);
            }
            if (data.hasOwnProperty('dask')) {
                obj['dask'] = V1Dask.constructFromObject(data['dask']);
            }
            if (data.hasOwnProperty('spark')) {
                obj['spark'] = V1Spark.constructFromObject(data['spark']);
            }
            if (data.hasOwnProperty('flink')) {
                obj['flink'] = V1Flink.constructFromObject(data['flink']);
            }
            if (data.hasOwnProperty('ruy')) {
                obj['ruy'] = V1Ray.constructFromObject(data['ruy']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1Job} job
 */
V1RunSchema.prototype['job'] = undefined;

/**
 * @member {module:model/V1Service} service
 */
V1RunSchema.prototype['service'] = undefined;

/**
 * @member {module:model/V1Dag} dag
 */
V1RunSchema.prototype['dag'] = undefined;

/**
 * @member {module:model/V1TFJob} tfJob
 */
V1RunSchema.prototype['tfJob'] = undefined;

/**
 * @member {module:model/V1PytorchJob} pytorchJob
 */
V1RunSchema.prototype['pytorchJob'] = undefined;

/**
 * @member {module:model/V1MPIJob} mpiJob
 */
V1RunSchema.prototype['mpiJob'] = undefined;

/**
 * @member {module:model/V1Dask} dask
 */
V1RunSchema.prototype['dask'] = undefined;

/**
 * @member {module:model/V1Spark} spark
 */
V1RunSchema.prototype['spark'] = undefined;

/**
 * @member {module:model/V1Flink} flink
 */
V1RunSchema.prototype['flink'] = undefined;

/**
 * @member {module:model/V1Ray} ruy
 */
V1RunSchema.prototype['ruy'] = undefined;






export default V1RunSchema;

