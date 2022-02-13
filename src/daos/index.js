const CartFirebaseDaos = require('./cart/cartFirebase');
const CartFsDaos = require('./cart/cartFs');
const CartMemDaos = require('./cart/cartMem');
const CartMongoDaos = require('./cart/cartMongo');
const ProductsFirebaseDaos = require('./products/productsFirebase');
const ProductsFsDaos = require('./products/productsFs');
const ProductsMemDaos = require('./products/productsMem');
const ProductsMongoDaos = require('./products/productsMongo');

let instance = null;

class PersistenceFactory {
    constructor(persistence){
        this.persistence = persistence;
    }

    getPersistenceMethod(pers) {
        switch (pers) {

            case 'fs':
                return {
                    productsDao:new ProductsFsDaos(), 
                    cartDao: new CartFsDaos()
                }

            case 'memory':
                return {
                    productsDao:new ProductsMemDaos(), 
                    cartDao: new CartMemDaos()
                }
            case 'mongodb':
                return {
                    productsDao:new ProductsMongoDaos(), 
                    cartDao: new CartMongoDaos()
                }

            default:
                return {
                    productsDao:new ProductsFirebaseDaos(), 
                    cartDao: new CartFirebaseDaos()
                }
        }
    }

    static getInstance(){
        if(!instance){
            instance = new PersistenceFactory();
        }

        return instance;
    }
}

module.exports = PersistenceFactory;