---
title: Configuration
sidebar_position: 2
---

## Overview

The MQTT connection must be configured before the TBox can communicate with an MQTT broker or Home Assistant.

The configuration is stored persistently inside the TBox and is restored automatically after a restart.

## Required Settings

| Setting | Description | Example |
|---------|-------------|---------|
| Broker Address | IP address or hostname of the MQTT broker | `192.168.178.20` |
| Broker Port | TCP port used by the MQTT broker | `1883` |
| Username | MQTT authentication username | `<broker-username>` |
| Password | MQTT authentication password | `<broker-password>` |
| Device Name | Individual name of the TBox | `TBox Greenhouse` |
| External Control | Allows MQTT commands to control the outputs | Enabled |

## Broker Address

Enter the IP address or hostname of the MQTT broker.

Example using an IP address:

```text
192.168.178.20
```

Example using a hostname:

```text
mqtt.local
```

The broker must be reachable from the same network as the TBox.

## Broker Port

The default MQTT port is:

```text
1883
```

The port must match the configuration of the MQTT broker.

| Connection type | Common port |
|-----------------|------------:|
| MQTT without TLS | `1883` |
| MQTT with TLS | `8883` |

The current TBox implementation uses a standard MQTT TCP connection without TLS.

## Authentication

When authentication is enabled on the MQTT broker, enter the corresponding username and password.

```text
Username: <broker-username>
Password: <broker-password>
```

The configured MQTT account must have permission to publish and subscribe below the following topic:

```text
homeassistant/#
```

## Device Name

The configured device name identifies the TBox inside the user interface.

The internally generated MQTT device identifier is based on the device MAC address:

```text
tbox<MAC address>
```

Example:

```text
tboxAABBCCDDEEFF
```

Using the MAC address ensures that every TBox has a unique MQTT identifier, even when several devices use the same broker.

## External Control

External control determines whether commands received through MQTT may control the physical outputs.

| Value | Function |
|-------|----------|
| Disabled | MQTT commands are ignored for output control |
| Enabled | Valid MQTT commands can control the outputs |

:::warning

Enable external control only when the MQTT broker and connected automation system are configured correctly.

:::

## Saving the Configuration

After changing the MQTT settings, save the configuration using the TBox web interface.

The following values are stored persistently:

- Broker address
- Broker port
- Username
- Password
- Device name
- External-control setting

The settings remain available after restarting or disconnecting the TBox from its power supply.

## Connection Process

After loading the configuration, the TBox performs the following sequence:

1. Connects to the configured Wi-Fi network.
2. Configures the MQTT broker address and port.
3. Connects using the configured username and password.
4. Subscribes to the actuator command topics.
5. Publishes the Home Assistant Discovery configuration.
6. Begins publishing actuator states and sensor values.

## Reconnection

When the MQTT connection is interrupted, the TBox attempts to reconnect automatically.

After reconnecting, it subscribes to the actuator command topics again and republishes the required Home Assistant Discovery information.

## Home Assistant Broker Example

A typical configuration using the Home Assistant Mosquitto broker could look like this:

| Setting | Example |
|---------|---------|
| Broker Address | `192.168.178.20` |
| Broker Port | `1883` |
| Username | `tbox` |
| Password | MQTT user password |
| Device Name | `TBox Greenhouse` |
| External Control | Enabled |

The MQTT username and password must correspond to a valid account configured for the Home Assistant MQTT broker.

## Connection Status

The current MQTT connection status can be checked through the TBox user interface.

| Status | Meaning |
|--------|---------|
| Connected | Communication with the MQTT broker is active |
| Disconnected | No active broker connection |
| Connection failed | Broker address, credentials, network connection or port may be incorrect |

## Troubleshooting

### Broker connection fails

Check:

- The TBox is connected to Wi-Fi.
- The broker address is correct.
- The broker port is correct.
- The MQTT username and password are valid.
- The broker permits connections from the TBox network.
- No firewall blocks the configured MQTT port.

### TBox is connected but no entities appear

Check:

- The Home Assistant MQTT integration is active.
- MQTT Discovery is enabled in Home Assistant.
- The TBox uses the same broker as Home Assistant.
- The TBox has successfully published its discovery configuration.
- No other device uses the same MQTT identifier.

### Entities appear but cannot be controlled

Check:

- External control is enabled.
- The MQTT account has subscription permissions.
- Home Assistant publishes commands to the correct `/set` topic.
- The selected actuator supports external control.