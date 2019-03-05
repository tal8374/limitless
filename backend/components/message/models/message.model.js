const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = require('../../user/models/user.model');

const MessageSchema = new Schema({
    by: {type: User.UserSchema, required: true},
    for: {type: User.UserSchema, required: true},
    body: {type: 'String', required: true},
    createdAt: {type: 'Date', default: Date.now()},
    readAt: {type: 'Date'},
    isRead: {type: 'Boolean', default: false},
});

module.exports = {
    MessageModel: mongoose.model('Message', MessageSchema),
    MessageSchema: MessageSchema
};
