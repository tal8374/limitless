const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const lessonController = require('../controllers/lesson.controller');

router
    .get(appHelper.createPath('lesson', 'lesson', false), lessonController.getLessons);

router
    .get(appHelper.createPath('lesson', 'lesson', true), lessonController.getLesson)
    .put(appHelper.createPath('lesson', 'lesson', true), lessonController.updateLesson)
    .post(appHelper.createPath('lesson', 'lesson', true), lessonController.createLesson)
    .delete(appHelper.createPath('lesson', 'lesson', true), lessonController.deleteLesson);

module.exports = router;
