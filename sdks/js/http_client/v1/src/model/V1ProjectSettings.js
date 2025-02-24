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
import V1ProjectUserAccess from './V1ProjectUserAccess';

/**
 * The V1ProjectSettings model module.
 * @module model/V1ProjectSettings
 * @version 1.8.3
 */
class V1ProjectSettings {
    /**
     * Constructs a new <code>V1ProjectSettings</code>.
     * @alias module:model/V1ProjectSettings
     */
    constructor() { 
        
        V1ProjectSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ProjectSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ProjectSettings} obj Optional instance to populate.
     * @return {module:model/V1ProjectSettings} The populated <code>V1ProjectSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ProjectSettings();

            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
            if (data.hasOwnProperty('preset')) {
                obj['preset'] = ApiClient.convertToType(data['preset'], 'String');
            }
            if (data.hasOwnProperty('presets')) {
                obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('queues')) {
                obj['queues'] = ApiClient.convertToType(data['queues'], ['String']);
            }
            if (data.hasOwnProperty('agents')) {
                obj['agents'] = ApiClient.convertToType(data['agents'], ['String']);
            }
            if (data.hasOwnProperty('user_accesses')) {
                obj['user_accesses'] = ApiClient.convertToType(data['user_accesses'], [V1ProjectUserAccess]);
            }
            if (data.hasOwnProperty('teams')) {
                obj['teams'] = ApiClient.convertToType(data['teams'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} connections
 */
V1ProjectSettings.prototype['connections'] = undefined;

/**
 * @member {String} preset
 */
V1ProjectSettings.prototype['preset'] = undefined;

/**
 * @member {Array.<String>} presets
 */
V1ProjectSettings.prototype['presets'] = undefined;

/**
 * @member {String} queue
 */
V1ProjectSettings.prototype['queue'] = undefined;

/**
 * @member {Array.<String>} queues
 */
V1ProjectSettings.prototype['queues'] = undefined;

/**
 * @member {Array.<String>} agents
 */
V1ProjectSettings.prototype['agents'] = undefined;

/**
 * @member {Array.<module:model/V1ProjectUserAccess>} user_accesses
 */
V1ProjectSettings.prototype['user_accesses'] = undefined;

/**
 * @member {Array.<String>} teams
 */
V1ProjectSettings.prototype['teams'] = undefined;






export default V1ProjectSettings;

