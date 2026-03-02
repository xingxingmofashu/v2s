import { defineRoutes } from "./server/utils/define";

const server = Bun.serve({
  routes: await defineRoutes(),
  fetch(req) {
    return new Response(`Not Found`, { status: 404 });
  }
})

console.log(`Server running at ${server.url}`);