const express = require('express');

const planetRouter = require('./planets/planets.router')
const launchesRouter = require('./launches/launches.router')

const api = express.Router();

api.use('/v1/planets',planetRouter);
api.use('/v1/launches',launchesRouter);

module.exports = api;