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
import org.openapitools.client.model.V1Component;
import org.openapitools.client.model.V1Environment;
import org.openapitools.client.model.V1Operation;

/**
 * V1Dag
 */

public class V1Dag {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "dag";

  public static final String SERIALIZED_NAME_OPERATIONS = "operations";
  @SerializedName(SERIALIZED_NAME_OPERATIONS)
  private List<V1Operation> operations = null;

  public static final String SERIALIZED_NAME_COMPONENTS = "components";
  @SerializedName(SERIALIZED_NAME_COMPONENTS)
  private List<V1Component> components = null;

  public static final String SERIALIZED_NAME_CONCURRENCY = "concurrency";
  @SerializedName(SERIALIZED_NAME_CONCURRENCY)
  private Integer concurrency;

  public static final String SERIALIZED_NAME_EARLY_STOPPING = "earlyStopping";
  @SerializedName(SERIALIZED_NAME_EARLY_STOPPING)
  private List<Object> earlyStopping = null;

  public static final String SERIALIZED_NAME_ENVIRONMENT = "environment";
  @SerializedName(SERIALIZED_NAME_ENVIRONMENT)
  private V1Environment environment;

  public static final String SERIALIZED_NAME_CONNECTIONS = "connections";
  @SerializedName(SERIALIZED_NAME_CONNECTIONS)
  private List<String> connections = null;

  public static final String SERIALIZED_NAME_VOLUMES = "volumes";
  @SerializedName(SERIALIZED_NAME_VOLUMES)
  private List<Object> volumes = null;


  public V1Dag kind(String kind) {
    
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


  public V1Dag operations(List<V1Operation> operations) {
    
    this.operations = operations;
    return this;
  }

  public V1Dag addOperationsItem(V1Operation operationsItem) {
    if (this.operations == null) {
      this.operations = new ArrayList<V1Operation>();
    }
    this.operations.add(operationsItem);
    return this;
  }

   /**
   * Get operations
   * @return operations
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1Operation> getOperations() {
    return operations;
  }


  public void setOperations(List<V1Operation> operations) {
    this.operations = operations;
  }


  public V1Dag components(List<V1Component> components) {
    
    this.components = components;
    return this;
  }

  public V1Dag addComponentsItem(V1Component componentsItem) {
    if (this.components == null) {
      this.components = new ArrayList<V1Component>();
    }
    this.components.add(componentsItem);
    return this;
  }

   /**
   * Get components
   * @return components
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1Component> getComponents() {
    return components;
  }


  public void setComponents(List<V1Component> components) {
    this.components = components;
  }


  public V1Dag concurrency(Integer concurrency) {
    
    this.concurrency = concurrency;
    return this;
  }

   /**
   * Get concurrency
   * @return concurrency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getConcurrency() {
    return concurrency;
  }


  public void setConcurrency(Integer concurrency) {
    this.concurrency = concurrency;
  }


  public V1Dag earlyStopping(List<Object> earlyStopping) {
    
    this.earlyStopping = earlyStopping;
    return this;
  }

  public V1Dag addEarlyStoppingItem(Object earlyStoppingItem) {
    if (this.earlyStopping == null) {
      this.earlyStopping = new ArrayList<Object>();
    }
    this.earlyStopping.add(earlyStoppingItem);
    return this;
  }

   /**
   * Get earlyStopping
   * @return earlyStopping
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Object> getEarlyStopping() {
    return earlyStopping;
  }


  public void setEarlyStopping(List<Object> earlyStopping) {
    this.earlyStopping = earlyStopping;
  }


  public V1Dag environment(V1Environment environment) {
    
    this.environment = environment;
    return this;
  }

   /**
   * Get environment
   * @return environment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Environment getEnvironment() {
    return environment;
  }


  public void setEnvironment(V1Environment environment) {
    this.environment = environment;
  }


  public V1Dag connections(List<String> connections) {
    
    this.connections = connections;
    return this;
  }

  public V1Dag addConnectionsItem(String connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<String>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getConnections() {
    return connections;
  }


  public void setConnections(List<String> connections) {
    this.connections = connections;
  }


  public V1Dag volumes(List<Object> volumes) {
    
    this.volumes = volumes;
    return this;
  }

  public V1Dag addVolumesItem(Object volumesItem) {
    if (this.volumes == null) {
      this.volumes = new ArrayList<Object>();
    }
    this.volumes.add(volumesItem);
    return this;
  }

   /**
   * Volumes is a list of volumes that can be mounted.
   * @return volumes
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Volumes is a list of volumes that can be mounted.")

  public List<Object> getVolumes() {
    return volumes;
  }


  public void setVolumes(List<Object> volumes) {
    this.volumes = volumes;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Dag v1Dag = (V1Dag) o;
    return Objects.equals(this.kind, v1Dag.kind) &&
        Objects.equals(this.operations, v1Dag.operations) &&
        Objects.equals(this.components, v1Dag.components) &&
        Objects.equals(this.concurrency, v1Dag.concurrency) &&
        Objects.equals(this.earlyStopping, v1Dag.earlyStopping) &&
        Objects.equals(this.environment, v1Dag.environment) &&
        Objects.equals(this.connections, v1Dag.connections) &&
        Objects.equals(this.volumes, v1Dag.volumes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, operations, components, concurrency, earlyStopping, environment, connections, volumes);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Dag {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    operations: ").append(toIndentedString(operations)).append("\n");
    sb.append("    components: ").append(toIndentedString(components)).append("\n");
    sb.append("    concurrency: ").append(toIndentedString(concurrency)).append("\n");
    sb.append("    earlyStopping: ").append(toIndentedString(earlyStopping)).append("\n");
    sb.append("    environment: ").append(toIndentedString(environment)).append("\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
    sb.append("    volumes: ").append(toIndentedString(volumes)).append("\n");
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

