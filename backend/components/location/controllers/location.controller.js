function getLocation(req, res) {
    res.send(req.params)
}

function getLocations(req, res) {
    res.send('hello')
}

function createLocation(req, res) {

}

function deleteLocation(req, res) {

}

function updateLocation(req, res) {

}

module.exports = {
    getLocation,

    getLocations,

    createLocation,

    deleteLocation,

    updateLocation
};
