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
 * The version of the OpenAPI document: 1.2.2-rc2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1Statuses.
* @enum {}
* @readonly
*/
export default class V1Statuses {
    
        /**
         * value: "created"
         * @const
         */
        "created" = "created";

    
        /**
         * value: "resuming"
         * @const
         */
        "resuming" = "resuming";

    
        /**
         * value: "compiled"
         * @const
         */
        "compiled" = "compiled";

    
        /**
         * value: "queued"
         * @const
         */
        "queued" = "queued";

    
        /**
         * value: "scheduled"
         * @const
         */
        "scheduled" = "scheduled";

    
        /**
         * value: "starting"
         * @const
         */
        "starting" = "starting";

    
        /**
         * value: "initializing"
         * @const
         */
        "initializing" = "initializing";

    
        /**
         * value: "running"
         * @const
         */
        "running" = "running";

    
        /**
         * value: "processing"
         * @const
         */
        "processing" = "processing";

    
        /**
         * value: "stopping"
         * @const
         */
        "stopping" = "stopping";

    
        /**
         * value: "failed"
         * @const
         */
        "failed" = "failed";

    
        /**
         * value: "stopped"
         * @const
         */
        "stopped" = "stopped";

    
        /**
         * value: "succeeded"
         * @const
         */
        "succeeded" = "succeeded";

    
        /**
         * value: "skipped"
         * @const
         */
        "skipped" = "skipped";

    
        /**
         * value: "warning"
         * @const
         */
        "warning" = "warning";

    
        /**
         * value: "unschedulable"
         * @const
         */
        "unschedulable" = "unschedulable";

    
        /**
         * value: "upstream_failed"
         * @const
         */
        "upstream_failed" = "upstream_failed";

    
        /**
         * value: "retrying"
         * @const
         */
        "retrying" = "retrying";

    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    
        /**
         * value: "done"
         * @const
         */
        "done" = "done";

    

    /**
    * Returns a <code>V1Statuses</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1Statuses} The enum <code>V1Statuses</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

