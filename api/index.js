import server from '../dist/server/index.js';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  // TanStack Start's default server entry exposes an async fetch function.
  // We pass the incoming Request object and it returns a Response.
  return server.fetch(req);
}
