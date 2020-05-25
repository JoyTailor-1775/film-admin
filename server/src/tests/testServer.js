const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('../routes/router');

const app = express();

const errorHandler = (req, res, err) => {
  res.status(500);
  res.json(err.stack);
};

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/', router)
  .use(errorHandler);

module.exports = app;
