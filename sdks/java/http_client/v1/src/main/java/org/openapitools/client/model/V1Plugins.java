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
import org.openapitools.client.model.V1Notification;
import org.openapitools.client.model.V1PolyaxonSidecarContainer;

/**
 * V1Plugins
 */

public class V1Plugins {
  public static final String SERIALIZED_NAME_AUTH = "auth";
  @SerializedName(SERIALIZED_NAME_AUTH)
  private Boolean auth;

  public static final String SERIALIZED_NAME_DOCKER = "docker";
  @SerializedName(SERIALIZED_NAME_DOCKER)
  private Boolean docker;

  public static final String SERIALIZED_NAME_SHM = "shm";
  @SerializedName(SERIALIZED_NAME_SHM)
  private Boolean shm;

  public static final String SERIALIZED_NAME_COLLECT_ARTIFACTS = "collectArtifacts";
  @SerializedName(SERIALIZED_NAME_COLLECT_ARTIFACTS)
  private Boolean collectArtifacts;

  public static final String SERIALIZED_NAME_COLLECT_LOGS = "collectLogs";
  @SerializedName(SERIALIZED_NAME_COLLECT_LOGS)
  private Boolean collectLogs;

  public static final String SERIALIZED_NAME_COLLECT_RESOURCES = "collectResources";
  @SerializedName(SERIALIZED_NAME_COLLECT_RESOURCES)
  private String collectResources;

  public static final String SERIALIZED_NAME_SYNC_STATUSES = "syncStatuses";
  @SerializedName(SERIALIZED_NAME_SYNC_STATUSES)
  private Boolean syncStatuses;

  public static final String SERIALIZED_NAME_AUTO_RESUME = "autoResume";
  @SerializedName(SERIALIZED_NAME_AUTO_RESUME)
  private Boolean autoResume;

  public static final String SERIALIZED_NAME_LOG_LEVEL = "logLevel";
  @SerializedName(SERIALIZED_NAME_LOG_LEVEL)
  private String logLevel;

  public static final String SERIALIZED_NAME_EXTERNAL_HOST = "externalHost";
  @SerializedName(SERIALIZED_NAME_EXTERNAL_HOST)
  private Boolean externalHost;

  public static final String SERIALIZED_NAME_SIDECAR = "sidecar";
  @SerializedName(SERIALIZED_NAME_SIDECAR)
  private V1PolyaxonSidecarContainer sidecar;

  public static final String SERIALIZED_NAME_NOTIFICATIONS = "notifications";
  @SerializedName(SERIALIZED_NAME_NOTIFICATIONS)
  private List<V1Notification> notifications = null;


  public V1Plugins auth(Boolean auth) {
    
    this.auth = auth;
    return this;
  }

