const express = require('express');
const router = express.Router();
const productsController = require('../controller/productController');

router.post('/', productsController.createProductController);
router.get('/', productsController.getAllProductController);
router.get('/:id', productsController.getByIdProductController);
router.put('/:id', productsController.updateProductController);
router.delete('/:id', productsController.deleteProductController);

module.exports = router;