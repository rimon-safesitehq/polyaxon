---
title: "Quick Start: Running on schedule"
sub_link: "quick-start/running-on-schedule"
meta_title: "Running on schedule - Polyaxon quick start tutorial - Core Concepts"
meta_description: "Running on schedule - Become familiar with the ecosystem of Polyaxon tools with a top-level overview and useful links to get you started."
visibility: public
status: published
tags:
  - tutorials
  - concepts
  - quick-start
sidebar: "intro"
---

> **Note**: This section of the tutorial can only run on Polyaxon EE and Polyaxon Cloud.

Now that our component works, we want to be able to run it continuously.
Polyaxon provides an abstraction to put operations on a [schedule](/docs/automation/schedules/):

## Running our component on schedule

Schedules operate at the operation level, and similar to the matrix section, they create a pipeline to follow the scheduling of a component or an operation.

The file `schedules/recurrent_training.yaml` contains an operation definition with a schedule attached:

```yaml
version: 1.1
kind: operation
name: every monday check
schedule:
  kind: cron
  cron: "0 0 * * MON"
params:
  optimizer: {value: sgd}
  epochs: {value: 1}
urlRef: https://raw.githubusercontent.com/polyaxon/polyaxon-quick-start/master/experimentation/typed.yaml
```

This schedule is of kind `cron`, and it will start an experiment every monday. 
If you need to start date this schedule at a specific date you can set the `startAt` field, and to provide a stopping condition you can provide `endAt` or `maxRuns`.

It's also possible to put the complete [DAG](/docs/intro/quick-start/automation/) that we created in the previous guide on schedule, similarly to this operation, 
you can add a valid schedule section, this way, not only you automate the journey of creating, training, and validating a model, but also you do it continuously, 
the file `schedules/recurrent_dag.yaml` contains an example of such operation:

```yaml
version: 1.1
kind: operation
name: every-monday-check
schedule:
  kind: cron
  cron: "0 0 * * MON"
params:
  optimizer: { value: sgd }
  epochs: { value: 1 }
pathRef: ../dags/dag.yaml
```

## Learn More

You can check the [schedules section](/docs/automation/schedules/) for more details about all the possible schedules and their specifications.