   /**
   * Get auth
   * @return auth
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getAuth() {
    return auth;
  }


  public void setAuth(Boolean auth) {
    this.auth = auth;
  }


  public V1Plugins docker(Boolean docker) {
    
    this.docker = docker;
    return this;
  }

   /**
   * Get docker
   * @return docker
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getDocker() {
    return docker;
  }


  public void setDocker(Boolean docker) {
    this.docker = docker;
  }


  public V1Plugins shm(Boolean shm) {
    
    this.shm = shm;
    return this;
  }

   /**
   * Get shm
   * @return shm
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getShm() {
    return shm;
  }


  public void setShm(Boolean shm) {
    this.shm = shm;
  }


  public V1Plugins collectArtifacts(Boolean collectArtifacts) {
    
    this.collectArtifacts = collectArtifacts;
    return this;
  }

   /**
   * Get collectArtifacts
   * @return collectArtifacts
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getCollectArtifacts() {
    return collectArtifacts;
  }


  public void setCollectArtifacts(Boolean collectArtifacts) {
    this.collectArtifacts = collectArtifacts;
  }


  public V1Plugins collectLogs(Boolean collectLogs) {
    
    this.collectLogs = collectLogs;
    return this;
  }

   /**
   * Get collectLogs
   * @return collectLogs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getCollectLogs() {
    return collectLogs;
  }


  public void setCollectLogs(Boolean collectLogs) {
    this.collectLogs = collectLogs;
  }


  public V1Plugins collectResources(String collectResources) {
    
    this.collectResources = collectResources;
    return this;
  }

   /**
   * Get collectResources
   * @return collectResources
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getCollectResources() {
    return collectResources;
  }


  public void setCollectResources(String collectResources) {
    this.collectResources = collectResources;
  }


  public V1Plugins syncStatuses(Boolean syncStatuses) {
    
    this.syncStatuses = syncStatuses;
    return this;
  }

   /**
   * Get syncStatuses
   * @return syncStatuses
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getSyncStatuses() {
    return syncStatuses;
  }


  public void setSyncStatuses(Boolean syncStatuses) {
    this.syncStatuses = syncStatuses;
  }


  public V1Plugins autoResume(Boolean autoResume) {
    
    this.autoResume = autoResume;
    return this;
  }

   /**
   * Get autoResume
   * @return autoResume
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getAutoResume() {
    return autoResume;
  }


  public void setAutoResume(Boolean autoResume) {
    this.autoResume = autoResume;
  }


  public V1Plugins logLevel(String logLevel) {
    
    this.logLevel = logLevel;
    return this;
  }

   /**
   * Get logLevel
   * @return logLevel
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getLogLevel() {
    return logLevel;
  }


  public void setLogLevel(String logLevel) {
    this.logLevel = logLevel;
  }


  public V1Plugins externalHost(Boolean externalHost) {
    
    this.externalHost = externalHost;
    return this;
  }

   /**
   * Get externalHost
   * @return externalHost
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getExternalHost() {
    return externalHost;
  }


  public void setExternalHost(Boolean externalHost) {
    this.externalHost = externalHost;
  }


  public V1Plugins sidecar(V1PolyaxonSidecarContainer sidecar) {
    
    this.sidecar = sidecar;
    return this;
  }

   /**
   * Get sidecar
   * @return sidecar
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1PolyaxonSidecarContainer getSidecar() {
    return sidecar;
  }


  public void setSidecar(V1PolyaxonSidecarContainer sidecar) {
    this.sidecar = sidecar;
  }


  public V1Plugins notifications(List<V1Notification> notifications) {
    
    this.notifications = notifications;
    return this;
  }

  public V1Plugins addNotificationsItem(V1Notification notificationsItem) {
    if (this.notifications == null) {
      this.notifications = new ArrayList<V1Notification>();
    }
    this.notifications.add(notificationsItem);
    return this;
  }

   /**
   * Get notifications
   * @return notifications
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1Notification> getNotifications() {
    return notifications;
  }


  public void setNotifications(List<V1Notification> notifications) {
    this.notifications = notifications;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Plugins v1Plugins = (V1Plugins) o;
    return Objects.equals(this.auth, v1Plugins.auth) &&
        Objects.equals(this.docker, v1Plugins.docker) &&
        Objects.equals(this.shm, v1Plugins.shm) &&
        Objects.equals(this.collectArtifacts, v1Plugins.collectArtifacts) &&
        Objects.equals(this.collectLogs, v1Plugins.collectLogs) &&
        Objects.equals(this.collectResources, v1Plugins.collectResources) &&
        Objects.equals(this.syncStatuses, v1Plugins.syncStatuses) &&
        Objects.equals(this.autoResume, v1Plugins.autoResume) &&
        Objects.equals(this.logLevel, v1Plugins.logLevel) &&
        Objects.equals(this.externalHost, v1Plugins.externalHost) &&
        Objects.equals(this.sidecar, v1Plugins.sidecar) &&
        Objects.equals(this.notifications, v1Plugins.notifications);
  }

  @Override
  public int hashCode() {
    return Objects.hash(auth, docker, shm, collectArtifacts, collectLogs, collectResources, syncStatuses, autoResume, logLevel, externalHost, sidecar, notifications);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Plugins {\n");
    sb.append("    auth: ").append(toIndentedString(auth)).append("\n");
    sb.append("    docker: ").append(toIndentedString(docker)).append("\n");
    sb.append("    shm: ").append(toIndentedString(shm)).append("\n");
    sb.append("    collectArtifacts: ").append(toIndentedString(collectArtifacts)).append("\n");
    sb.append("    collectLogs: ").append(toIndentedString(collectLogs)).append("\n");
    sb.append("    collectResources: ").append(toIndentedString(collectResources)).append("\n");
    sb.append("    syncStatuses: ").append(toIndentedString(syncStatuses)).append("\n");
    sb.append("    autoResume: ").append(toIndentedString(autoResume)).append("\n");
    sb.append("    logLevel: ").append(toIndentedString(logLevel)).append("\n");
    sb.append("    externalHost: ").append(toIndentedString(externalHost)).append("\n");
    sb.append("    sidecar: ").append(toIndentedString(sidecar)).append("\n");
    sb.append("    notifications: ").append(toIndentedString(notifications)).append("\n");
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

