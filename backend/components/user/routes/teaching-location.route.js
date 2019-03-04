var express = require('express');
var router = express.Router();

const appHelper = require('../../../util/app');
const teachingLocationController = require('../controllers/teaching-location.controller');

router
    .get(appHelper.createPath('user', 'teaching-location', false), teachingLocationController.list)
    .post(appHelper.createPath('user', 'teaching-location', false), teachingLocationController.create);

router
    .put(appHelper.createPath('user', 'teaching-location', true), teachingLocationController.update)
    .delete(appHelper.createPath('user', 'teaching-location', true), teachingLocationController.remove);

module.exports = router;
