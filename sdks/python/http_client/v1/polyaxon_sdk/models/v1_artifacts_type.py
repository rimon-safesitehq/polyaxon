#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 1.0.95
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1ArtifactsType(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        "connection": "str",
        "files": "list[str]",
        "dirs": "list[str]",
        "init": "bool",
        "workers": "int",
    }

    attribute_map = {
        "connection": "connection",
        "files": "files",
        "dirs": "dirs",
        "init": "init",
        "workers": "workers",
    }

    def __init__(
        self,
        connection=None,
        files=None,
        dirs=None,
        init=None,
        workers=None,
        local_vars_configuration=None,
    ):  # noqa: E501
        """V1ArtifactsType - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._connection = None
        self._files = None
        self._dirs = None
        self._init = None
        self._workers = None
        self.discriminator = None

        if connection is not None:
            self.connection = connection
        if files is not None:
            self.files = files
        if dirs is not None:
            self.dirs = dirs
        if init is not None:
            self.init = init
        if workers is not None:
            self.workers = workers

    @property
    def connection(self):
        """Gets the connection of this V1ArtifactsType.  # noqa: E501


        :return: The connection of this V1ArtifactsType.  # noqa: E501
        :rtype: str
        """
        return self._connection

    @connection.setter
    def connection(self, connection):
        """Sets the connection of this V1ArtifactsType.


        :param connection: The connection of this V1ArtifactsType.  # noqa: E501
        :type: str
        """

        self._connection = connection

    @property
    def files(self):
        """Gets the files of this V1ArtifactsType.  # noqa: E501


        :return: The files of this V1ArtifactsType.  # noqa: E501
        :rtype: list[str]
        """
        return self._files

    @files.setter
    def files(self, files):
        """Sets the files of this V1ArtifactsType.


        :param files: The files of this V1ArtifactsType.  # noqa: E501
        :type: list[str]
        """

        self._files = files

    @property
    def dirs(self):
        """Gets the dirs of this V1ArtifactsType.  # noqa: E501


        :return: The dirs of this V1ArtifactsType.  # noqa: E501
        :rtype: list[str]
        """
        return self._dirs

    @dirs.setter
    def dirs(self, dirs):
        """Sets the dirs of this V1ArtifactsType.


        :param dirs: The dirs of this V1ArtifactsType.  # noqa: E501
        :type: list[str]
        """

        self._dirs = dirs

    @property
    def init(self):
        """Gets the init of this V1ArtifactsType.  # noqa: E501


        :return: The init of this V1ArtifactsType.  # noqa: E501
        :rtype: bool
        """
        return self._init

    @init.setter
    def init(self, init):
        """Sets the init of this V1ArtifactsType.


        :param init: The init of this V1ArtifactsType.  # noqa: E501
        :type: bool
        """

        self._init = init

    @property
    def workers(self):
        """Gets the workers of this V1ArtifactsType.  # noqa: E501


        :return: The workers of this V1ArtifactsType.  # noqa: E501
        :rtype: int
        """
        return self._workers

    @workers.setter
    def workers(self, workers):
        """Sets the workers of this V1ArtifactsType.


        :param workers: The workers of this V1ArtifactsType.  # noqa: E501
        :type: int
        """

        self._workers = workers

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(
                    map(lambda x: x.to_dict() if hasattr(x, "to_dict") else x, value)
                )
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(
                    map(
                        lambda item: (item[0], item[1].to_dict())
                        if hasattr(item[1], "to_dict")
                        else item,
                        value.items(),
                    )
                )
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1ArtifactsType):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1ArtifactsType):
            return True

        return self.to_dict() != other.to_dict()
