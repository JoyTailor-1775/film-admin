const express = require("express");
const main = require("./main.js");

const apiRoutes = express.Router();

apiRoutes.get("/", main);

module.exports = apiRoutes;
