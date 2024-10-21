const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');

router.post('/',userController.createUserController);
router.get('/',userController.getAllUserController);

module.exports=router;