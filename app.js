const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer();
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const name = req.file.originalname;
  const type = req.file.mimetype;
  const size = req.file.size;
  res.json({
    name,
    type,
    size
  });
});

const port = 3000;
app.listen(port, function() {
  console.log("Your app is listening on port " + port);
});
