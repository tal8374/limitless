const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../../user/models/user.model');

const CancellationSchema = new Schema({
    createDate: {type: 'Date', default: Date.now()},
    reason: {type: 'String'},
    description: {type: 'String'},
    by: {type: User.UserSchema, required: true},
});

module.exports = {
    CancellationModel: mongoose.model('Cancellation', CancellationSchema),
    CancellationSchema: CancellationSchema
};
