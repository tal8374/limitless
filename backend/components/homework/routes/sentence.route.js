var express = require('express');
var router = express.Router();

const sentenceController = require('../controllers/sentence.controller');

// router
//     .get('/', sentenceController.getSentences);
//
// router
//     .get('/:sentenceId', sentenceController.getSentence)
//     .put('/:sentenceId', sentenceController.updateSentence)
//     .post('/:sentenceId', sentenceController.createSentence)
//     .delete('/:sentenceId', sentenceController.deleteSentence);

module.exports = router;
