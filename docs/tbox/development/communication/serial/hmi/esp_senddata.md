---
title: Send Data
sidebar_position: 4
---

# Send Data

## Telegram 01

| Byte | Description | Value / Range | Array Index | Database | Table | Name |
|-----:|-------------|---------------|------------:|----------|-------|------|
| 0 | Start Byte | `0xAA` × 16 | 0 | - | - | - |
| 1 | Telegram ID | `1` | 1 | - | - | - |
| 2 | Reserved | - | 2 | - | - | - |
| 3 | S-Box Present | `0 = No`, `111 = Yes` | 3 | - | - | - |
| 4 | V-Box Present | `0 = No`, `111 = Yes` | 4 | - | - | - |
| 5 | P-Box Present | `0 = No`, `111 = Yes` | 5 | - | - | - |
| 6-17 | Reserved | - | 6-17 | - | - | - |
| 18 | OneWire Sensor 01 | Sensor Type Number | 18 | value | available | a_one_w1 |
| 19 | OneWire Sensor 02 | Sensor Type Number | 19 | value | available | a_one_w2 |
| 20 | OneWire Sensor 03 | Sensor Type Number | 20 | value | available | a_one_w3 |
| 21 | OneWire Sensor 04 | Sensor Type Number | 21 | value | available | a_one_w4 |
| 22 | OneWire Sensor 05 | Sensor Type Number | 22 | value | available | a_one_w5 |
| 23-25 | Reserved | - | 23-25 | - | - | - |
| 26 | I²C Sensor 01 | Sensor Type Number | 26 | value | available | a_i2c_1 |
| 27 | I²C Sensor 02 | Sensor Type Number | 27 | value | available | a_i2c_2 |
| 28 | I²C Sensor 03 | Sensor Type Number | 28 | value | available | a_i2c_3 |
| 29 | I²C Sensor 04 | Sensor Type Number | 29 | value | available | a_i2c_4 |
| 30 | I²C Sensor 05 | Sensor Type Number | 30 | value | available | a_i2c_5 |
| 31 | I²C Sensor 06 | Sensor Type Number | 31 | value | available | a_i2c_6 |
| 32 | I²C Sensor 07 | Sensor Type Number | 32 | value | available | a_i2c_7 |
| 33 | I²C Sensor 08 | Sensor Type Number | 33 | value | available | a_i2c_8 |
| 34 | Analog S-Box 1 | Sensor Type Number | 34 | value | available | a_analog_1 |
| 35 | Analog S-Box 2 | Sensor Type Number | 35 | value | available | a_analog_2 |
| 36 | Analog P-Box | Sensor Type Number | 36 | value | available | a_analog_3 |
| 37 | Analog V-Box | Sensor Type Number | 37 | value | available | a_analog_4 |
| 38 | pH Sensor | Sensor Type Number | 38 | value | available | a_ph |
| 39 | Reserved | - | 39 | - | - | - |
| 40 | Current Recipe | `1...255` | 40 | - | - | - |
| 41 | Wi-Fi Connection | `0 = Not Connected`, otherwise RSSI (dBm) | 41 | value | network | wifi_connection |
| 42 | IP Address [0] | `1...255` | 42 | value | network | ip_addr_01 |
| 43 | IP Address [1] | `0...255` | 43 | value | network | ip_addr_02 |
| 44 | IP Address [2] | `0...255` | 44 | value | network | ip_addr_03 |
| 45 | IP Address [3] | `0...255` | 45 | value | network | ip_addr_04 |
| 46 | Subnet [0] | `1...255` | 46 | value | network | subnet_01 |
| 47 | Subnet [1] | `0...255` | 47 | value | network | subnet_02 |
| 48 | Subnet [2] | `0...255` | 48 | value | network | subnet_03 |
| 49 | Subnet [3] | `0...255` | 49 | value | network | subnet_04 |
| 50 | Gateway [0] | `1...255` | 50 | value | network | gateway_01 |
| 51 | Gateway [1] | `0...255` | 51 | value | network | gateway_02 |
| 52 | Gateway [2] | `0...255` | 52 | value | network | gateway_03 |
| 53 | Gateway [3] | `0...255` | 53 | value | network | gateway_04 |
| 54 | MQTT Broker Connected | `0 = No`, `1 = Yes` | 54 | - | - | - |
| 55 | Update Status | Status Code | 55 | - | - | - |
| 56 | Update Version Major | `0...255` | 56 | - | - | - |
| 57 | Update Version Minor | `0...255` | 57 | - | - | - |
| 58 | External Control | `0 = Internal`, `111 = External` | 58 | - | - | - |
| 59-69 | Reserved | - | 59-69 | - | - | - |
| 70 | Capacitive Sensor 1 Status | `0 = NO`, `1 = NC` | 70 | - | - | - |
| 71 | Capacitive Sensor 2 Status | `0 = NO`, `1 = NC` | 71 | - | - | - |
| 72 | Dimmer 1 State | `0 = Off`, `10...100 %` | 72 | value | a_values | dimmer_01 |
| 73 | Dimmer 2 State | `0 = Off`, `10...100 %` | 73 | value | a_values | dimmer_02 |
| 74 | Dimmer 3 State | `0 = Off`, `10...100 %` | 74 | value | a_values | dimmer_03 |
| 75 | Dimmer 4 State | `0 = Off`, `10...100 %` | 75 | value | a_values | dimmer_04 |
| 76 | Socket 7 State | `0 = Off`, `10...100 %` | 76 | value | a_values | t_slot_07 |
| 77 | Reserved | - | 77 | - | - | - |
| 78 | Socket States 1-6 (Bitmask) | `00XXXXXX` | 78 | value | a_values | t_slot_01 - 06 |
| 79 | Pump States 1-5 (Bitmask) | `000XXXXX` | 79 | value | a_values | p_slot_01 - 05 |
| 80 | Relay States 1-6 (Bitmask) | `00XXXXXX` | 80 | value | a_values | v_slot_01 - 06 |
| 81-83 | Reserved | - | 81-83 | - | - | - |
| 84-85 | Pump 1 Flow Rate | mL/min | 84 | settings | - | - |
| 86-87 | Pump 2 Flow Rate | mL/min | 86 | settings | - | - |
| 88-89 | Pump 3 Flow Rate | mL/min | 88 | settings | - | - |
| 90-91 | Pump 4 Flow Rate | mL/min | 90 | settings | - | - |
| 92-93 | Pump 5 Flow Rate | mL/min | 92 | settings | - | - |
| 94-122 | Reserved | - | 94-122 | - | - | - |
| 123 | Checksum | CRC | 123 | - | - | - |

