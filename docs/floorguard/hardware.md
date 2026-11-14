---
title: Hardware
sidebar_position: 3
---

## Overview

> **Picture here**

The FloorGuard is based on the [TempBox](../tempbox/hardware.md) hardware. It is built around an **ESP32-S3** and provides:

- **16 × RJ11 (6P4C)** sensor ports (A1–D4), 8 on each side of the enclosure
- **4 independent OneWire buses** (A–D) for DS18B20 temperature sensors
- **1 × RJ11 (6P4C)** climate port for an external **BME280** (room temperature, humidity and air pressure)
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

All four ports of a bus share the same OneWire data line. Typically one bus is used per distribution (heating circuit manifold), with one sensor per string.

## Sensor Assignment

**The buses are always correct.** Each bus has its own GPIO, so a sensor plugged into a B port always appears on bus B, never on A, C or D.

**The port within a bus is not.** All four ports of a bus share the same data line, so the FloorGuard cannot detect **which jack** (1–4) a sensor is plugged into. Each DS18B20 is identified only by its unique 64-bit ROM address. New sensors are assigned to the first free port of their bus in the order in which the bus finds them, which has nothing to do with the physical jack.

:::warning Check the port order

This applies whenever a bus has **two, three or four sensors**: their order is not guaranteed, and a sensor plugged into A1 may show up as A2 and vice versa. You have to check the assignment and correct it in the [web server](./webserver.md#settings) if needed. The assignment is stored permanently.

Even a **single sensor** on a bus is always assigned to port 1 first. If it is plugged into A3, for example, move it to A3 in the web server.

:::

There are two ways to assign the sensors correctly:

### Option 1: Connect the sensors port by port

1. Connect only the sensors for **A1, B1, C1 and D1**.
2. Press **Rescan** in the web server. Each bus has exactly one sensor, so it is assigned to port 1.
3. Connect the sensors for **A2, B2, C2 and D2** and press **Rescan** again. Already assigned sensors keep their port, the new sensors are assigned to port 2.
4. Repeat for ports 3 and 4.

### Option 2: Connect all sensors and identify them by warming

1. Connect all sensors and press **Rescan**.
2. With all sensors at room temperature, warm up **one** sensor in your hand.
3. On the [overview page](./webserver.md#overview-page), the warmed sensor shows a clearly higher value than the others on its bus.
4. If it is not shown at the port it is plugged into, select its address for the correct port on the [settings page](./webserver.md#settings).
5. Repeat for every bus with more than one sensor.

Do this **before** mounting the sensors on the heating system, while all of them are still at the same temperature.


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

## Climate Port (RJ11 6P4C)

*Connection for the external BME280 room climate sensor.*

> **Picture here**

The climate port uses the **same connector as the sensor ports**. The BME280 comes with a cable of approx. **2 m**, so it can be placed outside the manifold cabinet.

| Pin | Signal | Description |
|----:|--------|-------------|
| 1 | -- | Not populated |
| 2 | TBA | |
| 3 | TBA | |
| 4 | TBA | |
| 5 | TBA | |
| 6 | -- | Not populated |

:::warning

Only connect the BME280 to the climate port, and only DS18B20 sensors to the sensor ports A1–D4.

:::

---

## USB-C

| Function | Description |
|:---|:---|
| Power Supply | 5 V DC |
| Programming | Firmware flashing via USB |

Firmware can also be updated **over the air (OTA)**, so the USB connection is not required for regular updates.

---

# Room Climate Sensor

## BME280

The FloorGuard has **one external BME280** that measures the room climate:

- Room temperature
- Relative humidity
- Air pressure

| Parameter | Value |
|:---|:---|
| Connection | [Climate port](#climate-port-rj11-6p4c), RJ11 (6P4C) |
| Cable Length | approx. 2 m |

From room temperature and humidity the FloorGuard calculates the **dew point** of the room air.

## Placement

The dew point is only as accurate as the room climate the BME280 measures. Place it **outside the manifold cabinet**, at a spot that represents the actual room air.

| ✅ Do | ❌ Avoid |
|:---|:---|
| Free wall area in the room | Inside the manifold cabinet |
| Normal room air circulation | Near windows or exterior doors (outdoor air when opened) |
| | Above or next to radiators, heaters or other heat sources |
| | Direct sunlight |
| | Near showers, kitchens or other moisture sources |

:::tip

If in doubt, compare the BME280 temperature with a reference room thermometer for a day. Both should show nearly the same value.

:::

## Dew Point per String

Each distribution can have a different set temperature, and each string (heating loop) has its own actual temperature. The air they are exposed to is the same room air, so **one dew point is enough** for all of them.

The FloorGuard compares the temperature of **every string** (ports A1–D4) with this dew point:

```
Dew point margin = String temperature − Dew point
```

| Margin | Meaning |
|:---|:---|
| Positive | String is warmer than the dew point, no condensation |
| Close to 0 | Condensation risk |
| Negative | String is colder than the dew point, condensation will form |

:::info Why this matters

In **cooling mode**, condensation forms as soon as a pipe or surface is colder than the dew point of the surrounding air. Because the margin is calculated per string, the FloorGuard shows exactly which string is at risk first.

:::
