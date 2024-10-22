const orderService=require('../service/orderService')

const createOrderController=(req,res)=>{
    const orderData=req.body;
    orderService.createOrderService(orderData,(error,result)=>{
        if(error){
            res.status(500).json({success:false, message:error.message});
        }else{
            res.status(200).json({success:true,message:'Order Added Successfully..!'});
        }
    });
}

const getAllOrderController=(req,res)=>{
    orderService.getAllOrderService((error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            res.status(200).json({success:true,data:result});
        }
    })
}

module.exports={
    createOrderController,
    getAllOrderController
};