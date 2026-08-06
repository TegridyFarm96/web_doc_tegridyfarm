---
title: Sensor
sidebar_position: 1
---

## Overview

The TBox sensor system is based on four different numbering systems. Each serves a different purpose within the firmware and communication protocol.

- **Sensor Function** – Defines the measured process value (temperature, humidity, power, etc.).
- **Sensor Type** – Defines the physical sensor hardware and the number of process values it provides.
- **Home Assistant Device Class** – Defines how a value is interpreted inside Home Assistant.
- **Hardware Configuration** – Defines the fixed hardware position used by the communication protocol.

---

## Sensor Functions

A sensor function describes the meaning of a measured value.

| Function ID | Description |
|------------:|-------------|
| 0 | Not Used |
| 1 | NTC PCB Temperature |
| 2 | PCB Power Measurement (W) |
| 3 | PCB Energy (kWh) |
| 4 | PCB Current (A) |
| 5 | PCB Voltage (V) |
| 6 | Reserved |
| 7 | Level Sensor (0-10 V) - Level (L) |
| 8 | Level Sensor (0-10 V) - Level (%) |
| 9 | Level Sensor (0-10 V) - Consumption (L) |
| 10 | DS18B20 Temperature |
| 11-12 | Reserved |
| 13 | Capacitive Water Sensor |
| 14 | Reserved |
| 15 | pH Value |
| 16-19 | Reserved |
| 20 | SHTx Temperature |
| 21 | SHTx Humidity |
| 22 | SHTx Pressure |
| 23 | SHTx Dew Point |
| 24 | Reserved |
| 25 | BME280 Temperature |
| 26 | BME280 Humidity |
| 27 | BME280 Pressure |
| 28 | BME280 Dew Point |
| 29 | Reserved |
| 30 | BME680 Temperature |
| 31 | BME680 Humidity |
| 32 | BME680 Pressure |
| 33 | BME680 Air Quality |
| 34 | BME680 Dew Point |
| 35 | MH-Z19B CO₂ |
| 36 | MH-Z19B Temperature |
| 37-39 | Reserved |
| 40 | BH1750 Illuminance |
| 41-44 | Reserved |
| 45 | MLX90614 Object Temperature |
| 46 | MLX90614 Ambient Temperature |
| 47-49 | Reserved |
| 50 | VEML6075 UVA |
| 51 | VEML6075 UVB |
| 52 | VEML6075 UV Index |
| 53-99 | Reserved |

---

## Sensor Types

A sensor type identifies the physical sensor hardware.

| Type ID | Sensor | Process Values |
|---------:|--------|---------------:|
| 0 | Not Used | 0 |
| 1 | NTC Resistor | 1 |
| 2 | Energy Measurement IC | 5 |
| 7 | 0-10 V Level Sensor | 3 |
| 10 | DS18B20 | 1 |
| 13 | Capacitive Water Sensor | 1 |
| 15 | Analog pH Sensor | 1 |
| 20 | SHTx | 4 |
| 25 | BME280 | 4 |
| 30 | BME680 | 5 |
| 35 | MH-Z19B | 2 |
| 40 | BH1750 | 1 |
| 45 | MLX90614 | 2 |
| 50 | VEML6075 | 3 |
| 55 | SCD40 / SCD41 | 1 |
| 60 | SGP30 / SGP40 | 1 |
| 65 | EZO ORP | 1 |
| 70 | T6703 / T6713 / T6723 / T6793 | 1 |
| 75 | HM3301 | 1 |
| 80 | DFRobot SEN0322 | 1 |

---

## Home Assistant Device Classes

These device classes are used when publishing sensor values to Home Assistant.

| Device Class ID | Home Assistant Device Class |
|----------------:|----------------------------|
| 0 | Not Used |
| 1 | temperature |
| 2 | humidity |
| 3 | pressure |
| 4 | dew point |
| 5 | air_quality_index |
| 6 | ph |
| 7 | illuminance |
| 8 | carbon_dioxide |
| 9 | volume |
| 10 | energy |
| 11 | power |
| 12 | current |
| 13 | voltage |
| 14 | power_factor |
| 15 | battery |

---

## Hardware Configuration

The hardware configuration defines where each sensor value is located inside the communication telegram.

| Hardware No. | Description | Location |
|-------------:|-------------|----------|
| 1 | NTC TBOX | TBOX |
| 2 | Power | TBOX |
| 3 | Energy | TBOX |
| 4 | Energy Today | TBOX |
| 5 | Energy Yesterday | TBOX |
| 6 | Current | TBOX |
| 7 | Voltage | TBOX |
| 15 | P Analog Level (L) | TBOX / PBOX |
| 16 | P Analog Level (%) | TBOX / PBOX |
| 19 | Analog pH (mV) | SBOX |
| 20 | Analog pH | SBOX |
| 21-25 | OneWire Sensors 1-5 | SBOX |
| 26-29 | Analog Universal Inputs | SBOX |
| 40-43 | Capacitive / Analog Level Sensors | VBOX |
| 61-65 | I²C Port 1 | SBOX |
| 66-70 | I²C Port 2 | SBOX |
| 71-75 | I²C Port 3 | SBOX |
| 76-80 | I²C Port 4 | SBOX |
| 81-85 | I²C Port 5 | SBOX |
| 86-90 | I²C Port 6 | SBOX |
| 91-95 | I²C Port 7 | SBOX |
| 96-100 | I²C Port 8 | SBOX |