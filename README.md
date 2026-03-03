# v2s

A Nitro-based proxy subscription API server that provides access to V2Ray, Clash, and Mihomo subscription links from [static.v2rayshare.net](https://static.v2rayshare.net).

## Features

- **V2Ray Subscription** - `/api/subscribe/v2ray` endpoint for V2Ray configuration
- **Clash Subscription** - `/api/subscribe/clash` endpoint for Clash configuration
- **Mihomo Subscription** - `/api/subscribe/mihomo` endpoint for Mihomo (Clash.Meta) configuration
- Automatic date-based subscription file fetching

## Installation

```bash
bun install
```

## Development

```bash
bun run dev
```

## Build

```bash
bun run build
```

## Preview

```bash
bun run preview
```

## API Endpoints

| Endpoint | Description | Format |
|----------|-------------|--------|
| `GET /api/subscribe/v2ray` | V2Ray subscription | `.txt` |
| `GET /api/subscribe/clash` | Clash subscription | `.yaml` |
| `GET /api/subscribe/mihomo` | Mihomo subscription | `.yaml` |

## Tech Stack

- **Nitropack** - Web framework
- **h3** - HTTP server
- **TypeScript** - Type safety
- **Bun** - JavaScript runtime and package manager
