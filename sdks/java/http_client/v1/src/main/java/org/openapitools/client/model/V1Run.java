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
import org.openapitools.client.model.V1Cloning;
import org.openapitools.client.model.V1Pipeline;
import org.openapitools.client.model.V1RunKind;
import org.openapitools.client.model.V1RunSettings;
import org.openapitools.client.model.V1StatusCondition;
import org.openapitools.client.model.V1Statuses;
import org.threeten.bp.OffsetDateTime;

/**
 * V1Run
 */

public class V1Run {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags = null;

  public static final String SERIALIZED_NAME_USER = "user";
  @SerializedName(SERIALIZED_NAME_USER)
  private String user;

  public static final String SERIALIZED_NAME_OWNER = "owner";
  @SerializedName(SERIALIZED_NAME_OWNER)
  private String owner;

  public static final String SERIALIZED_NAME_PROJECT = "project";
  @SerializedName(SERIALIZED_NAME_PROJECT)
  private String project;

  public static final String SERIALIZED_NAME_SCHEDULE_AT = "schedule_at";
  @SerializedName(SERIALIZED_NAME_SCHEDULE_AT)
  private OffsetDateTime scheduleAt;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_STARTED_AT = "started_at";
  @SerializedName(SERIALIZED_NAME_STARTED_AT)
  private OffsetDateTime startedAt;

  public static final String SERIALIZED_NAME_FINISHED_AT = "finished_at";
  @SerializedName(SERIALIZED_NAME_FINISHED_AT)
  private OffsetDateTime finishedAt;

  public static final String SERIALIZED_NAME_WAIT_TIME = "wait_time";
  @SerializedName(SERIALIZED_NAME_WAIT_TIME)
  private Integer waitTime;

  public static final String SERIALIZED_NAME_DURATION = "duration";
  @SerializedName(SERIALIZED_NAME_DURATION)
  private Integer duration;

  public static final String SERIALIZED_NAME_IS_MANAGED = "is_managed";
  @SerializedName(SERIALIZED_NAME_IS_MANAGED)
  private Boolean isManaged;

  public static final String SERIALIZED_NAME_IS_APPROVED = "is_approved";
  @SerializedName(SERIALIZED_NAME_IS_APPROVED)
  private Boolean isApproved;

  public static final String SERIALIZED_NAME_CONTENT = "content";
  @SerializedName(SERIALIZED_NAME_CONTENT)
  private String content;

  public static final String SERIALIZED_NAME_RAW_CONTENT = "raw_content";
  @SerializedName(SERIALIZED_NAME_RAW_CONTENT)
  private String rawContent;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private V1Statuses status = V1Statuses.CREATED;

  public static final String SERIALIZED_NAME_BOOKMARKED = "bookmarked";
  @SerializedName(SERIALIZED_NAME_BOOKMARKED)
  private Boolean bookmarked;

  public static final String SERIALIZED_NAME_LIVE_STATE = "live_state";
  @SerializedName(SERIALIZED_NAME_LIVE_STATE)
  private Integer liveState;

  public static final String SERIALIZED_NAME_README = "readme";
  @SerializedName(SERIALIZED_NAME_README)
  private String readme;

  public static final String SERIALIZED_NAME_META_INFO = "meta_info";
  @SerializedName(SERIALIZED_NAME_META_INFO)
  private Object metaInfo;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private V1RunKind kind = V1RunKind.JOB;

  public static final String SERIALIZED_NAME_RUNTIME = "runtime";
  @SerializedName(SERIALIZED_NAME_RUNTIME)
  private V1RunKind runtime = V1RunKind.JOB;

  public static final String SERIALIZED_NAME_INPUTS = "inputs";
  @SerializedName(SERIALIZED_NAME_INPUTS)
  private Object inputs;

  public static final String SERIALIZED_NAME_OUTPUTS = "outputs";
  @SerializedName(SERIALIZED_NAME_OUTPUTS)
  private Object outputs;

  public static final String SERIALIZED_NAME_ORIGINAL = "original";
  @SerializedName(SERIALIZED_NAME_ORIGINAL)
  private V1Cloning original;

  public static final String SERIALIZED_NAME_PIPELINE = "pipeline";
  @SerializedName(SERIALIZED_NAME_PIPELINE)
  private V1Pipeline pipeline;

  public static final String SERIALIZED_NAME_STATUS_CONDITIONS = "status_conditions";
  @SerializedName(SERIALIZED_NAME_STATUS_CONDITIONS)
  private List<V1StatusCondition> statusConditions = null;

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private String role;

