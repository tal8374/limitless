var express = require('express');
var router = express.Router();

const teachingLocationController = require('../controllers/teaching-location.controller');

router
    .get('/:userId/teaching-location', teachingLocationController.getTeachingLocations);

router
    .get('/:userId/teaching-location/:teachingLocationId', teachingLocationController.getTeachingLocation)
    .put('/:userId/teaching-location/:teachingLocationId', teachingLocationController.updateTeachingLocation)
    .post('/:userId/teaching-location/:teachingLocationId', teachingLocationController.createTeachingLocation)
    .delete('/:userId/teaching-location/:teachingLocationId', teachingLocationController.updateTeachingLocation);

module.exports = router;
