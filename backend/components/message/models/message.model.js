const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    by: {type: Schema.Types.ObjectId, ref: 'User'},
    for: {type: Schema.Types.ObjectId, ref: 'User'},
    body: {type: 'String'},
    readAt: {type: 'Date'},
    isRead: {type: 'Boolean', default: false},
});

module.exports = {
    MessageModel: mongoose.model('Message', MessageSchema),
    MessageSchema: MessageSchema
};
