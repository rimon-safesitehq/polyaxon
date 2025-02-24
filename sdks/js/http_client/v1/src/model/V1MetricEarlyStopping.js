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
import V1Optimization from './V1Optimization';

/**
 * The V1MetricEarlyStopping model module.
 * @module model/V1MetricEarlyStopping
 * @version 1.8.3
 */
class V1MetricEarlyStopping {
    /**
     * Constructs a new <code>V1MetricEarlyStopping</code>.
     * MetricEarlyStoppingSchema specification Early stopping based on metric config.
     * @alias module:model/V1MetricEarlyStopping
     */
    constructor() { 
        
        V1MetricEarlyStopping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1MetricEarlyStopping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1MetricEarlyStopping} obj Optional instance to populate.
     * @return {module:model/V1MetricEarlyStopping} The populated <code>V1MetricEarlyStopping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1MetricEarlyStopping();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('optimization')) {
                obj['optimization'] = V1Optimization.constructFromObject(data['optimization']);
            }
            if (data.hasOwnProperty('policy')) {
                obj['policy'] = ApiClient.convertToType(data['policy'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'metric_early_stopping'
 */
V1MetricEarlyStopping.prototype['kind'] = 'metric_early_stopping';

/**
 * Metric name to use for early stopping.
 * @member {String} metric
 */
V1MetricEarlyStopping.prototype['metric'] = undefined;

/**
 * Metric value to use for the condition.
 * @member {String} value
 */
V1MetricEarlyStopping.prototype['value'] = undefined;

/**
 * @member {module:model/V1Optimization} optimization
 */
V1MetricEarlyStopping.prototype['optimization'] = undefined;

/**
 * @member {Object} policy
 */
V1MetricEarlyStopping.prototype['policy'] = undefined;






export default V1MetricEarlyStopping;

