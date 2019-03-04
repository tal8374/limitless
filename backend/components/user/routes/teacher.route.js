const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const teacherController = require('../controllers/teacher.controller');

router
    .get(appHelper.createPath('user', 'teacher', false), teacherController.list)
    .post(appHelper.createPath('user', 'teacher', false), teacherController.create);

router
    .delete(appHelper.createPath('user', 'teacher', true), teacherController.remove);

module.exports = router;
