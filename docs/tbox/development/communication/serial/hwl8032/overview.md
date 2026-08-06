---
title: HLW8032
sidebar_position: 3
---

## Overview

The TBox uses the **HLW8032** energy measurement IC to monitor mains voltage, current, active power and accumulated energy.

The IC continuously transmits measurement telegrams over an asynchronous UART interface. No commands are required from the TBox. The firmware continuously receives and validates each telegram before updating the process values.

## Serial Interface

| Parameter | Value |
|-----------|-------|
| Interface | UART |
| Communication | Unidirectional (HLW8032 → TBox) |
| Baud Rate | **4800 Baud** |
| Data Bits | **8** |
| Parity | **None** |
| Stop Bits | **1** |
| Bit Order | LSB First |
| Frame Format | **8N1** |
| Transmission | Continuous |

## Telegram Structure

Each telegram consists of **24 bytes**.

| Byte | Description |
|------:|-------------|
| 0 | Header |
| 1 | State Register |
| 2 | Voltage Register (MSB) |
| 3 | Voltage Register |
| 4 | Voltage Register (LSB) |
| 5 | Current Register (MSB) |
| 6 | Current Register |
| 7 | Current Register (LSB) |
| 8 | Power Register (MSB) |
| 9 | Power Register |
| 10 | Power Register (LSB) |
| 11 | Energy Register (MSB) |
| 12 | Energy Register |
| 13 | Energy Register (LSB) |
| 14 | Data Register |
| 15 | Data Register |
| 16 | Data Register |
| 17 | Data Register |
| 18 | Data Register |
| 19 | Data Register |
| 20 | Data Register |
| 21 | Data Register |
| 22 | Checksum |
| 23 | End Byte |

## Measured Values

The following process values are calculated from the received telegram.

| Value | Unit |
|--------|------|
| Voltage | V |
| Current | A |
| Active Power | W |
| Energy | kWh |

## Data Validation

Before a telegram is processed, the firmware verifies:

- Correct header
- Valid checksum
- Valid register values
- No UART framing errors

Invalid telegrams are discarded.

## Firmware Implementation

The HLW8032 driver is implemented as a dedicated firmware module.

Functions:

- Continuous UART reception
- Telegram parsing
- CRC / checksum verification
- Conversion to engineering units
- Energy accumulation
- Peak filtering before database update