
import http from "http";

// Creating Server
const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(res);

  // res.statusCode = 202;
  // res.statusMessage = "Good";
  // res.setHeader("Content-Type", "text/plain");

  // shorthand for status (code, message & header)
  res.writeHead(202, "Good", { "Content-Type": "text/plain" });
  res.write("<h1>Hello from Node JS </h1>");
 
});

server.listen(8000, () => console.log(`Server running on port 8000`));