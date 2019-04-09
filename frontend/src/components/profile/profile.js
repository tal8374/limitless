import React, {Component} from 'react';

import {Button, Icon, Item, Label} from 'semantic-ui-react'
import Rating from "react-rating";

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            profile: props.profile
        }
    }

    render() {
        return (
            <Item.Group divided>
                <Item>
                    <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>

                    <Item.Content>
                        <Item.Header>{this.state.user.firstName}</Item.Header>
                        <Item.Meta>Last active: {new Date().toDateString()}</Item.Meta>
                        <Item.Meta>Number of students: 6</Item.Meta>
                        <Item.Meta>Number of lessons: 6</Item.Meta>
                        <Item.Meta>
                            <Rating
                                style={{color: '#FFA500'}}
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star checked fa-2x"
                                initialRating={3}
                                readonly
                            />
                        </Item.Meta>
                        <Item.Description>
                            some description
                        </Item.Description>
                        <Item.Extra>
                            <Button
                                color="grey">
                                Order Lesson
                                <Icon name='right chevron'/>
                            </Button>
                            <Button
                                color="grey">
                                Send a message
                                <Icon name='right chevron'/>
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}

