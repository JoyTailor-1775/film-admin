const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

const errorHandler = (req, res, err) => {
  res.status(500);
  res.json(err.stack);
};

const startServer = (port) => {
  app
    .use(cors())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use('/', router)
    .use(errorHandler);

  app.listen(port);

  console.log(`Server running at http://localhost:${port}/`);
};

module.exports = startServer;
