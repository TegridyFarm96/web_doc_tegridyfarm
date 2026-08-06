---
title: MQTT
sidebar_position: 1
---

## Overview

MQTT provides the network communication interface between the TBox and external automation systems.

The current implementation is designed primarily for integration with **Home Assistant**. Actuators and sensors are automatically registered using MQTT Discovery.

The TBox can:

- Publish sensor measurements
- Publish actuator states
- Receive actuator commands
- Automatically create Home Assistant entities
- Restore Home Assistant entities after reconnecting to the broker

## Communication Structure

```text
TBox → MQTT Broker → Home Assistant
TBox ← MQTT Broker ← Home Assistant
```

Sensor data and actuator states are transmitted from the TBox to the MQTT broker.

Control commands are transmitted from Home Assistant through the broker to the TBox.

## MQTT Client

| Parameter | Description |
|-----------|-------------|
| MQTT library | PubSubClient |
| Transport | MQTT over TCP/IP |
| Network interface | Wi-Fi |
| Broker address | Configurable |
| Broker port | Configurable |
| Authentication | Username and password |
| Client ID | TBox access-point ID |
| Home Assistant Discovery | Supported |
| Retained configuration | Yes |
| Retained states | Yes |

## Device Identification

Every TBox receives an individual MQTT device name based on its MAC address.

```text
tbox<MAC address>
```

Example:

```text
tboxAABBCCDDEEFF
```

The MAC address is stored without separators.

This device name is used inside all MQTT topics and Home Assistant unique identifiers.

## Topic Structure

The general topic structure is:

```text
homeassistant/<component>/<device>/<identifier>/<type>
```

| Element | Description |
|---------|-------------|
| `homeassistant` | Home Assistant MQTT Discovery prefix |
| `<component>` | Entity type such as `switch`, `light`, `fan` or `sensor` |
| `<device>` | TBox device name including its MAC address |
| `<identifier>` | Individual actuator or sensor identifier |
| `<type>` | Configuration, state or command topic |

## Supported Components

| Component | Application |
|-----------|-------------|
| `switch` | Sockets, pumps and valves |
| `fan` | Phase-controlled socket |
| `light` | 0–10 V dimmers |
| `sensor` | Measurement and process values |

## Message Types

### Configuration

Configuration messages register entities automatically in Home Assistant.

```text
homeassistant/<component>/<device>/<identifier>/config
```

Configuration messages are published as retained JSON payloads.

### State

State messages contain the current actuator state or sensor value.

```text
homeassistant/<component>/<device>/<identifier>/state
```

State messages are published as retained messages.

### Commands

Command messages are sent from Home Assistant to the TBox.

```text
homeassistant/<component>/<device>/<identifier>/set
```

The TBox subscribes to the command topics after connecting to the broker.

## Actuator Commands

The following command payloads are supported:

| Payload | Function |
|---------|----------|
| `ON` | Switches the actuator on |
| `OFF` | Switches the actuator off |
| `0...100` | Enables the actuator and sets its output value |

Numeric values are used for actuators with an adjustable setpoint, including the phase-controlled socket and 0–10 V dimmers.

## Sensor Values

Sensor values are published as JSON payloads.

Example temperature state:

```json
{
  "temperature": 23.5
}
```

Example humidity state:

```json
{
  "humidity": 61.2
}
```

The topic and JSON property are generated from the configured sensor hardware number and Home Assistant device class.

## Home Assistant Discovery

The TBox publishes MQTT Discovery configuration for each active actuator and sensor.

The configuration includes:

- Entity name
- Object ID
- Unique ID
- Device class
- Command topic
- State topic
- Unit of measurement
- Manufacturer
- Model
- Hardware version
- Software version
- Configuration URL

All entities belonging to the same TBox use a common device identifier and are grouped as one device in Home Assistant.

## Connection Behavior

When the TBox connects to the MQTT broker, it:

1. Subscribes to all supported actuator command topics.
2. Publishes the actuator discovery configurations.
3. Publishes the sensor discovery configurations.
4. Continues publishing actuator and sensor states.

When the MQTT connection is lost, the TBox periodically attempts to reconnect.

After a successful reconnection, the discovery configurations are published again.

## Further Information

- [MQTT Configuration](./configuration)
- [MQTT Actuators](./actuators)
- [MQTT Sensors](./sensors)
- [MQTT Topic Reference](./mqtt_api)