import { App } from "./server/config"

Bun.serve({
  routes: await App.routes(),
  fetch(req) {
    return new Response(`Not Found`, { status: 404 });
  }
})