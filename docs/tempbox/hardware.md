---
title: Hardware
sidebar_position: 3
---

## Overview

![TempBox front view](/img/tempbox/front.webp)

The TempBox is built around an **ESP32-S3** and provides:

- **16 × RJ11 (6P4C)** sensor ports (A1–D4), 8 on each side of the enclosure
- **4 independent OneWire buses** (A–D) for DS18B20 temperature sensors
- An internal **BME280** for ambient temperature, humidity and air pressure
- **USB-C** for power supply and programming

---

# Sensor Buses

The sensor ports are grouped into four independent OneWire buses. Each bus supports up to **4 DS18B20 sensors**, one per port.

| Bus | Ports | ESP32-S3 GPIO |
|:---|:---|:---:|
| A | A1, A2, A3, A4 | GPIO 5 |
| B | B1, B2, B3, B4 | GPIO 4 |
| C | C1, C2, C3, C4 | GPIO 2 |
| D | D1, D2, D3, D4 | GPIO 1 |

All four ports of a bus share the same OneWire data line. Splitting the sensors across four buses keeps cable lengths per bus short and allows, for example, one bus per heating circuit manifold.

:::info Sensor assignment

Because all ports of a bus are electrically connected, the TempBox cannot detect **which jack** a sensor is plugged into. Each DS18B20 is identified by its unique 64-bit ROM address instead.

New sensors are automatically assigned to the next free port of their bus. To match the sensors to the physical ports or heating circuits, assign them manually in the [web server](./webserver.md#settings). The assignment is stored permanently.

:::

---

# Connectors

## Sensor Ports (RJ11 6P4C)

*Connection for the DS18B20 temperature sensors.*

> **Picture here**

| Pin | Signal | Description |
|----:|--------|-------------|
| 1 | -- | Not populated |
| 2 | TBA | |
| 3 | TBA | |
| 4 | TBA | |
| 5 | TBA | |
| 6 | -- | Not populated |

:::tip

Mount the sensors with good thermal contact to the pipe or manifold and insulate them from the ambient air to get accurate readings.

:::

:::warning

The sensor ports are **not** telephone or network ports. Do not connect telephones, modems or Ethernet equipment.

:::

---

## USB-C

| Function | Description |
|:---|:---|
| Power Supply | 5 V DC |
| Programming | Firmware flashing via USB |

Firmware can also be updated **over the air (OTA)**, so the USB connection is not required for regular updates.

---

# Internal Sensors

## BME280

The BME280 is mounted inside the enclosure and measures:

- Ambient temperature
- Relative humidity
- Air pressure

From temperature and humidity the TempBox calculates the **dew point**.
