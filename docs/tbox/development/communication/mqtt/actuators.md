---
title: Actuators
sidebar_position: 3
---

## Overview

The TBox exposes its physical outputs as MQTT entities for Home Assistant.

Depending on the actuator type, an output is represented as a:

- `switch`
- `fan`
- `light`

Every actuator has an individual command topic and state topic.

## Supported Actuators

| Hardware No. | Identifier | MQTT Component | Function |
|-------------:|------------|----------------|----------|
| 1 | `socket01` | `switch` | Socket 1 |
| 2 | `socket02` | `switch` | Socket 2 |
| 3 | `socket03` | `switch` | Socket 3 |
| 4 | `socket04` | `switch` | Socket 4 |
| 5 | `socket05` | `switch` | Socket 5 |
| 6 | `socket06` | `switch` | Socket 6 |
| 7 | `socket07` | `fan` | Phase-controlled socket |
| 8 | `pump01` | `switch` | Pump 1 |
| 9 | `pump02` | `switch` | Pump 2 |
| 10 | `pump03` | `switch` | Pump 3 |
| 11 | `pump04` | `switch` | Pump 4 |
| 12 | `pump05` | `switch` | Pump 5 |
| 13 | `dimmer01` | `light` | Dimmer 1 |
| 14 | `dimmer02` | `light` | Dimmer 2 |
| 15 | `dimmer03` | `light` | Dimmer 3 |
| 16 | `dimmer04` | `light` | Dimmer 4 |
| 17 | `valve01` | `switch` | Valve 1 |
| 18 | `valve02` | `switch` | Valve 2 |
| 19 | `valve03` | `switch` | Valve 3 |
| 20 | `valve04` | `switch` | Valve 4 |
| 21 | `valve05` | `switch` | Valve 5 |

The firmware assigns sockets, pumps and valves to the MQTT `switch` component. Socket 7 uses the `fan` component, while the four 0–10 V dimmers use the `light` component. :contentReference[oaicite:0]{index=0}

## Topic Structure

The actuator topics follow this structure:

```text
homeassistant/<component>/<device>/<identifier>/<type>
```

Example for Socket 1:

```text
homeassistant/switch/tboxAABBCCDDEEFF/socket01/set
homeassistant/switch/tboxAABBCCDDEEFF/socket01/state
homeassistant/switch/tboxAABBCCDDEEFF/socket01/config
```

## Command Topics

### Switches

Sockets 1–6, pumps and valves use:

```text
homeassistant/switch/<device>/<identifier>/set
```

Example:

```text
homeassistant/switch/tboxAABBCCDDEEFF/pump01/set
```

### Phase-Controlled Socket

Socket 7 uses:

```text
homeassistant/fan/<device>/socket07/set
```

### Dimmers

Dimmers 1–4 use:

```text
homeassistant/light/<device>/<identifier>/set
```

Example:

```text
homeassistant/light/tboxAABBCCDDEEFF/dimmer01/set
```

The TBox subscribes to the corresponding `/set` topics after establishing the MQTT connection. :contentReference[oaicite:1]{index=1}

## Command Payloads

The firmware accepts the following command payloads:

| Payload | Result |
|---------|--------|
| `ON` | Enables the actuator |
| `OFF` | Disables the actuator and sets the setpoint to `0` |
| `0...100` | Enables the actuator and applies the transmitted setpoint |

### Switch On

```text
ON
```

When `ON` is received, the output is enabled. The previously stored setpoint remains active.

### Switch Off

```text
OFF
```

When `OFF` is received:

- The output is disabled.
- The setpoint is changed to `0`.

### Set Output Value

```text
75
```

A numeric payload from `0` to `100` enables the actuator and applies the value as its new setpoint.

Payloads outside the supported range or payloads containing non-numeric characters are not accepted as valid setpoints. :contentReference[oaicite:2]{index=2}

## Switch Entities

Switch entities are used for outputs that only require an on/off command.

### Discovery Topic

```text
homeassistant/switch/<device>/<identifier>/config
```

### Command Topic

```text
homeassistant/switch/<device>/<identifier>/set
```

### State Topic

```text
homeassistant/switch/<device>/<identifier>/state
```

### Supported State Payloads

| Payload | State |
|---------|-------|
| `ON` | Output enabled |
| `OFF` | Output disabled |

Switch discovery messages contain the command topic, state topic, ON/OFF payload definitions and common TBox device information. :contentReference[oaicite:3]{index=3}

## Phase-Controlled Socket

Socket 7 is represented as a Home Assistant `fan` entity because it supports both an on/off state and an adjustable output percentage.

### Discovery Topic

```text
homeassistant/fan/<device>/socket07/config
```

### Command Topic

```text
homeassistant/fan/<device>/socket07/set
```

### State Topic

```text
homeassistant/fan/<device>/socket07/state
```

### Supported Values

| Value | Function |
|------:|----------|
| `OFF` | Output disabled |
| `ON` | Output enabled with the previous setpoint |
| `0...100` | Output percentage |

The percentage scale is configured from `0` to `100`. :contentReference[oaicite:4]{index=4}

## Dimmer Entities

The four 0–10 V dimmers are represented as Home Assistant `light` entities.

### Discovery Topic

```text
homeassistant/light/<device>/<identifier>/config
```

### Command Topic

```text
homeassistant/light/<device>/<identifier>/set
```

### State Topic

```text
homeassistant/light/<device>/<identifier>/state
```

### Supported Values

| Value | Function |
|------:|----------|
| `OFF` | Dimmer disabled |
| `ON` | Dimmer enabled with the previous setpoint |
| `0...100` | Brightness setpoint |

The Home Assistant brightness scale is configured to use values from `0` to `100`. :contentReference[oaicite:5]{index=5}

## State Publication

The TBox periodically publishes the current state of every configured actuator.

Switch state example:

```text
ON
```

or:

```text
OFF
```

For adjustable outputs, the firmware publishes both the output state and the current setpoint to the actuator state topic. :contentReference[oaicite:6]{index=6}

## Home Assistant Discovery

Each actuator discovery message contains:

| Property | Description |
|----------|-------------|
| `name` | Displayed entity name |
| `object_id` | Home Assistant entity object ID |
| `unique_id` | Globally unique actuator identifier |
| `command_topic` | Topic used to control the output |
| `state_topic` | Topic containing the current state |
| `payload_on` | Payload used to enable the output |
| `payload_off` | Payload used to disable the output |
| `device.identifiers` | Common identifier of the TBox |
| `device.name` | TBox device name |
| `device.manufacturer` | Device manufacturer |
| `device.model` | TBox model |
| `device.hw_version` | Hardware version |
| `device.sw_version` | Firmware version |
| `device.configuration_url` | Link to the TBox configuration page |

Discovery messages are retained so that Home Assistant can restore the entities after restarting.

## Example

Switch Pump 1 on:

```text
Topic:
homeassistant/switch/tboxAABBCCDDEEFF/pump01/set

Payload:
ON
```

Switch Pump 1 off:

```text
Topic:
homeassistant/switch/tboxAABBCCDDEEFF/pump01/set

Payload:
OFF
```

Set Dimmer 1 to 60%:

```text
Topic:
homeassistant/light/tboxAABBCCDDEEFF/dimmer01/set

Payload:
60
```

Set Socket 7 to 75%:

```text
Topic:
homeassistant/fan/tboxAABBCCDDEEFF/socket07/set

Payload:
75
```