const express=require('express');
const router=express.Router();
const categoryController=require('../controller/categoryController');

router.post('/',categoryController.createCategoryController);
router.get('/',categoryController.getAllCategoryController);
router.get('/:id',categoryController.getByIdCategoryController);
router.put('/:id',categoryController.updateCategoryController);
router.delete('/:id',categoryController.deleteCategoryController);

module.exports=router;