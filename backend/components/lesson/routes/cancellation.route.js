var express = require('express');
var router = express.Router();

const cancellationController = require('../controllers/cancellation.controller');

router
    .get('/', cancellationController.getCancellations());

router
    .get('/:commentId', cancellationController.getCancellation())
    .put('/:commentId', cancellationController.updateCancellation())
    .post('/:commentId', cancellationController.createCancellation)
    .delete('/:commentId', cancellationController.deleteCancellation);

module.exports = router;
