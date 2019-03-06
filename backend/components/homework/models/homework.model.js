const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../../user/models/user.model');
const Word = require('./word.model');
const Essay = require('./essay.model');
const Grammar= require('./grammar.model');

const HomeworkSchema = new Schema({
    dueDate: {type: 'Date'},
    createdBy: {type: User.UserSchema, required: true},
    createdFor: {type: User.UserSchema, required: true},
    words: [{type: Word.WordSchema}],
    grammar: [{type: Grammar.GrammarSchema}],
    essay: {type: Essay.EssaySchema},
});

module.exports = {
    HomeworkModel: mongoose.model('Homework', HomeworkSchema),
    HomeworkSchema: HomeworkSchema
};
