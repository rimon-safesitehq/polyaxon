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
    instance = new PolyaxonSdk.OrganizationsV1Api();
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

  describe('OrganizationsV1Api', function() {
    describe('createOrganization', function() {
      it('should call createOrganization successfully', function(done) {
        //uncomment below and update the code to test createOrganization
        //instance.createOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrganizationMember', function() {
      it('should call createOrganizationMember successfully', function(done) {
        //uncomment below and update the code to test createOrganizationMember
        //instance.createOrganizationMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganization', function() {
      it('should call deleteOrganization successfully', function(done) {
        //uncomment below and update the code to test deleteOrganization
        //instance.deleteOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationInvitation', function() {
      it('should call deleteOrganizationInvitation successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationInvitation
        //instance.deleteOrganizationInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrganizationMember', function() {
      it('should call deleteOrganizationMember successfully', function(done) {
        //uncomment below and update the code to test deleteOrganizationMember
        //instance.deleteOrganizationMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganization', function() {
      it('should call getOrganization successfully', function(done) {
        //uncomment below and update the code to test getOrganization
        //instance.getOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationActivities', function() {
      it('should call getOrganizationActivities successfully', function(done) {
        //uncomment below and update the code to test getOrganizationActivities
        //instance.getOrganizationActivities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationInvitation', function() {
      it('should call getOrganizationInvitation successfully', function(done) {
        //uncomment below and update the code to test getOrganizationInvitation
        //instance.getOrganizationInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationMember', function() {
      it('should call getOrganizationMember successfully', function(done) {
        //uncomment below and update the code to test getOrganizationMember
        //instance.getOrganizationMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationSettings', function() {
      it('should call getOrganizationSettings successfully', function(done) {
        //uncomment below and update the code to test getOrganizationSettings
        //instance.getOrganizationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrganizationStats', function() {
      it('should call getOrganizationStats successfully', function(done) {
        //uncomment below and update the code to test getOrganizationStats
        //instance.getOrganizationStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrganizationMemberNames', function() {
      it('should call listOrganizationMemberNames successfully', function(done) {
        //uncomment below and update the code to test listOrganizationMemberNames
        //instance.listOrganizationMemberNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrganizationMembers', function() {
      it('should call listOrganizationMembers successfully', function(done) {
        //uncomment below and update the code to test listOrganizationMembers
        //instance.listOrganizationMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrganizationNames', function() {
      it('should call listOrganizationNames successfully', function(done) {
        //uncomment below and update the code to test listOrganizationNames
        //instance.listOrganizationNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrganizations', function() {
      it('should call listOrganizations successfully', function(done) {
        //uncomment below and update the code to test listOrganizations
        //instance.listOrganizations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationPlan', function() {
      it('should call organizationPlan successfully', function(done) {
        //uncomment below and update the code to test organizationPlan
        //instance.organizationPlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchOrganization', function() {
      it('should call patchOrganization successfully', function(done) {
        //uncomment below and update the code to test patchOrganization
        //instance.patchOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchOrganizationInvitation', function() {
      it('should call patchOrganizationInvitation successfully', function(done) {
        //uncomment below and update the code to test patchOrganizationInvitation
        //instance.patchOrganizationInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchOrganizationMember', function() {
      it('should call patchOrganizationMember successfully', function(done) {
        //uncomment below and update the code to test patchOrganizationMember
        //instance.patchOrganizationMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchOrganizationSettings', function() {
      it('should call patchOrganizationSettings successfully', function(done) {
        //uncomment below and update the code to test patchOrganizationSettings
        //instance.patchOrganizationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganization', function() {
      it('should call updateOrganization successfully', function(done) {
        //uncomment below and update the code to test updateOrganization
        //instance.updateOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationInvitation', function() {
      it('should call updateOrganizationInvitation successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationInvitation
        //instance.updateOrganizationInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationMember', function() {
      it('should call updateOrganizationMember successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationMember
        //instance.updateOrganizationMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrganizationSettings', function() {
      it('should call updateOrganizationSettings successfully', function(done) {
        //uncomment below and update the code to test updateOrganizationSettings
        //instance.updateOrganizationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
