const dbConnection=require('../config/connection');

const createOrderService=(orderData,callback)=>{
    const query=`INSERT INTO orders (productId,customerName,mobileNumber,orderDate,orderAddress,deliveryAddress) VALUES (?,?,?,?,?,?)`;
    dbConnection.query(query,
        [
            orderData.productId,
            orderData.customerName,
            orderData.mobileNumber,
            orderData.orderDate,
            orderData.orderAddress,
            orderData.deliveryAddress
        ],
        (error,result)=>{
            callback(error,result)
        });
}

const getAllOrderService=(callback)=>{
    const query='SELECT * FROM orders';
    dbConnection.query(query,(error,result)=>{
        callback(error,result)
    });
}

const getByIdOrderService=(orderId,callback)=>{
    const query='SELECT * FROM orders WHERE id=?';
    
}

module.exports={ 
    createOrderService,
    getAllOrderService,
    getByIdOrderService
}