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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.0.95
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ConnectionKind from './V1ConnectionKind';
import V1K8sResourceSchema from './V1K8sResourceSchema';

/**
 * The V1ConnectionType model module.
 * @module model/V1ConnectionType
 * @version 1.0.95
 */
class V1ConnectionType {
    /**
     * Constructs a new <code>V1ConnectionType</code>.
     * @alias module:model/V1ConnectionType
     */
    constructor() { 
        
        V1ConnectionType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ConnectionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ConnectionType} obj Optional instance to populate.
     * @return {module:model/V1ConnectionType} The populated <code>V1ConnectionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ConnectionType();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1ConnectionKind.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], Object);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = V1K8sResourceSchema.constructFromObject(data['secret']);
            }
            if (data.hasOwnProperty('config_map')) {
                obj['config_map'] = V1K8sResourceSchema.constructFromObject(data['config_map']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
V1ConnectionType.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1ConnectionType.prototype['description'] = undefined;

/**
 * @member {module:model/V1ConnectionKind} kind
 */
V1ConnectionType.prototype['kind'] = undefined;

/**
 * @member {Object} schema
 */
V1ConnectionType.prototype['schema'] = undefined;

/**
 * @member {module:model/V1K8sResourceSchema} secret
 */
V1ConnectionType.prototype['secret'] = undefined;

/**
 * @member {module:model/V1K8sResourceSchema} config_map
 */
V1ConnectionType.prototype['config_map'] = undefined;






export default V1ConnectionType;

