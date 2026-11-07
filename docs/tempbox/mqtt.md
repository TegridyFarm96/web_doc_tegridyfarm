---
title: MQTT
sidebar_position: 5
---

## Overview

The TempBox publishes all sensor values via **MQTT** and supports **Home Assistant MQTT auto-discovery**. Once the broker is configured in the [web server](./webserver.md#mqtt), the TempBox appears automatically in Home Assistant.

## Identifiers

`<MAC>` is the 12-digit MAC address of the device in uppercase hex, e.g. `A1B2C3D4E5F6`.

| Item | Value |
|:---|:---|
| Device ID / Client ID | `tf_tempbox_<MAC>` |
| Base Topic | `tf_tempbox/<MAC>` |
| Home Assistant Device | `TF TempBox <MAC>` |

---

## Temperature Sensors

For each port `<PORT>` (`A1` … `D4`):

| Topic | Direction | Retained | Payload |
|:---|:---:|:---:|:---|
| `tf_tempbox/<MAC>/<PORT>/state` | Publish | ✅ | JSON, see below |
| `tf_tempbox/<MAC>/<PORT>/availability` | Publish | ✅ | `online` / `offline` |

A port is reported as `offline` if no sensor is assigned or the assigned sensor does not respond.

### State payload

```json
{
  "temperature": 31.75,
  "raw": 31.50,
  "offset": 0.25,
  "port": "A1"
}
```

| Field | Description |
|:---|:---|
| `temperature` | Corrected temperature in °C (raw + offset) |
| `raw` | Measured temperature in °C |
| `offset` | Calibration offset in °C |
| `port` | Port name |

---

## Access Point Switch

| Topic | Direction | Payload |
|:---|:---:|:---|
| `tf_tempbox/<MAC>/ap/set` | Subscribe | `ON` / `OFF` |
| `tf_tempbox/<MAC>/ap/state` | Publish | `ON` / `OFF` |

The access point can only be switched off while the TempBox is connected to Wi-Fi. Without a Wi-Fi connection it is always on, so the device stays reachable.

---

## Home Assistant Auto-Discovery

The TempBox publishes retained discovery messages after every connection to the broker:

| Entity | Discovery Topic |
|:---|:---|
| 16 × temperature sensor | `homeassistant/sensor/tf_tempbox_<MAC>/<PORT>/config` |
| Access point switch | `homeassistant/switch/tf_tempbox_<MAC>/ap/config` |

All entities are grouped under one device (manufacturer *TegridyFarm*, model *TF TempBox*). Temperature sensors use `device_class: temperature` and `state_class: measurement`, so they work with Home Assistant statistics and history graphs.

---

## Timing

| Parameter | Value |
|:---|:---|
| Sensor read interval | 5 s |
| Publish interval | 5 / 10 / 30 / 60 s *(default 10 s)* |
| Reconnect interval | 5 s |
