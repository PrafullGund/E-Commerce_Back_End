const productsService = require('../service/productsService')

const createProductController = (req, res) => {
    const productData = req.body;
    productsService.createProductService(productData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            res.status(200).json({ success: true, message: 'Product Added Successfully..!' })
        }
    });
}

const getAllProductController = (req, res) => {
    productsService.getAllProductsService((error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            res.status(201).json({ success: true, data: result });
        }
    });
}

const getByIdProductController = (req, res) => {
    const productId = req.params.id;
    productsService.getByIdProductService(productId, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.length === 0) {
                res.status(404).json({ success: false, message: 'Product Not Found' });
            } else {
                res.status(200).json({ success: true, data: result[0] });
            }
        }
    });
};

const updateProductController = (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    productsService.updateProductService(productId, productData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ success: true, message: 'Product Update Successfully..!' });
            } else {
                res.status(500).json({ success: false, message: 'Product Not Found' });
            }
        }
    });
}

const deleteProductController = (req, res) => {
    const id = req.params.id;
    productsService.deleteProductService(id, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.affectedRows > 0) {
                res.status(201).json({ success: true, message: 'Product Delete Successfully..!' });
            } else {
                res.status(400).json({ success: false, message: 'Product Not Found' });
            }
        }
    })
}

module.exports = {
    createProductController,
    getAllProductController,
    getByIdProductController,
    updateProductController,
    deleteProductController
}
