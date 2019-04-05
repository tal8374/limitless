import React, {Component} from 'react';

import {Button, Header, Segment, Message} from 'semantic-ui-react'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

class WordsExercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isGameRunning: false,
            correctWord: {
                word: 'word',
                partOfSpeech: 'V',
                definition: 'definition'
            },
            chosenWord: null,
            isAnswerCorrect: null,
            showedWords: [
                {
                    word: 'word',
                    partOfSpeech: 'V',
                    definition: 'definition'
                },
                {
                    word: 'word2',
                    partOfSpeech: 'V',
                    definition: 'definition2'
                },
                {
                    word: 'word3',
                    partOfSpeech: 'V',
                    definition: 'definition3'
                },
                {
                    word: 'word4',
                    partOfSpeech: 'V',
                    definition: 'definition4'
                }
            ]
        };

        this.startGame = this.startGame.bind(this);
        this.stopGame = this.stopGame.bind(this);
    }

    isCorrectWord(word) {
        return word.word === this.state.correctWord.word;
    }

    isChosenWrongWord(word) {
        return !this.isCorrectResult(word) && this.state.chosenWord === word;
    }

    getWordIcon(word) {
        if(!this.hasAnswered()) {
            return null;
        }

        if (this.isCorrectWord(word)) {
            return (
                <Icon name='checkmark' style={{paddingLeft: '1%', color: 'green', transition: '2s'}}/>
            )
        } else if (this.isChosenWrongWord(word)) {
            return (
                <Icon name='times' style={{paddingLeft: '1%', color: 'red', transition: '2s'}}/>
            )
        } else {
            return null;
        }
    }

    getOptions() {
        return this.state.showedWords.map((word, index) => (
            <Button key={index}
                    style={{marginBottom: '1%'}}
                    basic
                    color="grey"
                    fluid
                    onClick={this.checkAnswer.bind(this, index, word)}>
                {word.definition}
                {this.getWordIcon(word)}
            </Button>
        ))
    }

    isCorrectResult(word) {
        if(!word) {
            return false;
        }

        return this.state.correctWord.definition === word.definition;
    }

    handleCorrectAnswer() {
        this.setState({isAnswerCorrect: true});
    }

    handleNotCorrectAnswer() {
        this.setState({isAnswerCorrect: false});
    }

    markCorrectAnswer() {

    }

    hasAnswered() {
        return this.state.isAnswerCorrect !== null;
    }

    markChosenWord(word) {
        this.setState({chosenWord: word});
    }

    checkAnswer(index, word) {
        if (this.hasAnswered()) {
            return;
        }

        this.markChosenWord(word);

        this.markCorrectAnswer();

        if (this.isCorrectResult(word)) {
            this.handleCorrectAnswer();
        } else {
            this.handleNotCorrectAnswer();
        }
    }

    getStageMessage() {
        if (!this.hasAnswered()) {
            return null;
        }

        let header = this.state.isAnswerCorrect ? 'Correct Answer!' : 'Wrong Answer';
        let style = this.state.isAnswerCorrect ? {color: 'green'} : {color: 'red'};

        return (
            <Message>
                <Message.Header style={{...style, textAlign: 'center'}}>{header}</Message.Header>
                {this.getNextQuestionButton()}
            </Message>
        )
    }

    setNextQuestion() {
        this.setState({isAnswerCorrect: null})
    }

    getNextQuestionButton() {
        return (
            <Button
                style={{marginTop: '1%'}}
                basic
                color="blue"
                fluid
                onClick={this.setNextQuestion.bind(this)}>
                Next Question
            </Button>
        )
    }


    getEnglishWordsGame() {
        if (this.state.isGameRunning) {
            return this.getRunningGameElement();
        } else {
            return this.getNotRunningGameElement();
        }
    }

    getNotRunningGameElement() {
        return (
            <Button
                basic
                color="green"
                fluid
                onClick={this.startGame}>
                Start Game
            </Button>
        )
    }

    getRunningGameElement() {
        return (
            <div>
                <Button
                    basic
                    color="red"
                    fluid
                    onClick={this.stopGame}>
                    Stop Game
                </Button>

                <Segment>
                    {this.getStageMessage()}
                    <Header as='h3' textAlign='center'>
                        The Definition For - {this.state.correctWord.word}:
                    </Header>
                    {this.getOptions()}
                </Segment>
            </div>
        )
    }


    startGame() {
        this.setState({isGameRunning: true});
    }

    stopGame() {
        this.setState({isGameRunning: false});
    }

    render() {
        return (
            <Segment style={{marginLeft: '2%'}}>
                <Header as='h3' textAlign='center'>
                    Guess The Definition
                </Header>
                {this.getEnglishWordsGame()}
            </Segment>
        )
    }

}

export default WordsExercise;
