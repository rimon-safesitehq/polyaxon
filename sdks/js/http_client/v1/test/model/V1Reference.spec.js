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
    instance = new PolyaxonSdk.V1Reference();
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

  describe('V1Reference', function() {
    it('should create an instance of V1Reference', function() {
      // uncomment below and update the code to test V1Reference
      //var instane = new PolyaxonSdk.V1Reference();
      //expect(instance).to.be.a(PolyaxonSdk.V1Reference);
    });

    it('should have the property hubRef (base name: "hubRef")', function() {
      // uncomment below and update the code to test the property hubRef
      //var instane = new PolyaxonSdk.V1Reference();
      //expect(instance).to.be();
    });

    it('should have the property dagRef (base name: "dagRef")', function() {
      // uncomment below and update the code to test the property dagRef
      //var instane = new PolyaxonSdk.V1Reference();
      //expect(instance).to.be();
    });

    it('should have the property urlRef (base name: "urlRef")', function() {
      // uncomment below and update the code to test the property urlRef
      //var instane = new PolyaxonSdk.V1Reference();
      //expect(instance).to.be();
    });

    it('should have the property pathRef (base name: "pathRef")', function() {
      // uncomment below and update the code to test the property pathRef
      //var instane = new PolyaxonSdk.V1Reference();
      //expect(instance).to.be();
    });

  });

}));
