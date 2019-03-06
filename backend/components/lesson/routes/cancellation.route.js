const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const cancellationController = require('../controllers/cancellation.controller');

router
    .post(appHelper.createPath('lesson', 'cancellation', false), cancellationController.create);

router
    .put(appHelper.createPath('lesson', 'cancellation', false), cancellationController.update);

module.exports = router;
