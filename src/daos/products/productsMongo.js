const ContainerMongo = require("../../containers/ContainerMongo");
const ProductMongo = require('../../models/productsMongo');

class ProductsMongoDaos extends ContainerMongo {
    constructor() {
        super(ProductMongo);
    }
}

module.exports = ProductsMongoDaos;