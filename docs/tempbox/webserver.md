---
title: Web Server
sidebar_position: 4
---

## Overview

The TempBox includes an integrated web server for configuration, sensor assignment and diagnostics.

The interface is accessible from any modern web browser and requires no additional software.

## First Start

On startup, the TempBox creates its own Wi-Fi access point for commissioning.

| Parameter | Value |
|-----------|-------|
| SSID | `TempBox_<XXXXXX>` *(last 6 digits of the MAC address)* |
| Password | `tempbox123` |
| Default IP | `192.168.4.1` |

After connecting, open the following address in your browser:

```
http://192.168.4.1
```

Configure your Wi-Fi network on the [Wi-Fi](#wi-fi) page. Once connected, the TempBox is also reachable through your local network. The assigned IP address is shown on the [System](#system) page.

:::info Access point behavior

- If the TempBox is **not connected** to a Wi-Fi network, the access point is always active.
- If it **is connected**, the access point stays active by default and can be switched off via MQTT / Home Assistant (see [MQTT](./mqtt.md#access-point-switch)).

:::

---

## Overview Page

The start page shows all 16 ports grouped by bus (A–D).

For each port:

| Field | Description |
|:---|:---|
| Status | **Online**, **Offline** (assigned but not responding) or **Not assigned** |
| Address | 64-bit ROM address of the assigned DS18B20 |
| Raw | Measured temperature |
| Offset | Calibration offset |
| Temperature | Corrected temperature (raw + offset) |

---

## Settings

The settings page is used to **assign sensors to ports** and set **calibration offsets**.

For each port:

- **Sensor:** Select one of the DS18B20 sensors detected on that bus, or *Not assigned*.
- **Offset:** Calibration offset from **-5.0 °C to +5.0 °C** in 0.1 °C steps.

Press **Rescan** after connecting new sensors, then **Save settings**.

:::tip Identifying sensors

To find out which sensor is which, connect them one at a time and press **Rescan** after each one, or warm a single sensor in your hand and watch which value changes.

:::

---

## Wi-Fi

- Scan for available networks
- Enter SSID and password
- Reconnect Wi-Fi
- Reboot

---

## MQTT

| Parameter | Description |
|:---|:---|
| Broker | Hostname or IP address of the MQTT broker |
| Port | Default `1883` |
| Username / Password | Broker credentials |
| Publish Interval | 5 s, 10 s *(default)*, 30 s or 60 s |
| Enable MQTT | Enable or disable MQTT |

See [MQTT](./mqtt.md) for topics and payloads.

---

## System

Shows device information:

- Access point SSID and IP
- Wi-Fi connection state and IP address
- Uptime
- Free memory

Actions:

- Rescan sensors
- Reboot
- **Factory reset:** deletes all saved settings (Wi-Fi, MQTT, sensor assignment and offsets)
