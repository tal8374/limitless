const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const teacherController = require('../controllers/teacher.controller');

router
    .get(appHelper.createPath('user', 'teacher', false), teacherController.getTeachers);

router
    .get(appHelper.createPath('user', 'teacher', true), teacherController.getTeacher)
    .post(appHelper.createPath('user', 'teacher', true), teacherController.createTeacher)
    .delete(appHelper.createPath('user', 'teacher', true), teacherController.deleteTeacher);

module.exports = router;
