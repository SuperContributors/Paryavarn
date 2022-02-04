const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const country = require("./country");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const health = require("./country");

app.get("/country", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(country);
});

const PORT = process.env.PORT || 3233;
app.get("/", (req, res) => {
  res.send("Api is running.");
});

app.get("/country/:id", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  res.send(country.id)
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;