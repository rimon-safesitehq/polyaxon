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

package searches_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new searches v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for searches v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	CreateSearch(params *CreateSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateSearchOK, *CreateSearchNoContent, error)

	DeleteSearch(params *DeleteSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteSearchOK, *DeleteSearchNoContent, error)

	GetSearch(params *GetSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetSearchOK, *GetSearchNoContent, error)

	ListSearchNames(params *ListSearchNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListSearchNamesOK, *ListSearchNamesNoContent, error)

	ListSearches(params *ListSearchesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListSearchesOK, *ListSearchesNoContent, error)

	PatchSearch(params *PatchSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchSearchOK, *PatchSearchNoContent, error)

	UpdateSearch(params *UpdateSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateSearchOK, *UpdateSearchNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  CreateSearch creates search
*/
func (a *Client) CreateSearch(params *CreateSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateSearchOK, *CreateSearchNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateSearchParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreateSearch",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/searches",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateSearchReader{formats: a.formats},
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
	case *CreateSearchOK:
		return value, nil, nil
	case *CreateSearchNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateSearchDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeleteSearch deletes search
*/
func (a *Client) DeleteSearch(params *DeleteSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteSearchOK, *DeleteSearchNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteSearchParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "DeleteSearch",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}/searches/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeleteSearchReader{formats: a.formats},
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
	case *DeleteSearchOK:
		return value, nil, nil
	case *DeleteSearchNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeleteSearchDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetSearch gets search
*/
func (a *Client) GetSearch(params *GetSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetSearchOK, *GetSearchNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetSearchParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetSearch",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/searches/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetSearchReader{formats: a.formats},
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
	case *GetSearchOK:
		return value, nil, nil
	case *GetSearchNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetSearchDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListSearchNames lists search names
*/
func (a *Client) ListSearchNames(params *ListSearchNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListSearchNamesOK, *ListSearchNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListSearchNamesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListSearchNames",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/searches/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListSearchNamesReader{formats: a.formats},
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
	case *ListSearchNamesOK:
		return value, nil, nil
	case *ListSearchNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListSearchNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListSearches lists searches
*/
func (a *Client) ListSearches(params *ListSearchesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListSearchesOK, *ListSearchesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListSearchesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListSearches",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/searches",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListSearchesReader{formats: a.formats},
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
	case *ListSearchesOK:
		return value, nil, nil
	case *ListSearchesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListSearchesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchSearch patches search
*/
func (a *Client) PatchSearch(params *PatchSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchSearchOK, *PatchSearchNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchSearchParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchSearch",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/searches/{search.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchSearchReader{formats: a.formats},
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
	case *PatchSearchOK:
		return value, nil, nil
	case *PatchSearchNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchSearchDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateSearch updates search
*/
func (a *Client) UpdateSearch(params *UpdateSearchParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdateSearchOK, *UpdateSearchNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateSearchParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdateSearch",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/searches/{search.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateSearchReader{formats: a.formats},
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
	case *UpdateSearchOK:
		return value, nil, nil
	case *UpdateSearchNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateSearchDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
