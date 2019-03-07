const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

function configMiddleware(server) {
  server.use(express.json());
  server.use(helmet());
  server.use(morgan('dev'));
}

module.exports = configMiddleware;