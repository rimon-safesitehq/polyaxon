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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.AgentStateResponseAgentState();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AgentStateResponseAgentState', function() {
    it('should create an instance of AgentStateResponseAgentState', function() {
      // uncomment below and update the code to test AgentStateResponseAgentState
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be.a(PolyaxonSdk.AgentStateResponseAgentState);
    });

    it('should have the property schedules (base name: "schedules")', function() {
      // uncomment below and update the code to test the property schedules
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property hooks (base name: "hooks")', function() {
      // uncomment below and update the code to test the property hooks
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property watchdogs (base name: "watchdogs")', function() {
      // uncomment below and update the code to test the property watchdogs
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property tuners (base name: "tuners")', function() {
      // uncomment below and update the code to test the property tuners
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property queued (base name: "queued")', function() {
      // uncomment below and update the code to test the property queued
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property stopping (base name: "stopping")', function() {
      // uncomment below and update the code to test the property stopping
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property deleting (base name: "deleting")', function() {
      // uncomment below and update the code to test the property deleting
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property apply (base name: "apply")', function() {
      // uncomment below and update the code to test the property apply
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

    it('should have the property full (base name: "full")', function() {
      // uncomment below and update the code to test the property full
      //var instane = new PolyaxonSdk.AgentStateResponseAgentState();
      //expect(instance).to.be();
    });

  });

}));
