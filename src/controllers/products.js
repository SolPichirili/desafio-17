const logger = require('../utils/winston');
const PersistenceFactory = require('../daos/index');
const {getPersistence} = require('../utils/getPersistence');
const {quoter} = require('../services/quoter');
const ProductsMongoDto = require('../daos/dtos/productsMongo');

const factory = PersistenceFactory.getInstance();
const factory2 = PersistenceFactory.getInstance();

const ProductDao = factory.getPersistenceMethod(getPersistence()).productsDao;

logger.info(`Equality: ${factory === factory2}`);

const getAll = async (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: Proceso exitoso`);
    const productList = await ProductDao.getAll();
    res.send({ data: productList });
}

const getById = async (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: Proceso exitoso`);
    const id = req.params.id;
    const productById = await ProductDao.getById(id);
    res.send({ data: productById });
}

const save = async (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: Proceso exitoso`);
    const newProduct = req.body;
    const newList = await ProductDao.save(newProduct);
    res.send({ data: newList });
}

const update = async (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: Proceso exitoso`);
    const id = req.params.id;
    const newProduct = req.body;
    const updatedProduct = await ProductDao.update(id, newProduct);
    res.send({ data: updatedProduct });
}

const deleteById = async (req, res) => {
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: Proceso exitoso`);
    const id = req.params.id;
    const newList = await ProductDao.deleteById(id);
    res.send({ data: newList });
}

const getQuote = async(req, res) =>{
    logger.info(`PATH: ${req.path}, METHOD: ${req.method}, MESSAGE: Proceso exitoso`);
    const id = req.params.id;
    const product = await ProductDao.getById(id);
    const quote = quoter(product.price);
    const productView = new ProductsMongoDto(product, quote);
    res.send({productView});
}

module.exports = {
    getAll,
    getById,
    save,
    update,
    deleteById,
    getQuote
}