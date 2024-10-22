const dbConnection = require('../config/connection')

const createProductService = (productData, callback) => {
    const query = `INSERT INTO products (productName,productDescription,productPrice,productImage) VALUES (?,?,?,?)`;
    dbConnection.query(query,
        [
            productData.productName,
            productData.productDescription,
            productData.productPrice,
            productData.productImage
        ],
        (error, result) => {
            callback(error, result)
        });
}

const getAllProductsService = (callback) => {
    const query = 'SELECT * FROM products';
    dbConnection.query(query, (error, result) => {
        callback(error, result);
    });
}

const getByIdProductService = (productId, callback) => {
    const query = 'SELECT * FROM products WHERE Id=?';
    dbConnection.query(query, [productId], (error, result) => {
        callback(error, result);
    });
}

const updateProductService = (productId, productData, callback) => {
    const query = 'UPDATE products SET productName=?,productDescription=?,productPrice=?,productImage=? WHERE id=?';
    dbConnection.query(query,
        [
            productData.productName,
            productData.productDescription,
            productData.productPrice,
            productData.productImage,
            productId
        ],
        (error, result) => {
            callback(error, result);
        });
}

const deleteProductService = (productId, callback) => {
    const query = 'DELETE FROM products WHERE id=?';
    dbConnection.query(query, [productId], (error, result) => {
        callback(error, result)
    });
}

module.exports = {
    createProductService,
    getAllProductsService,
    getByIdProductService,
    updateProductService,
    deleteProductService
}
