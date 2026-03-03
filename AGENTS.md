# AGENTS.md

This file contains guidelines for agentic coding assistants working in this repository.

## Project Overview

This is a Nitro-based proxy subscription API server that provides access to V2Ray, Clash, and Mihomo subscription links from static.v2rayshare.net. The project uses Bun runtime and TypeScript with ES modules.

## Build/Test/Lint Commands

### Development
```bash
bun run dev          # Start development server
```

### Build
```bash
bun run build        # Build for production
```

### Preview
```bash
bun run preview      # Preview production build
```

### Installation
```bash
bun install          # Install dependencies
```

**Note**: This project currently has no lint, test, or typecheck scripts configured. Consider adding:
- `bun run lint` (e.g., using eslint)
- `bun run typecheck` (tsc --noEmit)
- `bun run test` (e.g., using bun test)

## Code Style Guidelines

### File Structure
- API endpoints: `server/api/` (follows Nitro routing convention)
- Utilities/helpers: `server/utils/`
- Constants: `server/utils/constants.ts`

### Import Style
- Use named imports consistently: `import { join } from "path"`
- Place imports at top of file before any other code
- Use relative paths for local modules: `'../../utils/constants'`
- Use bare module names for npm packages

### Type Safety
- All files should use TypeScript
- Type definitions extend from `@tsconfig/bun/tsconfig.json`
- Use `export const` for constants and `export default` for event handlers
- Explicit type annotations are encouraged but not required when inferred

### Event Handlers
- Use `defineEventHandler` from h3 for API endpoints
- Export as default: `export default defineEventHandler(async () => { ... })`
- Use async/await for asynchronous operations
- Return standard Response objects: `new Response(await response.text())`

### Naming Conventions
- **Constants**: UPPER_SNAKE_CASE (e.g., `V2RAYSHARE_CONFIG`)
- **Files**: kebab-case for utilities (e.g., `constants.ts`), lowercase for API routes (e.g., `v2ray.ts`)
- **Variables**: camelCase (e.g., `now`, `response`)
- **Functions**: camelCase (e.g., `defineEventHandler`)

### Code Organization
- Destructure config/constants at module level when used repeatedly
- Group related constants in objects (e.g., `v2ray`, `clash`, `mihomo` in config)
- Use template literals for dynamic string construction
- Pad numbers with leading zeros using `toString().padStart(2, '0')`

### Error Handling
- Currently minimal error handling - consider adding try/catch for fetch operations
- Validate external API responses when implementing new endpoints
- Consider implementing proper HTTP error responses (e.g., 404, 500)

### Formatting
- No formatter currently configured
- Consider adding Prettier or similar for consistent formatting
- Existing code uses consistent indentation and spacing patterns

### Dependencies
- Prefer Bun-compatible packages
- Use `bunx` prefix for running CLI tools in package.json scripts
- Keep dependencies minimal and purposeful

## Tech Stack

- **Runtime**: Bun
- **Framework**: Nitropack (https://nitro.build)
- **HTTP Server**: h3
- **Language**: TypeScript 5.9.3
- **Module System**: ES Modules (type: "module")

## API Endpoint Conventions

- Endpoints follow RESTful patterns under `/api/`
- Each subscription type has its own file in `server/api/subscribe/`
- Route path matches file structure: `server/api/subscribe/v2ray.ts` → `/api/subscribe/v2ray`
- Endpoints return raw subscription content as Response objects

## Testing Considerations

When implementing tests:
- Use Bun's built-in test runner if adding tests
- Test external API mocking for fetch operations
- Verify date-based URL generation logic
- Test error scenarios (network failures, invalid responses)

## Project-Specific Patterns

- Date-based subscription URL generation using current date
- URL construction uses `path.join()` for cross-platform compatibility
- All subscription endpoints follow identical pattern with different config keys
