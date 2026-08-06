---
title: Telegram Overview
sidebar_position: 2
---

# Telegram Overview

The TBox and HMI exchange data using fixed-length telegrams.

## Receive Data

Telegrams sent from the **HMI to the TBox**.

| Telegram | Data type | Description |
|---------:|-----------|-------------|
| [Telegram 01](./esp_receivedata#telegram-01) | `BYTE` | Controls sockets, pumps, dimmers and relays. |
| [Telegram 02](./esp_receivedata#telegram-02) | `BYTE` / `UINT` | Transfers system settings, commands, calibration values and force-off times. |

## Send Data

Telegrams sent from the **TBox to the HMI**.

| Telegram | Data type | Description |
|---------:|-----------|-------------|
| [Telegram 01](./esp_senddata#telegram-01) | `BYTE` | Transfers hardware availability, network information, actuator states and pump settings. |
| [Telegram 02](./esp_senddata#telegram-02) | `INT` | Transfers TBox measurements, energy values and sensor values from hardware numbers 01–60. |
| [Telegram 03](./esp_senddata#telegram-03) | `INT` | Transfers I²C sensor values from hardware numbers 61–120. |