import { App } from "./server/config"

const server = Bun.serve({
  routes: await App.routes(),
  fetch(req) {
    return new Response(`Not Found`, { status: 404 });
  }
})

console.log(`Server running at ${server.url}`);