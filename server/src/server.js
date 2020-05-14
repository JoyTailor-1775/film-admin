const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/router");

const app = express();

const errorHandler = (req, res, err) => {
  res.status(500);
  res.json(err.stack);
};

const startServer = (port) => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use("/", router)
    .use(errorHandler);

  app.listen(port);

  console.log(`Server running at http://localhost:${port}/`);
};

module.exports = startServer;
