var express = require('express');
var router = express.Router();

const appHelper = require('../../../util/app');
const teachingLocationController = require('../controllers/teaching-location.controller');

router
    .get(appHelper.createPath('user', 'teaching-location', false), teachingLocationController.getTeachingLocations);

router
    .get(appHelper.createPath('user', 'teaching-location', true), teachingLocationController.getTeachingLocation)
    .put(appHelper.createPath('user', 'teaching-location', true), teachingLocationController.updateTeachingLocation)
    .post(appHelper.createPath('user', 'teaching-location', true), teachingLocationController.createTeachingLocation)
    .delete(appHelper.createPath('user', 'teaching-location', true), teachingLocationController.updateTeachingLocation);

module.exports = router;