## Telegram 02

| Byte | Description | Value / Unit | Array Index | Database | Table | Name |
|-----:|-------------|--------------|------------:|----------|-------|------|
| 0 | Start Byte | `0xAA` × 16 | 0 | - | - | - |
| 1 | Telegram ID | `2` | 1 | - | - | - |
| 2-3 | Sensor Hardware No. 01 | NTC TBOX (°C) | 2 | value | s_values | ntc_tbox |
| 4-5 | Sensor Hardware No. 02 | Power (W) | 3 | value | s_values | power_tbox |
| 6-7 | Sensor Hardware No. 03 | Energy (kWh) | 4 | value | s_values | energy_tbox |
| 8-9 | Sensor Hardware No. 04 | Energy Today (kWh) | 5 | value | s_values | energy_tbox_today |
| 10-11 | Sensor Hardware No. 05 | Energy Yesterday (kWh) | 6 | value | s_values | energy_tbox_yes |
| 12-13 | Sensor Hardware No. 06 | Current (A) | 7 | value | s_values | current_tbox |
| 14-15 | Sensor Hardware No. 07 | Voltage (V) | 8 | value | s_values | voltage_tbox |
| 16-17 | Sensor Hardware No. 08 | Reserved | 9 | - | - | - |
| 18-19 | Sensor Hardware No. 09 | Reserved | 10 | - | - | - |
| 20-21 | Sensor Hardware No. 10 | Reserved | 11 | - | - | - |
| 22-23 | Sensor Hardware No. 11 | Reserved | 12 | - | - | - |
| 24-25 | Sensor Hardware No. 12 | Reserved | 13 | - | - | - |
| 26-27 | Sensor Hardware No. 13 | Reserved | 14 | - | - | - |
| 28-29 | Sensor Hardware No. 14 | Reserved | 15 | - | - | - |
| 30-31 | Sensor Hardware No. 15 | Reserved | 16 | - | - | - |
| 32-33 | Sensor Hardware No. 16 | Reserved | 17 | - | - | - |
| 34-35 | Sensor Hardware No. 17 | Reserved | 18 | - | - | - |
| 36-37 | Sensor Hardware No. 18 | Reserved | 19 | - | - | - |
| 38-39 | Sensor Hardware No. 19 | pH Sensor (mV) | 20 | value | s_values | ph_mv |
| 40-41 | Sensor Hardware No. 20 | pH Value | 21 | value | s_values | ph |
| 42-43 | Sensor Hardware No. 21 | OneWire 01 | 22 | value | s_values | one_w1 |
| 44-45 | Sensor Hardware No. 22 | OneWire 02 | 23 | value | s_values | one_w2 |
| 46-47 | Sensor Hardware No. 23 | OneWire 03 | 24 | value | s_values | one_w3 |
| 48-49 | Sensor Hardware No. 24 | OneWire 04 | 25 | value | s_values | one_w4 |
| 50-51 | Sensor Hardware No. 25 | OneWire 05 | 26 | value | s_values | one_w5 |
| 52-53 | Sensor Hardware No. 26 | Analog Universal 1 | 27 | value | s_values | analog_uni_1 |
| 54-55 | Sensor Hardware No. 27 | Analog Universal 2 | 28 | value | s_values | analog_uni_2 |
| 56-57 | Sensor Hardware No. 28 | Analog Universal 3 (0-10 V) | 29 | value | s_values | analog_uni_3 |
| 58-59 | Sensor Hardware No. 29 | Analog Universal 4 (0-10 V) | 30 | value | s_values | analog_uni_4 |
| 60-79 | Sensor Hardware No. 30-39 | Reserved | 31-40 | - | - | - |
| 80-81 | Sensor Hardware No. 40 | Capacitive Sensor 01 | 41 | - | - | - |
| 82-83 | Sensor Hardware No. 41 | Capacitive Sensor 02 | 42 | - | - | - |
| 84-85 | Sensor Hardware No. 42 | V-Box Analog Level (L) | 43 | - | - | - |
| 86-87 | Sensor Hardware No. 43 | V-Box Analog Level (%) | 44 | - | - | - |
| 88-121 | Sensor Hardware No. 44-60 | Reserved | 45-61 | - | - | - |
| 122 | Reserved | - | 62 | - | - | - |
| 123 | Checksum | CRC | 63 | - | - | - |

