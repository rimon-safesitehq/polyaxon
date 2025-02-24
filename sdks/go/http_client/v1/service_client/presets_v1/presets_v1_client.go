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

package presets_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new presets v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for presets v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	CreatePreset(params *CreatePresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreatePresetOK, *CreatePresetNoContent, error)

	DeletePreset(params *DeletePresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeletePresetOK, *DeletePresetNoContent, error)

	GetPreset(params *GetPresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetPresetOK, *GetPresetNoContent, error)

	ListPresetNames(params *ListPresetNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListPresetNamesOK, *ListPresetNamesNoContent, error)

	ListPresets(params *ListPresetsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListPresetsOK, *ListPresetsNoContent, error)

	PatchPreset(params *PatchPresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchPresetOK, *PatchPresetNoContent, error)

	UpdatePreset(params *UpdatePresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdatePresetOK, *UpdatePresetNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  CreatePreset creates scheduling presets
*/
func (a *Client) CreatePreset(params *CreatePresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreatePresetOK, *CreatePresetNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreatePresetParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "CreatePreset",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/presets",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreatePresetReader{formats: a.formats},
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
	case *CreatePresetOK:
		return value, nil, nil
	case *CreatePresetNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreatePresetDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeletePreset deletes scheduling preset
*/
func (a *Client) DeletePreset(params *DeletePresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeletePresetOK, *DeletePresetNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeletePresetParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "DeletePreset",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}/presets/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeletePresetReader{formats: a.formats},
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
	case *DeletePresetOK:
		return value, nil, nil
	case *DeletePresetNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeletePresetDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetPreset gets scheduling preset
*/
func (a *Client) GetPreset(params *GetPresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetPresetOK, *GetPresetNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetPresetParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetPreset",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/presets/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetPresetReader{formats: a.formats},
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
	case *GetPresetOK:
		return value, nil, nil
	case *GetPresetNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetPresetDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListPresetNames lists scheduling presets names
*/
func (a *Client) ListPresetNames(params *ListPresetNamesParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListPresetNamesOK, *ListPresetNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListPresetNamesParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListPresetNames",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/presets/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListPresetNamesReader{formats: a.formats},
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
	case *ListPresetNamesOK:
		return value, nil, nil
	case *ListPresetNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListPresetNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListPresets lists scheduling presets
*/
func (a *Client) ListPresets(params *ListPresetsParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*ListPresetsOK, *ListPresetsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListPresetsParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "ListPresets",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/presets",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListPresetsReader{formats: a.formats},
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
	case *ListPresetsOK:
		return value, nil, nil
	case *ListPresetsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListPresetsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchPreset patches scheduling preset
*/
func (a *Client) PatchPreset(params *PatchPresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*PatchPresetOK, *PatchPresetNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchPresetParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "PatchPreset",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/presets/{preset.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchPresetReader{formats: a.formats},
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
	case *PatchPresetOK:
		return value, nil, nil
	case *PatchPresetNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchPresetDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdatePreset updates scheduling preset
*/
func (a *Client) UpdatePreset(params *UpdatePresetParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*UpdatePresetOK, *UpdatePresetNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdatePresetParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "UpdatePreset",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/presets/{preset.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdatePresetReader{formats: a.formats},
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
	case *UpdatePresetOK:
		return value, nil, nil
	case *UpdatePresetNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdatePresetDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
