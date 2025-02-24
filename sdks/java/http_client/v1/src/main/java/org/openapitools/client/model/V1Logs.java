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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.8.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1Log;
import org.threeten.bp.OffsetDateTime;

/**
 * V1Logs
 */

public class V1Logs {
  public static final String SERIALIZED_NAME_LOGS = "logs";
  @SerializedName(SERIALIZED_NAME_LOGS)
  private List<V1Log> logs = null;

  public static final String SERIALIZED_NAME_LAST_TIME = "last_time";
  @SerializedName(SERIALIZED_NAME_LAST_TIME)
  private OffsetDateTime lastTime;

  public static final String SERIALIZED_NAME_LAST_FILE = "last_file";
  @SerializedName(SERIALIZED_NAME_LAST_FILE)
  private String lastFile;

  public static final String SERIALIZED_NAME_FILES = "files";
  @SerializedName(SERIALIZED_NAME_FILES)
  private List<String> files = null;


  public V1Logs logs(List<V1Log> logs) {
    
    this.logs = logs;
    return this;
  }

  public V1Logs addLogsItem(V1Log logsItem) {
    if (this.logs == null) {
      this.logs = new ArrayList<V1Log>();
    }
    this.logs.add(logsItem);
    return this;
  }

   /**
   * Get logs
   * @return logs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1Log> getLogs() {
    return logs;
  }


  public void setLogs(List<V1Log> logs) {
    this.logs = logs;
  }


  public V1Logs lastTime(OffsetDateTime lastTime) {
    
    this.lastTime = lastTime;
    return this;
  }

   /**
   * Get lastTime
   * @return lastTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getLastTime() {
    return lastTime;
  }


  public void setLastTime(OffsetDateTime lastTime) {
    this.lastTime = lastTime;
  }


  public V1Logs lastFile(String lastFile) {
    
    this.lastFile = lastFile;
    return this;
  }

   /**
   * Get lastFile
   * @return lastFile
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getLastFile() {
    return lastFile;
  }


  public void setLastFile(String lastFile) {
    this.lastFile = lastFile;
  }


  public V1Logs files(List<String> files) {
    
    this.files = files;
    return this;
  }

  public V1Logs addFilesItem(String filesItem) {
    if (this.files == null) {
      this.files = new ArrayList<String>();
    }
    this.files.add(filesItem);
    return this;
  }

   /**
   * Get files
   * @return files
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getFiles() {
    return files;
  }


  public void setFiles(List<String> files) {
    this.files = files;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Logs v1Logs = (V1Logs) o;
    return Objects.equals(this.logs, v1Logs.logs) &&
        Objects.equals(this.lastTime, v1Logs.lastTime) &&
        Objects.equals(this.lastFile, v1Logs.lastFile) &&
        Objects.equals(this.files, v1Logs.files);
  }

  @Override
  public int hashCode() {
    return Objects.hash(logs, lastTime, lastFile, files);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Logs {\n");
    sb.append("    logs: ").append(toIndentedString(logs)).append("\n");
    sb.append("    lastTime: ").append(toIndentedString(lastTime)).append("\n");
    sb.append("    lastFile: ").append(toIndentedString(lastFile)).append("\n");
    sb.append("    files: ").append(toIndentedString(files)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

