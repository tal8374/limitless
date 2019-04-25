import React, {Component} from 'react';

import {Grid, Menu, Segment} from 'semantic-ui-react'

import Calendar from '../calendar/calendar';
import Setting from '../setting/setting';
import UserProfile from "../../user-profile/user-profile";
import StatusMessage from "../../status-message/status-message";
import Users from "../../users/users";
import {showCreateMessageModal, updateUser} from "../../../actions";
import {connect} from "react-redux";

class AccountMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'setting',
            perPage: 3
        };

    }

    getToSkip() {
        return (this.state.activePage - 1) * this.state.perPage;
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    getToLimit() {
        return this.state.perPage;
    }

    getSegment() {
        switch (this.state.activeItem) {
            case 'calendar':
                return <Calendar {...this.props}/>;
            case 'teachers':
                return <Users
                    users={this.props.loggedInUser.teachers}
                    {...this.props}
                    getToLimit={this.getToLimit.bind(this)}
                    getToSkip={this.getToSkip.bind(this)}
                />;
            case 'students':
                return <Users
                    users={this.props.loggedInUser.students}
                    {...this.props}
                    getToLimit={this.getToLimit.bind(this)}
                    getToSkip={this.getToSkip.bind(this)}
                />;
            case 'setting':
                return <Setting {...this.props}/>;
            case 'profile':
                return <UserProfile
                    {...this.props}
                    user={this.props.loggedInUser}
                    showCalendar={false}
                    showOrderLesson={false}
                    showSendMessage={false}
                />;
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
                                       onClick={this.handleItemClick}/> : null}

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

const mapStateToProps = state => ({
    loggedInUser: state.auth.loggedInUser,
    isCreateMessageModalOpen: state.messages.isCreateMessageModalOpen,
});

const mapDispatchToProps = dispatch => ({
    handleUpdate: (id, newProfile) => {
        dispatch(updateUser(id, newProfile));
    },
    showCreateMessageModal: () => {
        dispatch(showCreateMessageModal());
    },
    closeCreateMessageModal: () => {
        dispatch(showCreateMessageModal());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountMenu);
