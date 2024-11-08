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
    const query='SELECT * FROM orders WHERE Id=?';
    dbConnection.query(query,[orderId],(error,result)=>{
        callback(error,result);
    });
}

const updateOrderService=(orderId,orderData,callback)=>{
    const query='UPDATE orders SET productId=?,customerName=?,mobileNumber=?,orderDate=?,orderAddress=?,deliveryAddress=? WHERE id=?';
    dbConnection.query(query,
        [
            orderData.productId,
            orderData.customerName,
            orderData.mobileNumber,
            orderData.orderDate,
            orderData.orderAddress,
            orderData.deliveryAddress,
            orderId
        ],
        (error,result)=>{
            callback(error,result);
        });
}

const deleteOrderService=(orderId,callback)=>{
    const query='DELETE FROM orders WHERE id=?';
    dbConnection.query(query,(orderId),(error,result)=>{
        callback(error,result);
    })
}

module.exports={ 
    createOrderService,
    getAllOrderService,
    getByIdOrderService,
    updateOrderService,
    deleteOrderService
}
