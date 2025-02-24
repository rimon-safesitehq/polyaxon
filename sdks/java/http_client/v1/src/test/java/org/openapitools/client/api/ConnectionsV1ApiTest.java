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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.8.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ConnectionResponse;
import org.openapitools.client.model.V1ListConnectionsResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ConnectionsV1Api
 */
@Ignore
public class ConnectionsV1ApiTest {

    private final ConnectionsV1Api api = new ConnectionsV1Api();

    
    /**
     * Create connection
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createConnectionTest() throws ApiException {
        String owner = null;
        V1ConnectionResponse body = null;
        V1ConnectionResponse response = api.createConnection(owner, body);

        // TODO: test validations
    }
    
    /**
     * Delete connection
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteConnectionTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteConnection(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * Get connection
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getConnectionTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1ConnectionResponse response = api.getConnection(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * List connections names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listConnectionNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListConnectionsResponse response = api.listConnectionNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List connections
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listConnectionsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListConnectionsResponse response = api.listConnections(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch connection
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchConnectionTest() throws ApiException {
        String owner = null;
        String connectionUuid = null;
        V1ConnectionResponse body = null;
        V1ConnectionResponse response = api.patchConnection(owner, connectionUuid, body);

        // TODO: test validations
    }
    
    /**
     * Update connection
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateConnectionTest() throws ApiException {
        String owner = null;
        String connectionUuid = null;
        V1ConnectionResponse body = null;
        V1ConnectionResponse response = api.updateConnection(owner, connectionUuid, body);

        // TODO: test validations
    }
    
}
