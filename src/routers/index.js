const express = require('express');

const router = express.Router();

const productsRouter = require('./products');
const cartRouter = require('./cart');
const quoterRouter = require('./quoter');

router.use('/api/productos', productsRouter);
router.use('/api/carrito', cartRouter);
router.use('/api/cotizador', quoterRouter);

module.exports = router;