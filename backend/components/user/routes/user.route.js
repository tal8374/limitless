var express = require('express');
var router = express.Router();

const appHelper = require('../../../util/app');
const userController = require('../controllers/user.controller');

console.log('the path ' + appHelper.createPath('user', 'user', false))

router
    .get(appHelper.createPath('user', 'user', false), userController.getUsers);
    // .get(appHelper.createPath('user', 'user', false), userController.getUsers);

router
    .get(appHelper.createPath('user', 'user', true), userController.getUser)
    .put(appHelper.createPath('user', 'user', true), userController.updateUser)
    .post(appHelper.createPath('user', 'user', true), userController.createUser)
    .delete(appHelper.createPath('user', 'user', true), userController.deleteUser);

module.exports = router;
