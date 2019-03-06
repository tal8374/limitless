const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EssaySchema = new Schema({
    body: {type: 'String', required: true},
    remarks: {type: 'String', required: false}
});

module.exports = {
    EssayModel: mongoose.model('Essay', EssaySchema),
    EssaySchema: EssaySchema
};
