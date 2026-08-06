---
title: STM32 Phase Control
sidebar_position: 4
---

## Overview

The STM32 controls the dimmable 230 V AC socket using phase-angle control.

The ESP32 periodically sends the mains frequency and the required output setpoint to the STM32 through a unidirectional serial connection.

```text
ESP32 → STM32
```

The STM32 does not send any data back to the ESP32.

The output is intended exclusively for resistive loads with a maximum permitted power of **200 W**.

## Program Function

The ESP32 firmware performs the following tasks:

- Creates a fixed 6-byte telegram
- Adds the configured mains frequency
- Converts the output setpoint from `0...100 %` to `0...255`
- Calculates the telegram checksum
- Periodically transmits the telegram to the STM32

The STM32 uses the received frequency and setpoint to control the phase-angle output.

## Communication Direction

| Sender | Receiver | Direction |
|--------|----------|-----------|
| ESP32 | STM32 | Unidirectional |

No acknowledgement or process data is returned by the STM32.

## Serial Interface

| Parameter | Value |
|-----------|-------|
| Interface | UART |
| ESP32 Interface | Serial2 |
| Communication | Unidirectional |
| Sender | ESP32 |
| Receiver | STM32 |
| Telegram Length | 6 bytes |
| Baud Rate | Defined in the Serial2 configuration |
| Data Bits | Defined in the Serial2 configuration |
| Parity | Defined in the Serial2 configuration |
| Stop Bits | Defined in the Serial2 configuration |

The baud rate, parity and stop-bit configuration are not defined in the shown phase-control module.

## Telegram Structure

| Byte | Description | Value / Range |
|-----:|-------------|---------------|
| 0 | Start Byte | Defined by `l_bStartByte` |
| 1 | Mains Frequency | Defined by `POWER_GRID_FREQUENCY` |
| 2 | Socket Setpoint | `0...255` |
| 3 | Reserved | `0` |
| 4 | Reserved | `0` |
| 5 | Checksum | Sum of bytes `0...4`, lower 8 bits |

## Setpoint Conversion

The requested output setpoint is received internally as a percentage from `0...100 %`.

Before transmission, the ESP32 converts the percentage to an 8-bit value:

```cpp
telegram[2] = (setpoint * 255) / 100;
```

| Setpoint | Transmitted Value |
|---------:|------------------:|
| `0 %` | `0` |
| `25 %` | `63` |
| `50 %` | `127` |
| `75 %` | `191` |
| `100 %` | `255` |

Integer division is used, so intermediate values are rounded down.

## Checksum

The checksum is calculated by adding bytes `0...4`.

Only the lowest 8 bits of the result are transmitted:

```cpp
uint16_t sum = 0;

for (int i = 0; i < telegramSize - 1; i++) {
    sum += telegram[i];
}

checksum = sum & 0xFF;
```

The STM32 can validate the telegram by calculating the same sum and comparing it with byte `5`.

## Default Telegram

During initialization, the transmission buffer is prepared with an output setpoint of zero:

| Byte | Initial Value |
|-----:|---------------|
| 0 | Start byte |
| 1 | Configured mains frequency |
| 2 | `0` |
| 3 | `0` |
| 4 | `0` |
| 5 | Calculated checksum |

This ensures that the initial command represents an inactive output.

## Load Restrictions

| Parameter | Value |
|-----------|-------|
| Supply Voltage | 230 V AC |
| Mains Frequency | 50 Hz, depending on configuration |
| Control Method | Phase-angle control |
| Load Type | Resistive loads only |
| Maximum Permitted Load | 200 W |
| Integrated Fuse | 1 A |