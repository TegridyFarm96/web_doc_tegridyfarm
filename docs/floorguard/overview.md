---
id: overview
title: Overview
slug: /floorguard
sidebar_position: 1
description: FloorGuard – temperature and dew point monitoring for every manifold of a water-based underfloor heating and cooling system.
---

# FloorGuard

> **Picture here**

The **FloorGuard** is a standalone monitoring device for **water-based underfloor heating and cooling systems**. It is based on the [TempBox](../tempbox/overview.md) and extends it with **one BME280 climate sensor per distribution (manifold)**.

Like the TempBox, the FloorGuard measures the flow and return temperatures of up to **16 heating loops** with **DS18B20 sensors** on **four independent OneWire buses (A–D)**. In addition, a BME280 at each distribution measures the local air temperature, humidity and air pressure. From these values the FloorGuard calculates the **dew point of each distribution individually**.

This matters most when the system is used for **floor cooling**: if the water temperature at a manifold falls below the local dew point, condensation forms on pipes, manifolds and in the floor construction. Because humidity can differ considerably between rooms and installation cabinets, a single room sensor is not enough. The FloorGuard monitors the condensation risk exactly where it occurs.

All values are available via **Wi-Fi / MQTT** with **Home Assistant auto-discovery**, and the device can be configured through its integrated **web server**.

:::info

The FloorGuard is a **standalone device**. It is not part of the TBOX product family and does not require a TBOX to operate.

:::

## FloorGuard vs. TempBox

| Feature | TempBox | FloorGuard |
|:---|:---:|:---:|
| DS18B20 temperature sensors | up to 16 | up to 16 |
| OneWire buses | 4 (A–D) | 4 (A–D) |
| Internal BME280 (room climate) | ✅ | ✅ |
| BME280 per distribution | – | ✅ (4 ×, one per bus) |
| Dew point | Room only | Room and **each distribution** |
| Wi-Fi / MQTT / Home Assistant | ✅ | ✅ |

## Key Features

- Up to 16 DS18B20 temperature sensors
- 4 independent OneWire buses (A–D) with up to 4 sensors each
- 16 labelled RJ11 sensor ports (A1–D4)
- **One external BME280 per distribution (A–D)** for temperature, humidity and air pressure
- **Dew point calculation for each distribution**
- Integrated BME280 for room climate
- Per-sensor calibration offset
- Wi-Fi with MQTT and Home Assistant auto-discovery
- Integrated web server for configuration
- OTA firmware updates
- Compact PLA enclosure with magnetic mounting

## Documentation

| Section | Content |
|:---|:---|
| [Technical Data](./technical-data.md) | Specifications and power consumption |
| [Hardware](./hardware.md) | Connectors, pinout, sensor buses and climate sensors |
| [Web Server](./webserver.md) | First start, Wi-Fi setup and sensor assignment |
| [MQTT](./mqtt.md) | Topics, payloads and Home Assistant integration |
| [Downloads](./downloads.md) | Firmware, manuals and other files |
