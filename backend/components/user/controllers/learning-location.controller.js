const learningLocationService = require('../services/learning-location.service');

function getLearningLocations(req, res) {
    res.send('hey')
}

function getLearningLocation(req, res) {
    res.send(req.params)
}

function createLearningLocation(req, res) {

}

function deleteLearningLocation(req, res) {

}

function updateLearningLocation(req, res) {

}

module.exports = {
    getLearningLocations,

    getLearningLocation,

    createLearningLocation,

    deleteLearningLocation,

    updateLearningLocation
};
