const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const studentController = require('../controllers/student.controller');

router
    .get(appHelper.createPath('user', 'student', false), studentController.getStudents);

router
    .get(appHelper.createPath('user', 'student', true), studentController.getStudent)
    .post(appHelper.createPath('user', 'student', true), studentController.createStudent)
    .delete(appHelper.createPath('user', 'student', true), studentController.deleteStudent);

module.exports = router;
