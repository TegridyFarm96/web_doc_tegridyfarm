---
title: Receive Data
sidebar_position: 3
---

## Telegram 01

| Byte | Description | Value / Range | Array Index | Database | Table | Name |
|-----:|-------------|---------------|------------:|----------|-------|------|
| 0 | Start Byte | `0xAA` × 16 | 0 | - | - | - |
| 1 | Telegram ID | `1` | 1 | - | - | - |
| 2 | Reserved | - | 2 | - | - | - |
| 3 | Reserved | - | 3 | - | - | - |
| 4 | Reserved | - | 4 | - | - | - |
| 5 | Reserved | - | 5 | - | - | - |
| 6 | Reserved | - | 6 | - | - | - |
| 7 | Reserved | - | 7 | - | - | - |
| 8 | Reserved | - | 8 | - | - | - |
| 9 | Reserved | - | 9 | - | - | - |
| 10 | Reserved | - | 10 | - | - | - |
| 11 | Reserved | - | 11 | - | - | - |
| 12 | Reserved | - | 12 | - | - | - |
| 13 | Reserved | - | 13 | - | - | - |
| 14 | Reserved | - | 14 | - | - | - |
| 15 | Reserved | - | 15 | - | - | - |
| 16 | Reserved | - | 16 | - | - | - |
| 17 | Reserved | - | 17 | - | - | - |
| 18 | Reserved | - | 18 | - | - | - |
| 19 | Reserved | - | 19 | - | - | - |
| 20 | Reserved | - | 20 | - | - | - |
| 21 | Reserved | - | 21 | - | - | - |
| 22 | Reserved | - | 22 | - | - | - |
| 23 | Reserved | - | 23 | - | - | - |
| 24 | Reserved | - | 24 | - | - | - |
| 25 | Reserved | - | 25 | - | - | - |
| 26 | Reserved | - | 26 | - | - | - |
| 27 | Reserved | - | 27 | - | - | - |
| 28 | Reserved | - | 28 | - | - | - |
| 29 | Reserved | - | 29 | - | - | - |
| 30 | Reserved | - | 30 | - | - | - |
| 31 | Reserved | - | 31 | - | - | - |
| 32 | Reserved | - | 32 | - | - | - |
| 33 | Reserved | - | 33 | - | - | - |
| 34 | Reserved | - | 34 | - | - | - |
| 35 | Reserved | - | 35 | - | - | - |
| 36 | Reserved | - | 36 | - | - | - |
| 37 | Reserved | - | 37 | - | - | - |
| 38 | Reserved | - | 38 | - | - | - |
| 39 | Reserved | - | 39 | - | - | - |
| 40 | Reserved | - | 40 | - | - | - |
| 41 | Reserved | - | 41 | - | - | - |
| 42 | Reserved | - | 42 | - | - | - |
| 43 | Reserved | - | 43 | - | - | - |
| 44 | Reserved | - | 44 | - | - | - |
| 45 | Reserved | - | 45 | - | - | - |
| 46 | Reserved | - | 46 | - | - | - |
| 47 | Reserved | - | 47 | - | - | - |
| 48 | Reserved | - | 48 | - | - | - |
| 49 | Reserved | - | 49 | - | - | - |
| 50 | Socket 1 - On/Off | `0 = Off`, `1 = On` | 50 | process | values | xslot_01 |
| 51 | Socket 2 - On/Off | `0 = Off`, `1 = On` | 51 | process | values | xslot_02 |
| 52 | Socket 3 - On/Off | `0 = Off`, `1 = On` | 52 | process | values | xslot_03 |
| 53 | Socket 4 - On/Off | `0 = Off`, `1 = On` | 53 | process | values | xslot_04 |
| 54 | Socket 5 - On/Off | `0 = Off`, `1 = On` | 54 | process | values | xslot_05 |
| 55 | Socket 6 - On/Off | `0 = Off`, `1 = On` | 55 | process | values | xslot_06 |
| 56 | Socket 7 - On/Off | `0 = Off`, `1 = On` | 56 | process | values | xslot_07 |
| 57 | Pump 1 - On/Off | `0 = Off`, `1 = On` | 57 | process | values | xpump_01 |
| 58 | Pump 2 - On/Off | `0 = Off`, `1 = On` | 58 | process | values | xpump_02 |
| 59 | Pump 3 - On/Off | `0 = Off`, `1 = On` | 59 | process | values | xpump_03 |
| 60 | Pump 4 - On/Off | `0 = Off`, `1 = On` | 60 | process | values | xpump_04 |
| 61 | Pump 5 - On/Off | `0 = Off`, `1 = On` | 61 | process | values | xpump_05 |
| 62 | Dimmer 1 - On/Off | `0 = Off`, `1 = On` | 62 | process | values | xdimmer_01 |
| 63 | Dimmer 2 - On/Off | `0 = Off`, `1 = On` | 63 | process | values | xdimmer_02 |
| 64 | Dimmer 3 - On/Off | `0 = Off`, `1 = On` | 64 | process | values | xdimmer_03 |
| 65 | Dimmer 4 - On/Off | `0 = Off`, `1 = On` | 65 | process | values | xdimmer_04 |
| 66 | Relay 1 - On/Off | `0 = Off`, `1 = On` | 66 | process | values | xrelais_01 |
| 67 | Relay 2 - On/Off | `0 = Off`, `1 = On` | 67 | process | values | xrelais_02 |
| 68 | Relay 3 - On/Off | `0 = Off`, `1 = On` | 68 | process | values | xrelais_03 |
| 69 | Relay 4 - On/Off | `0 = Off`, `1 = On` | 69 | process | values | xrelais_04 |
| 70 | Relay 5 - On/Off | `0 = Off`, `1 = On` | 70 | process | values | xrelais_05 |
| 71 | Socket 7 - Value | `10...100 %` | 71 | process | values | islot_07 |
| 72 | Dimmer 1 - Value | `10...100 %` | 72 | process | values | idimmer_01 |
| 73 | Dimmer 2 - Value | `10...100 %` | 73 | process | values | idimmer_02 |
| 74 | Dimmer 3 - Value | `10...100 %` | 74 | process | values | idimmer_03 |
| 75 | Dimmer 4 - Value | `10...100 %` | 75 | process | values | idimmer_04 |
| 76-122 | Reserved | - | 76-122 | - | - | - |
| 123 | Checksum | CRC | 123 | - | - | - |

