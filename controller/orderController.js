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
    });
}

const getByIdOrderController=(req,res)=>{
    const orderId=req.params.id;
    orderService.getByIdOrderService(orderId,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            if(result.length===0){
                res.status(404).json({success:false,message:'Order Not Found'});
            }else{
                res.status(201).json({success:true,message:result[0]});
            }
        }
    });
}

const updateOrderController=(req,res)=>{
    const orderId=req.params.id;
    const orderData=req.body;
    orderService.updateOrderService(orderId,orderData,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            if(result.affectedRows>0){
                res.status(200).json({success:true,message:'Order Update Successfully..!'});
            }else{
                res.status(500).json({success:false,message:'Order Not Found'});
            }
        }
    });
}

const deleteOrderController=(req,res)=>{
    const orderId=req.params.id;
    orderService.deleteOrderService(orderId,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            if(result.affectedRows>0){
                res.status(200).json({success:true,message:'Order Deleted Successfully..!'});
            }else{
                res.status(500).json({success:false,message:'Order Not Found'});
            }
        }
    })
}

module.exports={
    createOrderController,
    getAllOrderController,
    getByIdOrderController,
    updateOrderController,
    deleteOrderController
};
