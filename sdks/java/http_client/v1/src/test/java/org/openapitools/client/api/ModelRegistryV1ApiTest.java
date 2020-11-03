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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.2.2-rc2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ListModelRegistryResponse;
import org.openapitools.client.model.V1ModelRegistry;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ModelRegistryV1Api
 */
@Ignore
public class ModelRegistryV1ApiTest {

    private final ModelRegistryV1Api api = new ModelRegistryV1Api();

    
    /**
     * Create hub model
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createModelRegistryTest() throws ApiException {
        String owner = null;
        V1ModelRegistry body = null;
        V1ModelRegistry response = api.createModelRegistry(owner, body);

        // TODO: test validations
    }
    
    /**
     * Delete hub model
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteModelRegistryTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteModelRegistry(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * Get hub model
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getModelRegistryTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1ModelRegistry response = api.getModelRegistry(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * List hub models
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listModelRegistryTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListModelRegistryResponse response = api.listModelRegistry(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List hub model names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listModelRegistryNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListModelRegistryResponse response = api.listModelRegistryNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch hub model
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchModelRegistryTest() throws ApiException {
        String owner = null;
        String modelUuid = null;
        V1ModelRegistry body = null;
        V1ModelRegistry response = api.patchModelRegistry(owner, modelUuid, body);

        // TODO: test validations
    }
    
    /**
     * Update hub model
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateModelRegistryTest() throws ApiException {
        String owner = null;
        String modelUuid = null;
        V1ModelRegistry body = null;
        V1ModelRegistry response = api.updateModelRegistry(owner, modelUuid, body);

        // TODO: test validations
    }
    
}
