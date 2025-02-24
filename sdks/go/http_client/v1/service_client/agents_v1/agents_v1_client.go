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

// Code generated by go-swagger; DO NOT EDIT.

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new agents v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for agents v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	CreateAgent(params *CreateAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateAgentOK, *CreateAgentNoContent, error)

	CreateAgentStatus(params *CreateAgentStatusParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateAgentStatusOK, *CreateAgentStatusNoContent, error)

	DeleteAgent(params *DeleteAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteAgentOK, *DeleteAgentNoContent, error)

	GetAgent(params *GetAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetAgentOK, *GetAgentNoContent, error)

	GetAgentState(params *GetAgentStateParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetAgentStateOK, *GetAgentStateNoContent, error)

	GetAgentStatuses(params *GetAgentStatusesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetAgentStatusesOK, *GetAgentStatusesNoContent, error)

	GetAgentToken(params *GetAgentTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetAgentTokenOK, *GetAgentTokenNoContent, error)

	ListAgentNames(params *ListAgentNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListAgentNamesOK, *ListAgentNamesNoContent, error)

	ListAgents(params *ListAgentsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListAgentsOK, *ListAgentsNoContent, error)

	PatchAgent(params *PatchAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchAgentOK, *PatchAgentNoContent, error)

	PatchAgentToken(params *PatchAgentTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchAgentTokenOK, *PatchAgentTokenNoContent, error)

	SyncAgent(params *SyncAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*SyncAgentOK, *SyncAgentNoContent, error)

	UpdateAgent(params *UpdateAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateAgentOK, *UpdateAgentNoContent, error)

	UpdateAgentToken(params *UpdateAgentTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateAgentTokenOK, *UpdateAgentTokenNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  CreateAgent creates agent
*/
func (a *Client) CreateAgent(params *CreateAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateAgentOK, *CreateAgentNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateAgentParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreateAgent",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/agents",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateAgentReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *CreateAgentOK:
		return value, nil, nil
	case *CreateAgentNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateAgentDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  CreateAgentStatus creates new run status
*/
func (a *Client) CreateAgentStatus(params *CreateAgentStatusParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateAgentStatusOK, *CreateAgentStatusNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateAgentStatusParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreateAgentStatus",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{uuid}/statuses",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateAgentStatusReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *CreateAgentStatusOK:
		return value, nil, nil
	case *CreateAgentStatusNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateAgentStatusDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeleteAgent deletes agent
*/
func (a *Client) DeleteAgent(params *DeleteAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteAgentOK, *DeleteAgentNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteAgentParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "DeleteAgent",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeleteAgentReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *DeleteAgentOK:
		return value, nil, nil
	case *DeleteAgentNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeleteAgentDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetAgent gets agent
*/
func (a *Client) GetAgent(params *GetAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetAgentOK, *GetAgentNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetAgentParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetAgent",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetAgentReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetAgentOK:
		return value, nil, nil
	case *GetAgentNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetAgentDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetAgentState gets state queues runs
*/
func (a *Client) GetAgentState(params *GetAgentStateParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetAgentStateOK, *GetAgentStateNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetAgentStateParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetAgentState",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{uuid}/state",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetAgentStateReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetAgentStateOK:
		return value, nil, nil
	case *GetAgentStateNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetAgentStateDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetAgentStatuses gets agent status
*/
func (a *Client) GetAgentStatuses(params *GetAgentStatusesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetAgentStatusesOK, *GetAgentStatusesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetAgentStatusesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetAgentStatuses",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{uuid}/statuses",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetAgentStatusesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetAgentStatusesOK:
		return value, nil, nil
	case *GetAgentStatusesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetAgentStatusesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetAgentToken gets agent token
*/
func (a *Client) GetAgentToken(params *GetAgentTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetAgentTokenOK, *GetAgentTokenNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetAgentTokenParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetAgentToken",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{uuid}/token",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetAgentTokenReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetAgentTokenOK:
		return value, nil, nil
	case *GetAgentTokenNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetAgentTokenDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListAgentNames lists agents names
*/
func (a *Client) ListAgentNames(params *ListAgentNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListAgentNamesOK, *ListAgentNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListAgentNamesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListAgentNames",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListAgentNamesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListAgentNamesOK:
		return value, nil, nil
	case *ListAgentNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListAgentNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListAgents lists agents
*/
func (a *Client) ListAgents(params *ListAgentsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListAgentsOK, *ListAgentsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListAgentsParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListAgents",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListAgentsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListAgentsOK:
		return value, nil, nil
	case *ListAgentsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListAgentsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchAgent patches agent
*/
func (a *Client) PatchAgent(params *PatchAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchAgentOK, *PatchAgentNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchAgentParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchAgent",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchAgentReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *PatchAgentOK:
		return value, nil, nil
	case *PatchAgentNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchAgentDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchAgentToken patches agent token
*/
func (a *Client) PatchAgentToken(params *PatchAgentTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchAgentTokenOK, *PatchAgentTokenNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchAgentTokenParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchAgentToken",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent}/token",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchAgentTokenReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *PatchAgentTokenOK:
		return value, nil, nil
	case *PatchAgentTokenNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchAgentTokenDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  SyncAgent syncs agent
*/
func (a *Client) SyncAgent(params *SyncAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*SyncAgentOK, *SyncAgentNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewSyncAgentParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "SyncAgent",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent.uuid}/sync",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &SyncAgentReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *SyncAgentOK:
		return value, nil, nil
	case *SyncAgentNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*SyncAgentDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateAgent updates agent
*/
func (a *Client) UpdateAgent(params *UpdateAgentParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateAgentOK, *UpdateAgentNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateAgentParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdateAgent",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateAgentReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *UpdateAgentOK:
		return value, nil, nil
	case *UpdateAgentNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateAgentDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateAgentToken updates agent token
*/
func (a *Client) UpdateAgentToken(params *UpdateAgentTokenParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateAgentTokenOK, *UpdateAgentTokenNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateAgentTokenParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdateAgentToken",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent}/token",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateAgentTokenReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *UpdateAgentTokenOK:
		return value, nil, nil
	case *UpdateAgentTokenNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateAgentTokenDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
