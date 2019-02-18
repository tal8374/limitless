const teachingLocationService = require('../services/teaching-location.service');

function getTeachingLocations(req, res) {
    res.send('hey')
}

function getTeachingLocation(req, res) {
    res.send(req.params)
}

function createTeachingLocation(req, res) {

}

function deleteTeachingLocation(req, res) {

}

function updateTeachingLocation(req, res) {

}

module.exports = {
    getTeachingLocations,

    getTeachingLocation,

    createTeachingLocation,

    deleteTeachingLocation,

    updateTeachingLocation
};
