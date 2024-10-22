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
};

const getAllUserService = (callback) => {
    const query = 'SELECT * FROM users';
    dbConnection.query(query, (error, result) => {
        callback(error, result)
    });
};

const getByIdUserService = (userId, callback) => {
    console.log("Fetching user with Id:", userId);
    const query = 'SELECT * FROM users WHERE Id=?';
    dbConnection.query(query, [userId], (error, result) => {
        callback(error, result);
    });
}

const updateUserService = (userId, userData, callback) => {
    const saltRounds = 10;

    if (userData.password) {
        bcrypt.hash(userData.password, saltRounds, (err, hashPassword) => {
            if (err) {
                return callback(err, null);
            }

            const query = `UPDATE users SET firstName=?, lastName=?, mobileNumber=?, email=?, password=? WHERE id=?`;

            dbConnection.query(
                query,
                [
                    userData.firstName,
                    userData.lastName,
                    userData.mobileNumber,
                    userData.email,
                    hashPassword,
                    userId
                ],
                (error, result) => {
                    callback(error, result);
                }
            );
        });
    } else {
        const query = `UPDATE users SET firstName=?, lastName=?, mobileNumber=?, email=? WHERE id=?`;

        dbConnection.query(
            query,
            [
                userData.firstName,
                userData.lastName,
                userData.mobileNumber,
                userData.email,
                userId
            ],
            (error, result) => {
                callback(error, result);
            }
        )
    };
};

const deleteUserService = (userId, callback) => {
    const query = 'DELETE FROM users WHERE id=?';
    dbConnection.query(query, [userId], (error, result) => {
        callback(error, result);
    });
};

module.exports = {
    createUserService,
    getAllUserService,
    getByIdUserService,
    updateUserService,
    deleteUserService
};
