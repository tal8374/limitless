const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const lessonController = require('../controllers/lesson.controller');

router
    .get(appHelper.createPath('lesson', 'lesson', false), lessonController.list)
    .post(appHelper.createPath('lesson', 'lesson', false), lessonController.create);

router
    .get(appHelper.createPath('lesson', 'lesson', true), lessonController.get)
    .put(appHelper.createPath('lesson', 'lesson', true), lessonController.update);

module.exports = router;
