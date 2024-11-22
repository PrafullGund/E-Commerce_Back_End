const dbConnection=require('../config/connection');

const createCategoryService=(categoryData,callback)=>{
    const query='INSERT INTO category (categoryName,description) VALUES (?,?)';
    dbConnection.query(query,
        [
            categoryData.categoryName,
            categoryData.description
        ],
        (error,result)=>{
            callback(error,result)
        });
}

const getAllCategoryService=(callback)=>{
    const query='SELECT * FROM category';
    dbConnection.query(query,(error,result)=>{
        callback(error,result);
    })
}

const getByIdCategoryService=(categoryId,callback)=>{
    const query='SELECT * FROM category WHERE id=?';
    dbConnection.query(query,[categoryId],(error,result)=>{
        callback(error,result)
    })
}

const updateCategoryService = (categoryId, categoryData, callback) => {
    const query = 'UPDATE category SET categoryName = ?, description = ? WHERE id = ?';
    dbConnection.query(
        query,
        [
            categoryData.categoryName,
            categoryData.description,
            categoryId 
        ],
        (error, result) => {
            callback(error, result);
        });
};

const deleteCategoryService=(categoryId,callback)=>{
    const query ='DELETE FROM category WHERE id=?';
    dbConnection.query(query,(categoryId),(error,result)=>{
        callback(error,result);
    })
}

module.exports={
    createCategoryService,
    getAllCategoryService,
    getByIdCategoryService,
    updateCategoryService,
    deleteCategoryService
}