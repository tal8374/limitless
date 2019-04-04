import React, {Component} from 'react';

import './common-questions.css';

import {Accordion, Icon} from 'semantic-ui-react'

export default class CommonQuestions extends Component {

    state = {activeIndex: 0};

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({activeIndex: newIndex})
    };


    render() {
        const {activeIndex} = this.state

        return (
            <Accordion styled style={{width: '100%'}}>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name='dropdown'/>
                   Question 1
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>
                        Answer 1
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    <Icon name='dropdown'/>
                    Question 2
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>
                        Answer 2
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    <Icon name='dropdown'/>
                    Question 3
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>
                       Answer 3.1
                    </p>
                    <p>
                        Answer 3.2
                    </p>
                </Accordion.Content>
            </Accordion>
        )
    }
}

