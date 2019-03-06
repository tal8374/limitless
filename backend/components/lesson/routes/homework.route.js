const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const homeworkController = require('../controllers/homework.controller');

router
    .post(appHelper.createPath('lesson', 'homework', false), homeworkController.create);

router
    .put(appHelper.createPath('lesson', 'homework', true), homeworkController.update)

module.exports = router;
