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
import V1Cache from './V1Cache';
import V1Component from './V1Component';
import V1EventTrigger from './V1EventTrigger';
import V1Hook from './V1Hook';
import V1Join from './V1Join';
import V1Param from './V1Param';
import V1PatchStrategy from './V1PatchStrategy';
import V1Plugins from './V1Plugins';
import V1Template from './V1Template';
import V1Termination from './V1Termination';
import V1TriggerPolicy from './V1TriggerPolicy';

/**
 * The V1Operation model module.
 * @module model/V1Operation
 * @version 1.8.3
 */
class V1Operation {
    /**
     * Constructs a new <code>V1Operation</code>.
     * @alias module:model/V1Operation
     */
    constructor() { 
        
        V1Operation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Operation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Operation} obj Optional instance to populate.
     * @return {module:model/V1Operation} The populated <code>V1Operation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Operation();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('presets')) {
                obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('cache')) {
                obj['cache'] = V1Cache.constructFromObject(data['cache']);
            }
            if (data.hasOwnProperty('termination')) {
                obj['termination'] = V1Termination.constructFromObject(data['termination']);
            }
            if (data.hasOwnProperty('plugins')) {
                obj['plugins'] = V1Plugins.constructFromObject(data['plugins']);
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = ApiClient.convertToType(data['schedule'], Object);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [V1EventTrigger]);
            }
            if (data.hasOwnProperty('hooks')) {
                obj['hooks'] = ApiClient.convertToType(data['hooks'], [V1Hook]);
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], ['String']);
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = V1TriggerPolicy.constructFromObject(data['trigger']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], 'String');
            }
            if (data.hasOwnProperty('skipOnUpstreamSkip')) {
                obj['skipOnUpstreamSkip'] = ApiClient.convertToType(data['skipOnUpstreamSkip'], 'Boolean');
            }
            if (data.hasOwnProperty('matrix')) {
                obj['matrix'] = ApiClient.convertToType(data['matrix'], Object);
            }
            if (data.hasOwnProperty('joins')) {
                obj['joins'] = ApiClient.convertToType(data['joins'], {'String': V1Join});
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': V1Param});
            }
            if (data.hasOwnProperty('runPatch')) {
                obj['runPatch'] = ApiClient.convertToType(data['runPatch'], Object);
            }
            if (data.hasOwnProperty('patchStrategy')) {
                obj['patchStrategy'] = V1PatchStrategy.constructFromObject(data['patchStrategy']);
            }
            if (data.hasOwnProperty('isPreset')) {
                obj['isPreset'] = ApiClient.convertToType(data['isPreset'], 'Boolean');
            }
            if (data.hasOwnProperty('isApproved')) {
                obj['isApproved'] = ApiClient.convertToType(data['isApproved'], 'Boolean');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = V1Template.constructFromObject(data['template']);
            }
            if (data.hasOwnProperty('urlRef')) {
                obj['urlRef'] = ApiClient.convertToType(data['urlRef'], 'String');
            }
            if (data.hasOwnProperty('pathRef')) {
                obj['pathRef'] = ApiClient.convertToType(data['pathRef'], 'String');
            }
            if (data.hasOwnProperty('hubRef')) {
                obj['hubRef'] = ApiClient.convertToType(data['hubRef'], 'String');
            }
            if (data.hasOwnProperty('dagRef')) {
                obj['dagRef'] = ApiClient.convertToType(data['dagRef'], 'String');
            }
            if (data.hasOwnProperty('component')) {
                obj['component'] = V1Component.constructFromObject(data['component']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} version
 */
V1Operation.prototype['version'] = undefined;

/**
 * @member {String} kind
 */
V1Operation.prototype['kind'] = undefined;

/**
 * @member {String} name
 */
V1Operation.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Operation.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Operation.prototype['tags'] = undefined;

/**
 * @member {Array.<String>} presets
 */
V1Operation.prototype['presets'] = undefined;

/**
 * @member {String} queue
 */
V1Operation.prototype['queue'] = undefined;

/**
 * @member {module:model/V1Cache} cache
 */
V1Operation.prototype['cache'] = undefined;

/**
 * @member {module:model/V1Termination} termination
 */
V1Operation.prototype['termination'] = undefined;

/**
 * @member {module:model/V1Plugins} plugins
 */
V1Operation.prototype['plugins'] = undefined;

/**
 * @member {Object} schedule
 */
V1Operation.prototype['schedule'] = undefined;

/**
 * @member {Array.<module:model/V1EventTrigger>} events
 */
V1Operation.prototype['events'] = undefined;

/**
 * @member {Array.<module:model/V1Hook>} hooks
 */
V1Operation.prototype['hooks'] = undefined;

/**
 * @member {Array.<String>} dependencies
 */
V1Operation.prototype['dependencies'] = undefined;

/**
 * @member {module:model/V1TriggerPolicy} trigger
 */
V1Operation.prototype['trigger'] = undefined;

/**
 * @member {String} conditions
 */
V1Operation.prototype['conditions'] = undefined;

/**
 * @member {Boolean} skipOnUpstreamSkip
 */
V1Operation.prototype['skipOnUpstreamSkip'] = undefined;

/**
 * @member {Object} matrix
 */
V1Operation.prototype['matrix'] = undefined;

/**
 * @member {Object.<String, module:model/V1Join>} joins
 */
V1Operation.prototype['joins'] = undefined;

/**
 * @member {Object.<String, module:model/V1Param>} params
 */
V1Operation.prototype['params'] = undefined;

/**
 * @member {Object} runPatch
 */
V1Operation.prototype['runPatch'] = undefined;

/**
 * @member {module:model/V1PatchStrategy} patchStrategy
 */
V1Operation.prototype['patchStrategy'] = undefined;

/**
 * @member {Boolean} isPreset
 */
V1Operation.prototype['isPreset'] = undefined;

/**
 * @member {Boolean} isApproved
 */
V1Operation.prototype['isApproved'] = undefined;

/**
 * @member {module:model/V1Template} template
 */
V1Operation.prototype['template'] = undefined;

/**
 * @member {String} urlRef
 */
V1Operation.prototype['urlRef'] = undefined;

/**
 * @member {String} pathRef
 */
V1Operation.prototype['pathRef'] = undefined;

/**
 * @member {String} hubRef
 */
V1Operation.prototype['hubRef'] = undefined;

/**
 * @member {String} dagRef
 */
V1Operation.prototype['dagRef'] = undefined;

/**
 * @member {module:model/V1Component} component
 */
V1Operation.prototype['component'] = undefined;






export default V1Operation;

