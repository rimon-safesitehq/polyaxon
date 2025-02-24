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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.openapitools.client.model.V1Cache;
import org.openapitools.client.model.V1EventTrigger;
import org.openapitools.client.model.V1Hook;
import org.openapitools.client.model.V1IO;
import org.openapitools.client.model.V1Join;
import org.openapitools.client.model.V1Plugins;
import org.openapitools.client.model.V1Termination;
import org.openapitools.client.model.V1TriggerPolicy;

/**
 * V1CompiledOperation
 */

public class V1CompiledOperation {
  public static final String SERIALIZED_NAME_VERSION = "version";
  @SerializedName(SERIALIZED_NAME_VERSION)
  private Float version;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags = null;

  public static final String SERIALIZED_NAME_PRESETS = "presets";
  @SerializedName(SERIALIZED_NAME_PRESETS)
  private List<String> presets = null;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private String queue;

  public static final String SERIALIZED_NAME_CACHE = "cache";
  @SerializedName(SERIALIZED_NAME_CACHE)
  private V1Cache cache;

  public static final String SERIALIZED_NAME_TERMINATION = "termination";
  @SerializedName(SERIALIZED_NAME_TERMINATION)
  private V1Termination termination;

  public static final String SERIALIZED_NAME_PLUGINS = "plugins";
  @SerializedName(SERIALIZED_NAME_PLUGINS)
  private V1Plugins plugins;

  public static final String SERIALIZED_NAME_SCHEDULE = "schedule";
  @SerializedName(SERIALIZED_NAME_SCHEDULE)
  private Object schedule;

  public static final String SERIALIZED_NAME_EVENTS = "events";
  @SerializedName(SERIALIZED_NAME_EVENTS)
  private List<V1EventTrigger> events = null;

  public static final String SERIALIZED_NAME_HOOKS = "hooks";
  @SerializedName(SERIALIZED_NAME_HOOKS)
  private List<V1Hook> hooks = null;

  public static final String SERIALIZED_NAME_DEPENDENCIES = "dependencies";
  @SerializedName(SERIALIZED_NAME_DEPENDENCIES)
  private List<String> dependencies = null;

  public static final String SERIALIZED_NAME_TRIGGER = "trigger";
  @SerializedName(SERIALIZED_NAME_TRIGGER)
  private V1TriggerPolicy trigger = V1TriggerPolicy.ALL_SUCCEEDED;

  public static final String SERIALIZED_NAME_CONDITIONS = "conditions";
  @SerializedName(SERIALIZED_NAME_CONDITIONS)
  private String conditions;

  public static final String SERIALIZED_NAME_SKIP_ON_UPSTREAM_SKIP = "skipOnUpstreamSkip";
  @SerializedName(SERIALIZED_NAME_SKIP_ON_UPSTREAM_SKIP)
  private Boolean skipOnUpstreamSkip;

  public static final String SERIALIZED_NAME_MATRIX = "matrix";
  @SerializedName(SERIALIZED_NAME_MATRIX)
  private Object matrix;

  public static final String SERIALIZED_NAME_JOINS = "joins";
  @SerializedName(SERIALIZED_NAME_JOINS)
  private Map<String, V1Join> joins = null;

  public static final String SERIALIZED_NAME_INPUTS = "inputs";
  @SerializedName(SERIALIZED_NAME_INPUTS)
  private List<V1IO> inputs = null;

  public static final String SERIALIZED_NAME_OUTPUTS = "outputs";
  @SerializedName(SERIALIZED_NAME_OUTPUTS)
  private List<V1IO> outputs = null;

  public static final String SERIALIZED_NAME_CONTEXTS = "contexts";
  @SerializedName(SERIALIZED_NAME_CONTEXTS)
  private List<V1IO> contexts = null;

  public static final String SERIALIZED_NAME_IS_APPROVED = "isApproved";
  @SerializedName(SERIALIZED_NAME_IS_APPROVED)
  private Boolean isApproved;

