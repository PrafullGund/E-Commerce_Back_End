const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const {login}=require('../controller/loginController');
const {authenticateToken }=require('../middleware/middleware');

router.post('/login',login);
router.post('/', userController.createUserController);
router.get('/', userController.getAllUserController);
router.get('/:id', userController.getByIdUserController);
router.put('/:id', userController.updateUserController);
router.delete('/:id', userController.deleteUserController);

router.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ success: true, message: 'This is a protected route', user: req.user });
});

module.exports = router;