## Telegram 02

| Byte | Description | Value / Range | Array Index | Database | Table | Name |
|-----:|-------------|---------------|------------:|----------|-------|------|
| 0 | Start Byte | `0xAA` × 16 | 0 | - | - | - |
| 1 | Telegram ID | `2` | 1 | - | - | - |
| 2-9 | Reserved | - | 2-9 | - | - | - |
| 10 | Mode | `0 = Auto`, `1 = Manual` | 10 | settings | config | which_mode |
| 11 | External Control | `0 = Off`, `1 = On` | 11 | settings | config | service_control |
| 12 | Update ESP | `0 = No`, `1 = Yes` | 12 | settings | config | update_esp |
| 13 | Update Panel | `0 = No`, `1 = Yes` | 13 | settings | config | update_panel |
| 14 | End Runtime | `0 = No`, `1 = Yes` | 14 | settings | config | end_runtime |
| 15 | Acknowledge | `0 = False`, `1 = True` | 15 | settings | config | acknowledge |
| 16 | Reserved | - | 16 | - | - | - |
| 17 | Binary Sensor 1 Type | `0 = NO`, `1 = NC` | 17 | settings | config | binary_type_1 |
| 18 | Binary Sensor 2 Type | `0 = NO`, `1 = NC` | 18 | settings | config | binary_type_2 |
| 19-49 | Reserved | - | 19-49 | - | - | - |
| 50 | CMD - Set pH Calibration Values | `0 = Off`, `1 = Set Values` | 50 | settings | config | ph_cal_set |
| 51 | CMD - Reset Energy Data | `0 = Off`, `1 = Reset` | 51 | settings | config | reset_energy |
| 52 | CMD - Scan SBox (I²C Devices) | `0 = Off`, `1 = Scan` | 52 | settings | config | scan_sbox |
| 53-61 | Reserved | - | 53-61 | - | - | - |
| 62-63 | pH Sensor Calibration - High Value | `900...918` (Default `918` = pH 9.18) | 62 | settings | config | ph_high |
| 64-65 | pH Sensor Calibration - Low Value | `400...406` (Default `406` = pH 4.06) | 63 | settings | config | ph_low |
| 66-67 | pH Sensor Calibration - Offset Value | `700` (Default = pH 7.00) | 64 | settings | config | ph_offset |
| 68-73 | Reserved | - | 65-67 | - | - | - |
| 74-75 | Force-Off Timeout - Socket 01 | `0 = Off`, `1...16000 min` | 68 | settings | forcetime | t_slot_01 |
| 76-77 | Force-Off Timeout - Socket 02 | `0 = Off`, `1...16000 min` | 69 | settings | forcetime | t_slot_02 |
| 78-79 | Force-Off Timeout - Socket 03 | `0 = Off`, `1...16000 min` | 70 | settings | forcetime | t_slot_03 |
| 80-81 | Force-Off Timeout - Socket 04 | `0 = Off`, `1...16000 min` | 71 | settings | forcetime | t_slot_04 |
| 82-83 | Force-Off Timeout - Socket 05 | `0 = Off`, `1...16000 min` | 72 | settings | forcetime | t_slot_05 |
| 84-85 | Force-Off Timeout - Socket 06 | `0 = Off`, `1...16000 min` | 73 | settings | forcetime | t_slot_06 |
| 86-87 | Force-Off Timeout - Socket 07 | `0 = Off`, `1...16000 min` | 74 | settings | forcetime | t_slot_07 |
| 88-89 | Force-Off Timeout - Pump 01 | `0 = Off`, `1...16000 min` | 75 | settings | forcetime | p_slot_01 |
| 90-91 | Force-Off Timeout - Pump 02 | `0 = Off`, `1...16000 min` | 76 | settings | forcetime | p_slot_02 |
| 92-93 | Force-Off Timeout - Pump 03 | `0 = Off`, `1...16000 min` | 77 | settings | forcetime | p_slot_03 |
| 94-95 | Force-Off Timeout - Pump 04 | `0 = Off`, `1...16000 min` | 78 | settings | forcetime | p_slot_04 |
| 96-97 | Force-Off Timeout - Pump 05 | `0 = Off`, `1...16000 min` | 79 | settings | forcetime | p_slot_05 |
| 98-99 | Force-Off Timeout - Valve 01 | `0 = Off`, `1...16000 min` | 80 | settings | forcetime | v_slot_01 |
| 100-101 | Force-Off Timeout - Valve 02 | `0 = Off`, `1...16000 min` | 81 | settings | forcetime | v_slot_02 |
| 102-103 | Force-Off Timeout - Valve 03 | `0 = Off`, `1...16000 min` | 82 | settings | forcetime | v_slot_03 |
| 104-105 | Force-Off Timeout - Valve 04 | `0 = Off`, `1...16000 min` | 83 | settings | forcetime | v_slot_04 |
| 106-107 | Force-Off Timeout - Valve 05 | `0 = Off`, `1...16000 min` | 84 | settings | forcetime | v_slot_05 |
| 108-122 | Reserved | - | 85-122 | - | - | - |
| 123 | Checksum | CRC | 123 | - | - | - |