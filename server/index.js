const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3233;
app.get("/", (req, res) => {
  res.send("Api is running.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;