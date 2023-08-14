const express = require("express");
const app = express();
// for parsing request
app.use(express.json());
let countValue = 0;
app.get("/", (req, res) => {
  countValue++;
  res.send(`<h1>Count:${countValue}</h1>`);
});
app.listen(5000);