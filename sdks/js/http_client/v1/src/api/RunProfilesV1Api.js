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


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1ListRunProfilesResponse from '../model/V1ListRunProfilesResponse';
import V1RunProfile from '../model/V1RunProfile';

/**
* RunProfilesV1 service.
* @module api/RunProfilesV1Api
* @version 1.0.95
*/
export default class RunProfilesV1Api {

    /**
    * Constructs a new RunProfilesV1Api. 
    * Polyaxon sdk
    * @alias module:api/RunProfilesV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createRunProfile operation.
     * @callback module:api/RunProfilesV1Api~createRunProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1RunProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create run profile
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1RunProfile} body Artifact store body
     * @param {module:api/RunProfilesV1Api~createRunProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1RunProfile}
     */
    createRunProfile(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createRunProfile");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createRunProfile");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1RunProfile;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/run_profiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRunProfile operation.
     * @callback module:api/RunProfilesV1Api~deleteRunProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete run profile
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/RunProfilesV1Api~deleteRunProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteRunProfile(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteRunProfile");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteRunProfile");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/run_profiles/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRunProfile operation.
     * @callback module:api/RunProfilesV1Api~getRunProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1RunProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get run profile
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/RunProfilesV1Api~getRunProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1RunProfile}
     */
    getRunProfile(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getRunProfile");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getRunProfile");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1RunProfile;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/run_profiles/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listRunProfileNames operation.
     * @callback module:api/RunProfilesV1Api~listRunProfileNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListRunProfilesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List run profiles names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/RunProfilesV1Api~listRunProfileNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListRunProfilesResponse}
     */
    listRunProfileNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listRunProfileNames");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListRunProfilesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/run_profiles/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listRunProfiles operation.
     * @callback module:api/RunProfilesV1Api~listRunProfilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListRunProfilesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List run profiles
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/RunProfilesV1Api~listRunProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListRunProfilesResponse}
     */
    listRunProfiles(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listRunProfiles");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListRunProfilesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/run_profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchRunProfile operation.
     * @callback module:api/RunProfilesV1Api~patchRunProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1RunProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch run profile
     * @param {String} owner Owner of the namespace
     * @param {String} run_profile_uuid UUID
     * @param {module:model/V1RunProfile} body Artifact store body
     * @param {module:api/RunProfilesV1Api~patchRunProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1RunProfile}
     */
    patchRunProfile(owner, run_profile_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchRunProfile");
      }
      // verify the required parameter 'run_profile_uuid' is set
      if (run_profile_uuid === undefined || run_profile_uuid === null) {
        throw new Error("Missing the required parameter 'run_profile_uuid' when calling patchRunProfile");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchRunProfile");
      }

      let pathParams = {
        'owner': owner,
        'run_profile.uuid': run_profile_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1RunProfile;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/run_profiles/{run_profile.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRunProfile operation.
     * @callback module:api/RunProfilesV1Api~updateRunProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1RunProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update run profile
     * @param {String} owner Owner of the namespace
     * @param {String} run_profile_uuid UUID
     * @param {module:model/V1RunProfile} body Artifact store body
     * @param {module:api/RunProfilesV1Api~updateRunProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1RunProfile}
     */
    updateRunProfile(owner, run_profile_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateRunProfile");
      }
      // verify the required parameter 'run_profile_uuid' is set
      if (run_profile_uuid === undefined || run_profile_uuid === null) {
        throw new Error("Missing the required parameter 'run_profile_uuid' when calling updateRunProfile");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateRunProfile");
      }

      let pathParams = {
        'owner': owner,
        'run_profile.uuid': run_profile_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1RunProfile;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/run_profiles/{run_profile.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
