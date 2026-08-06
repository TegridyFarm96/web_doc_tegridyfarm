---
title: Hardware
sidebar_position: 3
---

## Overview

The TBOX hardware consists of a **Main PCB** and a **Side PCB**.

The Main PCB contains the control electronics, power supply and mains switching circuitry. The Side PCB provides all external field connections for sensors, actuators and expansion devices.

Internally, the TBOX operates with three supply voltages:

- **24 VDC**
- **5 VDC**
- **3.3 VDC**

The mains section is electrically isolated from the low-voltage electronics using optocouplers.

![TBOX Hardware Architecture](/uml/tbox/hw_tbox.svg)

---

## Power Outputs

### Switched Sockets

| Output | Specification |
|---------|---------------|
| Socket 1 – 6 | 230 VAC, max. **10 A** each |

> **Note**
>
> Although each socket is rated for **10 A**, the total current drawn by all switched sockets together is limited to **10 A**.

### Phase-Controlled Socket

| Parameter | Value |
|-----------|-------|
| Output | Socket 7 |
| Type | Phase-angle control |
| Load Type | Resistive loads only |
| Maximum Power | **200 W** |
| Fuse | **1 A** |

:::warning

The phase-controlled output is designed **exclusively for resistive loads**.

Connecting inductive or capacitive loads may result in **unpredictable behavior**, incorrect dimming operation, excessive electrical stress, or permanent damage to the TBOX and/or the connected device.

:::

---

# Connectors

## Sensor Connector

*Used to connect the **SBOX** sensor expansion module.*

> **Picture here**

| Pin | Signal | Description |
|----:|--------|-------------|
| 1 | 5 V | Supply |
| 2 | +3.3 V | Supply |
| 3 | SCL | I²C Clock |
| 4 | SDA | I²C Data |
| 5 | AO1 | Analog Input 1 |
| 6 | AO2 | Analog Input 2 |
| 7 | OneWire | OneWire Bus |
| 8 | GND | Ground |

:::warning

Only use the **shielded connection cable supplied by TegridyFarm**.

Using unshielded or third-party cables may cause electromagnetic interference (EMI), resulting in communication errors, unpredictable system behavior, or malfunction of connected sensors.

Avoid routing the cable alongside mains wiring, switching power supplies, motor cables, or other sources of electromagnetic interference.

:::

---

## Pump Connector

*Connection for the external PBOX.*

> **Picture here**

| Pin | Signal | Description |
|----:|--------|-------------|
| 1 | Pump 1 | Digital Output |
| 2 | GND | Ground |
| 3 | Levelsensor Signal | Analog Input |
| 4 | Pump 5 | Digital Output |
| 5 | Pump 4 | Digital Output |
| 6 | Pump 3 | Digital Output |
| 7 | Pump 2 | Digital Output |
| 8 | Levelsensor +24 V | Power Supply |

---

## Valve Connector

*Connection for the external VBOX.*

> **Picture here**

| Pin | Signal | Description |
|----:|--------|-------------|
| 1 | +24 V | Power Supply |
| 2 | Reserved | -- |
| 3 | Valve 6 | Digital Output |
| 4 | Valve 5 | Digital Output |
| 5 | Valve 4 | Digital Output |
| 6 | Valve 3 | Digital Output |
| 7 | Valve 2 | Digital Output |
| 8 | Valve 1 | Digital Output |
| 9 | GND | Ground |
| 10 | AO4 | Analog Input |
| 11 | Capacitive Sensor 1 | Digital Input |
| 12 | Capacitive Sensor 1 | Digital Input |

---

## HMI Connector

*Connection for the DWIN HMI display.*

> **Picture here**

| Pin | Signal | Description |
|----:|--------|-------------|
| 1 | HMI RX | UART Receive |
| 2 | HMI TX | UART Transmit |
| 3 | +24 V | Supply |
| 4 | Reserved | -- |
| 5 | GND | Ground |

---

## Programming Connector

*USB-C programming interface.*

| Connector | Purpose |
|-----------|---------|
| USB-C 1 | ESP32 Programming |
| USB-C 2 | ESP32 Programming / Debug |

:::warning

Do **not** connect the USB programming interfaces while the TBOX is powered from the mains supply.

:::

## RJ12 Dimmer Outputs

The TBOX provides **four independent RJ12 connectors** for controlling external **0–10 V dimmable devices**.

Each connector has the same pin assignment and is electrically identical.

The output assignment can be modified internally by changing the **2.54 mm jumper configuration** on the PCB. By default, the connectors are configured as shown below.

| Pin | Default Signal | Description |
|----:|----------------|-------------|
| 1 | Not connected | -- |
| 2 | Not connected | -- |
| 3 | **0–10 V Output** | Analog dimming output |
| 4 | **GND** | Signal ground |
| 5 | Not connected | -- |
| 6 | Not connected | -- |

The default configuration is suitable for the majority of commercially available **0–10 V dimming interfaces**.

:::warning

Changing the jumper configuration requires opening the TBOX enclosure.

- Opening the enclosure **voids the warranty**.
- **Always disconnect the TBOX completely from the mains supply before opening the enclosure.**
- Wait until all internal capacitors have discharged before touching the electronics.
- An incorrect jumper configuration or accidental short circuit may permanently damage the output operational amplifier (op-amp).

Only qualified personnel should modify the jumper configuration.

:::

### Available Connectors

| Connector | Function |
|-----------|----------|
| Dimmer 1 | 0–10 V Output |
| Dimmer 2 | 0–10 V Output |
| Dimmer 3 | 0–10 V Output |
| Dimmer 4 | 0–10 V Output |