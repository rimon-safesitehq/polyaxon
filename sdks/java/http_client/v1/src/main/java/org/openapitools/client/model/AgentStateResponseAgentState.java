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
 * AgentStateResponseAgentState
 */

public class AgentStateResponseAgentState {
  public static final String SERIALIZED_NAME_SCHEDULES = "schedules";
  @SerializedName(SERIALIZED_NAME_SCHEDULES)
  private Object schedules;

  public static final String SERIALIZED_NAME_HOOKS = "hooks";
  @SerializedName(SERIALIZED_NAME_HOOKS)
  private Object hooks;

  public static final String SERIALIZED_NAME_WATCHDOGS = "watchdogs";
  @SerializedName(SERIALIZED_NAME_WATCHDOGS)
  private Object watchdogs;

  public static final String SERIALIZED_NAME_TUNERS = "tuners";
  @SerializedName(SERIALIZED_NAME_TUNERS)
  private Object tuners;

  public static final String SERIALIZED_NAME_QUEUED = "queued";
  @SerializedName(SERIALIZED_NAME_QUEUED)
  private Object queued;

  public static final String SERIALIZED_NAME_STOPPING = "stopping";
  @SerializedName(SERIALIZED_NAME_STOPPING)
  private Object stopping;

  public static final String SERIALIZED_NAME_DELETING = "deleting";
  @SerializedName(SERIALIZED_NAME_DELETING)
  private Object deleting;

  public static final String SERIALIZED_NAME_APPLY = "apply";
  @SerializedName(SERIALIZED_NAME_APPLY)
  private Object apply;

  public static final String SERIALIZED_NAME_FULL = "full";
  @SerializedName(SERIALIZED_NAME_FULL)
  private Boolean full;


  public AgentStateResponseAgentState schedules(Object schedules) {
    
    this.schedules = schedules;
    return this;
  }

   /**
   * Get schedules
   * @return schedules
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getSchedules() {
    return schedules;
  }


  public void setSchedules(Object schedules) {
    this.schedules = schedules;
  }


  public AgentStateResponseAgentState hooks(Object hooks) {
    
    this.hooks = hooks;
    return this;
  }

   /**
   * Get hooks
   * @return hooks
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getHooks() {
    return hooks;
  }


  public void setHooks(Object hooks) {
    this.hooks = hooks;
  }


  public AgentStateResponseAgentState watchdogs(Object watchdogs) {
    
    this.watchdogs = watchdogs;
    return this;
  }

   /**
   * Get watchdogs
   * @return watchdogs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getWatchdogs() {
    return watchdogs;
  }


  public void setWatchdogs(Object watchdogs) {
    this.watchdogs = watchdogs;
  }


  public AgentStateResponseAgentState tuners(Object tuners) {
    
    this.tuners = tuners;
    return this;
  }

   /**
   * Get tuners
   * @return tuners
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getTuners() {
    return tuners;
  }


  public void setTuners(Object tuners) {
    this.tuners = tuners;
  }


  public AgentStateResponseAgentState queued(Object queued) {
    
    this.queued = queued;
    return this;
  }

   /**
   * Get queued
   * @return queued
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getQueued() {
    return queued;
  }


  public void setQueued(Object queued) {
    this.queued = queued;
  }


  public AgentStateResponseAgentState stopping(Object stopping) {
    
    this.stopping = stopping;
    return this;
  }

   /**
   * Get stopping
   * @return stopping
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getStopping() {
    return stopping;
  }


  public void setStopping(Object stopping) {
    this.stopping = stopping;
  }


  public AgentStateResponseAgentState deleting(Object deleting) {
    
    this.deleting = deleting;
    return this;
  }

   /**
   * Get deleting
   * @return deleting
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getDeleting() {
    return deleting;
  }


  public void setDeleting(Object deleting) {
    this.deleting = deleting;
  }


  public AgentStateResponseAgentState apply(Object apply) {
    
    this.apply = apply;
    return this;
  }

   /**
   * Get apply
   * @return apply
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getApply() {
    return apply;
  }


  public void setApply(Object apply) {
    this.apply = apply;
  }


  public AgentStateResponseAgentState full(Boolean full) {
    
    this.full = full;
    return this;
  }

   /**
   * Get full
   * @return full
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getFull() {
    return full;
  }


  public void setFull(Boolean full) {
    this.full = full;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AgentStateResponseAgentState agentStateResponseAgentState = (AgentStateResponseAgentState) o;
    return Objects.equals(this.schedules, agentStateResponseAgentState.schedules) &&
        Objects.equals(this.hooks, agentStateResponseAgentState.hooks) &&
        Objects.equals(this.watchdogs, agentStateResponseAgentState.watchdogs) &&
        Objects.equals(this.tuners, agentStateResponseAgentState.tuners) &&
        Objects.equals(this.queued, agentStateResponseAgentState.queued) &&
        Objects.equals(this.stopping, agentStateResponseAgentState.stopping) &&
        Objects.equals(this.deleting, agentStateResponseAgentState.deleting) &&
        Objects.equals(this.apply, agentStateResponseAgentState.apply) &&
        Objects.equals(this.full, agentStateResponseAgentState.full);
  }

  @Override
  public int hashCode() {
    return Objects.hash(schedules, hooks, watchdogs, tuners, queued, stopping, deleting, apply, full);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AgentStateResponseAgentState {\n");
    sb.append("    schedules: ").append(toIndentedString(schedules)).append("\n");
    sb.append("    hooks: ").append(toIndentedString(hooks)).append("\n");
    sb.append("    watchdogs: ").append(toIndentedString(watchdogs)).append("\n");
    sb.append("    tuners: ").append(toIndentedString(tuners)).append("\n");
    sb.append("    queued: ").append(toIndentedString(queued)).append("\n");
    sb.append("    stopping: ").append(toIndentedString(stopping)).append("\n");
    sb.append("    deleting: ").append(toIndentedString(deleting)).append("\n");
    sb.append("    apply: ").append(toIndentedString(apply)).append("\n");
    sb.append("    full: ").append(toIndentedString(full)).append("\n");
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

