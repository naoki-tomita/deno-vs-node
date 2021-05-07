import { serve } from "https://deno.land/std@0.95.0/http/server.ts";

const requests = serve({ port: 8000 });
const decoder = new TextDecoder();
async function parseBody(body, size) {
  const tmpBody = new Uint8Array(size);
  await body.read(tmpBody);
  return JSON.parse(decoder.decode(tmpBody) || "{}")
}

async function respond(request) {
  const body = await parseBody(request.body, request.contentLength ?? 0);
  request.respond({
    status: 200,
    body: JSON.stringify(body),
  });
}

for await (const request of requests) {
  respond(request);
}
