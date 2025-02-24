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

/**
 * V1Uuids
 */

public class V1Uuids {
  public static final String SERIALIZED_NAME_UUIDS = "uuids";
  @SerializedName(SERIALIZED_NAME_UUIDS)
  private List<String> uuids = null;


  public V1Uuids uuids(List<String> uuids) {
    
    this.uuids = uuids;
    return this;
  }

  public V1Uuids addUuidsItem(String uuidsItem) {
    if (this.uuids == null) {
      this.uuids = new ArrayList<String>();
    }
    this.uuids.add(uuidsItem);
    return this;
  }

   /**
   * Get uuids
   * @return uuids
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getUuids() {
    return uuids;
  }


  public void setUuids(List<String> uuids) {
    this.uuids = uuids;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Uuids v1Uuids = (V1Uuids) o;
    return Objects.equals(this.uuids, v1Uuids.uuids);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuids);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Uuids {\n");
    sb.append("    uuids: ").append(toIndentedString(uuids)).append("\n");
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

