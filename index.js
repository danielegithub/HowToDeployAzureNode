const express = require("express");
const app = express();

app.get("/", express.static("public"));

app.get("/user", (req, res) => {
  res.type("application/json");
  res.json({ nome: "lollem" });
});

const port = process.env.PORT || 1337;
app.listen(port);
