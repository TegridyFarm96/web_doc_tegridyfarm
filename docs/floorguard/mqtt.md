---
title: MQTT
sidebar_position: 5
---

## Overview

The FloorGuard publishes all sensor values via **MQTT** and supports **Home Assistant MQTT auto-discovery**. Once the broker is configured in the [web server](./webserver.md#mqtt), the FloorGuard appears automatically in Home Assistant.

:::note Preliminary

The topic structure follows the [TempBox](../tempbox/mqtt.md). The climate topic and the `dew_point_margin` field are preliminary and may change until the first firmware release.

:::

## Identifiers

`<MAC>` is the 12-digit MAC address of the device in uppercase hex, e.g. `A1B2C3D4E5F6`.

| Item | Value |
|:---|:---|
| Device ID / Client ID | `tf_floorguard_<MAC>` |
| Base Topic | `tf_floorguard/<MAC>` |
| Home Assistant Device | `TF FloorGuard <MAC>` |

---

## Temperature Sensors

For each port `<PORT>` (`A1` … `D4`):

| Topic | Direction | Retained | Payload |
|:---|:---:|:---:|:---|
| `tf_floorguard/<MAC>/<PORT>/state` | Publish | ✅ | JSON, see below |
| `tf_floorguard/<MAC>/<PORT>/availability` | Publish | ✅ | `online` / `offline` |

A port is reported as `offline` if no sensor is assigned or the assigned sensor does not respond.

### State payload

```json
{
  "temperature": 31.75,
  "raw": 31.50,
  "offset": 0.25,
  "dew_point_margin": 17.95,
  "port": "A1"
}
```

| Field | Description |
|:---|:---|
| `temperature` | Corrected temperature in °C (raw + offset) |
| `raw` | Measured temperature in °C |
| `offset` | Calibration offset in °C |
| `dew_point_margin` | `temperature` − room dew point in K; ≤ 0 means condensation |
| `port` | Port name |

---

## Room Climate

| Topic | Direction | Retained | Payload |
|:---|:---:|:---:|:---|
| `tf_floorguard/<MAC>/climate/state` | Publish | ✅ | JSON, see below |
| `tf_floorguard/<MAC>/climate/availability` | Publish | ✅ | `online` / `offline` |

### State payload

```json
{
  "temperature": 22.4,
  "humidity": 58.2,
  "pressure": 1013.6,
  "dew_point": 13.8
}
```

| Field | Description |
|:---|:---|
| `temperature` | Room temperature in °C |
| `humidity` | Relative humidity in % |
| `pressure` | Air pressure in hPa |
| `dew_point` | Calculated dew point in °C |

---

## Access Point Switch

| Topic | Direction | Payload |
|:---|:---:|:---|
| `tf_floorguard/<MAC>/ap/set` | Subscribe | `ON` / `OFF` |
| `tf_floorguard/<MAC>/ap/state` | Publish | `ON` / `OFF` |

The access point can only be switched off while the FloorGuard is connected to Wi-Fi. Without a Wi-Fi connection it is always on, so the device stays reachable.

---

## Home Assistant Auto-Discovery

The FloorGuard publishes retained discovery messages after every connection to the broker:

| Entity | Discovery Topic |
|:---|:---|
| 16 × temperature sensor | `homeassistant/sensor/tf_floorguard_<MAC>/<PORT>/config` |
| 16 × dew point margin | `homeassistant/sensor/tf_floorguard_<MAC>/<PORT>_margin/config` |
| Room climate (temperature, humidity, pressure, dew point) | `homeassistant/sensor/tf_floorguard_<MAC>/climate_<VALUE>/config` |
| Access point switch | `homeassistant/switch/tf_floorguard_<MAC>/ap/config` |

All entities are grouped under one device (manufacturer *TegridyFarm*, model *TF FloorGuard*). Sensors use the matching `device_class` (`temperature`, `humidity`, `atmospheric_pressure`) and `state_class: measurement`, so they work with Home Assistant statistics and history graphs.

:::tip Condensation warning

Use the `dew_point_margin` of each string in a Home Assistant automation, e.g. to stop floor cooling or raise the flow temperature of a distribution once the margin of one of its strings drops below 2 K.

:::

---

## Timing

| Parameter | Value |
|:---|:---|
| Sensor read interval | 5 s |
| Publish interval | 5 / 10 / 30 / 60 s *(default 10 s)* |
| Reconnect interval | 5 s |
