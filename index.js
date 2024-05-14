const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/get-text" && req.method === "GET") {
    const readStream = fs.createReadStream(process.cwd() + "/text.txt");
    readStream.on("data", (buff) => {
      res.write(buff);
    });
    readStream.on("error", () => {
      res.statusCode = 500;
      res.end(" \n \n  An error occurd :( ");
    });
    readStream.on("end", () => {
      res.end("\n \n Streaming end... \n -Thank you <3");
    });
  }
  if (req.url === "/") {
    res.end("Hello Server");
  }
});

server.listen(5000);
