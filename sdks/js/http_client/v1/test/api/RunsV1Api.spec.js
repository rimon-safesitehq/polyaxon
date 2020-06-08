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
    instance = new PolyaxonSdk.RunsV1Api();
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

  describe('RunsV1Api', function() {
    describe('archiveRun', function() {
      it('should call archiveRun successfully', function(done) {
        //uncomment below and update the code to test archiveRun
        //instance.archiveRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bookmarkRun', function() {
      it('should call bookmarkRun successfully', function(done) {
        //uncomment below and update the code to test bookmarkRun
        //instance.bookmarkRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bookmarkRuns', function() {
      it('should call bookmarkRuns successfully', function(done) {
        //uncomment below and update the code to test bookmarkRuns
        //instance.bookmarkRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('collectRunLogs', function() {
      it('should call collectRunLogs successfully', function(done) {
        //uncomment below and update the code to test collectRunLogs
        //instance.collectRunLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('copyRun', function() {
      it('should call copyRun successfully', function(done) {
        //uncomment below and update the code to test copyRun
        //instance.copyRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRun', function() {
      it('should call createRun successfully', function(done) {
        //uncomment below and update the code to test createRun
        //instance.createRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRunArtifactsLineage', function() {
      it('should call createRunArtifactsLineage successfully', function(done) {
        //uncomment below and update the code to test createRunArtifactsLineage
        //instance.createRunArtifactsLineage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRunStatus', function() {
      it('should call createRunStatus successfully', function(done) {
        //uncomment below and update the code to test createRunStatus
        //instance.createRunStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRun', function() {
      it('should call deleteRun successfully', function(done) {
        //uncomment below and update the code to test deleteRun
        //instance.deleteRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRunArtifactLineage', function() {
      it('should call deleteRunArtifactLineage successfully', function(done) {
        //uncomment below and update the code to test deleteRunArtifactLineage
        //instance.deleteRunArtifactLineage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRuns', function() {
      it('should call deleteRuns successfully', function(done) {
        //uncomment below and update the code to test deleteRuns
        //instance.deleteRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMultiRunEvents', function() {
      it('should call getMultiRunEvents successfully', function(done) {
        //uncomment below and update the code to test getMultiRunEvents
        //instance.getMultiRunEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRun', function() {
      it('should call getRun successfully', function(done) {
        //uncomment below and update the code to test getRun
        //instance.getRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunArtifact', function() {
      it('should call getRunArtifact successfully', function(done) {
        //uncomment below and update the code to test getRunArtifact
        //instance.getRunArtifact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunArtifactLineage', function() {
      it('should call getRunArtifactLineage successfully', function(done) {
        //uncomment below and update the code to test getRunArtifactLineage
        //instance.getRunArtifactLineage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunArtifacts', function() {
      it('should call getRunArtifacts successfully', function(done) {
        //uncomment below and update the code to test getRunArtifacts
        //instance.getRunArtifacts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunArtifactsLineage', function() {
      it('should call getRunArtifactsLineage successfully', function(done) {
        //uncomment below and update the code to test getRunArtifactsLineage
        //instance.getRunArtifactsLineage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunArtifactsLineageNames', function() {
      it('should call getRunArtifactsLineageNames successfully', function(done) {
        //uncomment below and update the code to test getRunArtifactsLineageNames
        //instance.getRunArtifactsLineageNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunArtifactsTree', function() {
      it('should call getRunArtifactsTree successfully', function(done) {
        //uncomment below and update the code to test getRunArtifactsTree
        //instance.getRunArtifactsTree(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunEvents', function() {
      it('should call getRunEvents successfully', function(done) {
        //uncomment below and update the code to test getRunEvents
        //instance.getRunEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunLogs', function() {
      it('should call getRunLogs successfully', function(done) {
        //uncomment below and update the code to test getRunLogs
        //instance.getRunLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunNamespace', function() {
      it('should call getRunNamespace successfully', function(done) {
        //uncomment below and update the code to test getRunNamespace
        //instance.getRunNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunResources', function() {
      it('should call getRunResources successfully', function(done) {
        //uncomment below and update the code to test getRunResources
        //instance.getRunResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunSettings', function() {
      it('should call getRunSettings successfully', function(done) {
        //uncomment below and update the code to test getRunSettings
        //instance.getRunSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunStatuses', function() {
      it('should call getRunStatuses successfully', function(done) {
        //uncomment below and update the code to test getRunStatuses
        //instance.getRunStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRunsArtifactsLineage', function() {
      it('should call getRunsArtifactsLineage successfully', function(done) {
        //uncomment below and update the code to test getRunsArtifactsLineage
        //instance.getRunsArtifactsLineage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('impersonateToken', function() {
      it('should call impersonateToken successfully', function(done) {
        //uncomment below and update the code to test impersonateToken
        //instance.impersonateToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invalidateRun', function() {
      it('should call invalidateRun successfully', function(done) {
        //uncomment below and update the code to test invalidateRun
        //instance.invalidateRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invalidateRuns', function() {
      it('should call invalidateRuns successfully', function(done) {
        //uncomment below and update the code to test invalidateRuns
        //instance.invalidateRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listArchivedRuns', function() {
      it('should call listArchivedRuns successfully', function(done) {
        //uncomment below and update the code to test listArchivedRuns
        //instance.listArchivedRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBookmarkedRuns', function() {
      it('should call listBookmarkedRuns successfully', function(done) {
        //uncomment below and update the code to test listBookmarkedRuns
        //instance.listBookmarkedRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRuns', function() {
      it('should call listRuns successfully', function(done) {
        //uncomment below and update the code to test listRuns
        //instance.listRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRunsIo', function() {
      it('should call listRunsIo successfully', function(done) {
        //uncomment below and update the code to test listRunsIo
        //instance.listRunsIo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('notifyRunStatus', function() {
      it('should call notifyRunStatus successfully', function(done) {
        //uncomment below and update the code to test notifyRunStatus
        //instance.notifyRunStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchRun', function() {
      it('should call patchRun successfully', function(done) {
        //uncomment below and update the code to test patchRun
        //instance.patchRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restartRun', function() {
      it('should call restartRun successfully', function(done) {
        //uncomment below and update the code to test restartRun
        //instance.restartRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreRun', function() {
      it('should call restoreRun successfully', function(done) {
        //uncomment below and update the code to test restoreRun
        //instance.restoreRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resumeRun', function() {
      it('should call resumeRun successfully', function(done) {
        //uncomment below and update the code to test resumeRun
        //instance.resumeRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startRunTensorboard', function() {
      it('should call startRunTensorboard successfully', function(done) {
        //uncomment below and update the code to test startRunTensorboard
        //instance.startRunTensorboard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopRun', function() {
      it('should call stopRun successfully', function(done) {
        //uncomment below and update the code to test stopRun
        //instance.stopRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopRunTensorboard', function() {
      it('should call stopRunTensorboard successfully', function(done) {
        //uncomment below and update the code to test stopRunTensorboard
        //instance.stopRunTensorboard(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopRuns', function() {
      it('should call stopRuns successfully', function(done) {
        //uncomment below and update the code to test stopRuns
        //instance.stopRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tagRuns', function() {
      it('should call tagRuns successfully', function(done) {
        //uncomment below and update the code to test tagRuns
        //instance.tagRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unbookmarkRun', function() {
      it('should call unbookmarkRun successfully', function(done) {
        //uncomment below and update the code to test unbookmarkRun
        //instance.unbookmarkRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRun', function() {
      it('should call updateRun successfully', function(done) {
        //uncomment below and update the code to test updateRun
        //instance.updateRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadRunArtifact', function() {
      it('should call uploadRunArtifact successfully', function(done) {
        //uncomment below and update the code to test uploadRunArtifact
        //instance.uploadRunArtifact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadRunLogs', function() {
      it('should call uploadRunLogs successfully', function(done) {
        //uncomment below and update the code to test uploadRunLogs
        //instance.uploadRunLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