  public static final String SERIALIZED_NAME_SETTINGS = "settings";
  @SerializedName(SERIALIZED_NAME_SETTINGS)
  private V1RunSettings settings;

  public static final String SERIALIZED_NAME_GRAPH = "graph";
  @SerializedName(SERIALIZED_NAME_GRAPH)
  private Object graph;

  public static final String SERIALIZED_NAME_MERGE = "merge";
  @SerializedName(SERIALIZED_NAME_MERGE)
  private Boolean merge;


  public V1Run uuid(String uuid) {
    
    this.uuid = uuid;
    return this;
  }

   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUuid() {
    return uuid;
  }


  public void setUuid(String uuid) {
    this.uuid = uuid;
  }


  public V1Run name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public V1Run description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public V1Run tags(List<String> tags) {
    
    this.tags = tags;
    return this;
  }

  public V1Run addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<String>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getTags() {
    return tags;
  }


  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  public V1Run user(String user) {
    
    this.user = user;
    return this;
  }

   /**
   * Get user
   * @return user
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUser() {
    return user;
  }


  public void setUser(String user) {
    this.user = user;
  }


  public V1Run owner(String owner) {
    
    this.owner = owner;
    return this;
  }

   /**
   * Get owner
   * @return owner
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getOwner() {
    return owner;
  }


  public void setOwner(String owner) {
    this.owner = owner;
  }


  public V1Run project(String project) {
    
    this.project = project;
    return this;
  }

   /**
   * Get project
   * @return project
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getProject() {
    return project;
  }


  public void setProject(String project) {
    this.project = project;
  }


  public V1Run scheduleAt(OffsetDateTime scheduleAt) {
    
    this.scheduleAt = scheduleAt;
    return this;
  }

   /**
   * Get scheduleAt
   * @return scheduleAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getScheduleAt() {
    return scheduleAt;
  }


  public void setScheduleAt(OffsetDateTime scheduleAt) {
    this.scheduleAt = scheduleAt;
  }


  public V1Run createdAt(OffsetDateTime createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public V1Run updatedAt(OffsetDateTime updatedAt) {
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  public V1Run startedAt(OffsetDateTime startedAt) {
    
    this.startedAt = startedAt;
    return this;
  }

   /**
   * Get startedAt
   * @return startedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getStartedAt() {
    return startedAt;
  }


  public void setStartedAt(OffsetDateTime startedAt) {
    this.startedAt = startedAt;
  }


  public V1Run finishedAt(OffsetDateTime finishedAt) {
    
    this.finishedAt = finishedAt;
    return this;
  }

   /**
   * Get finishedAt
   * @return finishedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getFinishedAt() {
    return finishedAt;
  }


  public void setFinishedAt(OffsetDateTime finishedAt) {
    this.finishedAt = finishedAt;
  }


  public V1Run waitTime(Integer waitTime) {
    
    this.waitTime = waitTime;
    return this;
  }

   /**
   * Get waitTime
   * @return waitTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getWaitTime() {
    return waitTime;
  }


  public void setWaitTime(Integer waitTime) {
    this.waitTime = waitTime;
  }


  public V1Run duration(Integer duration) {
    
    this.duration = duration;
    return this;
  }

   /**
   * Get duration
   * @return duration
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getDuration() {
    return duration;
  }


  public void setDuration(Integer duration) {
    this.duration = duration;
  }


  public V1Run isManaged(Boolean isManaged) {
    
    this.isManaged = isManaged;
    return this;
  }

   /**
   * Get isManaged
   * @return isManaged
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getIsManaged() {
    return isManaged;
  }


  public void setIsManaged(Boolean isManaged) {
    this.isManaged = isManaged;
  }


  public V1Run isApproved(Boolean isApproved) {
    
    this.isApproved = isApproved;
    return this;
  }

   /**
   * Get isApproved
   * @return isApproved
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getIsApproved() {
    return isApproved;
  }


  public void setIsApproved(Boolean isApproved) {
    this.isApproved = isApproved;
  }


  public V1Run content(String content) {
    
    this.content = content;
    return this;
  }

   /**
   * Get content
   * @return content
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getContent() {
    return content;
  }


  public void setContent(String content) {
    this.content = content;
  }


  public V1Run rawContent(String rawContent) {
    
    this.rawContent = rawContent;
    return this;
  }

   /**
   * Get rawContent
   * @return rawContent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getRawContent() {
    return rawContent;
  }


  public void setRawContent(String rawContent) {
    this.rawContent = rawContent;
  }


  public V1Run status(V1Statuses status) {
    
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Statuses getStatus() {
    return status;
  }


  public void setStatus(V1Statuses status) {
    this.status = status;
  }


  public V1Run bookmarked(Boolean bookmarked) {
    
    this.bookmarked = bookmarked;
    return this;
  }

   /**
   * Get bookmarked
   * @return bookmarked
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getBookmarked() {
    return bookmarked;
  }


  public void setBookmarked(Boolean bookmarked) {
    this.bookmarked = bookmarked;
  }


  public V1Run liveState(Integer liveState) {
    
    this.liveState = liveState;
    return this;
  }

   /**
   * Get liveState
   * @return liveState
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getLiveState() {
    return liveState;
  }


  public void setLiveState(Integer liveState) {
    this.liveState = liveState;
  }


  public V1Run readme(String readme) {
    
    this.readme = readme;
    return this;
  }

   /**
   * Get readme
   * @return readme
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getReadme() {
    return readme;
  }


  public void setReadme(String readme) {
    this.readme = readme;
  }


  public V1Run metaInfo(Object metaInfo) {
    
    this.metaInfo = metaInfo;
    return this;
  }

   /**
   * Get metaInfo
   * @return metaInfo
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getMetaInfo() {
    return metaInfo;
  }


  public void setMetaInfo(Object metaInfo) {
    this.metaInfo = metaInfo;
  }


  public V1Run kind(V1RunKind kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunKind getKind() {
    return kind;
  }


  public void setKind(V1RunKind kind) {
    this.kind = kind;
  }


  public V1Run runtime(V1RunKind runtime) {
    
    this.runtime = runtime;
    return this;
  }

   /**
   * Get runtime
   * @return runtime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunKind getRuntime() {
    return runtime;
  }


  public void setRuntime(V1RunKind runtime) {
    this.runtime = runtime;
  }


  public V1Run inputs(Object inputs) {
    
    this.inputs = inputs;
    return this;
  }

   /**
   * Get inputs
   * @return inputs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getInputs() {
    return inputs;
  }


  public void setInputs(Object inputs) {
    this.inputs = inputs;
  }


  public V1Run outputs(Object outputs) {
    
    this.outputs = outputs;
    return this;
  }

   /**
   * Get outputs
   * @return outputs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getOutputs() {
    return outputs;
  }


  public void setOutputs(Object outputs) {
    this.outputs = outputs;
  }


  public V1Run original(V1Cloning original) {
    
    this.original = original;
    return this;
  }

   /**
   * Get original
   * @return original
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Cloning getOriginal() {
    return original;
  }


  public void setOriginal(V1Cloning original) {
    this.original = original;
  }


  public V1Run pipeline(V1Pipeline pipeline) {
    
    this.pipeline = pipeline;
    return this;
  }

   /**
   * Get pipeline
   * @return pipeline
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Pipeline getPipeline() {
    return pipeline;
  }


  public void setPipeline(V1Pipeline pipeline) {
    this.pipeline = pipeline;
  }


  public V1Run statusConditions(List<V1StatusCondition> statusConditions) {
    
    this.statusConditions = statusConditions;
    return this;
  }

  public V1Run addStatusConditionsItem(V1StatusCondition statusConditionsItem) {
    if (this.statusConditions == null) {
      this.statusConditions = new ArrayList<V1StatusCondition>();
    }
    this.statusConditions.add(statusConditionsItem);
    return this;
  }

   /**
   * Get statusConditions
   * @return statusConditions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1StatusCondition> getStatusConditions() {
    return statusConditions;
  }


  public void setStatusConditions(List<V1StatusCondition> statusConditions) {
    this.statusConditions = statusConditions;
  }


  public V1Run role(String role) {
    
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getRole() {
    return role;
  }


  public void setRole(String role) {
    this.role = role;
  }


  public V1Run settings(V1RunSettings settings) {
    
    this.settings = settings;
    return this;
  }

   /**
   * Get settings
   * @return settings
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunSettings getSettings() {
    return settings;
  }


  public void setSettings(V1RunSettings settings) {
    this.settings = settings;
  }


  public V1Run graph(Object graph) {
    
    this.graph = graph;
    return this;
  }

   /**
   * Get graph
   * @return graph
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getGraph() {
    return graph;
  }


  public void setGraph(Object graph) {
    this.graph = graph;
  }


  public V1Run merge(Boolean merge) {
    
    this.merge = merge;
    return this;
  }

   /**
   * Get merge
   * @return merge
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getMerge() {
    return merge;
  }


  public void setMerge(Boolean merge) {
    this.merge = merge;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Run v1Run = (V1Run) o;
    return Objects.equals(this.uuid, v1Run.uuid) &&
        Objects.equals(this.name, v1Run.name) &&
        Objects.equals(this.description, v1Run.description) &&
        Objects.equals(this.tags, v1Run.tags) &&
        Objects.equals(this.user, v1Run.user) &&
        Objects.equals(this.owner, v1Run.owner) &&
        Objects.equals(this.project, v1Run.project) &&
        Objects.equals(this.scheduleAt, v1Run.scheduleAt) &&
        Objects.equals(this.createdAt, v1Run.createdAt) &&
        Objects.equals(this.updatedAt, v1Run.updatedAt) &&
        Objects.equals(this.startedAt, v1Run.startedAt) &&
        Objects.equals(this.finishedAt, v1Run.finishedAt) &&
        Objects.equals(this.waitTime, v1Run.waitTime) &&
        Objects.equals(this.duration, v1Run.duration) &&
        Objects.equals(this.isManaged, v1Run.isManaged) &&
        Objects.equals(this.isApproved, v1Run.isApproved) &&
        Objects.equals(this.content, v1Run.content) &&
        Objects.equals(this.rawContent, v1Run.rawContent) &&
        Objects.equals(this.status, v1Run.status) &&
        Objects.equals(this.bookmarked, v1Run.bookmarked) &&
        Objects.equals(this.liveState, v1Run.liveState) &&
        Objects.equals(this.readme, v1Run.readme) &&
        Objects.equals(this.metaInfo, v1Run.metaInfo) &&
        Objects.equals(this.kind, v1Run.kind) &&
        Objects.equals(this.runtime, v1Run.runtime) &&
        Objects.equals(this.inputs, v1Run.inputs) &&
        Objects.equals(this.outputs, v1Run.outputs) &&
        Objects.equals(this.original, v1Run.original) &&
        Objects.equals(this.pipeline, v1Run.pipeline) &&
        Objects.equals(this.statusConditions, v1Run.statusConditions) &&
        Objects.equals(this.role, v1Run.role) &&
        Objects.equals(this.settings, v1Run.settings) &&
        Objects.equals(this.graph, v1Run.graph) &&
        Objects.equals(this.merge, v1Run.merge);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, name, description, tags, user, owner, project, scheduleAt, createdAt, updatedAt, startedAt, finishedAt, waitTime, duration, isManaged, isApproved, content, rawContent, status, bookmarked, liveState, readme, metaInfo, kind, runtime, inputs, outputs, original, pipeline, statusConditions, role, settings, graph, merge);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Run {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    project: ").append(toIndentedString(project)).append("\n");
    sb.append("    scheduleAt: ").append(toIndentedString(scheduleAt)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    startedAt: ").append(toIndentedString(startedAt)).append("\n");
    sb.append("    finishedAt: ").append(toIndentedString(finishedAt)).append("\n");
    sb.append("    waitTime: ").append(toIndentedString(waitTime)).append("\n");
    sb.append("    duration: ").append(toIndentedString(duration)).append("\n");
    sb.append("    isManaged: ").append(toIndentedString(isManaged)).append("\n");
    sb.append("    isApproved: ").append(toIndentedString(isApproved)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    rawContent: ").append(toIndentedString(rawContent)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    bookmarked: ").append(toIndentedString(bookmarked)).append("\n");
    sb.append("    liveState: ").append(toIndentedString(liveState)).append("\n");
    sb.append("    readme: ").append(toIndentedString(readme)).append("\n");
    sb.append("    metaInfo: ").append(toIndentedString(metaInfo)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    runtime: ").append(toIndentedString(runtime)).append("\n");
    sb.append("    inputs: ").append(toIndentedString(inputs)).append("\n");
    sb.append("    outputs: ").append(toIndentedString(outputs)).append("\n");
    sb.append("    original: ").append(toIndentedString(original)).append("\n");
    sb.append("    pipeline: ").append(toIndentedString(pipeline)).append("\n");
    sb.append("    statusConditions: ").append(toIndentedString(statusConditions)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    settings: ").append(toIndentedString(settings)).append("\n");
    sb.append("    graph: ").append(toIndentedString(graph)).append("\n");
    sb.append("    merge: ").append(toIndentedString(merge)).append("\n");
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

