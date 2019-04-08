import React, {Component} from 'react';

import './student.css';
import {Button, Icon, Item} from "semantic-ui-react";

class Student extends Component {

    constructor(props) {
        super(props);
        this.state = {
            student: props.student
        };
    }

    onOrderLessonClicked() {

    }

    onSendMessageClicked() {

    }

    render() {

        return (
            <Item>
                <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>

                <Item.Content>
                    <Item.Header>Watchmen</Item.Header>
                    <Item.Description>
                        <p>Last lesson at: {this.state.student.lastLessonAt}</p>
                        <p>Number of ordered lessons: {this.state.student.numberOfLessons}</p>
                    </Item.Description>
                    <Item.Extra>
                        <Button
                            onClick={this.onSendMessageClicked.bind(this)}
                            color="grey"
                            floated='right'>
                            Message
                            <Icon name='right chevron'/>
                        </Button>
                        <Button
                            onClick={this.onOrderLessonClicked.bind(this)}
                            color="grey"
                            floated='right'>
                            Order Lesson
                            <Icon name='right chevron'/>
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

export default Student;

