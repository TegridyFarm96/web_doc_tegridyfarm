---
title: Sensors
sidebar_position: 4
---

## Overview

The TBox automatically publishes all configured sensor values to the MQTT broker.

Each sensor is represented as a Home Assistant `sensor` entity using MQTT Discovery. The published entity configuration depends on the configured sensor type, sensor function and Home Assistant device class.

## Topic Structure

All sensor topics follow the same structure:

```text
homeassistant/sensor/<device>/<identifier>/<type>
```

Example:

```text
homeassistant/sensor/tboxAABBCCDDEEFF/temperature/state
homeassistant/sensor/tboxAABBCCDDEEFF/temperature/config
```

## Discovery Topics

Each sensor publishes one retained discovery message.

```text
homeassistant/sensor/<device>/<identifier>/config
```

The discovery message contains all information required by Home Assistant to create the entity automatically.

## State Topics

Current sensor values are published to:

```text
homeassistant/sensor/<device>/<identifier>/state
```

Example:

```text
homeassistant/sensor/tboxAABBCCDDEEFF/onewire01_temperature/state
```

## Published Sensor Types

The following sensor categories are currently supported.

| Category | Examples |
|----------|----------|
| Temperature | NTC, DS18B20, BME280, BME680, SHTx, MLX90614 |
| Humidity | BME280, BME680, SHTx |
| Pressure | BME280, BME680, SHTx |
| Dew Point | BME280, BME680, SHTx |
| Air Quality | BME680 |
| CO₂ | MH-Z19B |
| Illuminance | BH1750 |
| pH | Analog pH Sensor |
| Water Level | Analog Level Sensor |
| Energy | HLW8032 |
| Power | HLW8032 |
| Current | HLW8032 |
| Voltage | HLW8032 |

## Home Assistant Device Classes

The published MQTT entities use the appropriate Home Assistant device class.

| Device Class | Unit |
|--------------|------|
| temperature | °C |
| humidity | % |
| pressure | hPa |
| illuminance | lx |
| carbon_dioxide | ppm |
| energy | kWh |
| power | W |
| current | A |
| voltage | V |
| volume | l |
| ph | pH |

## Units of Measurement

The firmware automatically assigns the correct engineering unit.

| Measurement | Unit |
|------------|------|
| Temperature | °C |
| Humidity | % |
| Pressure | hPa |
| Dew Point | °C |
| CO₂ | ppm |
| Illuminance | lx |
| Power | W |
| Energy | kWh |
| Current | A |
| Voltage | V |
| Water Level | l |
| pH | pH |

## Discovery Information

Each sensor publishes the following information:

- Entity name
- Object ID
- Unique ID
- State topic
- Device class
- Unit of measurement
- State class
- Manufacturer
- Device model
- Hardware version
- Firmware version

## Update Behaviour

Sensor values are published automatically whenever the internal process values are updated.

Typical examples include:

- Temperature changes
- Power measurement updates
- Energy counter updates
- Water level changes
- pH measurements
- CO₂ measurements

## Example Topics

Temperature sensor:

```text
homeassistant/sensor/tboxAABBCCDDEEFF/temperature/state
```

Power measurement:

```text
homeassistant/sensor/tboxAABBCCDDEEFF/power/state
```

Energy counter:

```text
homeassistant/sensor/tboxAABBCCDDEEFF/energy/state
```

Water level:

```text
homeassistant/sensor/tboxAABBCCDDEEFF/tank_level/state
```

## Example Payloads

Temperature:

```text
23.7
```

Humidity:

```text
58.4
```

Power:

```text
146.2
```

Energy:

```text
12.543
```

Water level:

```text
87
```

pH:

```text
6.42
```

## Naming Convention

Sensor entity names are generated from the configured hardware number and sensor function.

Example:

```text
OneWire 01 Temperature
```

becomes

```text
onewire01_temperature
```

This guarantees unique MQTT topics and Home Assistant entity identifiers for every sensor.