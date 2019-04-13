const Message = require("../models/message.model");
const userService = require('../../user/services/user.service');
const async = require('async');

function getUserMessages(payload, callback) {
    const user = payload.user;

    if (user && user.messages) {
        payload.userMessages = user.messages;
    } else {
        payload.userMessages = [];
    }

    callback(null, payload);
}

function createSearchUserQuery(payload, callback) {
    payload.query = {_id: payload.req.params.userId};

    callback(null, payload);
}

function list(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchUserQuery,
        userService.get,
        getUserMessages,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        callback(null, result);
    });
}

function createSearchForUserQuery(payload, callback) {
    payload.query = {_id: payload.req.body.for};

    callback(null, payload);
}

function updateForUser(payload, callback) {
    payload.req.body.for = payload.user;

    callback(null, payload);
}

function populateForUser(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchForUserQuery,
        userService.get,
        updateForUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.for = result.user;

        callback(null, payload);
    });
}

function createSearchByUserQuery(payload, callback) {
    payload.query = {_id: payload.req.body.by};

    callback(null, payload);
}

function updateByUser(payload, callback) {
    payload.req.body.by = payload.user;

    callback(null, payload);
}

function populateByUser(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchByUserQuery,
        userService.get,
        updateByUser,
    ], function (err, result) {
        if (err) {
            callback(err)
        }
        payload.by = result.user;
        callback(null, payload);
    });
}

function addMessageToUser(payload, callback) {
    const user = payload.req.body.for;
    const newMessage = payload.newMessage;

    user.messages.push(newMessage._id);

    return user
        .save()
        .then((message) => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createMessage(payload, callback) {
    const newMessage = new Message.MessageModel(payload.req.body);

    newMessage
        .save()
        .then((newMessage) => {
            payload.newMessage = newMessage;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        populateForUser,
        populateByUser,
        createMessage,
        addMessageToUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function update(payload, callback) {
    const messageId = payload.req.params.messageId;
    const newMessageData = payload.req.body;

    Message.MessageModel.update({ _id: messageId },newMessageData)
        .then(function (updateMessage)
        {
            payload.updatedMessage = updateMessage
            callback(null, payload);
        })
        .catch(function (err) {
            callback(err);
        });
}

module.exports = {
    list,

    create,

    update
};
