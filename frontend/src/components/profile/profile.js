import React, {Component} from 'react';

import {Button, Icon, Item, Label} from 'semantic-ui-react'
import Rating from "react-rating";
import {withRouter} from "react-router-dom";

class Profile extends Component {
    goToProfile() {
        let path = '/profile/' + this.props.user.firstName;
        this.props.history.push(path);
    }

    getPhoto() {
        if (this.props.user.photo) {
            return <Item.Image src={this.props.user.photo}/>
        } else {
            return <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
        }
    }

    getFullName() {
        if (this.props.user.firstName) {
            let lastName = this.props.user.lastName ? this.props.user.lastName : '';

            return <Item.Header>{this.props.user.firstName + ' ' + lastName}</Item.Header>
        } else {
            let email = this.props.user.email;
            let emailTitle = email.substring(0, email.indexOf('@'));

            return <Item.Header>{emailTitle}</Item.Header>
        }
    }

    formatDate(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    getNumberOfStudents() {
        if (this.props.user.roles.includes('teacher')) {
            return <Item.Meta>Number of students: {this.props.user.students.length}</Item.Meta>
        } else {
            return null;
        }
    }

    getNumberOfTeachers() {
        if (this.props.user.roles.includes('student')) {
            return <Item.Meta>Number of teachers: {this.props.user.teachers.length}</Item.Meta>
        } else {
            return null;
        }
    }

    getDescription() {
        if (this.props.user.description) {
            return <Item.Description>
                {this.props.user.description}
            </Item.Description>
        } else {
            return null;
        }
    }

    getRating() {
        return <Item.Meta>
            <Rating
                style={{color: '#FFA500'}}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star checked fa-2x"
                initialRating={3}
                readonly
            />
        </Item.Meta>
    }

    render() {
        return (
            <Item.Group divided onClick={this.goToProfile.bind(this)}>
                <Item>
                    {this.getPhoto()}
                    <Item.Content>
                        {this.getFullName()}
                        <Item.Meta>Last active: {this.formatDate(new Date(this.props.user.lastActive))}</Item.Meta>
                        {this.getNumberOfStudents()}
                        {this.getNumberOfTeachers()}
                        {this.getRating()}
                        {this.getDescription()}
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
