import React, {Component} from 'react';

import {Grid, Menu, Segment} from 'semantic-ui-react'

import Calendar from '../calendar/calendar';
import Teachers from '../teachers/teachers';
import Students from '../students/students';
import Setting from '../setting/setting';
import UserProfile from "../../user-profile/user-profile";
import StatusMessage from "../../status-message/status-message";

class AccountMenu extends Component {
    state = {activeItem: 'setting'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    getSegment() {
        switch (this.state.activeItem) {
            case 'calendar':
                return <Calendar {...this.props}/>;
            case 'teachers':
                return <Teachers {...this.props}/>;
            case 'students':
                return <Students {...this.props}/>;
            case 'setting':
                return <Setting {...this.props}/>;
            case 'profile':
                return <UserProfile user={this.props.loggedInUser} showCalendar={false}/>;
        }
    }

    render() {
        const {activeItem} = this.state;

        let {isLoading, error, loggedInUser} = this.props;

        if (error || !loggedInUser || isLoading) {
            return (
                <StatusMessage
                    error={error || !loggedInUser}
                    errorClassName="users-error"
                    errorMessage={error}
                    loading={isLoading}
                    loadingMessage={`We are fetching the setting details for you`}
                    nothing={loggedInUser}
                    nothingMessage={`No setting details to display`}
                    nothingClassName="users-error"
                    type="default"
                />
            );
        }

        return (
            <Grid>
                <Grid.Column width={2}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}/>
                        <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}/>
                        {loggedInUser.roles.includes('student') ?
                            <Menu.Item name='teachers' active={activeItem === 'teachers'}
                                       onClick={this.handleItemClick}/> : null}
                        {loggedInUser.roles.includes('teacher') ?
                            <Menu.Item name='students' active={activeItem === 'students'}
                                       onClick={this.handleItemClick}/>: null}

                        <Menu.Item name='setting' active={activeItem === 'setting'} onClick={this.handleItemClick}/>
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={14}>
                    <Segment>
                        {this.getSegment()}
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default AccountMenu;
