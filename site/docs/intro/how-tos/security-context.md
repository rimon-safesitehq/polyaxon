---
title: "How to configure a security context"
sub_link: "how-tos/security-config"
meta_title: "A guide on configuring a security context for operations - Core Concepts"
meta_description: "By default, Polyaxon operations run without security context, and pods run as root."
is_index: true
visibility: public
status: published
tags:
  - concepts
  - tutorials
sidebar: "intro"
---

## Overview

By default, Polyaxon operations run without security context, and pods run as root. 
Sometimes you might even need to run pods with privileged security, for examples the `dockerizer` component.

## Usage

If you need to configure a security context for your jobs and services, you can use the [environment.SecurityContext](/docs/core/specification/environment/#securitycontext) section:

```yaml
kind: component
...
run:
  kind: ...
  environment:
    securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
```

If you are running a distributed operation, you can provide a security context per replica as well.

## Global configuration

If you to define a security context globally, we suggest creating a [preset](/docs/core/scheduling-strategies/presets/).
If you are using Polyaxon Cloud or Polyaxon EE, you can add the security context definition to the default organization's preset or the default project's preset.  
