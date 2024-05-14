const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/get-text" && req.method === "GET") {
    const readStream = fs.createReadStream(process.cwd() + "/text.txt");
    readStream.on("data", (buff) => {
      res.write(buff);
    });
  }
});

server.listen(5000);
