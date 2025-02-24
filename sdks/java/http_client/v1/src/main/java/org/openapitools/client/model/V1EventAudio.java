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
 * V1EventAudio
 */

public class V1EventAudio {
  public static final String SERIALIZED_NAME_SAMPLE_RATE = "sample_rate";
  @SerializedName(SERIALIZED_NAME_SAMPLE_RATE)
  private Float sampleRate;

  public static final String SERIALIZED_NAME_NUM_CHANNELS = "num_channels";
  @SerializedName(SERIALIZED_NAME_NUM_CHANNELS)
  private Integer numChannels;

  public static final String SERIALIZED_NAME_LENGTH_FRAMES = "length_frames";
  @SerializedName(SERIALIZED_NAME_LENGTH_FRAMES)
  private Integer lengthFrames;

  public static final String SERIALIZED_NAME_CONTENT_TYPE = "content_type";
  @SerializedName(SERIALIZED_NAME_CONTENT_TYPE)
  private String contentType;

  public static final String SERIALIZED_NAME_PATH = "path";
  @SerializedName(SERIALIZED_NAME_PATH)
  private String path;


  public V1EventAudio sampleRate(Float sampleRate) {
    
    this.sampleRate = sampleRate;
    return this;
  }

   /**
   * Sample rate of the audio in Hz.
   * @return sampleRate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Sample rate of the audio in Hz.")

  public Float getSampleRate() {
    return sampleRate;
  }


  public void setSampleRate(Float sampleRate) {
    this.sampleRate = sampleRate;
  }


  public V1EventAudio numChannels(Integer numChannels) {
    
    this.numChannels = numChannels;
    return this;
  }

   /**
   * Number of channels of audio.
   * @return numChannels
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of channels of audio.")

  public Integer getNumChannels() {
    return numChannels;
  }


  public void setNumChannels(Integer numChannels) {
    this.numChannels = numChannels;
  }


  public V1EventAudio lengthFrames(Integer lengthFrames) {
    
    this.lengthFrames = lengthFrames;
    return this;
  }

   /**
   * Length of the audio in frames (samples per channel).
   * @return lengthFrames
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Length of the audio in frames (samples per channel).")

  public Integer getLengthFrames() {
    return lengthFrames;
  }


  public void setLengthFrames(Integer lengthFrames) {
    this.lengthFrames = lengthFrames;
  }


  public V1EventAudio contentType(String contentType) {
    
    this.contentType = contentType;
    return this;
  }

   /**
   * Get contentType
   * @return contentType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getContentType() {
    return contentType;
  }


  public void setContentType(String contentType) {
    this.contentType = contentType;
  }


  public V1EventAudio path(String path) {
    
    this.path = path;
    return this;
  }

   /**
   * Get path
   * @return path
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPath() {
    return path;
  }


  public void setPath(String path) {
    this.path = path;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventAudio v1EventAudio = (V1EventAudio) o;
    return Objects.equals(this.sampleRate, v1EventAudio.sampleRate) &&
        Objects.equals(this.numChannels, v1EventAudio.numChannels) &&
        Objects.equals(this.lengthFrames, v1EventAudio.lengthFrames) &&
        Objects.equals(this.contentType, v1EventAudio.contentType) &&
        Objects.equals(this.path, v1EventAudio.path);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sampleRate, numChannels, lengthFrames, contentType, path);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventAudio {\n");
    sb.append("    sampleRate: ").append(toIndentedString(sampleRate)).append("\n");
    sb.append("    numChannels: ").append(toIndentedString(numChannels)).append("\n");
    sb.append("    lengthFrames: ").append(toIndentedString(lengthFrames)).append("\n");
    sb.append("    contentType: ").append(toIndentedString(contentType)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
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

