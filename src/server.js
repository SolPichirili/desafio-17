const express = require('express');
const compression = require('compression');

const router = require('./routers/index');

const server = express();

server.use(compression());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.use(router);

module.exports = server;
