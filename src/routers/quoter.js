const express = require('express');
const productsController = require('../controllers/products');

const quoterRouter = express.Router();

quoterRouter.get('/:id', productsController.getQuote);

module.exports = quoterRouter;