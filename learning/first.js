const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>new</title></head>");
  res.write("<body><h1>HELLO! I AM MUSKAN</h1><hr />");
  res.write("<h1>how are you</h1></body>");
  res.write("</html>");

  res.end(); // IMPORTANT
});

const Port = 3000;

server.listen(Port, () => {
  console.log(`server running on the port http://localhost:${Port}`);
});
