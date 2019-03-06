const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const homeworkController = require('../controllers/homework.controller');

router
    .get(appHelper.createPath('homework', 'homework', false), homeworkController.getHomeworks)
    .post(appHelper.createPath('homework', 'homework', false), homeworkController.createHomework);

router
    .get(appHelper.createPath('homework', 'homework', true), homeworkController.getHomework)
    .put(appHelper.createPath('homework', 'homework', true), homeworkController.updateHomework)
    .delete(appHelper.createPath('homework', 'homework', true), homeworkController.deleteHomework);

module.exports = router;
