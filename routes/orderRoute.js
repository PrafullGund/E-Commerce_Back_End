const express=require('express');
const router=express.Router();
const orderController=require('../controller/orderController');

router.post('/',orderController.createOrderController);
router.get('/',orderController.getAllOrderController);

module.exports=router;