const express = require("express");
const app = express();
// for parsing request
app.use(express.json());
//setting ejs engine
app.set("view engine", "ejs");
let countValue = 0;
app.get("/", (req, res) => {
  countValue++;
  res.render("home",{countValue});
});
app.listen(5000);
