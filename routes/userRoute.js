const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/', userController.createUserController);
router.get('/', userController.getAllUserController);
router.get('/:id', userController.getByIdUserController);
router.put('/:id', userController.updateUserController);
router.delete('/:id', userController.deleteUserController);

module.exports = router;