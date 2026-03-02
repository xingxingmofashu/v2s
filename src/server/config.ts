import { fileURLToPath, Glob } from "bun"
import { resolve } from 'path'
import type { RouteValue } from "./utils/define";

export class App {
  static async routes() {
    const path = resolve(fileURLToPath(import.meta.url), '..', '..')
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
}