  public static final String SERIALIZED_NAME_RUN = "run";
  @SerializedName(SERIALIZED_NAME_RUN)
  private Object run;


  public V1CompiledOperation version(Float version) {
    
    this.version = version;
    return this;
  }

   /**
   * Get version
   * @return version
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Float getVersion() {
    return version;
  }


  public void setVersion(Float version) {
    this.version = version;
  }


  public V1CompiledOperation kind(String kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1CompiledOperation name(String name) {
    
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


  public V1CompiledOperation description(String description) {
    
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


  public V1CompiledOperation tags(List<String> tags) {
    
    this.tags = tags;
    return this;
  }

  public V1CompiledOperation addTagsItem(String tagsItem) {
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


  public V1CompiledOperation presets(List<String> presets) {
    
    this.presets = presets;
    return this;
  }

  public V1CompiledOperation addPresetsItem(String presetsItem) {
    if (this.presets == null) {
      this.presets = new ArrayList<String>();
    }
    this.presets.add(presetsItem);
    return this;
  }

   /**
   * Get presets
   * @return presets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getPresets() {
    return presets;
  }


  public void setPresets(List<String> presets) {
    this.presets = presets;
  }


  public V1CompiledOperation queue(String queue) {
    
    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getQueue() {
    return queue;
  }


  public void setQueue(String queue) {
    this.queue = queue;
  }


  public V1CompiledOperation cache(V1Cache cache) {
    
    this.cache = cache;
    return this;
  }

   /**
   * Get cache
   * @return cache
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Cache getCache() {
    return cache;
  }


  public void setCache(V1Cache cache) {
    this.cache = cache;
  }


  public V1CompiledOperation termination(V1Termination termination) {
    
    this.termination = termination;
    return this;
  }

   /**
   * Get termination
   * @return termination
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Termination getTermination() {
    return termination;
  }


  public void setTermination(V1Termination termination) {
    this.termination = termination;
  }


  public V1CompiledOperation plugins(V1Plugins plugins) {
    
    this.plugins = plugins;
    return this;
  }

   /**
   * Get plugins
   * @return plugins
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Plugins getPlugins() {
    return plugins;
  }


  public void setPlugins(V1Plugins plugins) {
    this.plugins = plugins;
  }


  public V1CompiledOperation schedule(Object schedule) {
    
    this.schedule = schedule;
    return this;
  }

   /**
   * Get schedule
   * @return schedule
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getSchedule() {
    return schedule;
  }


  public void setSchedule(Object schedule) {
    this.schedule = schedule;
  }


  public V1CompiledOperation events(List<V1EventTrigger> events) {
    
    this.events = events;
    return this;
  }

  public V1CompiledOperation addEventsItem(V1EventTrigger eventsItem) {
    if (this.events == null) {
      this.events = new ArrayList<V1EventTrigger>();
    }
    this.events.add(eventsItem);
    return this;
  }

   /**
   * Get events
   * @return events
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1EventTrigger> getEvents() {
    return events;
  }


  public void setEvents(List<V1EventTrigger> events) {
    this.events = events;
  }


  public V1CompiledOperation hooks(List<V1Hook> hooks) {
    
    this.hooks = hooks;
    return this;
  }

  public V1CompiledOperation addHooksItem(V1Hook hooksItem) {
    if (this.hooks == null) {
      this.hooks = new ArrayList<V1Hook>();
    }
    this.hooks.add(hooksItem);
    return this;
  }

   /**
   * Get hooks
   * @return hooks
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1Hook> getHooks() {
    return hooks;
  }


  public void setHooks(List<V1Hook> hooks) {
    this.hooks = hooks;
  }


  public V1CompiledOperation dependencies(List<String> dependencies) {
    
    this.dependencies = dependencies;
    return this;
  }

  public V1CompiledOperation addDependenciesItem(String dependenciesItem) {
    if (this.dependencies == null) {
      this.dependencies = new ArrayList<String>();
    }
    this.dependencies.add(dependenciesItem);
    return this;
  }

   /**
   * Get dependencies
   * @return dependencies
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getDependencies() {
    return dependencies;
  }


  public void setDependencies(List<String> dependencies) {
    this.dependencies = dependencies;
  }


  public V1CompiledOperation trigger(V1TriggerPolicy trigger) {
    
    this.trigger = trigger;
    return this;
  }

   /**
   * Get trigger
   * @return trigger
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1TriggerPolicy getTrigger() {
    return trigger;
  }


  public void setTrigger(V1TriggerPolicy trigger) {
    this.trigger = trigger;
  }


  public V1CompiledOperation conditions(String conditions) {
    
    this.conditions = conditions;
    return this;
  }

   /**
   * Get conditions
   * @return conditions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getConditions() {
    return conditions;
  }


  public void setConditions(String conditions) {
    this.conditions = conditions;
  }


  public V1CompiledOperation skipOnUpstreamSkip(Boolean skipOnUpstreamSkip) {
    
    this.skipOnUpstreamSkip = skipOnUpstreamSkip;
    return this;
  }

   /**
   * Get skipOnUpstreamSkip
   * @return skipOnUpstreamSkip
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getSkipOnUpstreamSkip() {
    return skipOnUpstreamSkip;
  }


  public void setSkipOnUpstreamSkip(Boolean skipOnUpstreamSkip) {
    this.skipOnUpstreamSkip = skipOnUpstreamSkip;
  }


  public V1CompiledOperation matrix(Object matrix) {
    
    this.matrix = matrix;
    return this;
  }

   /**
   * Get matrix
   * @return matrix
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getMatrix() {
    return matrix;
  }


  public void setMatrix(Object matrix) {
    this.matrix = matrix;
  }


  public V1CompiledOperation joins(Map<String, V1Join> joins) {
    
    this.joins = joins;
    return this;
  }

  public V1CompiledOperation putJoinsItem(String key, V1Join joinsItem) {
    if (this.joins == null) {
      this.joins = new HashMap<String, V1Join>();
    }
    this.joins.put(key, joinsItem);
    return this;
  }

   /**
   * Get joins
   * @return joins
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Map<String, V1Join> getJoins() {
    return joins;
  }


  public void setJoins(Map<String, V1Join> joins) {
    this.joins = joins;
  }


  public V1CompiledOperation inputs(List<V1IO> inputs) {
    
    this.inputs = inputs;
    return this;
  }

  public V1CompiledOperation addInputsItem(V1IO inputsItem) {
    if (this.inputs == null) {
      this.inputs = new ArrayList<V1IO>();
    }
    this.inputs.add(inputsItem);
    return this;
  }

   /**
   * Get inputs
   * @return inputs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1IO> getInputs() {
    return inputs;
  }


  public void setInputs(List<V1IO> inputs) {
    this.inputs = inputs;
  }


  public V1CompiledOperation outputs(List<V1IO> outputs) {
    
    this.outputs = outputs;
    return this;
  }

  public V1CompiledOperation addOutputsItem(V1IO outputsItem) {
    if (this.outputs == null) {
      this.outputs = new ArrayList<V1IO>();
    }
    this.outputs.add(outputsItem);
    return this;
  }

   /**
   * Get outputs
   * @return outputs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1IO> getOutputs() {
    return outputs;
  }


  public void setOutputs(List<V1IO> outputs) {
    this.outputs = outputs;
  }


  public V1CompiledOperation contexts(List<V1IO> contexts) {
    
    this.contexts = contexts;
    return this;
  }

  public V1CompiledOperation addContextsItem(V1IO contextsItem) {
    if (this.contexts == null) {
      this.contexts = new ArrayList<V1IO>();
    }
    this.contexts.add(contextsItem);
    return this;
  }

   /**
   * Get contexts
   * @return contexts
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1IO> getContexts() {
    return contexts;
  }


  public void setContexts(List<V1IO> contexts) {
    this.contexts = contexts;
  }


  public V1CompiledOperation isApproved(Boolean isApproved) {
    
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


  public V1CompiledOperation run(Object run) {
    
    this.run = run;
    return this;
  }

   /**
   * Get run
   * @return run
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getRun() {
    return run;
  }


  public void setRun(Object run) {
    this.run = run;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1CompiledOperation v1CompiledOperation = (V1CompiledOperation) o;
    return Objects.equals(this.version, v1CompiledOperation.version) &&
        Objects.equals(this.kind, v1CompiledOperation.kind) &&
        Objects.equals(this.name, v1CompiledOperation.name) &&
        Objects.equals(this.description, v1CompiledOperation.description) &&
        Objects.equals(this.tags, v1CompiledOperation.tags) &&
        Objects.equals(this.presets, v1CompiledOperation.presets) &&
        Objects.equals(this.queue, v1CompiledOperation.queue) &&
        Objects.equals(this.cache, v1CompiledOperation.cache) &&
        Objects.equals(this.termination, v1CompiledOperation.termination) &&
        Objects.equals(this.plugins, v1CompiledOperation.plugins) &&
        Objects.equals(this.schedule, v1CompiledOperation.schedule) &&
        Objects.equals(this.events, v1CompiledOperation.events) &&
        Objects.equals(this.hooks, v1CompiledOperation.hooks) &&
        Objects.equals(this.dependencies, v1CompiledOperation.dependencies) &&
        Objects.equals(this.trigger, v1CompiledOperation.trigger) &&
        Objects.equals(this.conditions, v1CompiledOperation.conditions) &&
        Objects.equals(this.skipOnUpstreamSkip, v1CompiledOperation.skipOnUpstreamSkip) &&
        Objects.equals(this.matrix, v1CompiledOperation.matrix) &&
        Objects.equals(this.joins, v1CompiledOperation.joins) &&
        Objects.equals(this.inputs, v1CompiledOperation.inputs) &&
        Objects.equals(this.outputs, v1CompiledOperation.outputs) &&
        Objects.equals(this.contexts, v1CompiledOperation.contexts) &&
        Objects.equals(this.isApproved, v1CompiledOperation.isApproved) &&
        Objects.equals(this.run, v1CompiledOperation.run);
  }

  @Override
  public int hashCode() {
    return Objects.hash(version, kind, name, description, tags, presets, queue, cache, termination, plugins, schedule, events, hooks, dependencies, trigger, conditions, skipOnUpstreamSkip, matrix, joins, inputs, outputs, contexts, isApproved, run);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1CompiledOperation {\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    presets: ").append(toIndentedString(presets)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    cache: ").append(toIndentedString(cache)).append("\n");
    sb.append("    termination: ").append(toIndentedString(termination)).append("\n");
    sb.append("    plugins: ").append(toIndentedString(plugins)).append("\n");
    sb.append("    schedule: ").append(toIndentedString(schedule)).append("\n");
    sb.append("    events: ").append(toIndentedString(events)).append("\n");
    sb.append("    hooks: ").append(toIndentedString(hooks)).append("\n");
    sb.append("    dependencies: ").append(toIndentedString(dependencies)).append("\n");
    sb.append("    trigger: ").append(toIndentedString(trigger)).append("\n");
    sb.append("    conditions: ").append(toIndentedString(conditions)).append("\n");
    sb.append("    skipOnUpstreamSkip: ").append(toIndentedString(skipOnUpstreamSkip)).append("\n");
    sb.append("    matrix: ").append(toIndentedString(matrix)).append("\n");
    sb.append("    joins: ").append(toIndentedString(joins)).append("\n");
    sb.append("    inputs: ").append(toIndentedString(inputs)).append("\n");
    sb.append("    outputs: ").append(toIndentedString(outputs)).append("\n");
    sb.append("    contexts: ").append(toIndentedString(contexts)).append("\n");
    sb.append("    isApproved: ").append(toIndentedString(isApproved)).append("\n");
    sb.append("    run: ").append(toIndentedString(run)).append("\n");
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

