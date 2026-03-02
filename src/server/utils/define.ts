import { fileURLToPath, Glob } from "bun"
import { resolve } from 'path'

export type RouteValue<WebSocketData = undefined, Path extends string = string> =
  | Bun.Serve.BaseRouteValue
  | Bun.Serve.Handler<Bun.BunRequest<Path>, Bun.Server<WebSocketData>, Response>
  | Partial<Record<Bun.Serve.HTTPMethod, Bun.Serve.Handler<Bun.BunRequest<Path>, Bun.Server<WebSocketData>, Response> | Response>>;


export function defineRoute(path: string, response: RouteValue) {
  return [path, response]
}