const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrammarSchema = new Schema({
    type: {type: 'String', required: true},
    question: {type: 'String', required: true},
    answers: [{type: 'String', required: true}],
});

module.exports = {
    GrammarModel: mongoose.model('Grammar', GrammarSchema),
    GrammarSchema: GrammarSchema
};
