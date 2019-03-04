const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const studentController = require('../controllers/student.controller');

router
    .get(appHelper.createPath('user', 'student', false), studentController.list)
    .post(appHelper.createPath('user', 'student', false), studentController.create);

router
    .delete(appHelper.createPath('user', 'student', true), studentController.remove);

module.exports = router;