## Telegram 03

| Byte | Description | Value / Unit | Array Index | Database | Table | Name |
|-----:|-------------|--------------|------------:|----------|-------|------|
| 0 | Start Byte | `0xAA` × 16 | 0 | - | - | - |
| 1 | Telegram ID | `3` | 1 | - | - | - |
| 2-3 | Sensor Hardware No. 61 | I²C 01 - Value 1 | 2 | value | s_values | i2c_1_1 |
| 4-5 | Sensor Hardware No. 62 | I²C 01 - Value 2 | 3 | value | s_values | i2c_1_2 |
| 6-7 | Sensor Hardware No. 63 | I²C 01 - Value 3 | 4 | value | s_values | i2c_1_3 |
| 8-9 | Sensor Hardware No. 64 | I²C 01 - Value 4 | 5 | value | s_values | i2c_1_4 |
| 10-11 | Sensor Hardware No. 65 | I²C 01 - Value 5 | 6 | value | s_values | i2c_1_5 |
| 12-13 | Sensor Hardware No. 66 | I²C 02 - Value 1 | 7 | value | s_values | i2c_2_1 |
| 14-15 | Sensor Hardware No. 67 | I²C 02 - Value 2 | 8 | value | s_values | i2c_2_2 |
| 16-17 | Sensor Hardware No. 68 | I²C 02 - Value 3 | 9 | value | s_values | i2c_2_3 |
| 18-19 | Sensor Hardware No. 69 | I²C 02 - Value 4 | 10 | value | s_values | i2c_2_4 |
| 20-21 | Sensor Hardware No. 70 | I²C 02 - Value 5 | 11 | value | s_values | i2c_2_5 |
| 22-23 | Sensor Hardware No. 71 | I²C 03 - Value 1 | 12 | value | s_values | i2c_3_1 |
| 24-25 | Sensor Hardware No. 72 | I²C 03 - Value 2 | 13 | value | s_values | i2c_3_2 |
| 26-27 | Sensor Hardware No. 73 | I²C 03 - Value 3 | 14 | value | s_values | i2c_3_3 |
| 28-29 | Sensor Hardware No. 74 | I²C 03 - Value 4 | 15 | value | s_values | i2c_3_4 |
| 30-31 | Sensor Hardware No. 75 | I²C 03 - Value 5 | 16 | value | s_values | i2c_3_5 |
| 32-33 | Sensor Hardware No. 76 | I²C 04 - Value 1 | 17 | value | s_values | i2c_4_1 |
| 34-35 | Sensor Hardware No. 77 | I²C 04 - Value 2 | 18 | value | s_values | i2c_4_2 |
| 36-37 | Sensor Hardware No. 78 | I²C 04 - Value 3 | 19 | value | s_values | i2c_4_3 |
| 38-39 | Sensor Hardware No. 79 | I²C 04 - Value 4 | 20 | value | s_values | i2c_4_4 |
| 40-41 | Sensor Hardware No. 80 | I²C 04 - Value 5 | 21 | value | s_values | i2c_4_5 |
| 42-43 | Sensor Hardware No. 81 | I²C 05 - Value 1 | 22 | value | s_values | i2c_5_1 |
| 44-45 | Sensor Hardware No. 82 | I²C 05 - Value 2 | 23 | value | s_values | i2c_5_2 |
| 46-47 | Sensor Hardware No. 83 | I²C 05 - Value 3 | 24 | value | s_values | i2c_5_3 |
| 48-49 | Sensor Hardware No. 84 | I²C 05 - Value 4 | 25 | value | s_values | i2c_5_4 |
| 50-51 | Sensor Hardware No. 85 | I²C 05 - Value 5 | 26 | value | s_values | i2c_5_5 |
| 52-53 | Sensor Hardware No. 86 | I²C 06 - Value 1 | 27 | value | s_values | i2c_6_1 |
| 54-55 | Sensor Hardware No. 87 | I²C 06 - Value 2 | 28 | value | s_values | i2c_6_2 |
| 56-57 | Sensor Hardware No. 88 | I²C 06 - Value 3 | 29 | value | s_values | i2c_6_3 |
| 58-59 | Sensor Hardware No. 89 | I²C 06 - Value 4 | 30 | value | s_values | i2c_6_4 |
| 60-61 | Sensor Hardware No. 90 | I²C 06 - Value 5 | 31 | value | s_values | i2c_6_5 |
| 62-63 | Sensor Hardware No. 91 | I²C 07 - Value 1 | 32 | value | s_values | i2c_7_1 |
| 64-65 | Sensor Hardware No. 92 | I²C 07 - Value 2 | 33 | value | s_values | i2c_7_2 |
| 66-67 | Sensor Hardware No. 93 | I²C 07 - Value 3 | 34 | value | s_values | i2c_7_3 |
| 68-69 | Sensor Hardware No. 94 | I²C 07 - Value 4 | 35 | value | s_values | i2c_7_4 |
| 70-71 | Sensor Hardware No. 95 | I²C 07 - Value 5 | 36 | value | s_values | i2c_7_5 |
| 72-73 | Sensor Hardware No. 96 | I²C 08 - Value 1 | 37 | value | s_values | i2c_8_1 |
| 74-75 | Sensor Hardware No. 97 | I²C 08 - Value 2 | 38 | value | s_values | i2c_8_2 |
| 76-77 | Sensor Hardware No. 98 | I²C 08 - Value 3 | 39 | value | s_values | i2c_8_3 |
| 78-79 | Sensor Hardware No. 99 | I²C 08 - Value 4 | 40 | value | s_values | i2c_8_4 |
| 80-81 | Sensor Hardware No. 100 | I²C 08 - Value 5 | 41 | value | s_values | i2c_8_5 |
| 82-121 | Sensor Hardware No. 101-120 | Reserved | 42-61 | - | - | - |
| 122 | Reserved | - | 62 | - | - | - |
| 123 | Checksum | CRC | 63 | - | - | - |