const messageService = require('../services/message.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        messageService.list
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.userMessages)
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        messageService.create
    ], function (err, result) {
        console.log(err)
        if (err) {
            res.send(err)
        } else if(!result.newMessage) {
            res.send('error occured')
        }
        res.send(result.newMessage)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        messageService.update
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.updatedMessage)
    });
}

function updateMessages(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        messageService.updateMessages
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.updatedMessages)
    });
}

module.exports = {
    list,

    create,

    update,

    updateMessages
};
