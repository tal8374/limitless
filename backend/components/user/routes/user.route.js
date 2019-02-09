var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');

router
    .get('/', userController.getUsers);

router
    .get('/:userId', userController.getUser)
    .put('/:userId', userController.updateUser)
    .post('/:userId', userController.createUser)
    .delete('/:userId', userController.deleteUser);

module.exports = router;
