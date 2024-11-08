const express=require('express');
const router=express.Router();
const orderController=require('../controller/orderController');

router.post('/',orderController.createOrderController);
router.get('/',orderController.getAllOrderController);
router.get('/:id',orderController.getByIdOrderController);
router.put('/:id',orderController.updateOrderController);
router.delete('/:id',orderController.deleteOrderController);

module.exports=router;