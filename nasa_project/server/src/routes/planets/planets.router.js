const express = require('express');

const {
  getallPlanets
} = require('./planets.controller')

const planetRouter = express.Router();

planetRouter.get('/planets', getallPlanets);

module.exports = planetRouter;