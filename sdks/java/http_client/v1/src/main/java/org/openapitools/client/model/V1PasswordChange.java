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

/**
 * V1PasswordChange
 */

public class V1PasswordChange {
  public static final String SERIALIZED_NAME_OLD_PASSWORD = "old_password";
  @SerializedName(SERIALIZED_NAME_OLD_PASSWORD)
  private String oldPassword;

  public static final String SERIALIZED_NAME_NEW_PASSWORD1 = "new_password1";
  @SerializedName(SERIALIZED_NAME_NEW_PASSWORD1)
  private String newPassword1;

  public static final String SERIALIZED_NAME_NEW_PASSWORD2 = "new_password2";
  @SerializedName(SERIALIZED_NAME_NEW_PASSWORD2)
  private String newPassword2;


  public V1PasswordChange oldPassword(String oldPassword) {
    
    this.oldPassword = oldPassword;
    return this;
  }

   /**
   * Get oldPassword
   * @return oldPassword
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getOldPassword() {
    return oldPassword;
  }


  public void setOldPassword(String oldPassword) {
    this.oldPassword = oldPassword;
  }


  public V1PasswordChange newPassword1(String newPassword1) {
    
    this.newPassword1 = newPassword1;
    return this;
  }

   /**
   * Get newPassword1
   * @return newPassword1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNewPassword1() {
    return newPassword1;
  }


  public void setNewPassword1(String newPassword1) {
    this.newPassword1 = newPassword1;
  }


  public V1PasswordChange newPassword2(String newPassword2) {
    
    this.newPassword2 = newPassword2;
    return this;
  }

   /**
   * Get newPassword2
   * @return newPassword2
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNewPassword2() {
    return newPassword2;
  }


  public void setNewPassword2(String newPassword2) {
    this.newPassword2 = newPassword2;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1PasswordChange v1PasswordChange = (V1PasswordChange) o;
    return Objects.equals(this.oldPassword, v1PasswordChange.oldPassword) &&
        Objects.equals(this.newPassword1, v1PasswordChange.newPassword1) &&
        Objects.equals(this.newPassword2, v1PasswordChange.newPassword2);
  }

  @Override
  public int hashCode() {
    return Objects.hash(oldPassword, newPassword1, newPassword2);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1PasswordChange {\n");
    sb.append("    oldPassword: ").append(toIndentedString(oldPassword)).append("\n");
    sb.append("    newPassword1: ").append(toIndentedString(newPassword1)).append("\n");
    sb.append("    newPassword2: ").append(toIndentedString(newPassword2)).append("\n");
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

