var express = require('express');
var router = express.Router();

const studentController = require('../controllers/student.controller');

router
    .get('/:userId/student', studentController.getStudents);

router
    .get('/:userId/student/:studentId', studentController.getStudent)
    .post('/:userId/student/:studentId', studentController.createStudent)
    .delete('/:userId/student/:studentId', studentController.deleteStudent);

module.exports = router;
