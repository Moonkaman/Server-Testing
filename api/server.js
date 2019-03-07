const express = require('express');

const configMiddleware = require('../config/configMiddleware');

const dogsRouter = require('./dogs/dogsRouter')

const server = express();

configMiddleware(server);
server.use('/api/dogs', dogsRouter);

server.get('/', (req, res) => {
  res.status(200).json({message: 'It working so far son'});
})

module.exports = server;