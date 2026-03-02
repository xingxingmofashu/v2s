import { defineRoutes } from "./server/utils/define";

Bun.serve({
  routes: await defineRoutes()
})
