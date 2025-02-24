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

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1RunSettings Run Settings specification
//
// swagger:model v1RunSettings
type V1RunSettings struct {

	// Agent
	Agent *V1SettingsCatalog `json:"agent,omitempty"`

	// Artifacts Store
	ArtifactsStore *V1SettingsCatalog `json:"artifacts_store,omitempty"`

	// Component version reference
	ComponentVersion *V1RunReferenceCatalog `json:"component_version,omitempty"`

	// Model registry version references
	ModelVersions []*V1RunReferenceCatalog `json:"model_versions"`

	// Namespace
	Namespace string `json:"namespace,omitempty"`

	// Queue
	Queue *V1SettingsCatalog `json:"queue,omitempty"`

	// Latest Tensorboard reference, if it exists
	Tensorboard interface{} `json:"tensorboard,omitempty"`
}

// Validate validates this v1 run settings
func (m *V1RunSettings) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAgent(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateArtifactsStore(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateComponentVersion(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateModelVersions(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateQueue(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1RunSettings) validateAgent(formats strfmt.Registry) error {
	if swag.IsZero(m.Agent) { // not required
		return nil
	}

	if m.Agent != nil {
		if err := m.Agent.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("agent")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunSettings) validateArtifactsStore(formats strfmt.Registry) error {
	if swag.IsZero(m.ArtifactsStore) { // not required
		return nil
	}

	if m.ArtifactsStore != nil {
		if err := m.ArtifactsStore.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("artifacts_store")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunSettings) validateComponentVersion(formats strfmt.Registry) error {
	if swag.IsZero(m.ComponentVersion) { // not required
		return nil
	}

	if m.ComponentVersion != nil {
		if err := m.ComponentVersion.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("component_version")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunSettings) validateModelVersions(formats strfmt.Registry) error {
	if swag.IsZero(m.ModelVersions) { // not required
		return nil
	}

	for i := 0; i < len(m.ModelVersions); i++ {
		if swag.IsZero(m.ModelVersions[i]) { // not required
			continue
		}

		if m.ModelVersions[i] != nil {
			if err := m.ModelVersions[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("model_versions" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1RunSettings) validateQueue(formats strfmt.Registry) error {
	if swag.IsZero(m.Queue) { // not required
		return nil
	}

	if m.Queue != nil {
		if err := m.Queue.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("queue")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 run settings based on the context it is used
func (m *V1RunSettings) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateAgent(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateArtifactsStore(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateComponentVersion(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateModelVersions(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateQueue(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1RunSettings) contextValidateAgent(ctx context.Context, formats strfmt.Registry) error {

	if m.Agent != nil {
		if err := m.Agent.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("agent")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunSettings) contextValidateArtifactsStore(ctx context.Context, formats strfmt.Registry) error {

	if m.ArtifactsStore != nil {
		if err := m.ArtifactsStore.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("artifacts_store")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunSettings) contextValidateComponentVersion(ctx context.Context, formats strfmt.Registry) error {

	if m.ComponentVersion != nil {
		if err := m.ComponentVersion.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("component_version")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunSettings) contextValidateModelVersions(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.ModelVersions); i++ {

		if m.ModelVersions[i] != nil {
			if err := m.ModelVersions[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("model_versions" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1RunSettings) contextValidateQueue(ctx context.Context, formats strfmt.Registry) error {

	if m.Queue != nil {
		if err := m.Queue.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("queue")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1RunSettings) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1RunSettings) UnmarshalBinary(b []byte) error {
	var res V1RunSettings
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
