const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    by: {type: Schema.Types.ObjectId, ref: 'User'},
    for: {type: Schema.Types.ObjectId, ref: 'User'},
    body: {type: 'String'},
    readAtByUser: {type: 'Date'},
    readAtForUser: {type: 'Date'},
});

MessageSchema
    .virtual('isReadByUser')
    .get(function () {
        return this.readAtByUser !== null || this.readAtByUser !== undefined;
    });

MessageSchema
    .virtual('isReadForUser')
    .get(function () {
        return this.readAtForUser !== null || this.readAtForUser !== undefined;
    });

module.exports = {
    MessageModel: mongoose.model('Message', MessageSchema),
    MessageSchema: MessageSchema
};
