const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const locationController = require('../controllers/location.controller');

router
    .post(appHelper.createPath('lesson', 'location', false), locationController.create);

router
    .put(appHelper.createPath('lesson', 'location', true), locationController.update)

module.exports = router;
