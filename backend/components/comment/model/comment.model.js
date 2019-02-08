const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = require('../../user/model/user.model');

const CommentSchema = new Schema({
    by: {type: UserSchema, required: true},
    for: {type: UserSchema, required: true},
    body: {type: 'String', required: true},
    createDate: {type: 'Date', required: true},
    rate: {type: 'Number', required: false}
});

module.exports = CommentSchema;
