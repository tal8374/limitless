const cancellationService = require('../services/cancellation.service');

function getCancellation(req, res) {
    res.send(req.params)
}

function getCancellations(req, res) {
    res.send('hello')
}

function createCancellation(req, res) {

}

function deleteCancellation(req, res) {

}

function updateCancellation(req, res) {

}

module.exports = {
    getCancellation,

    getCancellations,

    createCancellation,

    deleteCancellation,

    updateCancellation
};
