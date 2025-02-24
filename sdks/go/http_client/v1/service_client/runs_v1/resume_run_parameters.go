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

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewResumeRunParams creates a new ResumeRunParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewResumeRunParams() *ResumeRunParams {
	return &ResumeRunParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewResumeRunParamsWithTimeout creates a new ResumeRunParams object
// with the ability to set a timeout on a request.
func NewResumeRunParamsWithTimeout(timeout time.Duration) *ResumeRunParams {
	return &ResumeRunParams{
		timeout: timeout,
	}
}

// NewResumeRunParamsWithContext creates a new ResumeRunParams object
// with the ability to set a context for a request.
func NewResumeRunParamsWithContext(ctx context.Context) *ResumeRunParams {
	return &ResumeRunParams{
		Context: ctx,
	}
}

// NewResumeRunParamsWithHTTPClient creates a new ResumeRunParams object
// with the ability to set a custom HTTPClient for a request.
func NewResumeRunParamsWithHTTPClient(client *http.Client) *ResumeRunParams {
	return &ResumeRunParams{
		HTTPClient: client,
	}
}

/* ResumeRunParams contains all the parameters to send to the API endpoint
   for the resume run operation.

   Typically these are written to a http.Request.
*/
type ResumeRunParams struct {

	/* Body.

	   Run object
	*/
	Body *service_model.V1Run

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Project.

	   Project where the run will be assigned
	*/
	Project string

	/* RunUUID.

	   UUID
	*/
	RunUUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the resume run params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ResumeRunParams) WithDefaults() *ResumeRunParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the resume run params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ResumeRunParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the resume run params
func (o *ResumeRunParams) WithTimeout(timeout time.Duration) *ResumeRunParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the resume run params
func (o *ResumeRunParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the resume run params
func (o *ResumeRunParams) WithContext(ctx context.Context) *ResumeRunParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the resume run params
func (o *ResumeRunParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the resume run params
func (o *ResumeRunParams) WithHTTPClient(client *http.Client) *ResumeRunParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the resume run params
func (o *ResumeRunParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the resume run params
func (o *ResumeRunParams) WithBody(body *service_model.V1Run) *ResumeRunParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the resume run params
func (o *ResumeRunParams) SetBody(body *service_model.V1Run) {
	o.Body = body
}

// WithOwner adds the owner to the resume run params
func (o *ResumeRunParams) WithOwner(owner string) *ResumeRunParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the resume run params
func (o *ResumeRunParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the resume run params
func (o *ResumeRunParams) WithProject(project string) *ResumeRunParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the resume run params
func (o *ResumeRunParams) SetProject(project string) {
	o.Project = project
}

// WithRunUUID adds the runUUID to the resume run params
func (o *ResumeRunParams) WithRunUUID(runUUID string) *ResumeRunParams {
	o.SetRunUUID(runUUID)
	return o
}

// SetRunUUID adds the runUuid to the resume run params
func (o *ResumeRunParams) SetRunUUID(runUUID string) {
	o.RunUUID = runUUID
}

// WriteToRequest writes these params to a swagger request
func (o *ResumeRunParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param project
	if err := r.SetPathParam("project", o.Project); err != nil {
		return err
	}

	// path param run.uuid
	if err := r.SetPathParam("run.uuid", o.RunUUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
