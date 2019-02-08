const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = require('../../user/model/user.model');

const MessageSchema = new Schema({
    by: {type: UserSchema, required: true},
    for: {type: UserSchema, required: true},
    body: {type: 'String', required: true},
    createdAt: {type: 'Date', required: true},
    readAt: {type: 'Date', required: true},
    isRead: {type: 'Boolean', required: true},
});

module.exports = mongoose.model('message', MessageSchema);
