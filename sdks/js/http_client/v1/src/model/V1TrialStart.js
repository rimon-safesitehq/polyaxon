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
 * The V1TrialStart model module.
 * @module model/V1TrialStart
 * @version 1.8.3
 */
class V1TrialStart {
    /**
     * Constructs a new <code>V1TrialStart</code>.
     * @alias module:model/V1TrialStart
     */
    constructor() { 
        
        V1TrialStart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1TrialStart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1TrialStart} obj Optional instance to populate.
     * @return {module:model/V1TrialStart} The populated <code>V1TrialStart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1TrialStart();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = ApiClient.convertToType(data['plan'], 'String');
            }
            if (data.hasOwnProperty('seats')) {
                obj['seats'] = ApiClient.convertToType(data['seats'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
V1TrialStart.prototype['name'] = undefined;

/**
 * @member {String} email
 */
V1TrialStart.prototype['email'] = undefined;

/**
 * @member {String} organization
 */
V1TrialStart.prototype['organization'] = undefined;

/**
 * @member {String} plan
 */
V1TrialStart.prototype['plan'] = undefined;

/**
 * @member {Number} seats
 */
V1TrialStart.prototype['seats'] = undefined;

/**
 * @member {Object} details
 */
V1TrialStart.prototype['details'] = undefined;






export default V1TrialStart;

