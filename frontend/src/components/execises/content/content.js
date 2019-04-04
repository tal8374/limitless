import React, {Component} from 'react';

import {Button, Header, Segment} from 'semantic-ui-react'
import WordsGame from "./words-game/words-game";

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isGameRunning: false
        };

        this.startGame = this.startGame.bind(this);
        this.stopGame = this.stopGame.bind(this);
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

                <WordsGame/>
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
                    Guess the definition
                </Header>
                {this.getEnglishWordsGame()}
            </Segment>
        )
    }

}

export default Content;
