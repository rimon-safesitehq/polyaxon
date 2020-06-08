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
    instance = new PolyaxonSdk.V1Spark();
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

  describe('V1Spark', function() {
    it('should create an instance of V1Spark', function() {
      // uncomment below and update the code to test V1Spark
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be.a(PolyaxonSdk.V1Spark);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property connections (base name: "connections")', function() {
      // uncomment below and update the code to test the property connections
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property volumes (base name: "volumes")', function() {
      // uncomment below and update the code to test the property volumes
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property spark_version (base name: "spark_version")', function() {
      // uncomment below and update the code to test the property spark_version
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property python_version (base name: "python_version")', function() {
      // uncomment below and update the code to test the property python_version
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property deploy_mode (base name: "deploy_mode")', function() {
      // uncomment below and update the code to test the property deploy_mode
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property main_class (base name: "main_class")', function() {
      // uncomment below and update the code to test the property main_class
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property main_application_file (base name: "main_application_file")', function() {
      // uncomment below and update the code to test the property main_application_file
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property _arguments (base name: "arguments")', function() {
      // uncomment below and update the code to test the property _arguments
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property hadoop_conf (base name: "hadoop_conf")', function() {
      // uncomment below and update the code to test the property hadoop_conf
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property spark_conf (base name: "spark_conf")', function() {
      // uncomment below and update the code to test the property spark_conf
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property spark_config_map (base name: "spark_config_map")', function() {
      // uncomment below and update the code to test the property spark_config_map
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property hadoop_config_map (base name: "hadoop_config_map")', function() {
      // uncomment below and update the code to test the property hadoop_config_map
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property executor (base name: "executor")', function() {
      // uncomment below and update the code to test the property executor
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property driver (base name: "driver")', function() {
      // uncomment below and update the code to test the property driver
      //var instane = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

  });

}));
