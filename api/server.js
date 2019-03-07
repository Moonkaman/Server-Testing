const express = require('express');

const configMiddleware = require('../config/configMiddleware');

const server = express();

configMiddleware(server);

module.exports = server;