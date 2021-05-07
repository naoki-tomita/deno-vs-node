const { createServer } = require("http");

function parseBody(req) {
  return new Promise((ok) => {
    let result = "";
    req.on("data", data => (result += data));
    req.on("end", () => ok(JSON.parse(result)));
  });
}

createServer(async (req, res) => {
  const body = await parseBody(req);
  res.writeHead(200, { "content-type": "application/json" }).end(JSON.stringify(body));
}).listen(8000);
