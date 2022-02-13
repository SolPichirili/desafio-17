class ProductsMongoDto{
    constructor(product, quote){
        this.name = product.name,
        this.price = product.price
        this.quote = quote

    }
}

module.exports = ProductsMongoDto;