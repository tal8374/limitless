import React, {Component} from 'react';

import './teacher.css';
import {Button, Icon, Item} from "semantic-ui-react";

class Teacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teacher: props.teacher
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
                        <p>Last lesson at: {this.state.teacher.lastLessonAt}</p>
                        <p>Number of ordered lessons: {this.state.teacher.numberOfLessons}</p>
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

export default Teacher;

