var express = require('express');
var router = express.Router();

const lessonController = require('../controllers/lesson.controller');

router
    .get('/:userId/lesson', lessonController.getLessons);

router
    .get('/:userId/lesson/:commentId', lessonController.getLesson)
    .put('/:userId/lesson/:commentId', lessonController.updateLesson)
    .post('/:userId/lesson/:commentId', lessonController.createLesson)
    .delete('/:userId/lesson/:commentId', lessonController.deleteLesson);

module.exports = router;
