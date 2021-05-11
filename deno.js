const decoder = new TextDecoder();
for await (const conn of Deno.listen({ port: 8000 })) {
  (async () => {
    for await (const { request, respondWith } of Deno.serveHttp(conn)) {
      respondWith(new Response(JSON.stringify(await request.json()), { status: 200 }));
    }
  })()
}
