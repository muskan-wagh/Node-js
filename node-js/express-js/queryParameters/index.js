const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<p>welcome to the server 1</p>");
});

app.get("/search", (req, res) => {
  let query = req.query.q;

  res.send(`<p>hello from query ${query}</p>`);
});

app.listen(3000, () => {
  console.log("the server is started at http://localhost:3000");
});
