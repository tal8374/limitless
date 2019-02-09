var express = require('express');
var router = express.Router();

const teacherController = require('../controllers/teacher.controller');

router
    .get('/:userId/teacher', teacherController.getTeachers);

router
    .get('/:userId/teacher/:teacherId', teacherController.getTeacher)
    .post('/:userId/teacher/:teacherId', teacherController.createTeacher)
    .delete('/:userId/teacher/:teacherId', teacherController.deleteTeacher);

module.exports = router;
