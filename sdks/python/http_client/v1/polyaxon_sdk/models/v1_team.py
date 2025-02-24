#!/usr/bin/python
#
# Copyright 2018-2021 Polyaxon, Inc.
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

    The version of the OpenAPI document: 1.8.3
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1Team(object):
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
        'uuid': 'str',
        'name': 'str',
        'projects': 'list[str]',
        'component_hubs': 'list[str]',
        'model_registries': 'list[str]',
        'settings': 'V1TeamSettings',
        'created_at': 'datetime',
        'updated_at': 'datetime'
    }

    attribute_map = {
        'uuid': 'uuid',
        'name': 'name',
        'projects': 'projects',
        'component_hubs': 'component_hubs',
        'model_registries': 'model_registries',
        'settings': 'settings',
        'created_at': 'created_at',
        'updated_at': 'updated_at'
    }

    def __init__(self, uuid=None, name=None, projects=None, component_hubs=None, model_registries=None, settings=None, created_at=None, updated_at=None, local_vars_configuration=None):  # noqa: E501
        """V1Team - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._uuid = None
        self._name = None
        self._projects = None
        self._component_hubs = None
        self._model_registries = None
        self._settings = None
        self._created_at = None
        self._updated_at = None
        self.discriminator = None

        if uuid is not None:
            self.uuid = uuid
        if name is not None:
            self.name = name
        if projects is not None:
            self.projects = projects
        if component_hubs is not None:
            self.component_hubs = component_hubs
        if model_registries is not None:
            self.model_registries = model_registries
        if settings is not None:
            self.settings = settings
        if created_at is not None:
            self.created_at = created_at
        if updated_at is not None:
            self.updated_at = updated_at

    @property
    def uuid(self):
        """Gets the uuid of this V1Team.  # noqa: E501


        :return: The uuid of this V1Team.  # noqa: E501
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid):
        """Sets the uuid of this V1Team.


        :param uuid: The uuid of this V1Team.  # noqa: E501
        :type: str
        """

        self._uuid = uuid

    @property
    def name(self):
        """Gets the name of this V1Team.  # noqa: E501


        :return: The name of this V1Team.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this V1Team.


        :param name: The name of this V1Team.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def projects(self):
        """Gets the projects of this V1Team.  # noqa: E501


        :return: The projects of this V1Team.  # noqa: E501
        :rtype: list[str]
        """
        return self._projects

    @projects.setter
    def projects(self, projects):
        """Sets the projects of this V1Team.


        :param projects: The projects of this V1Team.  # noqa: E501
        :type: list[str]
        """

        self._projects = projects

    @property
    def component_hubs(self):
        """Gets the component_hubs of this V1Team.  # noqa: E501


        :return: The component_hubs of this V1Team.  # noqa: E501
        :rtype: list[str]
        """
        return self._component_hubs

    @component_hubs.setter
    def component_hubs(self, component_hubs):
        """Sets the component_hubs of this V1Team.


        :param component_hubs: The component_hubs of this V1Team.  # noqa: E501
        :type: list[str]
        """

        self._component_hubs = component_hubs

    @property
    def model_registries(self):
        """Gets the model_registries of this V1Team.  # noqa: E501


        :return: The model_registries of this V1Team.  # noqa: E501
        :rtype: list[str]
        """
        return self._model_registries

    @model_registries.setter
    def model_registries(self, model_registries):
        """Sets the model_registries of this V1Team.


        :param model_registries: The model_registries of this V1Team.  # noqa: E501
        :type: list[str]
        """

        self._model_registries = model_registries

    @property
    def settings(self):
        """Gets the settings of this V1Team.  # noqa: E501


        :return: The settings of this V1Team.  # noqa: E501
        :rtype: V1TeamSettings
        """
        return self._settings

    @settings.setter
    def settings(self, settings):
        """Sets the settings of this V1Team.


        :param settings: The settings of this V1Team.  # noqa: E501
        :type: V1TeamSettings
        """

        self._settings = settings

    @property
    def created_at(self):
        """Gets the created_at of this V1Team.  # noqa: E501


        :return: The created_at of this V1Team.  # noqa: E501
        :rtype: datetime
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this V1Team.


        :param created_at: The created_at of this V1Team.  # noqa: E501
        :type: datetime
        """

        self._created_at = created_at

    @property
    def updated_at(self):
        """Gets the updated_at of this V1Team.  # noqa: E501


        :return: The updated_at of this V1Team.  # noqa: E501
        :rtype: datetime
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this V1Team.


        :param updated_at: The updated_at of this V1Team.  # noqa: E501
        :type: datetime
        """

        self._updated_at = updated_at

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
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
        if not isinstance(other, V1Team):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Team):
            return True

        return self.to_dict() != other.to_dict()
