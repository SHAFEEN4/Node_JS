const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else {
    res.end("welcome to about page");
  }
});

server.listen(4000);
