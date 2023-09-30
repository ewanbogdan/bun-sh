const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home Page!");
    if (url.pathname === "/blog") return new Response("Blog Page!");
    return new Response("404!");
  },
});

console.log(`Listening on localhost:${server.port}`);
