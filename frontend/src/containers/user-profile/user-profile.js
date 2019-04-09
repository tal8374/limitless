import React, {Component} from 'react';
import {Grid, Segment} from "semantic-ui-react";
import Comments from "../../components/comments/comments";
import Profile from "../../components/profile/profile";
import Calendar from "../../components/account/calendar/calendar";

const comments = [
    {
        by: {
            key: '12',
            firstName: '1',
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
        for: {
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
        body: 'some conent',
        rate: {
            rate: 4,
            by: {
                key: '1',
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
            }
        }
    },
];

const comment = comments[0];

for(let i = 0; i < 10; i++) {
    comments.push(comment);
}

class UserProfileContainer extends Component {
    render() {
        return (
            <Segment>

                <Grid style={{marginTop: '1%'}}>
                    <Grid.Row>
                        <Grid.Column width={1}/>
                        <Grid.Column width={11}>
                            <Profile/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Comments comments={comments}/>
                        </Grid.Column>
                        <Grid.Column width={1}/>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}/>
                        <Grid.Column width={14}>
                            <Calendar/>
                        </Grid.Column>
                        <Grid.Column width={1}/>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default UserProfileContainer;
