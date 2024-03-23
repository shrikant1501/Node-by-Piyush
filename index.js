const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log("New request came");
  res.end("hello from server");
});

myServer.listen(8000, () => console.log("Sever Started!"));
