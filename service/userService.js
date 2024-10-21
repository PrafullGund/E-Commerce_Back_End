const bcrypt = require('bcrypt');
const dbConnection = require('../config/connection');

const createUserService = (userData, callback) => {
    const saltRounds = 10;

    bcrypt.hash(userData.password, saltRounds, (err, hashPassword) => {
        if (err) {
            return callback(err, null);
        }

        const query = `INSERT INTO users (firstName, lastName, mobileNumber, email, password, confirmPassword) VALUES (?,?,?,?,?,?)`;

        dbConnection.query(query,
            [
                userData.firstName,
                userData.lastName,
                userData.mobileNumber,
                userData.email,
                hashPassword, 
                hashPassword 
            ],
            (error, result) => {
                callback(error, result);
            });
    });
}

const getAllUserService=(callback)=>{
    const query='SELECT * FROM users';
    dbConnection.query(query,(error,result)=>{
        callback(error,result)
    })
}

module.exports = { 
    createUserService,
    getAllUserService
 };
