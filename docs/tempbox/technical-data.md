---
title: Technical Data
sidebar_position: 2
description: Technical specifications of the TegridyFarm TempBox.
---

# Quick Facts

> **TempBox** is a standalone temperature monitoring device for water-based underfloor heating systems.

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
| **Environmental Sensor** | BME280 (temperature, humidity, pressure) |
| **Calculated Values** | Dew point |
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

The values below are **calculated** from the component datasheets for a fully equipped TempBox with **16 × DS18B20**. They are not yet measured values.

| Component | Typical | Peak | Notes |
|:---|---:|---:|:---|
| ESP32-S3 (Wi-Fi connected) | ~ 100 mA | ~ 340 mA | Wi-Fi power save is disabled; peak during Wi-Fi transmission |
| 16 × DS18B20 | ~ 6 mA | 24 mA | 1.5 mA max. per sensor during conversion, ~1 µA standby |
| BME280 | < 0.1 mA | < 1 mA | |
| Pull-ups, regulator, misc. | ~ 10 mA | ~ 15 mA | Estimate |
| **Total** | **≈ 120 mA** | **≈ 380 mA** | |

> **Note**
>
> The **ESP32-S3 is by far the largest consumer**. The temperature sensors only add a few milliamps, even when all 16 ports are in use. The firmware reads the buses one after another, so at most 4 sensors convert at the same time.
>
> The calculation assumes a linear 3.3 V regulator, so the current drawn at 5 V is approximately the same as at 3.3 V.

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

## Environmental Sensor

| Parameter | Value |
|:---|:---|
| Sensor Type | BME280 |
| Measured Values | Temperature, relative humidity, air pressure |
| Calculated Values | Dew point |

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
| Dimensions (W × D × H) | 99.5 × 63.5 × 19.5 mm |
| Weight | approx. 84 g *(without temperature sensors)* |
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

The enclosure is made of **PLA**. Do not mount the TempBox directly on hot surfaces such as the manifold or flow pipes. Only the temperature sensors should be in contact with the heating system.

:::

---

# Firmware Features

| Feature | Support |
|:---|:---:|
| OTA Firmware Update | ✅ |
| USB Firmware Update | ✅ |
| Integrated Web Server | ✅ |
| Factory Reset | ✅ |

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
| Product | TempBox |
| Hardware Revision | 1.0 |
| Firmware | 1.0 |
| Document Status | Preliminary Specification |
