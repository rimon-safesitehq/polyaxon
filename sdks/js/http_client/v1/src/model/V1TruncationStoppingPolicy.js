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

/**
 * The V1TruncationStoppingPolicy model module.
 * @module model/V1TruncationStoppingPolicy
 * @version 1.8.3
 */
class V1TruncationStoppingPolicy {
    /**
     * Constructs a new <code>V1TruncationStoppingPolicy</code>.
     * Early stopping with truncation stopping, this policy stops a percentage of all running runs at every evaluation.
     * @alias module:model/V1TruncationStoppingPolicy
     */
    constructor() { 
        
        V1TruncationStoppingPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1TruncationStoppingPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1TruncationStoppingPolicy} obj Optional instance to populate.
     * @return {module:model/V1TruncationStoppingPolicy} The populated <code>V1TruncationStoppingPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1TruncationStoppingPolicy();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
            }
            if (data.hasOwnProperty('evaluationInterval')) {
                obj['evaluationInterval'] = ApiClient.convertToType(data['evaluationInterval'], 'Number');
            }
            if (data.hasOwnProperty('minInterval')) {
                obj['minInterval'] = ApiClient.convertToType(data['minInterval'], 'Number');
            }
            if (data.hasOwnProperty('minSamples')) {
                obj['minSamples'] = ApiClient.convertToType(data['minSamples'], 'Number');
            }
            if (data.hasOwnProperty('includeSucceeded')) {
                obj['includeSucceeded'] = ApiClient.convertToType(data['includeSucceeded'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'truncation'
 */
V1TruncationStoppingPolicy.prototype['kind'] = 'truncation';

/**
 * The percentage of runs to stop, at each evaluation interval. e.g. 1 - 99.
 * @member {Number} percent
 */
V1TruncationStoppingPolicy.prototype['percent'] = undefined;

/**
 * Interval/Frequency for applying the policy.
 * @member {Number} evaluationInterval
 */
V1TruncationStoppingPolicy.prototype['evaluationInterval'] = undefined;

/**
 * @member {Number} minInterval
 */
V1TruncationStoppingPolicy.prototype['minInterval'] = undefined;

/**
 * @member {Number} minSamples
 */
V1TruncationStoppingPolicy.prototype['minSamples'] = undefined;

/**
 * @member {Boolean} includeSucceeded
 */
V1TruncationStoppingPolicy.prototype['includeSucceeded'] = undefined;






export default V1TruncationStoppingPolicy;

