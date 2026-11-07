---
id: overview
title: Overview
slug: /tempbox
sidebar_position: 1
description: TempBox – standalone temperature monitoring for water-based underfloor heating systems.
---

# TempBox

![TempBox](/img/tempbox/side.webp)

The **TempBox** is a standalone temperature monitoring device for **water-based underfloor heating systems**.

Underfloor heating systems typically consist of several heating circuit manifolds (distributors), each feeding multiple heating loops (hoses). The TempBox measures these temperatures with up to **16 DS18B20 sensors** on **four independent OneWire buses (A–D)**, giving you a clear picture of how your heating system is actually performing.

An integrated **BME280** environmental sensor measures room temperature, humidity and air pressure. From these values the TempBox calculates the **dew point**, helping to detect condensation risk, for example when the system is used for floor cooling.

All values are available via **Wi-Fi / MQTT** with **Home Assistant auto-discovery**, and the device can be configured through its integrated **web server**.

:::info

The TempBox is a **standalone device**. It is not part of the TBOX product family and does not require a TBOX to operate.

:::

## Key Features

- Up to 16 DS18B20 temperature sensors
- 4 independent OneWire buses (A–D) with up to 4 sensors each
- 16 labelled RJ11 sensor ports (A1–D4)
- Per-sensor calibration offset
- Integrated BME280 for room temperature, humidity and air pressure
- Dew point calculation
- Wi-Fi with MQTT and Home Assistant auto-discovery
- Integrated web server for configuration
- OTA firmware updates
- Compact PLA enclosure with magnetic mounting

## Documentation

| Section | Content |
|:---|:---|
| [Technical Data](./technical-data.md) | Specifications and power consumption |
| [Hardware](./hardware.md) | Connectors, pinout and sensor buses |
| [Web Server](./webserver.md) | First start, Wi-Fi setup and sensor assignment |
| [MQTT](./mqtt.md) | Topics, payloads and Home Assistant integration |
| [Downloads](./downloads.md) | Firmware, manuals and other files |
