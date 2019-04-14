import React, {Component} from 'react';

import {Grid, Menu, Segment} from 'semantic-ui-react'

import Calendar from '../calendar/calendar';
import Teachers from '../teachers/teachers';
import Students from '../students/students';
import Setting from '../setting/setting';
import UserProfile from "../../user-profile/user-profile";

class AccountMenu extends Component {
    state = {activeItem: 'profile'};

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

        return (
            <Grid>
                <Grid.Column width={2}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}/>
                        <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}/>
                        <Menu.Item name='teachers' active={activeItem === 'teachers'} onClick={this.handleItemClick}/>
                        <Menu.Item name='students' active={activeItem === 'students'} onClick={this.handleItemClick}/>
                        <Menu.Item name='setting' active={activeItem === 'setting'} onClick={this.handleItemClick}/>
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={14}>
                    <Segment>
                        { this.getSegment() }
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default AccountMenu;
