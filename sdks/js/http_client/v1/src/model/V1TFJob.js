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
import V1CleanPodPolicy from './V1CleanPodPolicy';
import V1KFReplica from './V1KFReplica';

/**
 * The V1TFJob model module.
 * @module model/V1TFJob
 * @version 1.8.3
 */
class V1TFJob {
    /**
     * Constructs a new <code>V1TFJob</code>.
     * @alias module:model/V1TFJob
     */
    constructor() { 
        
        V1TFJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1TFJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1TFJob} obj Optional instance to populate.
     * @return {module:model/V1TFJob} The populated <code>V1TFJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1TFJob();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('cleanPodPolicy')) {
                obj['cleanPodPolicy'] = V1CleanPodPolicy.constructFromObject(data['cleanPodPolicy']);
            }
            if (data.hasOwnProperty('chief')) {
                obj['chief'] = V1KFReplica.constructFromObject(data['chief']);
            }
            if (data.hasOwnProperty('ps')) {
                obj['ps'] = V1KFReplica.constructFromObject(data['ps']);
            }
            if (data.hasOwnProperty('worker')) {
                obj['worker'] = V1KFReplica.constructFromObject(data['worker']);
            }
            if (data.hasOwnProperty('evaluator')) {
                obj['evaluator'] = V1KFReplica.constructFromObject(data['evaluator']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'tfjob'
 */
V1TFJob.prototype['kind'] = 'tfjob';

/**
 * @member {module:model/V1CleanPodPolicy} cleanPodPolicy
 */
V1TFJob.prototype['cleanPodPolicy'] = undefined;

/**
 * @member {module:model/V1KFReplica} chief
 */
V1TFJob.prototype['chief'] = undefined;

/**
 * @member {module:model/V1KFReplica} ps
 */
V1TFJob.prototype['ps'] = undefined;

/**
 * @member {module:model/V1KFReplica} worker
 */
V1TFJob.prototype['worker'] = undefined;

/**
 * @member {module:model/V1KFReplica} evaluator
 */
V1TFJob.prototype['evaluator'] = undefined;






export default V1TFJob;

