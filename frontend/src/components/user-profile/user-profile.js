import React, {Component} from 'react';
import {Grid, Segment} from "semantic-ui-react";
import Comments from "../../components/comments/comments";
import Profile from "../../components/profile/profile";
import Calendar from "../../components/account/calendar/calendar";
import StatusMessage from "../status-message/status-message";

class UserProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showCalendar: props.showCalendar === false ? props.showCalendar : true
        }
    }

    getCalendar() {
        return !this.state.showCalendar ? null :
            (
                <Grid.Row>
                    <Grid.Column width={1}/>
                    <Grid.Column width={14}>
                        <Calendar/>
                    </Grid.Column>
                    <Grid.Column width={1}/>
                </Grid.Row>
            )
    }

    render() {
        const {isLoading, error, user} = this.props;

        if (error || !user || isLoading || user.length === 0) {
            return (
                <StatusMessage
                    error={error || !user}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the user for you`}
                    nothing={user && user.length === 0}
                    nothingMessage={`No user to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        return (
            <Segment>
                <Grid style={{marginTop: '1%'}}>
                    <Grid.Row>
                        <Grid.Column width={1}/>
                        <Grid.Column width={11}>
                            <Profile {...this.props}/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Comments comments={this.props.user.comments}/>
                        </Grid.Column>
                        <Grid.Column width={1}/>
                    </Grid.Row>
                    {this.getCalendar()}
                </Grid>
            </Segment>
        );
    }
}

export default UserProfile;
