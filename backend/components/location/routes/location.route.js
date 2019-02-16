var express = require('express');
var router = express.Router();

const locationController = require('../controllers/location.controller');

router
    .get('/', locationController.getLocations);

router
    .get('/:locationId', locationController.getLocation)
    .put('/:locationId', locationController.updateLocation)
    .post('/:locationId', locationController.createLocation)
    .delete('/:locationId', locationController.deleteLocation);

module.exports = router;
