import React, {Component} from 'react';

import {Button, Icon, Item, Label} from 'semantic-ui-react'
import Rating from "react-rating";
import {withRouter} from "react-router-dom";

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user ? props.user : {
                key: '12',
                firstName: '12',
                lastName: 'last',
                registeredAt: new Date,
                phone: '0543534542',
                email: 'email@gmail.com',
                roles: ['teacher'],
                dateOfBirth: new Date(),
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3lIy5jnenOOIroabuRLT6i_DjzJoxU9mKSA8r-jKwtfQWanu',
                from: {
                    country: 'country',
                    city: 'city',
                    street: 'street',
                }
            },
            profile: props.profile
        }
    }

    goToProfile() {
        let path = '/profile/' + this.state.user.firstName;
        this.props.history.push(path);
    }

    render() {
        return (
            <Item.Group divided onClick={this.goToProfile.bind(this)}>
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

export default withRouter(Profile);
