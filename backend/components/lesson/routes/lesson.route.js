var express = require('express');
var router = express.Router();

const lessonController = require('../controllers/lesson.controller');

router
    .get('/', lessonController.getLessons);

router
    .get('/:commentId', lessonController.getLesson)
    .put('/:commentId', lessonController.updateLesson)
    .post('/:commentId', lessonController.createLesson)
    .delete('/:commentId', lessonController.deleteLesson);

module.exports = router;
