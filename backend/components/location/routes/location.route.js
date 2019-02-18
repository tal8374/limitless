const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const locationController = require('../controllers/location.controller');

router
    .get(appHelper.createPath('location', 'location', false), locationController.getLocations);

router
    .get(appHelper.createPath('location', 'location', true), locationController.getLocation)
    .put(appHelper.createPath('location', 'location', true), locationController.updateLocation)
    .post(appHelper.createPath('location', 'location', true), locationController.createLocation)
    .delete(appHelper.createPath('location', 'location', true), locationController.deleteLocation);

module.exports = router;
