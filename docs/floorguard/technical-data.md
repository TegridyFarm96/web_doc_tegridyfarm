---
title: Technical Data
sidebar_position: 2
description: Technical specifications of the TegridyFarm FloorGuard.
---

# Quick Facts

> **FloorGuard** is a standalone temperature and dew point monitoring device for water-based underfloor heating and cooling systems, based on the TempBox.

| | |
|:---|:---|
| **Product Status** | Development Phase *(Preliminary Specification)* |
| **Power Supply** | 5 V DC via USB-C |
| **Power Consumption** | approx. 0.6 W typical, max. approx. 2 W |
| **Controller** | ESP32-S3 N8R8 |
| **Connectivity** | Wi-Fi, MQTT, Home Assistant auto-discovery |
| **Temperature Sensors** | Up to 16 × DS18B20 |
| **Sensor Buses** | 4 × OneWire (A–D), max. 4 sensors per bus |
| **Sensor Ports** | 16 × RJ11 (6P4C) |
| **Climate Port** | 1 × RJ11 (6P4C) |
| **Climate Sensor** | 1 × BME280, external, approx. 2 m cable (room temperature, humidity, pressure) |
| **Calculated Values** | Dew point, dew point margin per string |
| **Firmware Updates** | OTA and USB-C |
| **Mounting** | Magnetic |

---

# Electrical Specifications

| Parameter | Value |
|:---|:---|
| Supply Voltage | 5 V DC |
| Power Inlet | USB Type-C |
| Typical Current | approx. 120 mA (≈ 0.6 W) |
| Peak Current | approx. 380 mA (≈ 1.9 W) |
| Recommended Power Supply | 5 V, min. 1 A |

## Power Consumption

The values below are **calculated** from the component datasheets for a fully equipped FloorGuard with **16 × DS18B20** and the **BME280**. They are not yet measured values.

| Component | Typical | Peak | Notes |
|:---|---:|---:|:---|
| ESP32-S3 (Wi-Fi connected) | ~ 100 mA | ~ 340 mA | Wi-Fi power save is disabled; peak during Wi-Fi transmission |
| 16 × DS18B20 | ~ 6 mA | 24 mA | 1.5 mA max. per sensor during conversion, ~1 µA standby |
| BME280 | < 0.1 mA | < 1 mA | |
| Pull-ups, regulator, misc. | ~ 10 mA | ~ 15 mA | Estimate |
| **Total** | **≈ 120 mA** | **≈ 380 mA** | |

> **Note**
>
> As with the TempBox, the **ESP32-S3 is by far the largest consumer**. The BME280 adds less than a milliamp.

---

# Processing Hardware

| Component | Specification |
|:---|:---|
| Main MCU | ESP32-S3 N8R8 |
| Flash | 8 MB |
| PSRAM | 8 MB |

---

# Interfaces

## USB-C

| Interface | Function |
|:---|:---|
| USB Type-C | Power supply and programming |

## Sensor Ports

| Bus | Ports | Max. Sensors |
|:---|:---|:---:|
| OneWire A | A1–A4 | 4 |
| OneWire B | B1–B4 | 4 |
| OneWire C | C1–C4 | 4 |
| OneWire D | D1–D4 | 4 |
| **Total** | **16 × RJ11 (6P4C)** | **16** |

## Climate Port

| Port | Connector | Sensor |
|:---|:---|:---|
| Climate | RJ11 (6P4C) | 1 × BME280 |

Detailed connector pinouts can be found in the **Hardware → Connectors** section.

---

# Sensors

## Temperature Sensors

| Parameter | Value |
|:---|:---|
| Sensor Type | DS18B20 (digital, OneWire) |
| Measuring Range | -55 °C to +125 °C *(sensor specification)* |
| Accuracy | ±0.5 °C from -10 °C to +85 °C *(sensor specification)* |
| Calibration Offset | -5.0 °C to +5.0 °C per sensor |
| Read Interval | 5 s |

## Climate Sensor

| Parameter | Value |
|:---|:---|
| Sensor Type | BME280 |
| Quantity | 1 (room climate) |
| Connection | External, climate port RJ11 (6P4C) |
| Cable Length | approx. 2 m |
| Placement | In the room, outside the manifold cabinet, away from windows and heat sources |
| Measured Values | Room temperature, relative humidity, air pressure |
| Calculated Values | Dew point; dew point margin for each string (A1–D4) |

---

# Wireless Connectivity

| Feature | Specification |
|:---|:---|
| Wi-Fi | IEEE 802.11 b/g/n (2.4 GHz) |
| Access Point | Built-in, for commissioning |

---

# Mechanical Specifications

| Parameter | Value |
|:---|:---|
| Dimensions (W × D × H) | TBA |
| Weight | TBA |
| Housing Material | PLA |
| Mounting | Magnetic |

---

# Environmental Conditions

> **Preliminary**

| Parameter | Specification |
|:---|:---|
| Operating Temperature | TBA |
| Relative Humidity | TBA |

:::note

The enclosure is made of **PLA**. Do not mount the FloorGuard directly on hot surfaces such as the manifold or flow pipes. Only the temperature sensors should be in contact with the heating system.

:::

---

# Firmware Features

| Feature | Support |
|:---|:---:|
| OTA Firmware Update | ✅ |
| USB Firmware Update | ✅ |
| Integrated Web Server | ✅ |
| Factory Reset | ✅ |
| Dew Point Margin per String | ✅ |

---

# Compatibility

| Platform | Status |
|:---|:---:|
| Home Assistant | ✅ (MQTT auto-discovery) |
| MQTT | ✅ |
| Node-RED | Via MQTT |

---

# Revision Information

| Item | Value |
|:---|:---|
| Product | FloorGuard |
| Based on | TempBox |
| Hardware Revision | 1.0 |
| Firmware | 1.0 |
| Document Status | Preliminary Specification |
