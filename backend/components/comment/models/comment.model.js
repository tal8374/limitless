const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../../user/models/user.model');

const CommentSchema = new Schema({
    by: {type: User.UserSchema, required: true},
    for: {type: User.UserSchema, required: true},
    body: {type: 'String', required: true},
    createDate: {type: 'Date', default: Date.now(), required: true},
    rate: {type: 'Number', required: false}
});

module.exports = {
    CommentSchema: CommentSchema,
    CommentModel: mongoose.model('Comment', CommentSchema)
};
