import { defineRoutes } from "./utils/define";

const routes = await defineRoutes()

Bun.serve({
  routes: routes,
  error(error) {
    return new Response(`Error: ${error.message}`, {
      status: 500
    })
  }
})
