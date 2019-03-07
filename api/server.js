const express = require('express');

const configMiddleware = require('../config/configMiddleware');

const server = express();

configMiddleware(server);

server.get('/', (req, res) => {
  res.status(200).json({message: 'It working so far son'});
})

module.exports = server;