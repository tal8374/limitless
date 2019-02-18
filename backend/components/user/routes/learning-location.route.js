const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const learningLocationController = require('../controllers/learning-location.controller');

router
    .get(appHelper.createPath('user', 'learning-location', false), learningLocationController.getLearningLocations);

router
    .get(appHelper.createPath('user', 'learning-location', true), learningLocationController.getLearningLocation)
    .put(appHelper.createPath('user', 'learning-location', true), learningLocationController.updateLearningLocation)
    .post(appHelper.createPath('user', 'learning-location', true), learningLocationController.createLearningLocation)
    .delete(appHelper.createPath('user', 'learning-location', true), learningLocationController.deleteLearningLocation);

module.exports = router;
