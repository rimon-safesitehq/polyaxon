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
 * The V1ComponentHubSettings model module.
 * @module model/V1ComponentHubSettings
 * @version 1.8.3
 */
class V1ComponentHubSettings {
    /**
     * Constructs a new <code>V1ComponentHubSettings</code>.
     * @alias module:model/V1ComponentHubSettings
     */
    constructor() { 
        
        V1ComponentHubSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ComponentHubSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ComponentHubSettings} obj Optional instance to populate.
     * @return {module:model/V1ComponentHubSettings} The populated <code>V1ComponentHubSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ComponentHubSettings();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], ['String']);
            }
            if (data.hasOwnProperty('teams')) {
                obj['teams'] = ApiClient.convertToType(data['teams'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} users
 */
V1ComponentHubSettings.prototype['users'] = undefined;

/**
 * @member {Array.<String>} teams
 */
V1ComponentHubSettings.prototype['teams'] = undefined;






export default V1ComponentHubSettings;

