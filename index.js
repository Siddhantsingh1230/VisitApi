const express = require("express");
const app = express();
// for parsing request
app.use(express.json());
let countValue = 0;
app.get("/", (req, res) => {
  countValue++;
  const data = { author: "Siddhant Singh", clicks: countValue };
  res.send(data);
});
app.listen(5000);
