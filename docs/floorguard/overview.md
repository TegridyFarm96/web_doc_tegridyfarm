---
id: overview
title: Overview
slug: /floorguard
sidebar_position: 1
description: FloorGuard – temperature and dew point monitoring for every string of a water-based underfloor heating and cooling system.
---

# FloorGuard

> **Picture here**

The **FloorGuard** is a standalone monitoring device for **water-based underfloor heating and cooling systems**. It is based on the [TempBox](../tempbox/overview.md) and adds **one external BME280** room climate sensor.

Like the TempBox, the FloorGuard measures the temperatures of up to **16 strings (heating loops)** with **DS18B20 sensors** on **four independent OneWire buses (A–D)**. In addition, the BME280 measures room temperature, humidity and air pressure. From these values the FloorGuard calculates the **dew point** and compares it with the temperature of **every string**.

This matters most when the system is used for **floor cooling**: if a string gets colder than the dew point, condensation forms on pipes, manifolds and in the floor construction. Every distribution can have a different set temperature and every string a different actual temperature, but they all share the same room air, so one room climate sensor is enough to evaluate the condensation risk of each string.

All values are available via **Wi-Fi / MQTT** with **Home Assistant auto-discovery**, and the device can be configured through its integrated **web server**.

:::info

The FloorGuard is a **standalone device**. It is not part of the TBOX product family and does not require a TBOX to operate.

:::

## FloorGuard vs. TempBox

| Feature | TempBox | FloorGuard |
|:---|:---:|:---:|
| DS18B20 temperature sensors | up to 16 | up to 16 |
| OneWire buses | 4 (A–D) | 4 (A–D) |
| BME280 (room climate) | – | ✅ (1 ×) |
| Humidity / air pressure | – | ✅ |
| Dew point | – | ✅ |
| Dew point margin per string | – | ✅ |
| Wi-Fi / MQTT / Home Assistant | ✅ | ✅ |

## Key Features

- Up to 16 DS18B20 temperature sensors
- 4 independent OneWire buses (A–D) with up to 4 sensors each
- 16 labelled RJ11 sensor ports (A1–D4)
- External **BME280** on its own RJ11 port (approx. 2 m cable) for room temperature, humidity and air pressure
- **Dew point calculation** and dew point margin for every string
- Per-sensor calibration offset
- Wi-Fi with MQTT and Home Assistant auto-discovery
- Integrated web server for configuration
- OTA firmware updates
- Compact PLA enclosure with magnetic mounting

## Documentation

| Section | Content |
|:---|:---|
| [Technical Data](./technical-data.md) | Specifications and power consumption |
| [Hardware](./hardware.md) | Connectors, pinout, sensor buses and dew point |
| [Web Server](./webserver.md) | First start, Wi-Fi setup and sensor assignment |
| [MQTT](./mqtt.md) | Topics, payloads and Home Assistant integration |
| [Downloads](./downloads.md) | Firmware, manuals and other files |
