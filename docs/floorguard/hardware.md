---
title: Hardware
sidebar_position: 3
---

## Overview

> **Picture here**

The FloorGuard is based on the [TempBox](../tempbox/hardware.md) hardware. It is built around an **ESP32-S3** and provides:

- **16 × RJ11 (6P4C)** sensor ports (A1–D4), 8 on each side of the enclosure
- **4 independent OneWire buses** (A–D) for DS18B20 temperature sensors
- **4 climate sensor ports** (A–D) for one external **BME280** per distribution
- An internal **BME280** for room temperature, humidity and air pressure
- **USB-C** for power supply and programming

---

# Distributions

The FloorGuard is organised in four **distributions** A–D. Typically one distribution corresponds to one heating circuit manifold. Each distribution consists of:

| Distribution | Temperature Ports | OneWire GPIO | Climate Sensor |
|:---|:---|:---:|:---:|
| A | A1, A2, A3, A4 | GPIO 5 | BME280 A |
| B | B1, B2, B3, B4 | GPIO 4 | BME280 B |
| C | C1, C2, C3, C4 | GPIO 2 | BME280 C |
| D | D1, D2, D3, D4 | GPIO 1 | BME280 D |

Place the BME280 of a distribution **directly at its manifold**, so it measures the air in which condensation would form.

---

# Sensor Buses

Each OneWire bus supports up to **4 DS18B20 sensors**, one per port. All four ports of a bus share the same OneWire data line.

:::info Sensor assignment

Because all ports of a bus are electrically connected, the FloorGuard cannot detect **which jack** a sensor is plugged into. Each DS18B20 is identified by its unique 64-bit ROM address instead.

New sensors are automatically assigned to the next free port of their bus. To match the sensors to the physical ports or heating loops, assign them manually in the [web server](./webserver.md#settings). The assignment is stored permanently.

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

## Climate Sensor Ports (A–D)

*Connection for the external BME280 sensors, one per distribution.*

> **Picture here**

| Parameter | Value |
|:---|:---|
| Connector | TBA |
| Interface | TBA |
| Max. Cable Length | TBA |

| Pin | Signal | Description |
|----:|--------|-------------|
| TBA | TBA | |

:::tip

Mount the BME280 close to the manifold but **not in direct contact** with pipes or the manifold itself. It must measure the surrounding air, not the surface temperature.

:::

---

## USB-C

| Function | Description |
|:---|:---|
| Power Supply | 5 V DC |
| Programming | Firmware flashing via USB |

Firmware can also be updated **over the air (OTA)**, so the USB connection is not required for regular updates.

---

# Climate Sensors

## Internal BME280

Mounted inside the enclosure, it measures the **room climate** at the installation location:

- Ambient temperature
- Relative humidity
- Air pressure

From temperature and humidity the FloorGuard calculates the **room dew point**.

## Distribution BME280 (A–D)

Each distribution has its own external BME280 that measures temperature, relative humidity and air pressure **at the manifold**. From these values the FloorGuard calculates a **separate dew point for each distribution**.

:::info Why a dew point per distribution?

In cooling mode, condensation forms as soon as a surface is colder than the dew point of the surrounding air. Humidity and temperature at a manifold in a closed installation cabinet, a bathroom or a basement can differ considerably from the room where the FloorGuard is mounted. Measuring at each distribution shows the actual condensation risk at every manifold.

:::
