---
title: Technical Data
sidebar_position: 1
description: Technical specifications of the TegridyFarm TBox central control unit.
---

# Quick Facts

> **TBox** is the central control unit of the TegridyFarm ecosystem, designed for automation, monitoring and intelligent power distribution.

| | |
|:---|:---|
| **Product Status** | Late Development Phase *(Preliminary Specification)* |
| **Power Supply** | 230 V AC, 50 Hz |
| **Controller** | ESP32-S3 + STM32 *(Secondary MCU – Model TBA)* |
| **Connectivity** | Wi-Fi |
| **Outputs** | 7 × AC Outputs, 4 × 0–10 V Outputs |
| **Expansion** | M12 interfaces for SBox, PBox, VBox and HBox |
| **Firmware Updates** | OTA Supported |
| **Mounting** | Wall Mount |

---

# Electrical Specifications

| Parameter | Value |
|:---|:---|
| Supply Voltage | 230 V AC ±10 %, 50 Hz |
| Power Inlet | IEC 60320 C14 |
| Idle Power Consumption | < 6 W |
| Maximum Connected Load | 2200 W |
| Maximum Output Current | 10 A |
| Internal Fuse | 10 A, 5 × 20 mm cartridge fuse *(subject to change)* |

> **Note**
>
> The maximum connected load refers to the total load connected to the AC outputs and **not** to the internal electronics.

---

# Processing Hardware

| Component | Specification |
|:---|:---|
| Main MCU | ESP32-S3 N8R8 |
| Flash | 8 MB |
| PSRAM | 8 MB |
| Secondary MCU | STM32 *(Model to be announced)* |

---

# Communication Interfaces

## Programming

| Interface | Protocol | Notes |
|:---|:---:|:---|
| USB Type-C | USB | Programming only |
| USB Type-C | UART | Debugging only |

> ⚠ **Warning**
>
> The USB programming interfaces **must not be connected while the device is supplied with 230 V AC.**

---

## AC Outputs

| Interface | Quantity | Notes |
|:---|:---:|:---|
| Switched AC Outputs | 6 | ON / OFF |
| Dimmable AC Output | 1 | Resistive loads only |

---

## 0–10 V Outputs

| Interface | Quantity | Specification |
|:---|:---:|:---|
| RJ12 | 4 | 0–10 V dimming interface |
| Maximum Output Current | | 20 mA per channel |

---

## Expansion Interfaces

| Interface | Device |
|:---|:---|
| M12 8-Pin X Coded| SBox |
| M12 5-Pin A Coded| HBox |
| M12 8-Pin A Coded| PBox |
| M12 12-Pin A Coded| VBox |

Detailed connector pinouts can be found in the **Hardware → Connectors** section.

---

# Wireless Connectivity

| Feature | Specification |
|:---|:---|
| Wi-Fi | IEEE 802.11 b/g/n (2.4 GHz) |
| Bluetooth | To be announced |

---

# Mechanical Specifications

| Parameter | Value |
|:---|:---|
| Dimensions | 220 × 190 × 80 mm |
| Weight | approx. 600 g |
| Housing Material | ASA Carbon Fiber |
| Mounting | Wall mounting (4 × M4 screws) |
| Protection Class | IP41 |

---

# Environmental Conditions

> **Preliminary**

| Parameter | Specification |
|:---|:---|
| Operating Temperature | -5°C - 40°C |
| Relative Humidity | 0 - 90 % |

---

# User Controls

| Component | Quantity |
|:---|:---:|
| Main Power Switch | 1 |

---

# Protection Features

- Surge protection
- Overcurrent protection
- Internal fuse protection

---

# Firmware Features

| Feature | Support |
|:---|:---:|
| OTA Firmware Update | ✅ |
| Factory Reset | ❌ |
| Configuration Backup | ❌ |

---

# Compatibility

## Supported Platforms

| Platform | Status |
|:---|:---:|
| Home Assistant | ✅ |
| MQTT | ✅ |
| Node-RED | Via MQTT |
| REST API | Planned |
| TegridyFarm Cloud | Planned |

---

# Certifications

The following certifications are planned for the production version.

- CE
- RoHS
- TÜV

The PCB is designed to comply with **lead-free (Pb-free)** manufacturing standards.

---

# Scope of Delivery

*(To be announced)*

---

# Revision Information

| Item | Value |
|:---|:---|
| Product | TBox |
| Hardware Revision | 1.x |
| Firmware | See Changelog |
| Document Status | Preliminary Specification |