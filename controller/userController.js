const userService = require('../service/userService');

const createUserController = (req, res) => {
    const userData = req.body;

    if (userData.password !== userData.confirmPassword) {
        return res.status(400).json({ success: false, message: "Passwords do not match." });
    }

    userService.createUserService(userData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            res.status(200).json({ success: true, message: 'User Added Successfully..!' });
        }
    });
};

const getAllUserController = (req, res) => {
    userService.getAllUserService((error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            res.status(201).json({ success: true, data: result });
        }
    });

}

const getByIdUserController = (req, res) => {
    const userId = req.params.id;
    userService.getByIdUserService(userId, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result === 0) {
                res.status(404).json({ success: false, message: 'User Not Found' });
            } else {
                res.status(200).json({ success: true, data: result[0] });
            }
        }
    });
}

const updateUserController = (req, res) => {
    const userId = req.params.id;
    const userData = req.body;

    if (userData.password !== userData.confirmPassword) {
        return res.status(400).json({ success: false, message: "Passwords do not match." });
    }

    userService.updateUserService(userId, userData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ success: true, message: 'User Updated Successfully..!' });
            } else {
                res.status(404).json({ success: false, message: 'User Not Found' });
            }
        }
    });
};

const deleteUserController = (req, res) => {
    const id = req.params.id;
    userService.deleteUserService(id, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ success: true, message: 'User Delete Successfully..!' });
            } else {
                res.status(404).json({ success: false, message: 'User Not Found' });
            }
        }
    });
};


module.exports = {
    createUserController,
    getAllUserController,
    getByIdUserController,
    updateUserController,
    deleteUserController
}
