const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SentenceSchema = new Schema({
    sentence: {type: 'String', required: true},
    language: {type: 'String', required: true},
});

module.exports = {
    SentenceModel: mongoose.model('Sentence', SentenceSchema),
    SentenceSchema: SentenceSchema
};
