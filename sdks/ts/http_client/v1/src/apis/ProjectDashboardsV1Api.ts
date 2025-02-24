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

/* tslint:disable */
/* eslint-disable */
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
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1Dashboard,
    V1DashboardFromJSON,
    V1DashboardToJSON,
    V1ListDashboardsResponse,
    V1ListDashboardsResponseFromJSON,
    V1ListDashboardsResponseToJSON,
} from '../models';

export interface CreateProjectDashboardRequest {
    owner: string;
    project: string;
    body: V1Dashboard;
}

export interface DeleteProjectDashboardRequest {
    owner: string;
    entity: string;
    uuid: string;
}

export interface GetProjectDashboardRequest {
    owner: string;
    entity: string;
    uuid: string;
}

export interface ListProjectDashboardNamesRequest {
    owner: string;
    name: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    mode?: string;
}

export interface ListProjectDashboardsRequest {
    owner: string;
    name: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    mode?: string;
}

export interface PatchProjectDashboardRequest {
    owner: string;
    project: string;
    dashboardUuid: string;
    body: V1Dashboard;
}

export interface PromoteProjectDashboardRequest {
    owner: string;
    entity: string;
    uuid: string;
}

export interface UpdateProjectDashboardRequest {
    owner: string;
    project: string;
    dashboardUuid: string;
    body: V1Dashboard;
}

/**
 * 
 */
export class ProjectDashboardsV1Api extends runtime.BaseAPI {

    /**
     * Create project dashboard
     */
    async createProjectDashboardRaw(requestParameters: CreateProjectDashboardRequest): Promise<runtime.ApiResponse<V1Dashboard>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createProjectDashboard.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling createProjectDashboard.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createProjectDashboard.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/dashboards`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1DashboardToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardFromJSON(jsonValue));
    }

    /**
     * Create project dashboard
     */
    async createProjectDashboard(requestParameters: CreateProjectDashboardRequest): Promise<V1Dashboard> {
        const response = await this.createProjectDashboardRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete project dashboard
     */
    async deleteProjectDashboardRaw(requestParameters: DeleteProjectDashboardRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteProjectDashboard.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling deleteProjectDashboard.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteProjectDashboard.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{entity}/dashboards/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete project dashboard
     */
    async deleteProjectDashboard(requestParameters: DeleteProjectDashboardRequest): Promise<void> {
        await this.deleteProjectDashboardRaw(requestParameters);
    }

    /**
     * Get project dashboard
     */
    async getProjectDashboardRaw(requestParameters: GetProjectDashboardRequest): Promise<runtime.ApiResponse<V1Dashboard>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getProjectDashboard.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling getProjectDashboard.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getProjectDashboard.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{entity}/dashboards/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardFromJSON(jsonValue));
    }

    /**
     * Get project dashboard
     */
    async getProjectDashboard(requestParameters: GetProjectDashboardRequest): Promise<V1Dashboard> {
        const response = await this.getProjectDashboardRaw(requestParameters);
        return await response.value();
    }

    /**
     * List project dashboard
     */
    async listProjectDashboardNamesRaw(requestParameters: ListProjectDashboardNamesRequest): Promise<runtime.ApiResponse<V1ListDashboardsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listProjectDashboardNames.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling listProjectDashboardNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/dashboards/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListDashboardsResponseFromJSON(jsonValue));
    }

    /**
     * List project dashboard
     */
    async listProjectDashboardNames(requestParameters: ListProjectDashboardNamesRequest): Promise<V1ListDashboardsResponse> {
        const response = await this.listProjectDashboardNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List project dashboards
     */
    async listProjectDashboardsRaw(requestParameters: ListProjectDashboardsRequest): Promise<runtime.ApiResponse<V1ListDashboardsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listProjectDashboards.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling listProjectDashboards.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/dashboards`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListDashboardsResponseFromJSON(jsonValue));
    }

    /**
     * List project dashboards
     */
    async listProjectDashboards(requestParameters: ListProjectDashboardsRequest): Promise<V1ListDashboardsResponse> {
        const response = await this.listProjectDashboardsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch project dashboard
     */
    async patchProjectDashboardRaw(requestParameters: PatchProjectDashboardRequest): Promise<runtime.ApiResponse<V1Dashboard>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchProjectDashboard.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling patchProjectDashboard.');
        }

        if (requestParameters.dashboardUuid === null || requestParameters.dashboardUuid === undefined) {
            throw new runtime.RequiredError('dashboardUuid','Required parameter requestParameters.dashboardUuid was null or undefined when calling patchProjectDashboard.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchProjectDashboard.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/dashboards/{dashboard.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))).replace(`{${"dashboard.uuid"}}`, encodeURIComponent(String(requestParameters.dashboardUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1DashboardToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardFromJSON(jsonValue));
    }

    /**
     * Patch project dashboard
     */
    async patchProjectDashboard(requestParameters: PatchProjectDashboardRequest): Promise<V1Dashboard> {
        const response = await this.patchProjectDashboardRaw(requestParameters);
        return await response.value();
    }

    /**
     * Promote project dashboard
     */
    async promoteProjectDashboardRaw(requestParameters: PromoteProjectDashboardRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling promoteProjectDashboard.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling promoteProjectDashboard.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling promoteProjectDashboard.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{entity}/dashboards/{uuid}/promote`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Promote project dashboard
     */
    async promoteProjectDashboard(requestParameters: PromoteProjectDashboardRequest): Promise<void> {
        await this.promoteProjectDashboardRaw(requestParameters);
    }

    /**
     * Update project dashboard
     */
    async updateProjectDashboardRaw(requestParameters: UpdateProjectDashboardRequest): Promise<runtime.ApiResponse<V1Dashboard>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateProjectDashboard.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling updateProjectDashboard.');
        }

        if (requestParameters.dashboardUuid === null || requestParameters.dashboardUuid === undefined) {
            throw new runtime.RequiredError('dashboardUuid','Required parameter requestParameters.dashboardUuid was null or undefined when calling updateProjectDashboard.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateProjectDashboard.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/dashboards/{dashboard.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))).replace(`{${"dashboard.uuid"}}`, encodeURIComponent(String(requestParameters.dashboardUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1DashboardToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardFromJSON(jsonValue));
    }

    /**
     * Update project dashboard
     */
    async updateProjectDashboard(requestParameters: UpdateProjectDashboardRequest): Promise<V1Dashboard> {
        const response = await this.updateProjectDashboardRaw(requestParameters);
        return await response.value();
    }

}
