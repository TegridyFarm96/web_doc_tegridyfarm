---
title: MQTT API
sidebar_position: 5
---

## Overview

This page provides a complete reference of all MQTT topics used by the TBox.

Topics follow the Home Assistant MQTT Discovery specification.

## Topic Format

```text
homeassistant/<component>/<device>/<identifier>/<type>
```

| Field | Description |
|-------|-------------|
| `component` | MQTT entity type (`sensor`, `switch`, `light`, `fan`) |
| `device` | Unique TBox identifier |
| `identifier` | Individual actuator or sensor |
| `type` | `config`, `state` or `set` |

---

## Switches

### Socket 1

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/switch/<device>/socket01/config` |
| State | `homeassistant/switch/<device>/socket01/state` |
| Command | `homeassistant/switch/<device>/socket01/set` |

### Socket 2

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/switch/<device>/socket02/config` |
| State | `homeassistant/switch/<device>/socket02/state` |
| Command | `homeassistant/switch/<device>/socket02/set` |

...

### Pump 1

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/switch/<device>/pump01/config` |
| State | `homeassistant/switch/<device>/pump01/state` |
| Command | `homeassistant/switch/<device>/pump01/set` |

...

### Valve 1

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/switch/<device>/valve01/config` |
| State | `homeassistant/switch/<device>/valve01/state` |
| Command | `homeassistant/switch/<device>/valve01/set` |

...

---

## Phase Controlled Socket

### Socket 7

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/fan/<device>/socket07/config` |
| State | `homeassistant/fan/<device>/socket07/state` |
| Command | `homeassistant/fan/<device>/socket07/set` |

---

## Dimmers

### Dimmer 1

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/light/<device>/dimmer01/config` |
| State | `homeassistant/light/<device>/dimmer01/state` |
| Command | `homeassistant/light/<device>/dimmer01/set` |

...

---

## Sensors

Temperature example

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/sensor/<device>/temperature/config` |
| State | `homeassistant/sensor/<device>/temperature/state` |

Humidity example

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/sensor/<device>/humidity/config` |
| State | `homeassistant/sensor/<device>/humidity/state` |

Power example

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/sensor/<device>/power/config` |
| State | `homeassistant/sensor/<device>/power/state` |

Energy example

| Topic Type | Topic |
|------------|-------|
| Config | `homeassistant/sensor/<device>/energy/config` |
| State | `homeassistant/sensor/<device>/energy/state` |

...

---

## Payload Reference

### Switches

| Payload | Description |
|----------|-------------|
| `ON` | Enable output |
| `OFF` | Disable output |

### Dimmers

| Payload | Description |
|----------|-------------|
| `0...100` | Output value (%) |

### Phase Controlled Socket

| Payload | Description |
|----------|-------------|
| `0...100` | Output value (%) |

### Sensors

Sensor state topics publish the measured value as a numeric payload.

Examples:

```text
23.6
```

```text
48.2
```

```text
1013.4
```

```text
156.8
```

---

## MQTT Components

| Home Assistant Component | Used For |
|--------------------------|----------|
| `switch` | Sockets, Pumps, Valves |
| `fan` | Phase Controlled Socket |
| `light` | 0–10 V Dimmers |
| `sensor` | All Process Values |