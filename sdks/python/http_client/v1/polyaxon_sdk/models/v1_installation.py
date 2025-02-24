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


class V1Installation(object):
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
        'key': 'str',
        'version': 'str',
        'dist': 'str',
        'host': 'str',
        'hmac': 'str',
        'auth': 'list[str]'
    }

    attribute_map = {
        'key': 'key',
        'version': 'version',
        'dist': 'dist',
        'host': 'host',
        'hmac': 'hmac',
        'auth': 'auth'
    }

    def __init__(self, key=None, version=None, dist=None, host=None, hmac=None, auth=None, local_vars_configuration=None):  # noqa: E501
        """V1Installation - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._key = None
        self._version = None
        self._dist = None
        self._host = None
        self._hmac = None
        self._auth = None
        self.discriminator = None

        if key is not None:
            self.key = key
        if version is not None:
            self.version = version
        if dist is not None:
            self.dist = dist
        if host is not None:
            self.host = host
        if hmac is not None:
            self.hmac = hmac
        if auth is not None:
            self.auth = auth

    @property
    def key(self):
        """Gets the key of this V1Installation.  # noqa: E501


        :return: The key of this V1Installation.  # noqa: E501
        :rtype: str
        """
        return self._key

    @key.setter
    def key(self, key):
        """Sets the key of this V1Installation.


        :param key: The key of this V1Installation.  # noqa: E501
        :type: str
        """

        self._key = key

    @property
    def version(self):
        """Gets the version of this V1Installation.  # noqa: E501


        :return: The version of this V1Installation.  # noqa: E501
        :rtype: str
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this V1Installation.


        :param version: The version of this V1Installation.  # noqa: E501
        :type: str
        """

        self._version = version

    @property
    def dist(self):
        """Gets the dist of this V1Installation.  # noqa: E501


        :return: The dist of this V1Installation.  # noqa: E501
        :rtype: str
        """
        return self._dist

    @dist.setter
    def dist(self, dist):
        """Sets the dist of this V1Installation.


        :param dist: The dist of this V1Installation.  # noqa: E501
        :type: str
        """

        self._dist = dist

    @property
    def host(self):
        """Gets the host of this V1Installation.  # noqa: E501


        :return: The host of this V1Installation.  # noqa: E501
        :rtype: str
        """
        return self._host

    @host.setter
    def host(self, host):
        """Sets the host of this V1Installation.


        :param host: The host of this V1Installation.  # noqa: E501
        :type: str
        """

        self._host = host

    @property
    def hmac(self):
        """Gets the hmac of this V1Installation.  # noqa: E501


        :return: The hmac of this V1Installation.  # noqa: E501
        :rtype: str
        """
        return self._hmac

    @hmac.setter
    def hmac(self, hmac):
        """Sets the hmac of this V1Installation.


        :param hmac: The hmac of this V1Installation.  # noqa: E501
        :type: str
        """

        self._hmac = hmac

    @property
    def auth(self):
        """Gets the auth of this V1Installation.  # noqa: E501


        :return: The auth of this V1Installation.  # noqa: E501
        :rtype: list[str]
        """
        return self._auth

    @auth.setter
    def auth(self, auth):
        """Sets the auth of this V1Installation.


        :param auth: The auth of this V1Installation.  # noqa: E501
        :type: list[str]
        """

        self._auth = auth

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
        if not isinstance(other, V1Installation):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Installation):
            return True

        return self.to_dict() != other.to_dict()
