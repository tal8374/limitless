const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const cancellationController = require('../controllers/cancellation.controller');

router
    .get(appHelper.createPath('lesson', 'cancellation', false), cancellationController.getCancellations);

router
    .get(appHelper.createPath('lesson', 'cancellation', true), cancellationController.getCancellation)
    .put(appHelper.createPath('lesson', 'cancellation', true), cancellationController.updateCancellation)
    .post(appHelper.createPath('lesson', 'cancellation', true), cancellationController.createCancellation)
    .delete(appHelper.createPath('lesson', 'cancellation', true), cancellationController.deleteCancellation);

module.exports = router;
