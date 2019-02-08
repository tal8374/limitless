const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = require('../../user/model/user.model');

const CancellationSchema = new Schema({
    createDate: {type: 'Date', required: true},
    reason: {type: 'String', required: true},
    description: {type: 'String', required: true},
    by: {type: UserSchema, required: true},
});

module.exports = CancellationSchema;
