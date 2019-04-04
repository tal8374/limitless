import React, {Component} from 'react';
import {Message, Segment, Input} from "semantic-ui-react";

class Dictionary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedWord: '',
            word: {
                word: 'word',
                partOfSpeech: 'V',
                definition: 'definition'
            }
        }
    }

    handleChange(e) {
        this.setState({searchedWord: e.target.value})
    }

    getWordData() {
        if(this.state.searchedWord === '') {
            return null
        }

        return (
            <Message>
                <Message.Header>{this.state.word.word} ({this.state.word.partOfSpeech})</Message.Header>
                <p>
                    {this.state.word.definition}
                </p>
            </Message>
        )
    }

    render() {
        return (
            <Segment>
                <Input value={this.state.searchedWord} onChange={(e) => {
                    this.handleChange(e)
                }} fluid icon='search' placeholder='Search a word...'/>
                {this.getWordData()}
            </Segment>
        )
    }

}

export default Dictionary;
