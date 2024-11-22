const categoryService=require('../service/categoryService');

const createCategoryController=(req,res)=>{
    const categoryData=req.body;
    categoryService.createCategoryService(categoryData,(error,result)=>{
        if(error){
            res.status(500).json({success:false, message:error.message});
        }
        else{
            res.status(201).json({success:true,message:'Category Added Successfully..!'});
        }
    })
}

const getAllCategoryController=(req,res)=>{
    categoryService.getAllCategoryService((error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            res.status(200).json({success:true,data:result});
        }
    })
}

const getByIdCategoryController=(req,res)=>{
    const categoryId=req.params.id;
    categoryService.getByIdCategoryService(categoryId,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            if(result.length===0){
                res.status(404).json({success:false,message:'Category Not Found'})
            }else{
                res.status(201).json({success:true,message:result[0]});
            }
        }
    })
}

const updateCategoryController = (req, res) => {
    const categoryId = req.params.id;
    const categoryData = req.body;
    categoryService.updateCategoryService(categoryId, categoryData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ success: true, message: 'Category updated successfully' });
            } else {
                res.status(404).json({ success: false, message: 'Category not found' });
            }
        }
    });
};

const deleteCategoryController=(req,res)=>{
    const categoryId=req.params.id;
    categoryService.deleteCategoryService(categoryId,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            if(result.affectedRows>0){
                res.status(200).json({success:true,message:'Category deleted successfully'})
            }else{
                res.status(404).json({success:false,message:'Category not found'});
            }
        }
    })
}


module.exports={
    createCategoryController,
    getAllCategoryController,
    getByIdCategoryController,
    updateCategoryController,
    deleteCategoryController
}