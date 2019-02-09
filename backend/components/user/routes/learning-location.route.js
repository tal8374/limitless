var express = require('express');
var router = express.Router();

const learningLocationController = require('../controllers/learning-location.controller');

router
    .get('/:userId/learning-location', learningLocationController.getLearningLocations);

router
    .get('/:userId/learning-location/:learningLocationId', learningLocationController.getLearningLocation)
    .put('/:userId/learning-location/:learningLocationId', learningLocationController.updateLearningLocation)
    .post('/:userId/learning-location/:learningLocationId', learningLocationController.createLearningLocation)
    .delete('/:userId/learning-location/:learningLocationId', learningLocationController.deleteLearningLocation);

module.exports = router;
