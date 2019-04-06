import React, {Component} from 'react';

import {Grid, Menu, Segment} from 'semantic-ui-react'

import Calendar from '../calendar/calendar';
import Teachers from '../teachers/teachers';
import Students from '../students/students';
import Setting from '../setting/setting';

class ProfileMenu extends Component {
    state = {activeItem: 'calendar'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    getSegment() {
        switch (this.state.activeItem) {
            case 'calendar':
                return <Calendar/>;
            case 'teachers':
                return <Teachers/>;
            case 'students':
                return <Students/>;
            case 'setting':
                return <Setting/>;
        }
    }

    render() {

        const {activeItem} = this.state;

        return (
            <Grid>
                <Grid.Column width={2}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}/>
                        <Menu.Item name='teachers' active={activeItem === 'teachers'} onClick={this.handleItemClick}/>
                        <Menu.Item name='students' active={activeItem === 'students'} onClick={this.handleItemClick}/>
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

export default ProfileMenu;
