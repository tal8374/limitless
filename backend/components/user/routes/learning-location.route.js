const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const learningLocationController = require('../controllers/learning-location.controller');

router
    .get(appHelper.createPath('user', 'learning-location', false), learningLocationController.list)
    .post(appHelper.createPath('user', 'learning-location', false), learningLocationController.create);

router
    .put(appHelper.createPath('user', 'learning-location', true), learningLocationController.update)
    .delete(appHelper.createPath('user', 'learning-location', true), learningLocationController.remove);

module.exports = router;
