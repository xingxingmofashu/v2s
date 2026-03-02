import { fileURLToPath, Glob } from "bun"
import { resolve } from 'path'

export type RouteValue<WebSocketData = undefined, Path extends string = string> =
  | Bun.Serve.BaseRouteValue
  | Bun.Serve.Handler<Bun.BunRequest<Path>, Bun.Server<WebSocketData>, Response>
  | Partial<Record<Bun.Serve.HTTPMethod, Bun.Serve.Handler<Bun.BunRequest<Path>, Bun.Server<WebSocketData>, Response> | Response>>;


export function defineRoute(path: string, response: RouteValue) {
  return [path, response]
}

export async function defineRoutes() {
  const path = resolve(fileURLToPath(import.meta.url), '..', '..', '..')
  const routes: [string, RouteValue][] = []

  const glob = new Glob(`**/*.ts`);
  for await (const file of glob.scan({ cwd: resolve(path, 'server') })) {
    if (file.includes('router') || file.includes('api')) {
      const module = await import(resolve(path, 'server', file))
      routes.push(module.default)
    }
  }

  return Object.fromEntries(routes)
}